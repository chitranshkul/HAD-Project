package com.hadproject.healthcareapp.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserDetailRepository extends JpaRepository<UserDetail,Integer> {

    Optional<UserDetail> findByUid(User uid);

    int countByGender(String gender);
    Optional<UserDetail> findByFname(String fname);
}
