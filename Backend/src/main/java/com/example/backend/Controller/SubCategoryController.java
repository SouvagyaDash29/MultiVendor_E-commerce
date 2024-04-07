package com.example.backend.Controller;

import com.example.backend.Payload.SubCategoryDto;
import com.example.backend.Service.SubCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/subcategories")
public class SubCategoryController {

    @Autowired
    private SubCategoryService subCategoryService;

    @PostMapping("/create")
    public ResponseEntity<SubCategoryDto> createSubCategory(@RequestBody SubCategoryDto subCategoryDto) {
        SubCategoryDto createdSubCategory = subCategoryService.create(subCategoryDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdSubCategory);
    }

    @PutMapping("/update/{subCategoryId}")
    public ResponseEntity<SubCategoryDto> updateSubCategory(@PathVariable Long subCategoryId, @RequestBody SubCategoryDto subCategoryDto) {
        SubCategoryDto updatedSubCategory = subCategoryService.update(subCategoryId, subCategoryDto);
        return ResponseEntity.ok(updatedSubCategory);
    }

    @DeleteMapping("/delete/{subCategoryId}")
    public ResponseEntity<String> deleteSubCategory(@PathVariable Long subCategoryId) {
        subCategoryService.delete(subCategoryId);
        return ResponseEntity.ok("SubCategory deleted successfully");
    }

    @GetMapping("/getById/{subCategoryId}")
    public ResponseEntity<SubCategoryDto> getSubCategoryById(@PathVariable Long subCategoryId) {
        SubCategoryDto subCategoryDto = subCategoryService.getById(subCategoryId);
        return ResponseEntity.ok(subCategoryDto);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<SubCategoryDto>> getAllSubCategories() {
        List<SubCategoryDto> subCategoryDtoList = subCategoryService.getAll();
        return ResponseEntity.ok(subCategoryDtoList);
    }

    @PostMapping("/{subCategoryId}/associate/{categoryId}")
    public ResponseEntity<SubCategoryDto> associateSubCategoryWithCategory(@PathVariable Long subCategoryId, @PathVariable Long categoryId) {
        SubCategoryDto updatedSubCategory = subCategoryService.associateWithCategory(subCategoryId, categoryId);
        return ResponseEntity.ok(updatedSubCategory);
    }
}
