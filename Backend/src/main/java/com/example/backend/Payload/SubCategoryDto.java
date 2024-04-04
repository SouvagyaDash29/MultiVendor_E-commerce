package com.example.backend.Payload;

import java.util.List;

public class SubCategoryDto {
    private Long subcategoryId;
    private String title;

    private List<ProductDto> products;


    public SubCategoryDto() {
        super();
    }

    public SubCategoryDto(Long subcategoryId, String title, List<ProductDto> products) {
        this.subcategoryId = subcategoryId;
        this.title = title;
        this.products = products;
    }

    public Long getSubcategoryId() {
        return subcategoryId;
    }

    public void setSubcategoryId(Long subcategoryId) {
        this.subcategoryId = subcategoryId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
    

    public void setCategory(CategoryDto categoryDto) {
    }

    public List<ProductDto> getProducts() {
        return products;
    }

    public void setProducts(List<ProductDto> products) {
        this.products = products;
    }
}
