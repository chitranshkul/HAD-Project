package com.hadproject.healthcareapp.admin;


import com.hadproject.healthcareapp.user.*;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.Period;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@Builder
@RequiredArgsConstructor
public class AdminService {


    @Autowired
    private final UserRepository userRepository;
    private final UserDetailRepository userDetailsRepository;


    public Integer analytics(Role role) {
        Optional<List<User>> count = userRepository.findByRole(role);
        if (count.isPresent()) {
            List<User> userList = count.get();
            int size = userList.size();
            return size;
        }
        return 0;
    }
    // New functionality to list users by role
    public List<RoleListResponse> getUsersByRole(Role role) {
        List<RoleListResponse> userRoleDetail = new ArrayList<RoleListResponse>();
        List<User> users = new ArrayList<User>();

        Optional<List<User>> optUseerByRoles = userRepository.findByRole(role);
        if(optUseerByRoles.isPresent()){
            List<User> usersByRoles = optUseerByRoles.get();
            for(User userByRoles:usersByRoles){
                users.add(userByRoles);
                Optional<UserDetail> optUserDetail = userDetailsRepository.findByUid(userByRoles);
                if(optUserDetail.isPresent()){
                    UserDetail userDetail = optUserDetail.get();
                    RoleListResponse user = RoleListResponse.builder()
                            .id(userByRoles.getId())
                            .username(userByRoles.getUsername())
                            .name(userDetail.getFname()+" "+userDetail.getMname()+" "+userDetail.getLname())
                            .gender(userDetail.getGender())
                            .build();
                    userRoleDetail.add(user);
                }
            }
        }

        return userRoleDetail;
    }


//    public Optional<List<RoleProfileResponse>> getProfileByRole(Role role) {
//        try {
//            Optional<List<User>> userDetails = userRepository.findByRole(role);
//            List<UserDetail> userDetailList = new ArrayList<>();
//
//            if(userDetails.isPresent()){
//                for(User user: userDetails.get()){
//                    UserDetail userDetail = userDetailsRepository.getById(user.getId());
//                    userDetailList.add(userDetail);
//                }
//            }
//
//            List<RoleProfileResponse> roleProfileResponses = new ArrayList<>();
//            for(UserDetail userDetail : userDetailList){
//                LocalDate dob = LocalDate.parse(userDetail.getDob()); // Parse dob string to LocalDate
//
//                int age = Period.between(dob, LocalDate.now()).getYears();
//                String address = String.format("%s, %s%s, %s, %s, %d",
//                        userDetail.getHno(), userDetail.getStreet1(), userDetail.getStreet2(),
//                        userDetail.getCity(), userDetail.getState(), userDetail.getPin_Code());
//
//                RoleProfileResponse response = RoleProfileResponse.builder()
//                        .name(userDetail.getFname() + " " + userDetail.getLname())
//                        .Joined_Since(userDetail.getDor().toString())
//                        .Age(age)
//                        .contact_no(userDetail.getMobile())
//                        .gender(userDetail.getGender())
//                        .Address(address)
//                        .DateOfBirth(userDetail.getDob().toString())
//                        .build();
//
//                roleProfileResponses.add(response);
//            }
//
//            return Optional.ofNullable(roleProfileResponses.isEmpty() ? null : roleProfileResponses);
//        } catch(Exception ex) {
//            ex.printStackTrace();
//            return Optional.empty();
//        }
//    }

    public Optional<RoleProfileResponse> viewProfileDetails(Integer userId) {
        try {
            System.out.println("************************  Inside The View Profile Data   ************************");
            Optional<User> userOptional = userRepository.findById(userId);
            if (userOptional.isPresent()) {
                User user = userOptional.get();
                UserDetail userDetail = userDetailsRepository.findByUid(user)
                        .orElseThrow(() -> new NoSuchElementException("UserDetail not found for id: " + user.getId()));

                // Check if the date string includes a time component
                String dobString = userDetail.getDob();
                LocalDate dob;
                if (dobString.length() > 10) {
                    // Date string includes time component
                    LocalDateTime dobDateTime = LocalDateTime.parse(dobString, DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSSSSS"));
                    dob = dobDateTime.toLocalDate();
                } else {
                    // Date string is in "yyyy-MM-dd" format
                    dob = LocalDate.parse(dobString, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
                }

                int age = Period.between(dob, LocalDate.now()).getYears();

                String address = String.format("%s, %s %s, %s, %s, %d",
                        userDetail.getHno(), userDetail.getStreet1(), userDetail.getStreet2(),
                        userDetail.getCity(), userDetail.getState(), userDetail.getPin_Code());

                return Optional.of(RoleProfileResponse.builder()
                        .name(userDetail.getFname() + " " + userDetail.getLname())
                        .Joined_Since(userDetail.getDor())
                        .Age(age)
                        .contact_no(userDetail.getMobile())
                        .gender(userDetail.getGender())
                        .Address(address)
                        .DateOfBirth(userDetail.getDob())
                        .build());
            }
        } catch (DateTimeParseException e) {
            // Log the parsing error and handle it
            System.err.println("Error parsing date: " + e.getMessage());
        } catch (Exception e) {
            // Log the exception and handle it as needed
            System.err.println("Error processing viewProfileDetails: " + e.getMessage());
            e.printStackTrace();
        }
        return Optional.empty(); // Return an empty Optional in case of any failure
    }


    public String removeUserDetails(Integer userId){
        try {
            // Find the user by ID
            Optional<User> userOptional = userRepository.findById(userId);
            if (userOptional.isPresent()) {
                User user = userOptional.get();
                // Set user status to false
                user.setActive(false); // Assuming there's a setStatus method to set the user's status
                userRepository.save(user); // Save the user back to the database with updated status
                return "User status set to false successfully.";
            } else {
                return "User not found.";
            }
        } catch (Exception e) {
            return "Error updating user status: " + e.getMessage();
        }

    }


    }

//    public Optional<UserDetail> getProfileByRole(Role role) {
//        Optional<User> optionalUsers = userRepository.findByRole(role);
//        List<UserDetail> userDetailsList = new ArrayList<>();
//
//        if (optionalUsers.isPresent()) {
//            List<User> users = optionalUsers.get();
//            for (User user : users) {
//                Optional<UserDetail> userDetail = userDetailsRepository.findById(user.getId());
//                userDetail.ifPresent(userDetailsList::add);
//            }
//        }
//
//        return userDetailsList;
//    }




    //    public List<RoleListResponse> processMultipleAuthenticationResponses(List< RoleListResponse> authResponses) {
//        List< RoleListResponse> processedResponses = new ArrayList<>();
//
//        for ( RoleListResponse authResponse : authResponses) {
//            // Extract necessary data from the authentication response
//            // For example, assuming user_id, request, jwtToken, and refreshToken are accessible from authResponse
//
//            // Create a new UserDetail instance for each response
//
//            var userDetail = UserDetail.builder()
//                    .uid(user_id)
//                    .fname(request.getFname())
//                    .gender(request.getGender())
//                    .Mobile(request.getMobile()
//                    .build();
//
//            // Save the user detail
//            var detailSaved = userDetailRepository.save(userDetail);
//
//            // Construct a new AuthenticationResponse with appropriate data
////            var processedResponse =  RoleListResponse.builder()
////                    .accessToken(jwtToken)
////                    .refreshToken(refreshToken)
////                    .id(user_id.getId())
////                    .role(request.getRole().toString())
////                    .build();
//
//            // Add the processed response to the list
//            processedResponses.add(processedResponse);
//        }
//
//        return processedResponses;
//    }

