package com.example.backend.Service.Impl;

import com.example.backend.Exception.ResourceNotFoundException;
import com.example.backend.Model.Product;
import com.example.backend.Model.SubCategory;
import com.example.backend.Payload.ProductDto;
import com.example.backend.Repositary.ProductRepository;
import com.example.backend.Service.ProductService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public ProductDto create(ProductDto productDto) {
        // Map ProductDto to Product entity
        Product product = modelMapper.map(productDto, Product.class);

        // Check if subCategoryDto is not null and map it to subCategory
        if (productDto.getSubCategory() != null) {
            SubCategory subCategory = modelMapper.map(productDto.getSubCategory(), SubCategory.class);
            product.setSubCategory(subCategory);
        }

        // Save the product entity
        Product savedProduct = productRepository.save(product);

        // Map saved Product entity back to ProductDto and return
        return modelMapper.map(savedProduct, ProductDto.class);
    }


    @Override
    public ProductDto update(Long productId, ProductDto productDto) {
        // Find the existing product by ID
        Product existingProduct = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + productId));

        // Update the fields of the existing product entity with the data from the DTO
        existingProduct.setProductName(productDto.getProductName());
        existingProduct.setProductDescription(productDto.getProductDescription());
        existingProduct.setPrice(productDto.getPrice());
        existingProduct.setBrand(productDto.getBrand());
        existingProduct.setColor(productDto.getColor());

        // Check if subCategoryDto is not null and map it to subCategory
        if (productDto.getSubCategory() != null) {
            existingProduct.setSubCategory(modelMapper.map(productDto.getSubCategory(), SubCategory.class));
        }

        // Save the updated product entity
        Product updatedProduct = productRepository.save(existingProduct);

        // Map the updated Product entity back to ProductDto and return
        return modelMapper.map(updatedProduct, ProductDto.class);
    }


    @Override
    public void delete(Long productId) {
        // Find the product by ID and delete it
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + productId));
        productRepository.delete(product);
    }

    @Override
    public ProductDto getById(Long productId) {
        // Find the product by ID
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + productId));

        // Map the Product entity to ProductDto and return
        return modelMapper.map(product, ProductDto.class);
    }

    @Override
    public List<ProductDto> getAll() {
        // Retrieve all products from the repository
        List<Product> products = productRepository.findAll();

        // Map each Product entity to ProductDto and collect them into a list
        return products.stream()
                .map(product -> modelMapper.map(product, ProductDto.class))
                .collect(Collectors.toList());
    }
}
