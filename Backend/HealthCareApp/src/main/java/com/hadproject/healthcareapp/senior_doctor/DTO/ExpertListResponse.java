package com.hadproject.healthcareapp.senior_doctor.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ExpertListResponse {

    String name;
    String username;
    String gender;
    String phone;

}
