package com.example.backend.Service;

import com.example.backend.Payload.ProductDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ProductService {
    ProductDto create(ProductDto productDto);
    ProductDto update(Long productId, ProductDto productDto);
    void delete(Long productId, Boolean stock);
    ProductDto getById(Long productId);
    List<ProductDto> getAll();
    List<ProductDto> findProductBySubCategory(Long subcategoryId);
    List<ProductDto> findProductByCategory(Long categoryId);
//    String uploadImage(MultipartFile file);
}
