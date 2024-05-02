package com.hadproject.healthcareapp.appointment;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.hadproject.healthcareapp.expert.Expert;
import com.hadproject.healthcareapp.patient.Patient;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "appointment")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "a_id")
    private Integer id;

    @JsonIgnore
    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinColumn(name = "expert_id")
    private Set<Expert> experts;

    @JsonIgnore
    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinColumn(name = "patient_id")
    private Set<Patient> patients;

    @Column(nullable = false)
    private LocalDate date;

    @Column(nullable = false)
    private LocalTime time;

    private int patientId;

    private int expertId;

    private boolean status;
}
