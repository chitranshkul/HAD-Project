package com.hadproject.healthcareapp.selfassessment;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EvaluateResponse {
    private List<String> selectedOptions;
}
