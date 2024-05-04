package com.hadproject.healthcareapp.chatting;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.hadproject.healthcareapp.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ChattingResponse {
    @JsonProperty("senderid")
    private String senderId;

    @JsonProperty("receiverid")
    private String receiverId;

    @JsonProperty("message")
    private String message;

    @JsonProperty("date")
    private String date;
}
