package com.hadproject.healthcareapp.Experience;

import com.hadproject.healthcareapp.Experience.DTO.AddExperienceRequest;
import com.hadproject.healthcareapp.Experience.DTO.GetExperienceResponse;
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
public class ExperienceService {

    private final UserRepository userRepository;
    private  final  ExperienceRepository experienceRepository;

    public String addExperience(AddExperienceRequest experienceDetail) {
        var user = userRepository.findByEmail(experienceDetail.getUsername()).orElseThrow(() -> new RuntimeException("User not found"));
        var experience = Experience.builder()
                .uid(user)
                .year(experienceDetail.getYear())
                .departement(experienceDetail.getDepartment())
                .feedback(experienceDetail.getFeedback())
                .position(experienceDetail.getFeedback())
                .hospital(experienceDetail.getHospital())
                .build();
        try{
            experienceRepository.save(experience);
        }
        catch (Exception e){
            return  e.getMessage();
        }
        return "Successfully Added Experience";
    }

    public List<GetExperienceResponse> getExperiences(String username){
        List<GetExperienceResponse> experienceDetails = new ArrayList<>();
        Optional<User> user = userRepository.findByEmail(username);
        System.out.println("*******************      Searching the User     *******************"+username);
        if(user.isPresent()){
            User finalUser = user.get();
            List<Experience> experiences = experienceRepository.findByUid(finalUser);
            System.out.println("*******************      I got the User     *******************");
            for(Experience experience : experiences) {
                GetExperienceResponse experienceDetail = new GetExperienceResponse();
                experienceDetail.setYear(experience.getYear());
                experienceDetail.setDepartment(experience.getDepartement());
                experienceDetail.setHospital(experience.getHospital());
                experienceDetail.setPosition(experience.getPosition());
                experienceDetail.setFeedback(experience.getFeedback());
                experienceDetails.add(experienceDetail);
            }

        }
        return experienceDetails;
    }
}
