package com.example.backend.Payload;



import lombok.Data;

import java.util.List;

@Data
public class SubCategoryDto {
    private Long subcategoryId;
    private String subcategoryName;
    private Long categoryId;
    private String categoryName;

}
