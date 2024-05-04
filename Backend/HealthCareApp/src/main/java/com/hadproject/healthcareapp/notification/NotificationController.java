//package com.hadproject.healthcareapp.notification;
//
//
//import com.hadproject.healthcareapp.user.User;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;
//import java.util.Optional;
//
//@RestController
//@RequestMapping("api/v1/notification")
//@RequiredArgsConstructor
//public class NotificationController {
//
//    private final NotificationService service;
//
//    @GetMapping("/fetchnotification")
//    public ResponseEntity<List<NotificationResponse>> FetchNotification(@RequestBody User uid) {
//        try {
//
//            Optional<List<NotificationResponse>> response = service.FetchNotification(uid);
//
//            if (response.isPresent()) {
//                return ResponseEntity.ok(response.get());
//            } else {
//                // If there are no notifications available for the given user
//                return ResponseEntity.notFound().build();
//            }
//        } catch (Exception e) {
//
//            e.printStackTrace();
//            // Return an internal server error response
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//        }
//    }
//
//
//}
