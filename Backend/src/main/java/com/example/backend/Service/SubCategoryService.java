package com.example.backend.Service;

import com.example.backend.Payload.SubCategoryDto;

import java.util.List;

public interface SubCategoryService {
    SubCategoryDto create(SubCategoryDto subCategoryDto);
    SubCategoryDto update(Long subCategoryId, SubCategoryDto subCategoryDto);
    void delete(Long subCategoryId);
    SubCategoryDto getById(Long subCategoryId);
    List<SubCategoryDto> getAll();
    SubCategoryDto associateWithCategory(Long subCategoryId, Long categoryId);
}
