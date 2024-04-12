package com.hadproject.healthcareapp.user;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.Optional;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "userdetail")
public class UserDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @JsonIgnore
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "uid")
    private User uid;
    @Column(nullable = false)
    private String fname;
    @Column(nullable = false)
    private String mname;
    @Column(nullable = false)
    private String lname;
    @Column(nullable = false)
    private String gender;
    @Column(nullable = false)
    private String hno;
    @Column(nullable = false)
    private String Street1;
    @Column(nullable = false)
    private String Street2;
    @Column(nullable = false)
    private int Pin_Code;
    @Column(nullable = false)
    private String City;
    @Column(nullable = false)
    private String State;
    @Column(nullable = false)
    private String Country;
    @Column(nullable = false)
    private String District;
    @Column(nullable = false)
    private String Mobile;
    @Column(nullable = false)
    private String dob;
    @Column(nullable = false)
    private String dor;

}
