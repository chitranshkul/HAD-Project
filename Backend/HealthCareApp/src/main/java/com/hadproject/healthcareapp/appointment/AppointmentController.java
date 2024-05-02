package com.hadproject.healthcareapp.appointment;

import com.hadproject.healthcareapp.admin.RoleListResponse;
import com.hadproject.healthcareapp.appointment.AppointmentRequest;
import com.hadproject.healthcareapp.patient.PatientService;
import com.hadproject.healthcareapp.user.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping( "api/v1/appointment")
public class AppointmentController {
    @Autowired
    private final AppointmentService appointmentService;

    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }

    @PostMapping("/send-appointment-request")
    public String sendAppointmentRequest(@RequestBody AppointmentRequest appointmentRequest) {

        return appointmentService.sendAppointmentRequest(appointmentRequest);
    }
    @PostMapping("/AcceptOrReject-request/{id}/{status}")
    public String AcceptOrRejectRequest(@PathVariable Integer id, @PathVariable String status) {
        if ("Accept".equals(status)) {
            return appointmentService.acceptAppointment(id);
        } else if ("Reject".equals(status)) {
            return appointmentService.rejectAppointment(id);
        } else {
            return "Invalid status provided. Please use 'Accept' or 'Reject'.";
        }
    }


    @GetMapping("/GetAppointmentsByDate/{date}")
    public ResponseEntity<List<Appointment>> getAppointmentsByDate(@PathVariable LocalDate date) {
         Optional<List<Appointment>> appointmentDetails = appointmentService.getAppointmentsByDate(date);

        return appointmentDetails
                .map(users -> ResponseEntity.ok().body(users))
                .orElse(ResponseEntity.notFound().build());
    }

    

}
