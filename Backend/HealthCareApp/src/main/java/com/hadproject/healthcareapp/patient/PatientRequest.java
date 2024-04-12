package com.hadproject.healthcareapp.patient;

import com.hadproject.healthcareapp.user.Role;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class PatientRequest {

    private int height;
    private int weight;
    private String blood_group;
    private String health_issues;


    @Enumerated(EnumType.STRING)
    private Role role;
}

