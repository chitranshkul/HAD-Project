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
public class BlogSearchResponse {

    @JsonProperty("Blogitem")
    private String BlogItem;
    @JsonProperty("Title")
    private String Title;
    @JsonProperty("author")
    private String author;
    @JsonProperty("Likes")
    private int Likes;

    @JsonProperty("Dislikes")
    private int Dislikes;

    @JsonProperty("Flags")
    private int flags;

}
