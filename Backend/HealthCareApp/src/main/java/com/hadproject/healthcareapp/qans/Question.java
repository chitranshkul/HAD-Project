package com.hadproject.healthcareapp.qans;

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
@Table(name = "Question")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "q_id")
    private Integer id;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "uid")
    private User u_id;

    @JsonIgnore
    @Column(nullable = false)
    private String QuestionText;

    @JsonIgnore
    @Column(nullable = false)
    private String tags;

    @JsonIgnore
    @Column(nullable = false)
    private String date;

    @JsonIgnore
    @Column(nullable = false)
    private Integer flag;

    @JsonIgnore
    @Column(nullable = false)
    private boolean status;


}
