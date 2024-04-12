package com.hadproject.healthcareapp.chat;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.hadproject.healthcareapp.expert.Expert;
import com.hadproject.healthcareapp.patient.Patient;
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
@Table(name = "chat")
public class Chat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "c_id")
    int id;

    @JsonIgnore
    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinColumn(name = "uid")
    private Set<User> from_id;

    @JsonIgnore
    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinColumn(name = "uid")
    private Set<User> to_id;

    @JsonIgnore
    @Column(nullable = false)
    private String date;

    @JsonIgnore
    @Column(nullable = false)
    private String message;

}
