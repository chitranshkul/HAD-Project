package com.hadproject.healthcareapp.admin;

import com.hadproject.healthcareapp.Courses.Courses;
import com.hadproject.healthcareapp.auth.AuthenticationService;
import com.hadproject.healthcareapp.department.Department;
import com.hadproject.healthcareapp.user.Role;
import com.hadproject.healthcareapp.user.User;
import com.hadproject.healthcareapp.user.UserDetail;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/v1/admin")
@RequiredArgsConstructor
public class AdminController {


    @Autowired
    private final AdminService adminService;

    @GetMapping("/getcount/{role}")
    public Integer getCount(@PathVariable Role role) {
        System.out.println("******************************** Role is HEre ********************************");
        int data = adminService.analytics(role);
        return data;
    }
    @GetMapping("/getlistbyrole/{role}")
    public ResponseEntity<List<RoleListResponse>> getUsersByRole(@PathVariable Role role) {
        List<RoleListResponse> userDetails = adminService.getUsersByRole(role);

        return ResponseEntity.ok(userDetails);
    }
//    @GetMapping("/getProfilebyrole/{role}")
//    public ResponseEntity<List<RoleProfileResponse>> getProfileByRole(@PathVariable Role role) {
//        Optional<List<RoleProfileResponse>> profileDetails = adminService.getProfileByRole(role);
//
//        return profileDetails
//                .map(profiles -> ResponseEntity.ok().body(profiles))
//                .orElse(ResponseEntity.notFound().build());
//    }

    @GetMapping("/viewProfileDetails/{userId}")
    public ResponseEntity<RoleProfileResponse> viewProfile(@PathVariable Integer userId) {
        Optional<RoleProfileResponse> profileOptional = adminService.viewProfileDetails(userId);

        if (profileOptional.isPresent()) {
            return ResponseEntity.ok().body(profileOptional.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/removeUser/{userId}")
    public ResponseEntity<String> removeUser(@PathVariable Integer userId){
        String result = adminService.removeUserDetails(userId);
        return ResponseEntity.ok(result);
    }



//    @GetMapping("/profile{role}")
//    public Optional<List<UserDetail>> getProfileByRole(@RequestParam Role role) {
//        System.out.println("******************************** Profile is HEre ********************************");
//        List<UserDetail> userDetails = adminService.getProfileByRole(role);
//        return Optional.ofNullable(userDetails);
//    }


    //    @GetMapping("/getentries/{role}")
//    public List<RoleListResponse> authenticateMultiple(@PathVariable Role role)
//    {
//        List<RoleListResponse> authResponses = AdminService.processMultipleAuthenticationResponses(authRequests);
//        return authResponses;
//    }
}
