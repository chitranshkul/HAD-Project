package com.hadproject.healthcareapp.auth;


import com.hadproject.healthcareapp.Experience.DTO.GetExperienceResponse;
import com.hadproject.healthcareapp.Experience.Experience;
import com.hadproject.healthcareapp.education.DTO.ResponseSendEducationDetails;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserProfileResponse {

    private String fname;
    private String mname;
    private String lname;
    private String gender;
    private String hno;
    private String Street1;
    private String Street2;
    private int Pin_Code;
    private String City;
    private String State;
    private String Country;
    private String District;
    private String Mobile;
    private String dob;
    private String dor;
    private List<ResponseSendEducationDetails> educationDetails;
    private List<GetExperienceResponse> expertienceDetails;

}
