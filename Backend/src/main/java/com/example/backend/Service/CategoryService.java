package com.example.backend.Service;

import com.example.backend.Payload.CategoryDto;

import java.util.List;

public interface CategoryService {
    CategoryDto create(CategoryDto categoryDto);
    CategoryDto update(Long categoryId, CategoryDto categoryDto);
    void delete(Long categoryId);
    CategoryDto getById(Long categoryId);
    List<CategoryDto> getAll();
}
