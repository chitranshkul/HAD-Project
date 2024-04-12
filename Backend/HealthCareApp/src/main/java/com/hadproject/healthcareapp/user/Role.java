package com.hadproject.healthcareapp.user;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;



@RequiredArgsConstructor
public enum Role {


  USER(Collections.emptySet()),
  PATIENT(
          Set.of(
                  Permission.PATIENT_READ,
                  Permission.PATINET_UPDATE,
                  Permission.PATINET_CREATE,
                  Permission.PATINET_DELETE
          )
  ),
  EXPERT(
          Set.of(
                  Permission.EXPERT_READ,
                  Permission.EXPERT_UPDATE,
                  Permission.EXPERT_CREATE,
                  Permission.EXPERT_DELETE
          )
  ),
  MODERATOR(
          Set.of(
                  Permission.MODERATOR_CREATE,
                  Permission.MODERATOR_DELETE,
                  Permission.MODERATOR_UPDATE,
                  Permission.MODERATOR_READ
          )
  ),
  SENIOR_DOCTOR(
          Set.of(
                  Permission.SENIOR_DOCTOR_READ,
                  Permission.SENIOR_DOCTOR_UPDATE,
                  Permission.SENIOR_DOCTOR_CREATE,
                  Permission.SENIOR_DOCTOR_DELETE
          )
  ),
  ADMIN(
          Set.of(
                  Permission.ADMIN_CREATE,
                  Permission.ADMIN_UPDATE,
                  Permission.ADMIN_DELETE,
                  Permission.ADMIN_READ
          )
  )

  ;

  @Getter
  private final Set<Permission> permissions;

  public List<SimpleGrantedAuthority> getAuthorities() {
    var authorities = getPermissions()
            .stream()
            .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
            .collect(Collectors.toList());
    authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
    return authorities;
  }
}

