package com.hadproject.healthcareapp.senior_doctor;

import com.hadproject.healthcareapp.appointment.AppointmentRepository;
import com.hadproject.healthcareapp.senior_doctor.DTO.ExpertListResponse;
import com.hadproject.healthcareapp.user.User;
import com.hadproject.healthcareapp.user.UserDetail;
import com.hadproject.healthcareapp.user.UserDetailRepository;
import com.hadproject.healthcareapp.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class SeniorDoctorSerivce {
    private final UserRepository userRepository;
    private final SeniorDoctorRepositry seniorDoctorRepositry;
    private final UserDetailRepository userDetailRepository;
    private  final AppointmentRepository appointmentRepository;


    public List<ExpertListResponse>  getExperts(String doctor_id){
        List<ExpertListResponse> expertListReponses = new ArrayList<ExpertListResponse>();
        Optional<User> optuser = userRepository.findByEmail(doctor_id);
        if(optuser.isPresent()){
            User user = optuser.get();
            List<SeniorDoctor> seniorDoctorList = seniorDoctorRepositry.findByDid(user);
            for(SeniorDoctor seniorDoctor: seniorDoctorList){
                Optional<User> optDoctor = userRepository.findById(seniorDoctor.getEid().getId());
                if(optDoctor.isPresent()){
                    User doctor = optDoctor.get();
                    Optional<UserDetail> optUserDetail = userDetailRepository.findByUid(doctor);
                    if(optUserDetail.isPresent()){
                        UserDetail userDetail = optUserDetail.get();
                        expertListReponses.add(
                                ExpertListResponse
                                        .builder()
                                        .username(doctor.getUsername())
                                        .name(userDetail.getFname()+" "+userDetail.getMname()+" "+userDetail.getLname())
                                        .gender(userDetail.getGender())
                                        .phone(userDetail.getMobile())
                                        .build()
                        );
                    }
                }
            }
        }

        return expertListReponses;
    }
}
