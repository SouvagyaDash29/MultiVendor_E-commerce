package com.example.backend.Controller;

import com.example.backend.Model.Image;
import com.example.backend.Payload.ImageDto;
import com.example.backend.Payload.ProductDto;
import com.example.backend.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/products")

public class ProductController {

    @Autowired
    private ProductService productService;

    public Set<Image> uploadImage(MultipartFile[] multipartFiles) throws IOException {
        Set<Image> imageSet = new HashSet<>();

        for(MultipartFile file: multipartFiles) {
            Image image = new Image(
                    file.getOriginalFilename(),
                    file.getContentType(),
                    file.getBytes()
            );
            imageSet.add(image);
        }
        return imageSet;
    }

    // create product url
    @PostMapping(value = "/create", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<?> createProduct(
            @RequestPart("product_image") MultipartFile[] file,
            @RequestParam String productName,
            @RequestParam String productDescription,
            @RequestParam int price,
            @RequestParam String brand,
            @RequestParam String color,
            @RequestParam boolean stock,
            @RequestParam Integer quantity,
            @RequestParam Long subcategoryId
    ) {
        try {
            Set<Image> images = uploadImage(file);

            ProductDto productDto = new ProductDto();
            productDto.setProductName(productName);
            productDto.setProductDescription(productDescription);
            productDto.setPrice(price);
            productDto.setBrand(brand);
            productDto.setColor(color);
            productDto.setStock(stock);
            productDto.setQuantity(quantity);
            productDto.setSubcategoryId(subcategoryId);
            productDto.setProductImages(images); // Set the images

            ProductDto createdProduct = productService.create(productDto);
            return new ResponseEntity<>(createdProduct, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(Map.of("Message", "Error creating product"), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //updating product url
    @PutMapping("/update/{productId}")
    public ResponseEntity<ProductDto> updateProduct(@PathVariable Long productId, @RequestBody ProductDto productDto) {
        ProductDto updatedProduct = productService.update(productId, productDto);
        return ResponseEntity.ok(updatedProduct);
    }

    // deleting product url
    @DeleteMapping("/delete/{productId}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long productId) {
        productService.delete(productId,true);
        return ResponseEntity.ok("Product deleted successfully");
    }

    //seeing a perticular product
    @GetMapping("/getById/{productId}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable Long productId) {
        ProductDto productDto = productService.getById(productId);
        return ResponseEntity.ok(productDto);
    }

    // seeing all products (Home Page)
    @GetMapping("/getAll")
    public ResponseEntity<List<ProductDto>> getAllProducts() {
        List<ProductDto> productDtoList = productService.getAll();
        return ResponseEntity.ok(productDtoList);
    }

    // seeing product related to subcategory (Mens,Women,Kids,etc)
    @GetMapping("/bySubcategory/{subcategoryId}")
    public ResponseEntity<List<ProductDto>> getProductsBySubcategory(@PathVariable Long subcategoryId) {
        List<ProductDto> products = productService.findProductBySubCategory(subcategoryId);
        return ResponseEntity.ok(products);
    }

    // seeing product related to category (Fashion,Electronics,etc)
    @GetMapping("/byCategory/{categoryId}")
    public ResponseEntity<List<ProductDto>> getProductsByCategory(@PathVariable Long categoryId) {
        List<ProductDto> products = productService.findProductByCategory(categoryId);
        return ResponseEntity.ok(products);
    }

}
