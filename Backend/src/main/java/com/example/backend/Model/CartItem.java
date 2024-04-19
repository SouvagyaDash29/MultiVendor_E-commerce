package com.example.backend.Model;


import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long CartItemId;

    private Integer quantity;
    private Double totalPrice;

    @ManyToOne
    private Cart cart;

    @OneToOne
    private Product product;

}
