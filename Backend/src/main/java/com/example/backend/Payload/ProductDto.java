package com.example.backend.Payload;


import com.fasterxml.jackson.annotation.JsonIgnore;

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
    private Boolean stock;
    private Integer quantity;
    private Long subcategoryId;
    private String subcategoryName;
    private Long categoryId;
    private String categoryName;
    private byte[] productImage;
    @JsonIgnore
    private MultipartFile fileData;

    public boolean isStock() {
        return stock != null && stock;
    }
}
