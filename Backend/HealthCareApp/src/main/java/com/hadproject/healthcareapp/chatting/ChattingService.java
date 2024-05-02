package com.hadproject.healthcareapp.chatting;

import com.hadproject.healthcareapp.user.User;
import com.hadproject.healthcareapp.user.UserDetailRepository;
import com.hadproject.healthcareapp.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class ChattingService {
    private final ChattingRepository chattingRepository;
    private final UserRepository userRepository;


    public String SendChat(ChattingRequest request){
        var sender = userRepository.findById(request.getFrom_id()).orElseThrow(() -> new RuntimeException("User not found"));
        System.out.println("***********************");
        var receiver = userRepository.findById(request.getTo_id()).orElseThrow(() -> new RuntimeException("User not found"));
        System.out.println("***********************");

        var chat = Chatting.builder()
                .fromid(sender)
                .toid(receiver)
                .date(String.valueOf(new Date()))
                .message(request.getMessage())
                .build();
        try{
            chattingRepository.save(chat);
            return "Chat Send successfully!";
        }
        catch (Exception e) {
            System.out.println(e+"");
            return "Cannot send chat";
        }

    }

    public Optional<List<ChattingResponse>> GetChat(String senderemail , String receiveremail) {
        try {
            System.out.println(senderemail);

            Optional<User> senderOptional = userRepository.findByEmail(senderemail);

            Optional<User> receiverOptional = userRepository.findByEmail(receiveremail);

            if (senderOptional.isPresent() && receiverOptional.isPresent()) {
                User sender = senderOptional.get();

                User receiver = receiverOptional.get();

                Optional<List<Chatting>> chatMessages = chattingRepository.findByFromidAndToid(sender,receiver);


                if (chatMessages.isPresent()) {

                    List<ChattingResponse> chatResponses = new ArrayList<>();
                    List<Chatting> chat = chatMessages.get();

                    for (Chatting message : chat) {
//                        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("EEE MMM dd HH:mm:ss zzz yyyy", Locale.ENGLISH);
//                        LocalDateTime dateTime = LocalDateTime.parse(message.getDate(), formatter);
                        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("EEE MMM dd HH:mm:ss zzz yyyy", Locale.ENGLISH);

                        LocalDateTime dateTime = LocalDateTime.parse(message.getDate(), formatter);

                        // Format the date and time
                        String formattedDateTime = dateTime.format(DateTimeFormatter.ofPattern("HH:mm:ss, EEE MMM dd yyyy"));

                        ChattingResponse chatResponse = ChattingResponse.builder()
                                .senderId(message.getFromid().getId())
                                .receiverId(message.getToid().getId())
                                .message(message.getMessage())
                                .date(formattedDateTime)
                                .build();
                        chatResponses.add(chatResponse);
                    }                    // Assuming you want to return a list of chat responses

                    // Sort the chat responses based on date and time
                    Collections.sort(chatResponses, Comparator.comparing(ChattingResponse::getDate).reversed());

                    return Optional.of(chatResponses);
                } else {
                    // If no chat messages found between the sender and receiver, return Optional.empty()
                    return Optional.empty();
                }
            } else {
                // If either sender or receiver not found, return Optional.empty()

                return Optional.empty();
            }
        } catch (Exception e) {
            // Handle any exceptions and log the error
            e.printStackTrace();
            return Optional.empty();
        }
    }
}
