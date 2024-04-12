package com.hadproject.healthcareapp.selfassessment;

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
@Table(name = "QuizQuestion")
public class QuizQuestion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String question;

    @Column(nullable = false)
    private String option1;

    @Column(nullable = false)
    private int points1;

    @Column(nullable = false)
    private String option2;

    @Column(nullable = false)
    private int points2;

    @Column(nullable = false)
    private String option3;

    @Column(nullable = false)
    private int points3;

    @Column(nullable = false)
    private String option4;

    @Column(nullable = false)
    private int points4;
}
