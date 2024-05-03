package com.hadproject.healthcareapp.education;


import com.hadproject.healthcareapp.education.DTO.AddEducationRequestDTO;
import com.hadproject.healthcareapp.education.DTO.ResponseSendEducationDetails;
import com.hadproject.healthcareapp.user.User;
import com.hadproject.healthcareapp.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class EducationService {

    private final UserRepository userRepository;
    private final EducationRepository educationRepositry;

    public String postEducation(AddEducationRequestDTO educationDetails) {
        var user = userRepository.findByEmail(educationDetails.getUsername()).orElseThrow(() -> new RuntimeException("User not found"));
        var education = Education.builder()
                .uid(user)
                .year(educationDetails.getYear())
                .degree(educationDetails.getYear())
                .institute(educationDetails.getInstitute())
                .result(educationDetails.getResult())
                .summary(educationDetails.getSummary())
                .build();
        try{
            educationRepositry.save(education);
        }
        catch (Exception e){
            return  e.getMessage();
        }
        return "Successfully Added Education";
    }

    public List<ResponseSendEducationDetails> getEducationalDetails(String username){
        List<ResponseSendEducationDetails> educationDetails = new ArrayList<>();
        Optional<User> user = userRepository.findByEmail(username);
        System.out.println("*******************      Searching the User     *******************"+username);
        if(user.isPresent()){
            User finalUser = user.get();
            List<Education> educations = educationRepositry.findByUid(finalUser);
            System.out.println("*******************      I got the User     *******************");
            for(Education education : educations) {
                ResponseSendEducationDetails educationDetail = new ResponseSendEducationDetails();
                educationDetail.setYear(education.getYear());
                educationDetail.setInstitute(education.getInstitute());
                educationDetail.setSummary(education.getSummary());
                educationDetail.setDegree(education.getDegree());
                educationDetail.setResult(education.getResult());
                educationDetails.add(educationDetail);
            }

        }
        return educationDetails;
    }

}
