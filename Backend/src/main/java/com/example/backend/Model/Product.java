package com.example.backend.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;
    private String productName;
    private String productDescription;
    private Integer price;
    private String brand;
    private String color;

    @ManyToOne
    @JoinColumn(name = "sub_category_id")
    private SubCategory subCategory;

}
