package com.hadproject.healthcareapp.Experience;

import com.hadproject.healthcareapp.Experience.DTO.AddExperienceRequest;
import com.hadproject.healthcareapp.Experience.DTO.GetExperienceResponse;
import com.hadproject.healthcareapp.education.DTO.AddEducationRequestDTO;
import com.hadproject.healthcareapp.education.DTO.ResponseSendEducationDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/experience")
@RequiredArgsConstructor
public class ExperienceController {

    private  final ExperienceService experienceService;

    @PostMapping("/addExperience")
    public ResponseEntity<String> addExperience(@RequestBody AddExperienceRequest experienceDetails){

//        String result = educationService.postQuestion(educationDetails);
        String result = experienceService.addExperience(experienceDetails);
        return ResponseEntity.ok(result);
    }

    @GetMapping("getExperience/{username}")
    public ResponseEntity<List<GetExperienceResponse>> getExperiences(@PathVariable String username){
        System.out.println("******************** "+username);
//        List<ResponseSendEducationDetails> educationDetails= educationService.getEducationalDetails(username);
        List<GetExperienceResponse> experienceDetails = experienceService.getExperiences(username);
        return ResponseEntity.ok(experienceDetails);
    }

}
