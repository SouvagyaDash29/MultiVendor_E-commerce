package com.example.backend.Service.Impl;

import com.example.backend.Exception.ResourceNotFoundException;
import com.example.backend.Model.Category;
import com.example.backend.Model.SubCategory;
import com.example.backend.Payload.SubCategoryDto;
import com.example.backend.Repositary.CategoryRepository;
import com.example.backend.Repositary.SubCategoryRepository;
import com.example.backend.Service.SubCategoryService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SubCategoryServiceImpl implements SubCategoryService {

    @Autowired
    private SubCategoryRepository subCategoryRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public SubCategoryDto create(SubCategoryDto subCategoryDto) {
        SubCategory subCategory = modelMapper.map(subCategoryDto, SubCategory.class);
        SubCategory savedSubCategory = subCategoryRepository.save(subCategory);
        return modelMapper.map(savedSubCategory, SubCategoryDto.class);
    }

    @Override
    public SubCategoryDto update(Long subCategoryId, SubCategoryDto subCategoryDto) {
        SubCategory existingSubCategory = subCategoryRepository.findById(subCategoryId)
                .orElseThrow(() -> new ResourceNotFoundException("SubCategory not found with id: " + subCategoryId));

        existingSubCategory.setTitle(subCategoryDto.getTitle());

       
        if (subCategoryDto.getCategory() != null) {
            Category category = modelMapper.map(subCategoryDto.getCategory(), Category.class);
            existingSubCategory.setCategory(category);
        }

        SubCategory updatedSubCategory = subCategoryRepository.save(existingSubCategory);

        return modelMapper.map(updatedSubCategory, SubCategoryDto.class);
    }



    @Override
    public void delete(Long subCategoryId) {
        SubCategory subCategory = subCategoryRepository.findById(subCategoryId)
                .orElseThrow(() -> new ResourceNotFoundException("SubCategory not found with id: " + subCategoryId));
        subCategoryRepository.delete(subCategory);
    }

    @Override
    public SubCategoryDto getById(Long subCategoryId) {
        SubCategory subCategory = subCategoryRepository.findById(subCategoryId)
                .orElseThrow(() -> new ResourceNotFoundException("SubCategory not found with id: " + subCategoryId));
        return modelMapper.map(subCategory, SubCategoryDto.class);
    }

    @Override
    public List<SubCategoryDto> getAll() {
        List<SubCategory> subCategories = subCategoryRepository.findAll();
        return subCategories.stream()
                .map(subCategory -> modelMapper.map(subCategory, SubCategoryDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public SubCategoryDto associateWithCategory(Long subCategoryId, Long categoryId) {

        SubCategory subCategory = subCategoryRepository.findById(subCategoryId)
                .orElseThrow(() -> new ResourceNotFoundException("SubCategory not found with id: " + subCategoryId));
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found with id: " + categoryId));


        subCategory.setCategory(category);


        SubCategory updatedSubCategory = subCategoryRepository.save(subCategory);


        return modelMapper.map(updatedSubCategory, SubCategoryDto.class);
    }
}
