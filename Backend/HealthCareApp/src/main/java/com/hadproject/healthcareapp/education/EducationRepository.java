package com.hadproject.healthcareapp.education;

import com.hadproject.healthcareapp.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EducationRepository extends JpaRepository<Education,Integer> {
    List<Education> findByUid(User user);
}
