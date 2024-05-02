package com.hadproject.healthcareapp.Blogs;

import com.hadproject.healthcareapp.token.Token;
import com.hadproject.healthcareapp.token.TokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/blogs/")
public class BlogController {

    @Autowired
    BlogService blogService;
    @Autowired
    private TokenRepository tokenRepository;


    @PostMapping("/AddBlog/{BlogItem}")
    public ResponseEntity<String> AddBlog(@RequestHeader("Authorization") String token,
                                          @RequestBody BlogRequest blogRequest ) {
        System.out.println("*************************TESTING**************************************");
        try {
            String jwtToken;

            jwtToken = token.substring(7); // Extract JWT part from token
            System.out.println("Token before substring: " + token);
            System.out.println("JWT part after substring: " + jwtToken);

            int userId = getUserIdFromToken(jwtToken); // Extract user ID from token
            System.out.println("$$$$$$$$"+userId);

            String str = blogService.AddBlog(userId, blogRequest);
            return ResponseEntity.ok(str);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to add Blog: " + e.getMessage());
        }
    }


    @PostMapping("/RemoveBlog/{Bid}")
    public ResponseEntity<String> RemoveBlog(@RequestHeader("Authorization") String token,@PathVariable Integer Bid ) {
        System.out.println("*************************TESTING**************************************");
        try {
            String jwtToken;

            jwtToken = token.substring(7); // Extract JWT part from token
            System.out.println("Token before substring: " + token);
            System.out.println("JWT part after substring: " + jwtToken);

            int userId = getUserIdFromToken(jwtToken); // Extract user ID from token

            String str = blogService.RemoveBlog(userId,Bid);
            return ResponseEntity.ok(str);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to Remove Blog: " + e.getMessage());
        }
    }

    private int getUserIdFromToken(String jwtToken) {
        // Query the database to find the Token entity associated with the provided JWT tokeN
        Optional<Token> tokenOptional = tokenRepository.findByToken(jwtToken);

        // Check if the token entity is found
        if (tokenOptional.isPresent()) {
            Token tokenEntity = tokenOptional.get();
            // Check if the token is revoked or expired
            if (!tokenEntity.isRevoked() && !tokenEntity.isExpired()) {
                // If not revoked and not expired, return the user ID associated with the token
                return tokenEntity.getUser().getId();
            } else {
                // Token is either revoked or expired, return -1 or handle accordingly
                return -1; // Or handle differently based on your requirements
            }
        } else {
            // Token not found in the table
            return -1; // Return an error value or handle differently based on your requirements
        }
    }

    @PostMapping("/LikeBlog/{Bid}")
    public ResponseEntity<String> LikeBlog(@RequestHeader("Authorization") String token, @PathVariable Integer Bid) {
        try {
            String jwtToken = token.substring(7); // Extract JWT part from token
            System.out.println("Token before substring: " + token);
            System.out.println("JWT part after substring: " + jwtToken);

            int userId = getUserIdFromToken(jwtToken); // Extract user ID from token

            String str = blogService.LikeBlog(userId, Bid);
            return ResponseEntity.ok(str);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Could not perform operation: " + e.getMessage());
        }
    }

    @PostMapping("/DislikeBlog/{Bid}")
    public ResponseEntity<String> DislikeBlog(@RequestHeader("Authorization") String token, @PathVariable Integer Bid) {
        try {
            String jwtToken = token.substring(7); // Extract JWT part from token
            System.out.println("Token before substring: " + token);
            System.out.println("JWT part after substring: " + jwtToken);

            int userId = getUserIdFromToken(jwtToken); // Extract user ID from token

            String str = blogService.DislikeBlog(userId, Bid);
            return ResponseEntity.ok(str);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Could not perform operation: " + e.getMessage());
        }
    }

    @PostMapping("/FlagBlog/{Bid}")
    public ResponseEntity<String> FlagBlog(@RequestHeader("Authorization") String token, @PathVariable Integer Bid) {
        try {
            String jwtToken = token.substring(7); // Extract JWT part from token
            System.out.println("Token before substring: " + token);
            System.out.println("JWT part after substring: " + jwtToken);

            int userId = getUserIdFromToken(jwtToken); // Extract user ID from token

            String str = blogService.FlagBlog(userId, Bid);
            return ResponseEntity.ok(str);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Could not perform operation: " + e.getMessage());
        }
    }

    @GetMapping("/SearchBlog")
    public ResponseEntity<List<BlogSearchResponse>> searchBlog(
            @RequestHeader("Authorization") String token,
            @RequestBody BlogSearchRequest blogSearchRequest) {

        try {
            String jwtToken = token.substring(7); // Extract JWT part from token
            int userId = getUserIdFromToken(jwtToken); // Extract user ID from token

            List<BlogSearchResponse> blogs = blogService.searchBlog(userId,blogSearchRequest);
            return ResponseEntity.ok(blogs);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null); // Return an empty list or handle the error differently
        }
    }



    @GetMapping("/NoOfLikesinBlog/{Bid}")
    public ResponseEntity<Integer> NoOfLikesinBlog(@RequestHeader("Authorization") String token, @PathVariable Integer Bid) {
        try {
            String jwtToken = token.substring(7); // Extract JWT part from token
            System.out.println("Token before substring: " + token);
            System.out.println("JWT part after substring: " + jwtToken);

            int userId = getUserIdFromToken(jwtToken); // Extract user ID from token

            int likesCount = blogService.getLikesCountForBlog(userId, Bid);
            return ResponseEntity.ok(likesCount);
        } catch (Exception e) {
            // Handle the exception by returning a default value
            return ResponseEntity.badRequest().body(0);
        }
    }


}



