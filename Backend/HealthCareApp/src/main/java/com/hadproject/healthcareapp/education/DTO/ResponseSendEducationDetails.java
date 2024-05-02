package com.hadproject.healthcareapp.education.DTO;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ResponseSendEducationDetails {
    private String year;
    private String degree;
    private String institute;
    private String result;
    private String summary;
}
