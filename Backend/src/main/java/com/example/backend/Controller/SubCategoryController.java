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
@CrossOrigin(origins = "http://localhost:3000")
public class SubCategoryController {

    @Autowired
    private SubCategoryService subCategoryService;

    // creating subcategory
    @PostMapping("/create")
    public ResponseEntity<SubCategoryDto> createSubCategory(@RequestBody SubCategoryDto subCategoryDto) {
        SubCategoryDto createdSubCategory = subCategoryService.create(subCategoryDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdSubCategory);
    }

    // updating subcategory
    @PutMapping("/update/{subCategoryId}")
    public ResponseEntity<SubCategoryDto> updateSubCategory(@PathVariable Long subCategoryId, @RequestBody SubCategoryDto subCategoryDto) {
        SubCategoryDto updatedSubCategory = subCategoryService.update(subCategoryId, subCategoryDto);
        return ResponseEntity.ok(updatedSubCategory);
    }

    // deleting subcategory
    @DeleteMapping("/delete/{subCategoryId}")
    public ResponseEntity<String> deleteSubCategory(@PathVariable Long subCategoryId) {
        subCategoryService.delete(subCategoryId);
        return ResponseEntity.ok("SubCategory deleted successfully");
    }

    // seeing a single subcategory not its contents
    @GetMapping("/getById/{subCategoryId}")
    public ResponseEntity<SubCategoryDto> getSubCategoryById(@PathVariable Long subCategoryId) {
        SubCategoryDto subCategoryDto = subCategoryService.getById(subCategoryId);
        return ResponseEntity.ok(subCategoryDto);
    }

    // seeing all subcategory
    @GetMapping("/getAll")
    public ResponseEntity<List<SubCategoryDto>> getAllSubCategories() {
        List<SubCategoryDto> subCategoryDtoList = subCategoryService.getAll();
        return ResponseEntity.ok(subCategoryDtoList);
    }

    // do not use this url
    @PostMapping("/{subCategoryId}/associate")
    public ResponseEntity<SubCategoryDto> associateSubCategoryWithCategory(@PathVariable Long subCategoryId, @RequestParam Long categoryId) {
        SubCategoryDto updatedSubCategory = subCategoryService.associateWithCategory(subCategoryId, categoryId);
        return ResponseEntity.ok(updatedSubCategory);
    }
}