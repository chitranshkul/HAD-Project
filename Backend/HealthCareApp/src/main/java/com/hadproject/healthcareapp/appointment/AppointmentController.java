package com.hadproject.healthcareapp.appointment;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
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

    


    @GetMapping("/RoleBasedAppointment/{userId}")
    public ResponseEntity<List<RoleBasedAppointmentResponse>> roleBasedAppointment(@PathVariable Integer userId) {
        Optional<List<RoleBasedAppointmentResponse>> appointmentOptional = appointmentService.viewAppointmentDetails(userId);

        return appointmentOptional.map(roleBasedAppointmentResponses -> ResponseEntity.ok().body(roleBasedAppointmentResponses)).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/RoleBasedAppointment2/{userId}")
    public ResponseEntity<List<RoleBasedAppointmentResponse>> roleBasedAppointment2(@PathVariable Integer userId) {
        Optional<List<RoleBasedAppointmentResponse>> appointmentOptional = appointmentService.viewAppointmentDetails2(userId);

        return appointmentOptional.map(roleBasedAppointmentResponses -> ResponseEntity.ok().body(roleBasedAppointmentResponses)).orElseGet(() -> ResponseEntity.notFound().build());
    }

//    @GetMapping("/RoleBasedAppointment")
//    public ResponseEntity<List<RoleBasedAppointmentResponse>> roleBasedAppointment(HttpServletRequest request) {
//        String headerToken = request.getHeader("Authorization");
//        if (headerToken != null && headerToken.startsWith("Bearer ")) {
//            String token = headerToken.substring(7); // Extract the token part
//            Optional<List<RoleBasedAppointmentResponse>> appointmentOptional = appointmentService.viewAppointmentDetails(token);
//
//            return appointmentOptional.map(roleBasedAppointmentResponses -> ResponseEntity.ok().body(roleBasedAppointmentResponses)).orElseGet(() -> ResponseEntity.notFound().build());
//        } else {
//            // Handle missing or invalid token in the header
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
//        }
}





//    @GetMapping("/RoleBasedAppointment")
//    public ResponseEntity<List<RoleBasedAppointmentResponse>> roleBasedAppointment(@RequestHeader("Authorization") String token) {
//        Optional<List<RoleBasedAppointmentResponse>> appointmentOptional = appointmentService.viewAppointmentDetails(token);
//
//        return appointmentOptional.map(roleBasedAppointmentResponses -> ResponseEntity.ok().body(roleBasedAppointmentResponses)).orElseGet(() -> ResponseEntity.notFound().build());
//    }
//










