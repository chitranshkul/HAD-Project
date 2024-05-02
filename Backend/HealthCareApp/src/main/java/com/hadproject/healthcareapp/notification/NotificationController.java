//package com.hadproject.healthcareapp.notification;
//
//
//import com.hadproject.healthcareapp.user.User;
//import lombok.RequiredArgsConstructor;
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
//    @GetMapping("/fetchnotification")
//    public ResponseEntity<NotificationResponse> FetchNotification(@RequestBody User uid){
//        Optional<List<NotificationResponse>> response = service.FetchNotification(uid);
//    }
//
//}
