package com.hadproject.healthcareapp.expert;

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
public class ExpertRequest {
    private String higest_degree;
    private String specialization;
    private String exprience;


    @Enumerated(EnumType.STRING)
    private Role role;
}

