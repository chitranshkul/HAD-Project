package com.hadproject.healthcareapp.Experience.DTO;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddExperienceRequest {
    @JsonProperty("uid")
    private String username;
    @JsonProperty("exyear")
    private String year;
    @JsonProperty("department")
    private String department;
    @JsonProperty("possition")
    private  String position;
    @JsonProperty("hospital")
    private String hospital;
    @JsonProperty("rating")
    private String feedback;
}
