package com.hadproject.healthcareapp.senior_doctor;
import com.hadproject.healthcareapp.senior_doctor.DTO.ExpertListResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/SeniorDoctor")
@RequiredArgsConstructor
public class SeniorDoctorController {

    private  final  SeniorDoctorSerivce seniorDoctorSerivce;
    @GetMapping("/getExpertsUnderDoctor/{doctorID}")
    public List<ExpertListResponse> getExperts(@PathVariable String doctorID){
        return seniorDoctorSerivce.getExperts(doctorID);
    }
}
