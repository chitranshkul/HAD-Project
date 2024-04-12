package com.hadproject.healthcareapp.qans;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AnswersRepository extends JpaRepository<Answers, Integer> {
    List<Answers> findByFlag(int flag);
    List<Answers> findByQuestionid(Question ques);
}


