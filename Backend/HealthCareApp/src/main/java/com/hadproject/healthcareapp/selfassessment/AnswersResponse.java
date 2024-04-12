package com.hadproject.healthcareapp.selfassessment;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AnswersResponse {
    @JsonProperty("id")
    private int id;

    @JsonProperty("Question")
    private String Question;

    @JsonProperty("options")
    private List<String> Options;

    @JsonProperty("selected_option")
    private String selected_option;


}
