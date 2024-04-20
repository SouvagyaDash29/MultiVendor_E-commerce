package com.example.backend.Model;


import lombok.Data;

import javax.persistence.*;

@Entity

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

    public Long getCartItemId() {
        return CartItemId;
    }

    public void setCartItemId(Long cartItemId) {
        CartItemId = cartItemId;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Cart getCart() {
        return cart;
    }

    public void setCart(Cart cart) {
        this.cart = cart;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
