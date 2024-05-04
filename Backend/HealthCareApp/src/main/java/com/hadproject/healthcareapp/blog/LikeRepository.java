package com.hadproject.healthcareapp.blog;

import com.hadproject.healthcareapp.blog.Like;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface LikeRepository extends JpaRepository<Like, Integer> {

    @Query("SELECT l FROM Like l WHERE l.uid.id = :userId AND l.bid.id = :bid")
    Optional<Like> findByUserIDAndBlogID(@Param("userId") int userId, @Param("bid") int bid);



    @Query("SELECT COUNT(l) FROM Like l WHERE l.bid.id = :bidId")
    int countByBid_Id(@Param("bidId") Integer bidId);

//    int countByBid(Blog blogEntry);

//    int countByBlog(Blog blog);

//    @Query(value = "SELECT COUNT(*) FROM Like WHERE bid_id = :bidId", nativeQuery = true)
//int countByBid(Blog blog);

    int countByBidId(Integer blogId);
}


