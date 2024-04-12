package com.hadproject.healthcareapp.auth;

import com.hadproject.healthcareapp.user.Role;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

  private String fname;
  private String mname;
  private String lname;
  private String email;
  private String password;
  private String gender;
  private String hno;
  private String Street1;
  private String Street2;
  private int Pin_Code;
  private String City;
  private String State;
  private String Country;
  private String District;
  private String Mobile;
  private String dob;
  private String dor;

  @Enumerated(EnumType.STRING)
  private Role role;
}
