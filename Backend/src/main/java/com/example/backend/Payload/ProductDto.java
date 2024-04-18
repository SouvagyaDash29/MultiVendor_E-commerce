package com.example.backend.Payload;

import com.example.backend.Model.SubCategory;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

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
    private byte[] productImage;
    @JsonIgnore
    private MultipartFile fileData;
}
