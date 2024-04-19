package com.example.backend.Model;


import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;

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
    private Boolean stock=true;
    private Integer quantity;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "sub_category_id")
    private SubCategory subCategory;

    @Lob
    @Column(columnDefinition = "MEDIUMBLOB")
    private byte[] productImage;

    @Transient
    private MultipartFile fileData;

    public boolean isStock() {
        return stock != null && stock;
    }

}
