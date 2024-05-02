package com.hadproject.healthcareapp.education;


import com.hadproject.healthcareapp.education.DTO.AddEducationRequestDTO;
import com.hadproject.healthcareapp.education.DTO.ResponseSendEducationDetails;
import com.hadproject.healthcareapp.qans.QansService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/v1/education")
@RequiredArgsConstructor
public class EducationController {

    private final EducationService educationService;

    @PostMapping("/addEducation")
    public ResponseEntity<String> addEducation(@RequestBody AddEducationRequestDTO educationDetails){

        String result = educationService.postEducation(educationDetails);
        return ResponseEntity.ok(result);
    }

    @GetMapping("getEducation/{username}")
    public ResponseEntity<List<ResponseSendEducationDetails>>getEducationalDetails(@PathVariable String username){
        System.out.println("******************** "+username);
        List<ResponseSendEducationDetails> educationDetails= educationService.getEducationalDetails(username);

        return ResponseEntity.ok(educationDetails);
    }
}
