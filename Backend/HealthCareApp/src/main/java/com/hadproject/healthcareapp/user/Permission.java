package com.hadproject.healthcareapp.user;


import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Permission {

    PATIENT_READ("patient:read"),
    PATINET_UPDATE("patient:update"),
    PATINET_CREATE("patient:create"),
    PATINET_DELETE("patient:delete"),

    EXPERT_READ("expert:read"),
    EXPERT_UPDATE("expert:update"),
    EXPERT_CREATE("expert:create"),
    EXPERT_DELETE("expert:delete"),

    ADMIN_READ("admin:read"),
    ADMIN_UPDATE("admin:update"),
    ADMIN_CREATE("admin:create"),
    ADMIN_DELETE("admin:delete"),

    MODERATOR_READ("moderator:read"),
    MODERATOR_UPDATE("moderator:update"),
    MODERATOR_CREATE("moderator:create"),
    MODERATOR_DELETE("moderator:delete"),

    SENIOR_DOCTOR_READ("senior_doctor:read"),
    SENIOR_DOCTOR_UPDATE("senior_doctor:update"),
    SENIOR_DOCTOR_CREATE("senior_doctor:create"),
    SENIOR_DOCTOR_DELETE("senior_doctor:delete")



    ;

    @Getter
    private final String permission;
}
