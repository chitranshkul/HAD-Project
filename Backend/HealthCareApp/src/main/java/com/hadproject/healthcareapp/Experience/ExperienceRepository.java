package com.hadproject.healthcareapp.Experience;

import com.hadproject.healthcareapp.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExperienceRepository extends JpaRepository<Experience,Integer> {

    List<Experience> findByUid(User user);

}
