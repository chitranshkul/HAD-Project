package com.hadproject.healthcareapp.Experience;

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
@Table(name = "experience")
public class Experience {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "uid")
    private User uid;

    @Column(nullable = false)
    private String year;

    @Column(nullable = false)
    private String departement;

    @Column(nullable = false)
    private String position;

    @Column(nullable = false)
    private String hospital;

    @Column(nullable = false)
    private String feedback;
}
