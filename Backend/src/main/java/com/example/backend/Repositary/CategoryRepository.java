package com.example.backend.Repositary;

import com.example.backend.Model.Category;
import org.springframework.data.jpa.repository.JpaRepository;



public interface CategoryRepository extends JpaRepository<Category, Long> {

}
