package com.example.backend.Service.Impl;

import com.example.backend.Exception.ResourceNotFoundException;
import com.example.backend.Model.Product;
import com.example.backend.Model.SubCategory;
import com.example.backend.Payload.ProductDto;
import com.example.backend.Repositary.ProductRepository;
import com.example.backend.Repositary.SubCategoryRepository;
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
    private SubCategoryRepository subCategoryRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public ProductDto create(ProductDto productDto) {
        Product product = modelMapper.map(productDto, Product.class);
        if (productDto.getSubCategory() != null) {
            SubCategory subCategory = modelMapper.map(productDto.getSubCategory(), SubCategory.class);
            product.setSubCategory(subCategory);
        }
        Product savedProduct = productRepository.save(product);
        return modelMapper.map(savedProduct, ProductDto.class);
    }

    @Override
    public ProductDto update(Long productId, ProductDto productDto) {
        Product existingProduct = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + productId));
        existingProduct.setProductName(productDto.getProductName());
        existingProduct.setProductDescription(productDto.getProductDescription());
        existingProduct.setPrice(productDto.getPrice());
        existingProduct.setBrand(productDto.getBrand());
        existingProduct.setColor(productDto.getColor());
        if (productDto.getSubCategory() != null) {
            existingProduct.setSubCategory(modelMapper.map(productDto.getSubCategory(), SubCategory.class));
        }
        Product updatedProduct = productRepository.save(existingProduct);
        return modelMapper.map(updatedProduct, ProductDto.class);
    }

    @Override
    public void delete(Long productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + productId));
        productRepository.delete(product);
    }

    @Override
    public ProductDto getById(Long productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + productId));
        return modelMapper.map(product, ProductDto.class);
    }

    @Override
    public List<ProductDto> getAll() {
        List<Product> products = productRepository.findAll();
        return products.stream()
                .map(product -> modelMapper.map(product, ProductDto.class))
                .collect(Collectors.toList());
    }

    //find product by subcategory
    @Override
    public List<ProductDto> findProductBySubCategory(Long subcategoryId) {
        SubCategory subCategory = subCategoryRepository.findById(subcategoryId)
                .orElseThrow(() -> new ResourceNotFoundException("SubCategory not found with id: " + subcategoryId));
        List<Product> products = productRepository.findBySubCategory(subCategory);
        List<ProductDto> productDtos = products.stream()
                .map(product -> modelMapper.map(product, ProductDto.class))
                .collect(Collectors.toList());
        return productDtos;
    }
}
