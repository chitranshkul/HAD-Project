package com.hadproject.healthcareapp.chatting;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ChattingRequest {
    private int from_id;
    private int to_id;
    private String message;
}
