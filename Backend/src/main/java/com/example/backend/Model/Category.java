package com.example.backend.Model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long categoryId;
    private String title;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    private List<SubCategory> subCategories;
}
