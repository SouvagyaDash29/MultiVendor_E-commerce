package com.example.backend.Repositary;

import com.example.backend.Model.Product;
import com.example.backend.Model.SubCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface ProductRepository extends JpaRepository<Product, Long>{
    List<Product> findBySubCategory(SubCategory subCategory);
}
