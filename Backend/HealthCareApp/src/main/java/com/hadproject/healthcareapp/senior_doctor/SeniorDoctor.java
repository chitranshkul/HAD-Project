package com.hadproject.healthcareapp.senior_doctor;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.hadproject.healthcareapp.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name= "senior_doctor")

public class SeniorDoctor {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @JsonIgnore
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "id")
    private User uid;

    @Column(nullable = false)
    private String higest_degree;
    @Column(nullable = false)
    private String Specialization;
    @Column(nullable = false)
    private String exprience;

}

