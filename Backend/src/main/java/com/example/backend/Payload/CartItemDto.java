package com.example.backend.Payload;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class CartItemDto {
    private Long CartItemId;

    private Integer quantity;
    private Double totalPrice;
    @JsonIgnore
    private CartDto cart;
    private ProductDto product;

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

    public CartDto getCart() {
        return cart;
    }

    public void setCart(CartDto cart) {
        this.cart = cart;
    }

    public ProductDto getProduct() {
        return product;
    }

    public void setProduct(ProductDto product) {
        this.product = product;
    }
}
