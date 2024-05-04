package com.hadproject.healthcareapp.blog;

import com.hadproject.healthcareapp.blog.Blogs;
import com.hadproject.healthcareapp.appointment.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface BlogRepository extends JpaRepository<Blogs, Integer> {

//    List<Blog> findByTitleLike(String titlePattern);
    List<Blogs> findByTitleLike(String title);
}