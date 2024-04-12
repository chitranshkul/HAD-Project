package com.hadproject.healthcareapp.selfassessment;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse {

    @JsonProperty("id")
    private int id;

    @JsonProperty("Remark")
    private String Remark;

    @JsonProperty("Date")
    private String date;
}
