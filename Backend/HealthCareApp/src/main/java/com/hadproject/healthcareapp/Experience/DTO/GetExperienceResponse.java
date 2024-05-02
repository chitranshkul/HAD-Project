package com.hadproject.healthcareapp.Experience.DTO;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GetExperienceResponse {
    private String year;
    private String department;
    private String position;
    private String hospital;
    private String feedback;
}
