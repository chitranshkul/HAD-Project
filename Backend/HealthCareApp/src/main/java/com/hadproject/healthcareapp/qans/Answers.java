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
@Table(name = "Answers")
public class Answers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "a_id")
    private int id;


    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "q_id")
    private Question questionid;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "uid")
    private User u_id;


    @JsonIgnore
    @Column(nullable = false, length = 1000)
    private String answers_text;

    @JsonIgnore
    @Column(nullable = false)
    private String date;

    @JsonIgnore
    @Column(nullable = false)
    private int flag;

    @JsonIgnore
    @Column(nullable = false)
    private int upvotes;

    @JsonIgnore
    @Column(nullable = false)
    private boolean status;
}

