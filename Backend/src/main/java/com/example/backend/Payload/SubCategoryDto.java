package com.example.backend.Payload;


import com.example.backend.Model.Product;
import jakarta.persistence.CascadeType;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.util.List;

@Data
public class SubCategoryDto {
    private Long subcategoryId;
    private String title;

    private CategoryDto category;

}
