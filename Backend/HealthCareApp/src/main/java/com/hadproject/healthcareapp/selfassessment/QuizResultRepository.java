package com.hadproject.healthcareapp.selfassessment;

import com.hadproject.healthcareapp.user.User;
import com.hadproject.healthcareapp.user.UserDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface QuizResultRepository extends JpaRepository<QuizResults, Integer> {

    List<QuizResults> findByUid(User uid);
}
