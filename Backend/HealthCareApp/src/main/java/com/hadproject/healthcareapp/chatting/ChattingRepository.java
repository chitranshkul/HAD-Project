package com.hadproject.healthcareapp.chatting;

import com.hadproject.healthcareapp.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ChattingRepository extends JpaRepository<Chatting , Integer> {
    Optional<List<Chatting>> findByFromidAndToid(User fromid, User toid);
}
