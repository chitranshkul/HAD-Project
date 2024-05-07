package com.hadproject.healthcareapp.senior_doctor;
import com.hadproject.healthcareapp.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SeniorDoctorRepositry extends JpaRepository<SeniorDoctor, Integer> {

    List<SeniorDoctor> findByDid(User did);

    
}
