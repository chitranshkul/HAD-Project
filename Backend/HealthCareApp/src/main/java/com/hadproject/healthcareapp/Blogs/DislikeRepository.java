package com.hadproject.healthcareapp.Blogs;

import com.hadproject.healthcareapp.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface DislikeRepository extends JpaRepository<Dislike, Integer> {



    @Query("SELECT l FROM Dislike l WHERE l.Uid.id = :userId AND l.Bid.id = :bid")
    Optional<Dislike> findByUserIDAndBlogID(@Param("userId") int userId, @Param("bid") int bid);

    Optional<Dislike> findByUidAndBid(User user,Blog blogid);

}

