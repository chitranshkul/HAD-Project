package com.hadproject.healthcareapp.qans;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AllQuestionsResponse {
    @JsonProperty("id")
    private int id;

    @JsonProperty("QuestionText")
    private String QuestionText;
}
