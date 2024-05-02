package com.hadproject.healthcareapp.Blogs;

import com.hadproject.healthcareapp.appointment.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface BlogRepository extends JpaRepository<Blog, Integer> {

//    List<Blog> findByTitleLike(String titlePattern);
    List<Blog> findByTitleLike(String title);
}