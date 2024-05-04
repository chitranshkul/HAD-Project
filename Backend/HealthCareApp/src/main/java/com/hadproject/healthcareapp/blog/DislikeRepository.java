package com.hadproject.healthcareapp.blog;

import com.hadproject.healthcareapp.blog.Dislike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface DislikeRepository extends JpaRepository<Dislike, Integer> {



    @Query("SELECT l FROM Dislike l WHERE l.uid.id = :userId AND l.bid.id = :bid")
    Optional<Dislike> findByUserIDAndBlogID(@Param("userId") int userId, @Param("bid") int bid);

//    int countByBid(Blog blogEntry);

//    Optional<Dislike> findByUidAndBid(User user,Blog blogid);

//    @Query(value = "SELECT COUNT(*) FROM Dislike WHERE bid_id = :bidId", nativeQuery = true)
//    int countDislikesByBidId(@Param("bidId") Blog bidId);
//    int countByBid(Blog blog);


    @Query("SELECT COUNT(l) FROM Dislike l WHERE l.bid.id = :bidId")
    int countByBid_Id(@Param("bidId") Integer bidId);
    int countByBidId(Integer blogId);
}

