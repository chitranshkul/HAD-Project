package com.hadproject.healthcareapp.education.DTO;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddEducationRequestDTO {
    @JsonProperty("uid")
    private String username;
    @JsonProperty("edyear")
    private String year;
    @JsonProperty("institute")
    private String institute;
    @JsonProperty("degree")
    private  String degree;
    @JsonProperty("result")
    private String result;
    @JsonProperty("introsummary")
    private String summary;
}
