package com.hadproject.healthcareapp.chatting;

import com.hadproject.healthcareapp.user.User;
import com.hadproject.healthcareapp.user.UserDetailRepository;
import com.hadproject.healthcareapp.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class ChattingService {
    private final ChattingRepository chattingRepository;
    private final UserRepository userRepository;


    public String SendChat(ChattingRequest request){
        var sender = userRepository.findByEmail(request.getFrom_id()).orElseThrow(() -> new RuntimeException("User not found"));
        System.out.println("***********************");
        var receiver = userRepository.findByEmail(request.getTo_id()).orElseThrow(() -> new RuntimeException("User not found"));
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

    public Optional<List<ChattingResponse>> GetChat(String senderemail, String receiveremail) {
        try {
            System.out.println(senderemail);

            Optional<User> senderOptional = userRepository.findByEmail(senderemail);
            Optional<User> receiverOptional = userRepository.findByEmail(receiveremail);

            if (senderOptional.isPresent() && receiverOptional.isPresent()) {
                User sender = senderOptional.get();
                User receiver = receiverOptional.get();

                Optional<List<Chatting>> chatMessages = chattingRepository.findByFromidAndToid(sender, receiver);
                Optional<List<Chatting>> chattingsMessages = chattingRepository.findByFromidAndToid(receiver, sender);

                List<ChattingResponse> chatResponses = new ArrayList<>();

                if (chatMessages.isPresent()) {
                    List<Chatting> chat = chatMessages.get();

                    for (Chatting message : chat) {

//                        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("EEE MMM dd HH:mm:ss zzz yyyy", Locale.ENGLISH);
//                        LocalDateTime dateTime = LocalDateTime.parse(message.getDate(), formatter);
//                        String formattedDateTime = dateTime.format(DateTimeFormatter.ofPattern("HH:mm:ss, EEE MMM dd yyyy"));

                        ChattingResponse chatResponse = ChattingResponse.builder()
                                .senderId(message.getFromid().getUsername())
                                .receiverId(message.getToid().getUsername())
                                .message(message.getMessage())
                                .date(message.getDate())
                                .build();
                        chatResponses.add(chatResponse);
                    }
                }

                if (chattingsMessages.isPresent()) {
                    List<Chatting> chattings = chattingsMessages.get();

                    for (Chatting message : chattings) {
//                        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("EEE MMM dd HH:mm:ss zzz yyyy", Locale.ENGLISH);
//                        LocalDateTime dateTime = LocalDateTime.parse(message.getDate(), formatter);
//
//                        String formattedDateTime = dateTime.format(DateTimeFormatter.ofPattern("HH:mm:ss, EEE MMM dd yyyy"));

                        ChattingResponse chatResponse = ChattingResponse.builder()
                                .senderId(message.getFromid().getUsername())
                                .receiverId(message.getToid().getUsername())
                                .message(message.getMessage())
                                .date(message.getDate())
                                .build();
                        chatResponses.add(chatResponse);
                    }
                }

                // Sort the chat responses based on date and time in descending order
                Collections.sort(chatResponses, (response1, response2) -> {
                    // Parse dates into LocalDate objects
                    LocalDate date1 = LocalDate.parse(response1.getDate(), DateTimeFormatter.ofPattern("EEE MMM dd HH:mm:ss zzz yyyy", Locale.ENGLISH));
                    LocalDate date2 = LocalDate.parse(response2.getDate(), DateTimeFormatter.ofPattern("EEE MMM dd HH:mm:ss zzz yyyy", Locale.ENGLISH));

                    // Compare dates in descending order
                    int dateComparison = date1.compareTo(date2);
                    if (dateComparison != 0) {
                        return dateComparison; // If dates are not equal, return the comparison result
                    } else {
                        // If dates are equal, parse times into LocalTime objects
                        LocalTime time1 = LocalTime.parse(response1.getDate(), DateTimeFormatter.ofPattern("EEE MMM dd HH:mm:ss zzz yyyy", Locale.ENGLISH));
                        LocalTime time2 = LocalTime.parse(response2.getDate(), DateTimeFormatter.ofPattern("EEE MMM dd HH:mm:ss zzz yyyy", Locale.ENGLISH));

                        // Compare times in descending order
                        return time1.compareTo(time2);
                    }
                });

                return Optional.of(chatResponses);
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
