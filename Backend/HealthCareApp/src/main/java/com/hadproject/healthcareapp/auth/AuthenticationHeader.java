package com.hadproject.healthcareapp.auth;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationHeader {

    @JsonProperty("Content-Type")
    private String contentType;
    @JsonProperty("Access-Control-Allow-Origin")
    private String accessControl;
    @JsonProperty("Authorization")
    private String Token;

}
