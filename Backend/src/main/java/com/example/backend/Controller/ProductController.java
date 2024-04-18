package com.example.backend.Controller;

import com.example.backend.Payload.ProductDto;
import com.example.backend.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    @Autowired
    private ProductService productService;

    // create product url
    @PostMapping("/create")
    public ResponseEntity<ProductDto> createProduct(
            @RequestParam("productName") String productName,
            @RequestParam("productDescription") String productDescription,
            @RequestParam("price") int price,
            @RequestParam("brand") String brand,
            @RequestParam("color") String color,
            @RequestParam("subcategoryId") Long subcategoryId,
            @RequestParam("file") MultipartFile file
    ) {
        // Check if the file is empty or null
        if (file == null || file.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        ProductDto productDto = new ProductDto();
        productDto.setProductName(productName);
        productDto.setProductDescription(productDescription);
        productDto.setPrice(price);
        productDto.setBrand(brand);
        productDto.setColor(color);
        productDto.setSubcategoryId(subcategoryId);
        productDto.setFileData(file);

        ProductDto createdProduct = productService.create(productDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdProduct);
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
        productService.delete(productId);
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
