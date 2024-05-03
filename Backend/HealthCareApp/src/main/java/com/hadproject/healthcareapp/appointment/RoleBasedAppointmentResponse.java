package com.hadproject.healthcareapp.appointment;

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
public class RoleBasedAppointmentResponse {
    @JsonProperty("Name")
    private String Name;

    @JsonProperty("Date")
    private LocalDate Date;

    @JsonProperty("Time")
    private LocalTime Time;

    @JsonProperty("username")
    private String username;

    @JsonProperty("gender")
    private String gender;

    @JsonProperty("appointid")
    private int appointmentID;
}
