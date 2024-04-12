package com.hadproject.healthcareapp.patient;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentRequest {
    @JsonProperty("Patient_ID")
    private int Patient_ID;

    @JsonProperty("Expert_ID")
    private int Expert_ID;

    @JsonProperty("Date")
    private LocalDate Date;

    @JsonProperty("Time")
    private LocalTime Time;
}

