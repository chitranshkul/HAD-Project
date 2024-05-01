package com.hadproject.healthcareapp.appointment;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//import com.hadproject.healthcareapp.expert.Expert;
//import com.hadproject.healthcareapp.patient.Appointment;
//import com.hadproject.healthcareapp.patient.Patient;
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//import java.util.Set;

//@Data
//@Builder
//@NoArgsConstructor
//@AllArgsConstructor
//@Entity
//@Table(name = "appointment")
//public class AppointmentRepository {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "A_id")
//    int id;
//
//    @JsonIgnore
//    @ManyToMany(cascade = CascadeType.MERGE)
//    @JoinColumn(name = "uid")
//    private Set<Expert> e_id;
//
//    @JsonIgnore
//    @ManyToMany(cascade = CascadeType.MERGE)
//    @JoinColumn(name = "uid")
//    private Set<Patient> p_id;
//
//    @JsonIgnore
//    @Column(nullable = false)
//    private String date;
//
//    @JsonIgnore
//    @Column(nullable = false)
//    private String time;
//
//
//
//}
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {
    Optional<List<Appointment>> findByDate(LocalDate date);

    @Query("SELECT a FROM Appointment a WHERE a.expertId=:expertId")
    List<Appointment> findByExpertId(@Param("expertId") Integer expertId);

    @Query("SELECT a FROM Appointment a WHERE  a.patientId=:patientId")
    List<Appointment> findByPatientId(@Param("patientId") Integer patientId);



}

