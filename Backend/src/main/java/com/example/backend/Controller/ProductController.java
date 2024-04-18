package com.example.backend.Controller;

import com.example.backend.Payload.ProductDto;
import com.example.backend.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/products")
public class
ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/create")
    public ResponseEntity<ProductDto> createProduct(@RequestBody ProductDto productDto) {
        ProductDto createdProduct = productService.create(productDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdProduct);
    }

    @PutMapping("/update/{productId}")
    public ResponseEntity<ProductDto> updateProduct(@PathVariable Long productId, @RequestBody ProductDto productDto) {
        ProductDto updatedProduct = productService.update(productId, productDto);
        return ResponseEntity.ok(updatedProduct);
    }

    @DeleteMapping("/delete/{productId}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long productId) {
        productService.delete(productId);
        return ResponseEntity.ok("Product deleted successfully");
    }

    @GetMapping("/getById/{productId}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable Long productId) {
        ProductDto productDto = productService.getById(productId);
        return ResponseEntity.ok(productDto);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<ProductDto>> getAllProducts() {
        List<ProductDto> productDtoList = productService.getAll();
        return ResponseEntity.ok(productDtoList);
    }

    // Find product by subCategory
    @GetMapping("/subcategory/{subcategoryId}")
    public ResponseEntity<List<ProductDto>>getProductByCategory(@PathVariable Long subcategoryId){
        List<ProductDto> findProductByCategory = this.productService.findProductBySubCategory(subcategoryId);
        return new ResponseEntity<List<ProductDto>>(findProductByCategory,HttpStatus.ACCEPTED);
    }
}
