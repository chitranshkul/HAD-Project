package com.hadproject.healthcareapp.Blogs;

import com.hadproject.healthcareapp.appointment.Appointment;
import com.hadproject.healthcareapp.token.Token;
import com.hadproject.healthcareapp.token.TokenRepository;
import com.hadproject.healthcareapp.user.*;
import io.jsonwebtoken.Jwt;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;


@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))

public class BlogService {
    private final BlogRepository blogRepository;


    private final UserRepository userRepository;
    private final UserDetailRepository userDetailsRepository;
    private final LikeRepository likeRepository;
    private final DislikeRepository dislikeRepository;
    private final FlagRepository flagRepository;

    private TokenRepository tokenRepository;


    //    public BlogService(UserRepository userRepository, UserDetailRepository userDetailsRepository, BlogRepository blogRepository) {
//        this.userRepository = userRepository;
//        this.userDetailsRepository = userDetailsRepository;
//        this.blogRepository = blogRepository;
//    }
//
   // @Autowired

    public String AddBlog(int userId, BlogRequest blogRequest) {
        // Get user details
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isEmpty()) {
            return "Unable to add: User not found with ID: " + userId;
        }
        User user = optionalUser.get();

        System.out.println(user.getRole());
//         Check if the user is an expert
        if (user.getRole() == Role.EXPERT) {
            // Fetch fname and lname from UserDetail table
            Optional<UserDetail> optionalUserDetail = userDetailsRepository.findById(userId);
            if (optionalUserDetail.isEmpty()) {
                return "Unable to add: User details not found for ID: " + userId;
            }
            UserDetail userDetail = optionalUserDetail.get();
            String author = userDetail.getFname() + " " + userDetail.getLname();

            // Create a new blog entry using the builder pattern
            Blog blog = Blog.builder()
                    .BlogItem(blogRequest.getBlogItem())
                    .author(author)
                    .Title(blogRequest.getTitle())
                    .build();

            // Save the blog entry
            blogRepository.save(blog);

            return "Blog added Successfully";
        } else {

            return "User is not an expert. Cannot add blog entry.";
        }
    }


    public String RemoveBlog(int userId,int Bid) {

        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isEmpty()) {
            return "Unable to add: User not found with ID: " + userId;
        }
        User user = optionalUser.get();

        // Check if the user is an expert
        if (user.getRole() == Role.EXPERT) {
            // Fetch fname and lname from UserDetail table
            Optional<Blog> blog = blogRepository.findById(Bid);
            if (blog.isPresent()) {
                Blog blog1=blog.get();
                blogRepository.delete(blog1);
                return "Blog Removed Successfully";

            }
            else{
                return "Unable to Remove: Blog not found for ID: " + Bid;
            }

        } else {
            return "You are not an expert. Cannot Remove blog entry.";
        }
    }

    public String LikeBlog(int userId, Integer bid) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isEmpty()) {
            return "Unable to add: User not found with ID: " + userId;
        }
        User user = optionalUser.get();

        Optional<Blog> optionalBlog = blogRepository.findById(bid);
        if (optionalBlog.isEmpty()) {
            return "Unable to Like: Blog not found with ID: " + bid;
        }
        Blog blog = optionalBlog.get();

        Optional<Dislike> optionalDislike = dislikeRepository.findByUserIDAndBlogID(userId, bid);
        if (optionalDislike.isPresent()) {
            return "Already Disliked";
        }

        Optional<Like> optionalLike = likeRepository.findByUserIDAndBlogID(userId, bid);
        if (optionalLike.isPresent()) {
            return "Already Liked";
        }

        Like like = Like.builder()
                .Uid(user)
                .Bid(blog)
                .build();

        likeRepository.save(like);

        return "Liked successfully";
    }


    public String DislikeBlog(int userId, Integer bid) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isEmpty()) {
            return "Unable to add: User not found with ID: " + userId;
        }
        User user = optionalUser.get();

        Optional<Blog> optionalBlog = blogRepository.findById(bid);
        if (optionalBlog.isEmpty()) {
            return "Unable to Disike: Blog not found with ID: " + bid;
        }
        Blog blog = optionalBlog.get();

        Optional<Like> optionalLike = likeRepository.findByUserIDAndBlogID(userId, bid);
        if (optionalLike.isPresent()) {
            return "Already Liked";
        }

        Optional<Dislike> optionalDislike = dislikeRepository.findByUserIDAndBlogID(userId, bid);
        if (optionalDislike.isPresent()) {
            return "Already Disliked";
        }

        Dislike dislike = Dislike.builder()
                .Uid(user)
                .Bid(blog)
                .build();

        dislikeRepository.save(dislike);

        return "Disliked successfully";
    }

    public String FlagBlog(int userId, Integer bid) {

        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isEmpty()) {
            return "Unable to add: User not found with ID: " + userId;
        }
        User user = optionalUser.get();

        Optional<Blog> optionalBlog = blogRepository.findById(bid);
        if (optionalBlog.isEmpty()) {
            return "Unable to Like: Blog not found with ID: " + bid;
        }
        Blog blog = optionalBlog.get();

        Optional<Flag> optionalflag = flagRepository.findByUserIDAndBlogID(userId, bid);
        if (optionalflag.isPresent()) {
            return "Already Flagged";
        }


        Flag flags = Flag.builder()
                .Uid(user)
                .Bid(blog)
                .build();

        flagRepository.save(flags);

        return "Flagged successfully";



    }

//    public List<BlogSearchResponse> SearchBlog(int userId, BlogSearchRequest blogSearchRequest) {
//        Optional<User> optionalUser = userRepository.findById(userId);
//        if (optionalUser.isEmpty()) {
//            return "Unable to Search: User not found with ID: " + userId;
//        }
//        User user = optionalUser.get();
//
//        List<Blog> blogs = new ArrayList<>();
//
//        // Retrieve the Blog entries for the given user ID
//        List<Blog> blogEntries = blogRepository.findById();
//
//        // Check if wishlist entries are found for the user
//        if (!blogEntries.isEmpty()) {
//            // Iterate through each wishlist entry
//            for (Blog blogEntry : blogEntries) {
//                // Get the blog from the blogEntries
//                Blog blogs = blogEntry.getMovieID();
//                blogs.add(blog);
//            }
//        } else {
//            // Log a message if wishlist entries are not found for the user
//            System.out.println("No wishlist entries found for user ID: " + userId);
//        }
//
//            return blogs;
//        }






}
