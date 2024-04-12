package com.hadproject.healthcareapp.answer;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.hadproject.healthcareapp.qans.Question;
import com.hadproject.healthcareapp.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Answer")
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "a_id")
    int id;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "q_id")
    private Question question;

    @JsonIgnore
    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinColumn(name = "uid")
    private Set<User> from_id;


    @JsonIgnore
    @Column(nullable = false)
    private String answer;

    @JsonIgnore
    @Column(nullable = false)
    private int flag;




}
