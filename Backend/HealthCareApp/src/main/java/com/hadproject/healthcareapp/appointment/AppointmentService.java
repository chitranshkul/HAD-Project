package com.hadproject.healthcareapp.appointment;

import com.hadproject.healthcareapp.appointment.AppointmentRequest;
import com.hadproject.healthcareapp.user.UserDetailRepository;
import com.hadproject.healthcareapp.user.UserRepository;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@Builder
@RequiredArgsConstructor
@Service
public class AppointmentService {

    @Autowired
    private final UserRepository userRepository;
    private final UserDetailRepository userDetailsRepository;
    private AppointmentRepository appointmentRepository;


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
        if (appointmentOptional.isPresent()) {
            return "Appointment Accepted";
        } else {
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

}