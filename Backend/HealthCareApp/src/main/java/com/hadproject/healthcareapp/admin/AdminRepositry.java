package com.hadproject.healthcareapp.admin;

import com.hadproject.healthcareapp.Courses.Courses;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepositry extends JpaRepository<Admin, Integer> {

}
