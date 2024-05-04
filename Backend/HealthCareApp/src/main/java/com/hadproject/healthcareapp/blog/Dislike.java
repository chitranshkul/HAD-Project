package com.hadproject.healthcareapp.blog;

import com.fasterxml.jackson.annotation.JsonIgnore;
//import com.hadproject.healthcareapp.blog.Blogs;
import com.hadproject.healthcareapp.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.rmi.server.UID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name="Dislikes")
public class Dislike {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="D_id")
    private Integer id;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name="Uid")
    private User uid;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "Bid")
    private Blogs bid;

}




