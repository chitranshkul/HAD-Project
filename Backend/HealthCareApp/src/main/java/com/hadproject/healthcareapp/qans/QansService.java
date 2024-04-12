package com.hadproject.healthcareapp.qans;

import com.hadproject.healthcareapp.user.UserDetail;
import com.hadproject.healthcareapp.user.UserDetailRepository;
import com.hadproject.healthcareapp.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class QansService {

    private final QuestionRepository questionRepository;
    private final AnswersRepository answersRepository;
    private final UserRepository userRepository;
    private final UserDetailRepository userDetailRepository;

    public String postQuestion(QuestionRequest request){
        System.out.println("***********************************************    "+request.getUid());
        var user = userRepository.findById(request.getUid()).orElseThrow(() -> new RuntimeException("User not found"));
        System.out.println("My User Detial"+user.getUsername());
        var question = Question.builder()
                .u_id(user)
                .QuestionText(request.getQuestion_text())
                .tags(request.getTags())
                .date(String.valueOf(new Date()))
                .flag(0)
                .status(true)
                .build();

          try{
              questionRepository.save(question);
              return "Question posted successfully!";
          } catch (Exception e) {
              System.out.println(e+"");
              return "Failed to post question";
          }
    }

    public String postAnswer(AnsRequest ansrequest){
        var user = userRepository.findById(ansrequest.getUid()).orElseThrow(() -> new RuntimeException("User not found"));

        var question = questionRepository.findById( ansrequest.getQ_id()).orElseThrow(() -> new RuntimeException("Question not found"));

        var answers = Answers.builder()
                .questionid( question)
                .u_id(user)
                .answers_text(ansrequest.getAnswers_text())
                .date(String.valueOf(new Date()))
                .flag(0)
                .upvotes(0)
                .status(true)
                .build();

        try{
            answersRepository.save(answers);
            return "Answer posted successfully!";
        } catch (Exception e) {
            System.out.println(e+"");
            return "Failed to post answer";
        }
    }

    public String flagAnswer(int answerId){
        Optional<Answers> optionalAnswer = answersRepository.findById(answerId);
        if(optionalAnswer.isPresent()){
            Answers answer = optionalAnswer.get();
            answer.setFlag(1);
            answersRepository.save(answer);
            return "Answer flagged successfully!";
        } else {
            throw new RuntimeException("Answer not found with ID: " + answerId);
        }
    }

    public String flagQuestion(int questionId){
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        if(optionalQuestion.isPresent()){
            Question question = optionalQuestion.get();
            question.setFlag(1);
            questionRepository.save(question);
            return "Question flagged successfully";

        }else{
            throw new RuntimeException("Question not found with the ID" + questionId);
        }
    }
    public String upvoteAnswer(int answerId){
        Optional<Answers> optionalAnswer = answersRepository.findById(answerId);
        if(optionalAnswer.isPresent()){
            Answers answer = optionalAnswer.get();
            int currentUpvotes = answer.getUpvotes();
            answer.setUpvotes(currentUpvotes+1);
            answersRepository.save(answer);
            return "Upvote incremented successfully";
        }  else {
            throw new RuntimeException("Answer not found with ID:" +answerId);
        }

    }
    public List<FlaggedAnswerResponse> getAllFlaggedAnswers() {
        List<Answers> flaggedAnswers = answersRepository.findByFlag(1);
        List<FlaggedAnswerResponse> flaggedAnswerResponses = new ArrayList<>();

        if(flaggedAnswers != null)
        {
            for(Answers answer : flaggedAnswers){
                FlaggedAnswerResponse response = FlaggedAnswerResponse.builder()
                        .id(answer.getId())
                        .answers_text(answer.getAnswers_text())
                        .build();
                flaggedAnswerResponses.add(response);
            }
        }else {
            // Handle the case when no flagged answers are found
            // For example, you can return an empty list
            return Collections.emptyList();
        }
        return flaggedAnswerResponses;

    }
    public List<AllQuestionsResponse> getAllFlaggedQuestions() {
        List<Question> flaggedQuestions = questionRepository.findByFlag(1); // Assuming flag value of true represents flagged questions
        List<AllQuestionsResponse> allQuestionsRespons = new ArrayList<>();

        if (flaggedQuestions != null && !flaggedQuestions.isEmpty()) {
            for (Question question : flaggedQuestions) {
                AllQuestionsResponse response = AllQuestionsResponse.builder()
                        .id(question.getId())
                        .QuestionText(question.getQuestionText())
                        .build();
                allQuestionsRespons.add(response);
            }
        } else {
            // Handle the case when no flagged questions are found
            // For example, you can return an empty list
            return Collections.emptyList();
        }
        return allQuestionsRespons;
    }

    public List<AllQuestionsResponse>  getAllQuestion(){
        List<Question> questions= questionRepository.findByStatus(true);
        List<AllQuestionsResponse> allQuestionsRespons = new ArrayList<>();

        if(!questions.isEmpty()){

            for(Question question: questions){
                AllQuestionsResponse response = AllQuestionsResponse.builder()
                        .id(question.getId())
                        .QuestionText(question.getQuestionText())
                        .build();
                allQuestionsRespons.add(response);
            }
        }
        else{
            return Collections.emptyList();
        }
        return allQuestionsRespons;
    }





    public String deleteFlaggedQuestion(int questionId){
                 Optional<Question> optionalQuestion = questionRepository.findById(questionId);
                 if(optionalQuestion.isPresent()){
                     Question question = optionalQuestion.get();
                     if(question.getFlag() == 1){
                         question.setStatus(false);
                         questionRepository.save(question);
                         return "Question with id "+ questionId + "is deleted Successfully";
                     }
                     else{
                         return "Question with ID " + questionId + " is not flagged!";
                     }

                 }
                 else {
                     // If the question ID is not found, return an error message
                     return "Question with ID " + questionId + " not found!";
                 }
            }
    public Optional<List<AnswerResponse>> getAllResponses(int questionId) {
        try {
            var ques = questionRepository.findById(questionId).orElseThrow(() -> new RuntimeException("Question not found"));
            System.out.println("****************  Question id is  : " + questionId + " " + ques.getQuestionText());
            Optional<List<Answers>> optionalAnswers = Optional.ofNullable(answersRepository.findByQuestionid(ques));
            if (optionalAnswers.isPresent()) {
                System.out.println("Heyyyyyyyyyyyyyyyyyyyy I got Some Answers");
                List<AnswerResponse> answerResponses = new ArrayList<>();
                List<Answers> answers = optionalAnswers.get();
                for (Answers answer : answers) {
                    if (answer.isStatus()) { // Check if status is true
                        // Retrieve the UserDetail entity corresponding to the answer's u_id
                        System.out.println(answer.getAnswers_text());
                        Optional<UserDetail> optionalUserDetail = userDetailRepository.findByUid(answer.getU_id());
                        if (optionalUserDetail.isPresent()) {
                            System.out.println("************* I also Got the user");
                            UserDetail userDetail = optionalUserDetail.get();
                            // Extract the username from the UserDetail entity
                            String username = userDetail.getFname();
                            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("EEE MMM dd HH:mm:ss zzz yyyy", Locale.ENGLISH);
                            LocalDateTime dateTime = LocalDateTime.parse(ques.getDate(), formatter);
                            // Create the AnswerResponse object
                            AnswerResponse response = AnswerResponse.builder()
                                    .id(answer.getId())
                                    .name(username)
                                    .answers_text(answer.getAnswers_text())
                                    .date(dateTime.toLocalDate()+"")
                                    .flag(answer.getFlag())
                                    .upvotes(answer.getUpvotes())
                                    .build();
                            answerResponses.add(response);
                        }
                    }
                }
                return Optional.of(answerResponses);
            } else {
                // If no responses found for the given question ID, return Optional.empty()
                return Optional.empty();
            }
        } catch (Exception e) {
            // Handle any exceptions and log the error
            e.printStackTrace();
            return Optional.empty();
        }
    }

    public String deleteFlaggedAnswer(Integer answerId) {
        Optional<Answers> optionalAnswer = answersRepository.findById(answerId);
        if (optionalAnswer.isPresent()) {
            Answers answer = optionalAnswer.get();
            if (answer.getFlag() == 1) {
                // Set the status or perform deletion logic here
                answer.setStatus(false);
                answersRepository.save(answer);
                return "Answer with id " + answerId + " is deleted Successfully";
            } else {
                return "Answer with id " + answerId + " is not flagged, cannot delete";
            }
        } else {
            return "Answer not found with id " + answerId;
        }
    }

    public Optional<QuestionResponse> getQuestionByID(Integer questionID){
        try{

            var ques = questionRepository.findById(questionID).orElseThrow(() -> new RuntimeException("Question not found"));
            var userDetail = userDetailRepository.findByUid(ques.getU_id()).orElseThrow(()->new RuntimeException("USer not Found"));


            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("EEE MMM dd HH:mm:ss zzz yyyy", Locale.ENGLISH);
            LocalDateTime dateTime = LocalDateTime.parse(ques.getDate(), formatter);

            QuestionResponse questionResponse =QuestionResponse.builder()
                    .question_text(ques.getQuestionText())
                    .date_time(dateTime.toLocalDate()+" ")
                    .posted_by(userDetail.getFname())
                    .build();

            return Optional.of(questionResponse);
        }
        catch (Exception e){
            System.out.println(e+"");
        }
        return Optional.empty();
    }
}
