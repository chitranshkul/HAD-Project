//package com.hadproject.healthcareapp.notification;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//import com.hadproject.healthcareapp.user.User;
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//@Data
//@Builder
//@NoArgsConstructor
//@AllArgsConstructor
//@Entity
//@Table(name = "notification")
//
//public class Notification {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "nid")
//    private int id;
//
//    @JsonIgnore
//    @ManyToOne(cascade = CascadeType.MERGE)
//    @JoinColumn(name = "uid")
//    private User uid;
//
//    @JsonIgnore
//    @Column(nullable = false, length = 1000)
//    private String description;
//
//    @JsonIgnore
//    @Column(nullable = false)
//    private String date;
//
//    @JsonIgnore
//    @Column(nullable = false)
//    private String time;
//
//    @JsonIgnore
//    @Column(nullable = false)
//    private Integer mark;
//
//
//}
