package com.hadproject.healthcareapp.patient;

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
@Table(name= "patient")
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @JsonIgnore
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "id")
    private User uid;

    @Column(nullable = false)
    private int height;
    @Column(nullable = false)
    private int weight;
    @Column(nullable = false)
    private String blood_group;
    @Column(nullable = false)
    private String health_issues;


}

