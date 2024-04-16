package com.example.backend.Payload;

import com.example.backend.Model.SubCategory;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
public class ProductDto {
    private Long productId;
    private String productName;
    private String productDescription;
    private Integer price;
    private String brand;
    private String color;
    private Long subcategoryId;
    private String subcategoryName;
    private Long categoryId;
    private String categoryName;

}
