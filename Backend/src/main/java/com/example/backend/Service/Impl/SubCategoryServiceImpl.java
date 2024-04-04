package com.example.backend.Service.Impl;


import com.example.backend.Exception.ResourseNotFoundException;
import com.example.backend.Model.SubCategory;
import com.example.backend.Payload.SubCategoryDto;
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
                .orElseThrow(() -> new ResourseNotFoundException("SubCategory not found with id: " + subCategoryId));

        // Update the fields
        existingSubCategory.setTitle(subCategoryDto.getTitle());

        SubCategory updatedSubCategory = subCategoryRepository.save(existingSubCategory);
        return modelMapper.map(updatedSubCategory, SubCategoryDto.class);
    }

    @Override
    public void delete(Long subCategoryId) {
        SubCategory subCategory = subCategoryRepository.findById(subCategoryId)
                .orElseThrow(() -> new ResourseNotFoundException("SubCategory not found with id: " + subCategoryId));
        subCategoryRepository.delete(subCategory);
    }

    @Override
    public SubCategoryDto getById(Long subCategoryId) {
        SubCategory subCategory = subCategoryRepository.findById(subCategoryId)
                .orElseThrow(() -> new ResourseNotFoundException("SubCategory not found with id: " + subCategoryId));
        return modelMapper.map(subCategory, SubCategoryDto.class);
    }

    @Override
    public List<SubCategoryDto> getAll() {
        List<SubCategory> subCategories = subCategoryRepository.findAll();
        return subCategories.stream()
                .map(subCategory -> modelMapper.map(subCategory, SubCategoryDto.class))
                .collect(Collectors.toList());
    }
}