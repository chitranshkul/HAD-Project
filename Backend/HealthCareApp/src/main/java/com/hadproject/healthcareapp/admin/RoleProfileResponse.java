package com.hadproject.healthcareapp.admin;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RoleProfileResponse {
    @JsonProperty("name")
    private String name;
    @JsonProperty("Joined_Since")
    private String Joined_Since;

    @JsonProperty("Age")
    private int Age;

    @JsonProperty("contact_no")
    private String contact_no;

    @JsonProperty("gender")
    private String gender;

    @JsonProperty("Address")
    private String Address;

    @JsonProperty("DateOfBirth")
    private String DateOfBirth;



}
