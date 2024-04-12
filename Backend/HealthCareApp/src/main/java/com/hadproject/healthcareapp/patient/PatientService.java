package com.hadproject.healthcareapp.patient;

import com.hadproject.healthcareapp.appointment.AppointmentRepository;
import com.hadproject.healthcareapp.user.UserDetailRepository;
import com.hadproject.healthcareapp.user.UserRepository;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hadproject.healthcareapp.appointment.Appointment;


import java.time.LocalDate;
import java.time.LocalTime;

@Builder
@RequiredArgsConstructor
@Service
public class PatientService {

//    @Autowired
//    private final UserRepository userRepository;
//    private final UserDetailRepository userDetailsRepository;
//    private AppointmentRepository appointmentRepository;
//
//
//
//    @Autowired
//    public PatientService(UserRepository userRepository, UserDetailRepository userDetailsRepository, AppointmentRepository appointmentRepository) {
//        this.userRepository = userRepository;
//        this.userDetailsRepository = userDetailsRepository;
//        this.appointmentRepository = appointmentRepository;
//    }
//
//    public String sendAppointmentRequest(AppointmentRequest appointmentRequest) {
//        int patientId = appointmentRequest.getPatient_ID();
//        int expertId = appointmentRequest.getExpert_ID();
//        LocalDate date = appointmentRequest.getDate();
//        LocalTime time = appointmentRequest.getTime();
//
//        // Create an appointment entity
//        Appointment appointment = Appointment.builder()
//                .date(date)
//                .time(time)
//                .patientId(patientId)
//                .expertId(expertId)
//                .build();
//
//        // Save the appointment
//        appointmentRepository.save(appointment);
//
//        return "Request Sent";
//    }





}
