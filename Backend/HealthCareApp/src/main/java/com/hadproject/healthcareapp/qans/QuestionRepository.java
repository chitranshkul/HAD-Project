package com.hadproject.healthcareapp.qans;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer> {
    List<Question> findByFlag(int flag);
    List<Question> findByStatus(boolean status);

}
