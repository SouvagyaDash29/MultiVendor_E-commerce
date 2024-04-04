package com.example.backend.Payload;

import java.util.List;

public class CategoryDto {
    private Long categoryId;
    private String title;

    private List<SubCategoryDto> subcategories;

    public CategoryDto() {
        super();

    }

    public CategoryDto(Long categoryId, String title, List<SubCategoryDto> subcategories) {
        this.categoryId = categoryId;
        this.title = title;
        this.subcategories = subcategories;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<SubCategoryDto> getSubcategories() {
        return subcategories;
    }

    public void setSubcategories(List<SubCategoryDto> subcategories) {
        this.subcategories = subcategories;
    }
}
