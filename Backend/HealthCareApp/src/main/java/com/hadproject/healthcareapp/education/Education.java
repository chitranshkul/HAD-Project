package com.hadproject.healthcareapp.education;

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
@Table(name = "education")
public class Education {

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
    private String degree;

    @Column(nullable = false)
    private String institute;

    @Column(nullable = false)
    private String result;

    @Column(nullable = false)
    private String summary;

}
