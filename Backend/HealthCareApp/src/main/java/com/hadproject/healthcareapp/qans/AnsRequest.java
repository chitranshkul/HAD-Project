package com.hadproject.healthcareapp.qans;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AnsRequest {
    private int q_id;
    private int uid;
    private String answers_text;
}
