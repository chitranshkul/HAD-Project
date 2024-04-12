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
public class FlaggedAnswerResponse {
    @JsonProperty("id")
    private int id;

    @JsonProperty("answers_text")
    private String answers_text;
}
