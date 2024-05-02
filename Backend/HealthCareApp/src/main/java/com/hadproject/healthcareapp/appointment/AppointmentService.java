package com.hadproject.healthcareapp.appointment;

import com.hadproject.healthcareapp.user.User;
import com.hadproject.healthcareapp.user.UserDetail;
import com.hadproject.healthcareapp.user.UserDetailRepository;
import com.hadproject.healthcareapp.user.UserRepository;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.*;

@Builder
@RequiredArgsConstructor
@Service
public class AppointmentService {

    @Autowired
    private final UserRepository userRepository;
    private final UserDetailRepository userDetailsRepository;
    private AppointmentRepository appointmentRepository;

    private final SecretKey secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    @Autowired
    public AppointmentService(UserRepository userRepository, UserDetailRepository userDetailsRepository, AppointmentRepository appointmentRepository) {
        this.userRepository = userRepository;
        this.userDetailsRepository = userDetailsRepository;
        this.appointmentRepository = appointmentRepository;
    }

    public String sendAppointmentRequest(AppointmentRequest appointmentRequest) {
        int patientId = appointmentRequest.getPatient_ID();
        int expertId = appointmentRequest.getExpert_ID();

        System.out.println("******************************** HII I m gramya , patientID ********************************");
        System.out.println("Patient ID: " + patientId);
        System.out.println("expert ID: " + expertId);

        LocalDate date = appointmentRequest.getDate();
        LocalTime time = appointmentRequest.getTime();

        // Create an appointment entity
        Appointment appointment = Appointment.builder()
                .date(date)
                .time(time)
                .patientId(patientId)
                .expertId(expertId)
                .build();

        // Save the appointment
        appointmentRepository.save(appointment);

        return "Request Sent";
    }

    public String acceptAppointment(Integer id) {
        Optional<Appointment> appointmentOptional = appointmentRepository.findById(id);
        if(appointmentOptional.isPresent()){
            Appointment appointment = appointmentOptional.get();
            appointment.setStatus(true);
            appointmentRepository.save(appointment);
            return "Appointment Accepted";
        }
        else {
            return "Appointment not found";
        }
    }

    public String rejectAppointment(Integer id) {
        Optional<Appointment> appointmentOptional = appointmentRepository.findById(id);
        if (appointmentOptional.isPresent()) {
            Appointment appointment = appointmentOptional.get();
            appointmentRepository.delete(appointment);
            return "Appointment Rejected";
        } else {
            return "Appointment not found";
        }
    }

    public Optional<List<Appointment>> getAppointmentsByDate(LocalDate date) {
        try {
            return appointmentRepository.findByDate(date);
        } catch (Exception ex) {
            ex.printStackTrace();
            return Optional.empty();
        }
    }

    public Optional<List<RoleBasedAppointmentResponse>> viewAppointmentDetails(Integer expertId) {
        try {
            System.out.println("************************  Inside The View Appointment Data   ************************");

            List<Appointment> appointments = appointmentRepository.findByExpertId(expertId);
            List<RoleBasedAppointmentResponse> appointmentResponses = new ArrayList<>();

            for (Appointment appointment : appointments) {
                User user = new User(); // Assuming you have a constructor or builder for User
                user.setId(appointment.getPatientId()); // Set the id of the User object

                Optional<UserDetail> userDetailOptional = userDetailsRepository.findByUid(user);
                if (userDetailOptional.isPresent()) {

                    Optional<User> Optusr  = userRepository.findById(appointment.getPatientId());
                    if(Optusr.isPresent()) {
                        User usr = Optusr.get();
                        System.out.println("******************************* ");
                        System.out.println(usr.getUsername() + "****");
                        UserDetail userDetail = userDetailOptional.get();
                        appointmentResponses.add(RoleBasedAppointmentResponse.builder()
                                .Name(userDetail.getFname() + " " + userDetail.getLname())
                                .Date(appointment.getDate())
                                .Time(appointment.getTime())
                                .username(usr.getUsername())
                                .gender(userDetail.getGender())
                                .build());
                    }

                } else {
                    System.err.println("UserDetail not found for PatientId: " + appointment.getPatientId());
                }
            }

            return Optional.of(appointmentResponses);
        } catch (Exception e) {
            // Log the exception and handle it as needed
            System.err.println("Error processing viewProfileDetails: " + e.getMessage());
            e.printStackTrace();
            return Optional.empty();
        }
    }


    public Optional<List<RoleBasedAppointmentResponse>> viewAppointmentDetails2(Integer patientId) {
        try {
            System.out.println("************************  Inside The View Appointment Data   ************************");

            List<Appointment> appointments = appointmentRepository.findByPatientId(patientId);
            List<RoleBasedAppointmentResponse> appointmentResponses = new ArrayList<>();

            for (Appointment appointment : appointments) {
                User user = new User(); // Assuming you have a constructor or builder for User
                user.setId(appointment.getExpertId()); // Set the id of the User object
                System.out.println("******************************* ");
                System.out.println(user.getUsername()+"****");
                Optional<UserDetail> userDetailOptional = userDetailsRepository.findByUid(user);
                if (userDetailOptional.isPresent()) {

                    UserDetail userDetail = userDetailOptional.get();
                    Optional<User> optUsr = userRepository.findById(patientId);
                    if(optUsr.isPresent()) {
                        User usr = optUsr.get();
                        appointmentResponses.add(RoleBasedAppointmentResponse.builder()
                                .Name(userDetail.getFname() + " " + userDetail.getLname())
                                .Date(appointment.getDate())
                                .Time(appointment.getTime())
                                .username(usr.getUsername())
                                .build());
                    }
                } else {
                    System.err.println("UserDetail not found for PatientId: " + appointment.getPatientId());
                }
            }

            return Optional.of(appointmentResponses);
        } catch (Exception e) {
            // Log the exception and handle it as needed
            System.err.println("Error processing viewProfileDetails: " + e.getMessage());
            e.printStackTrace();
            return Optional.empty();
        }
    }


    public List<GenderDistributionResponse> getGenderDistributionForExpert(Integer expertId){

        try {
            System.out.println("************************  Inside The Count Gender   ************************");

            List<Appointment> appointments = appointmentRepository.findByExpertId(expertId);
            List<RoleBasedAppointmentResponse> appointmentResponses = new ArrayList<>();
            int maleCount = 0,femaleCount = 0,otherCount = 0;
            for (Appointment appointment : appointments) {
                Optional<User> optUsr = userRepository.findById(appointment.getId());
                if(optUsr.isPresent()) {
                    User usr = optUsr.get();
                    Optional<UserDetail> optUSerDetail = userDetailsRepository.findByUid(usr);
                    if (optUSerDetail.isPresent()) {
                        UserDetail userDetail = optUSerDetail.get();
                        if (userDetail.getGender().equals("male") || userDetail.getGender().equals("m") || userDetail.getGender().equals("M") ||userDetail.getGender().equals("Male"))
                            maleCount++;
                        else if (userDetail.getGender().equals("female")||userDetail.getGender().equals("Female") || userDetail.getGender().equals("f") || userDetail.getGender().equals("F"))
                            femaleCount++;
                        else
                            otherCount++;
                    }
                }
            }
            System.out.println(maleCount+"   "+femaleCount+"   "+otherCount);
            List<GenderDistributionResponse> genderDistributionResponses = new ArrayList<GenderDistributionResponse>();
            GenderDistributionResponse male = GenderDistributionResponse.builder()
                    .name("Male")
                    .value(maleCount)
                    .build();
            GenderDistributionResponse female = GenderDistributionResponse.builder()
                    .name("Female")
                    .value(femaleCount)
                    .build();
            GenderDistributionResponse other = GenderDistributionResponse.builder()
                    .name("Other")
                    .value(otherCount)
                    .build();

            genderDistributionResponses.add(male);
            genderDistributionResponses.add(female);
            genderDistributionResponses.add(other);


            return genderDistributionResponses;
        } catch (Exception e) {
            // Log the exception and handle it as needed
            System.err.println("Error processing viewProfileDetails: " + e.getMessage());
            e.printStackTrace();
            return null;
        }

    }

    public List<Integer> getAppointmentCountsByExpert(Integer expertId){
        List<Integer> appointmentCounts = new ArrayList<Integer>();
        List<Appointment> appointments = appointmentRepository.findByExpertId(expertId);
        Map<LocalDate, Integer> frequencyMap = new HashMap<>();
        for(Appointment appointment:appointments){
            LocalDate date =appointment.getDate();
            if (frequencyMap.containsKey(date)) {
                frequencyMap.put(date, frequencyMap.get(date) + 1);
            } else {
                frequencyMap.put(date, 1);
            }
        }
        for(Map.Entry<LocalDate, Integer> entry : frequencyMap.entrySet()) {
           appointmentCounts.add(entry.getValue());
        }
        return appointmentCounts;
    }
}












