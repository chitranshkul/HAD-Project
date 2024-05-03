package com.hadproject.healthcareapp.Blogs;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface FlagRepository extends JpaRepository<Flag, Integer> {



    @Query("SELECT l FROM Flag l WHERE l.Uid.id = :userId AND l.Bid.id = :bid")
    Optional<Flag> findByUserIDAndBlogID(@Param("userId") int userId, @Param("bid") int bid);

}