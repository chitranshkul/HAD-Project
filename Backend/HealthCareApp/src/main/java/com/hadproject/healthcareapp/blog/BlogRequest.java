package com.hadproject.healthcareapp.blog;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BlogRequest {

    @JsonProperty("BlogItem")
    private String BlogItem;

    @JsonProperty("Title")
    private String Title;

}
