package com.hadproject.healthcareapp.patient;

import com.hadproject.healthcareapp.admin.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping( "api/v1/patient")
public class PatientController {
//    @Autowired
//    private final PatientService patientService;
//
//    public PatientController(PatientService patientService) {
//        this.patientService = patientService;
//    }
//
//    @PostMapping("/send-appointment-request")
//    public String sendAppointmentRequest(@RequestBody AppointmentRequest appointmentRequest) {
//        return patientService.sendAppointmentRequest(appointmentRequest);
//    }


}
