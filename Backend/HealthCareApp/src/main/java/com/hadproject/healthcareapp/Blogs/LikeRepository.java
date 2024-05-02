package com.hadproject.healthcareapp.Blogs;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface LikeRepository extends JpaRepository<Like, Integer> {

    @Query("SELECT l FROM Like l WHERE l.Uid.id = :userId AND l.Bid.id = :bid")
    Optional<Like> findByUserIDAndBlogID(@Param("userId") int userId, @Param("bid") int bid);

}


