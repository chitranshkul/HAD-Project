package com.hadproject.healthcareapp.Blogs;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface FlagRepository extends JpaRepository<Flag, Integer> {



    @Query("SELECT l FROM Flag l WHERE l.uid.id = :userId AND l.bid.id = :bid")
    Optional<Flag> findByUserIDAndBlogID(@Param("userId") int userId, @Param("bid") int bid);

//    int countByBid(Blog blogEntry);

//    @Query(value = "SELECT COUNT(*) FROM Flag WHERE bid_id = :bidId", nativeQuery = true)
//    int countFlagsByBidId(@Param("bidId") Blog bidId);

//    int countByBid(Blog blog);

    @Query("SELECT COUNT(l) FROM Flag l WHERE l.bid.id = :bidId")
    int countByBid_Id(@Param("bidId") Integer bidId);

    int countByBidId(Integer blogId);
}