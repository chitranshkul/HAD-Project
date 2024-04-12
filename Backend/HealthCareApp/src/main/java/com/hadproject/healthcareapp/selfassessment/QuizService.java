package com.hadproject.healthcareapp.selfassessment;

import com.hadproject.healthcareapp.Header.Header;
import com.hadproject.healthcareapp.qans.AnswerResponse;
import com.hadproject.healthcareapp.qans.Answers;
import com.hadproject.healthcareapp.token.TokenRepository;
import com.hadproject.healthcareapp.user.User;
import com.hadproject.healthcareapp.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.*;


@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class QuizService {
    private final UserRepository userRepository;
    private final QuizRepository quizRepository;
    private  final TokenRepository tokenRepository;
    private final QuizResultRepository quizResultRepository;

    public List<QuestionsResponse> getQuestion() {
        List<QuizQuestion> questions = quizRepository.findAll();
        List<QuestionsResponse> questionsResponses = new ArrayList<>();

        if(!questions.isEmpty()) {
            for (QuizQuestion question : questions) {
                QuestionsResponse response = QuestionsResponse.builder()
                        .id(question.getId())
                        .question(question.getQuestion())
                        .option1(question.getOption1())
                        .option2(question.getOption2())
                        .option3(question.getOption3())
                        .option4(question.getOption4())
                        .build();
                questionsResponses.add(response);
            }

        }
        return questionsResponses;
    }
   /*************** Evaluation ***********/

   public Map<String, Object> evaluate(List<String> selectedOptions, String headerToken) {

       int totalScore = 0;
       for (String option : selectedOptions) {
           switch (option) {
               case "Not at all":
                   totalScore += 0;
                   break;
               case "Several days":
                   totalScore += 1;
                   break;
               case "More than half the days":
                   totalScore += 2;
                   break;
               default:
                   // Return 0 for unrecognized options
                   totalScore += 0;
                   break;
           }
       }

       String remark;
       if (totalScore < 5) {
           remark = "Normal";
       } else if (totalScore < 10) {
           remark = "Mild Anxiety";
       } else if (totalScore < 15) {
           remark = "Moderate Anxiety";
       } else {
           remark = "Severe Anxiety";
       }

       Map<String, Object> evaluationResult = new HashMap<>();
       evaluationResult.put("totalScore", totalScore);
       evaluationResult.put("remark", remark);

       String selectedOptionsString = String.join(",", selectedOptions);



       System.out.println("*********************");
       System.out.println(headerToken);
       String[] words = headerToken.split(" ");

       var token = tokenRepository.findByToken(words[1]);
       if(token.isPresent()){
           System.out.println("I Found the Token");
           var quizresult = QuizResults.builder()
                   .uid(token.get().user)
                   .Remark(remark)
                   .points(totalScore)
                   .date(String.valueOf(new Date()))
                   .selectedOptions(selectedOptionsString)
                   .build();

           quizResultRepository.save(quizresult);
       }


       return evaluationResult;
   }

    /**************** evaluation end***********/

    public  List<AnswersResponse> getQuizResponse(Integer quizId){

        List<QuizQuestion> quizQuestions = quizRepository.findAll();
        List<String> questions = new ArrayList<>();


        for(QuizQuestion quizQuestion : quizQuestions){
            questions.add(quizQuestion.getQuestion());
        }

        System.out.println(questions);

        Optional<QuizResults> quizResultsOptional = quizResultRepository.findById(quizId);
        String selectedOptions = "";
        if (quizResultsOptional.isPresent()) {
            QuizResults quizResults = quizResultsOptional.get();
            selectedOptions = quizResults.getSelectedOptions();

        }

        System.out.println(selectedOptions);
        List<String> selectedOptionsList = Arrays.asList(selectedOptions.split(","));

        List<String> options = Arrays.asList("Not at all", "Several days", "More than half the days", "Nearly every day");
       // System.out.println(options);

        // Ensure questions, options, and selectedOptionsList have the same size
        int Size = questions.size();

        List<AnswersResponse> answersResponses = new ArrayList<>();

       for(int i=0 ; i<Size ;i++){
           AnswersResponse response = AnswersResponse.builder()
                   .id(i+1)
                   .Question(questions.get(i))
                   .Options(options)
                   .selected_option(selectedOptionsList.get(i))
                   .build();

           answersResponses.add(response);

       }
        return  answersResponses;

    }

    public List<UserResponse> getAllQuizResponse(Integer userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<QuizResults> quizResults = quizResultRepository.findByUid(user);

        List<UserResponse> answer = new ArrayList<>();

        for (QuizResults quizResult : quizResults) {
            UserResponse response = UserResponse.builder()
                    .id(quizResult.getId())
                    .Remark(quizResult.getRemark())
                    .date(quizResult.getDate())
                    .build();
            answer.add(response);
        }
        return answer;
    }
}
