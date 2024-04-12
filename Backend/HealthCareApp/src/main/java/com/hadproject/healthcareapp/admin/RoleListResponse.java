package com.hadproject.healthcareapp.admin;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RoleListResponse {
    @JsonProperty("name")
    private String name;
    @JsonProperty("gender")
    private String gender;
    @JsonProperty("contact_no")
    private String contact_no;

}

