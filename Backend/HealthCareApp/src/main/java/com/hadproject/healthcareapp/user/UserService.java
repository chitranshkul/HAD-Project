package com.hadproject.healthcareapp.user;

import com.hadproject.healthcareapp.dto.OtpDto;
import com.hadproject.healthcareapp.util.EmailUtil;
import com.hadproject.healthcareapp.util.OtpUtil;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.time.Duration;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class UserService {

    @Autowired
    private OtpUtil otpUtil;

    @Autowired
    private EmailUtil emailUtil;

    private final PasswordEncoder passwordEncoder;
    private final UserRepository repository;
    public void changePassword(ChangePasswordRequest request, Principal connectedUser) {

        var user = (User) ((UsernamePasswordAuthenticationToken) connectedUser).getPrincipal();

        // check if the current password is correct
        if (!passwordEncoder.matches(request.getCurrentPassword(), user.getPassword())) {
            throw new IllegalStateException("Wrong password");
        }
        // check if the two new passwords are the same
        if (!request.getNewPassword().equals(request.getConfirmationPassword())) {
            throw new IllegalStateException("Password are not the same");
        }

        // update the password
        user.setPassword(passwordEncoder.encode(request.getNewPassword()));

        // save the new password
        repository.save(user);
    }

    public String sendotp(OtpDto otpDto) {
        String otp = otpUtil.generateOtp();
        System.out.println("************************I got the email as "+otpDto.getEmail());
        try {
            emailUtil.sendOtpEmail(otpDto.getEmail(), otp);
        } catch (MessagingException e) {
            throw new RuntimeException("Unable to send otp please try again");
        }
        User user = repository.findByEmail(otpDto.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found with this email: " + otpDto.getEmail()));

        // user.setName(registerDto.getName());

        user.setOtp(otp);
        user.setOtpGeneratedTime(LocalDateTime.now());
        repository.save(user);

        return "Send Otp successfully";

    }
    public String verifyAccount(String email, String otp) {
        System.out.println("****************************************");
        System.out.println("Inside Service");
        System.out.println("****************************************");
        User user = repository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found with this email: " + email));

        System.out.println("****************************************");
        System.out.println("Get the User");
        System.out.println("****************************************");
        System.out.println("user DEtails: "+user.getEmail());
        if (user.getOtp().equals(otp) && Duration.between(user.getOtpGeneratedTime(),
                LocalDateTime.now()).getSeconds() < (2 * 60)) {
            user.setActive(true);
            System.out.println("****************************************");
            System.out.println("Before Saving");
            System.out.println("****************************************");
            repository.save(user);

            return "OTP verified successfully ";
        }
        return "Please regenerate otp and try again";
    }



    public String regenerateOtp(String email) {
        User user = repository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found with this email: " + email));
        String otp = otpUtil.generateOtp();
        try {
            emailUtil.sendOtpEmail(email, otp);
        } catch (MessagingException e) {
            throw new RuntimeException("Unable to send otp please try again");
        }
        user.setOtp(otp);
        user.setOtpGeneratedTime(LocalDateTime.now());
        repository.save(user);
        return "Email sent... please verify account within 1 minute";
    }


}
