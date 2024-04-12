package com.hadproject.healthcareapp.user;

import com.hadproject.healthcareapp.dto.OtpDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService service;

    @PatchMapping
    public ResponseEntity<?> changePassword(
          @RequestBody ChangePasswordRequest request,
          Principal connectedUser
    ) {
        service.changePassword(request, connectedUser);
        return ResponseEntity.ok().build();
    }
    @PostMapping("/send-otp")
     public ResponseEntity<String> otp(@RequestBody OtpDto otpDto ){
        UserController userService;
        return new ResponseEntity<>(service.sendotp(otpDto), HttpStatus.OK);
    }
    @PostMapping("/verifyuseraccount")
    public ResponseEntity<String> verifyAccount(@RequestBody OTPVerificationRequest request) {
        System.out.println("****************************************");
        System.out.println("Inside Controller");
        System.out.println("****************************************");
        return new ResponseEntity<>(service.verifyAccount(request.getEmail(), request.getOtp()), HttpStatus.OK);
    }
    @PutMapping("/regenerate-otp")
    public ResponseEntity<String> regenerateOtp(@RequestParam String email) {
        return new ResponseEntity<>(service.regenerateOtp(email), HttpStatus.OK);
    }


}
