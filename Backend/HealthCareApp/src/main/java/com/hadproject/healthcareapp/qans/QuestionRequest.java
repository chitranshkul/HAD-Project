package com.hadproject.healthcareapp.qans;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class QuestionRequest {

    private int uid;
    private String question_text;
    private String tags;
}

