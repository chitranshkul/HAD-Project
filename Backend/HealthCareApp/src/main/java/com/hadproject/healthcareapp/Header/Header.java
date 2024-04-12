package com.hadproject.healthcareapp.Header;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.tomcat.util.http.parser.Authorization;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Header {

    @JsonProperty("Content-Type")
    private String contentType;

//    @JsonProperty("Access-Control-Allow-Origin")
//    private String accessControl;


    @JsonProperty("Authorization")
    private String Authorization;
}
