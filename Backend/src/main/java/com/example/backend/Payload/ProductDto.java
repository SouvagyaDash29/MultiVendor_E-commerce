package com.example.backend.Payload;


import com.example.backend.Model.Image;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.Set;

@Data
public class ProductDto {
    private Long productId;
    private String productName;
    private String productDescription;
    private Integer price;
    private String brand;
    private String color;
    private Boolean stock;
    private int quantity;
//    private String imageName;
private Set<Image> productImages;
    private Long subcategoryId;
    private String subcategoryName;
    private Long categoryId;
    private String categoryName;

    public boolean isStock() {
        return stock != null && stock;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Boolean getStock() {
        return stock;
    }

    public void setStock(Boolean stock) {
        this.stock = stock;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

//    public String getImageName() {
//        return imageName;
//    }
//
//    public void setImageName(String imageName) {
//        this.imageName = imageName;
//    }

    public Long getSubcategoryId() {
        return subcategoryId;
    }

    public void setSubcategoryId(Long subcategoryId) {
        this.subcategoryId = subcategoryId;
    }

    public String getSubcategoryName() {
        return subcategoryName;
    }

    public void setSubcategoryName(String subcategoryName) {
        this.subcategoryName = subcategoryName;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public Set<Image> getProductImages() {
        return productImages;
    }

    public void setProductImages(Set<Image> productImages) {
        this.productImages = productImages;
    }
}
