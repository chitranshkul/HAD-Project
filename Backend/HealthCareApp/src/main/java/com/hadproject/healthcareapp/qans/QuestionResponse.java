package com.hadproject.healthcareapp.qans;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class QuestionResponse {

    String question_text;
    String posted_by;
    String date_time;
}
