package com.example.backend.Payload;

import lombok.Data;

@Data
public class CartItemDto {
    private Long CartItemId;

    private Integer quantity;
    private Double totalPrice;
    private CartDto cartDto;
    private ProductDto productDto;

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

    public CartDto getCartDto() {
        return cartDto;
    }

    public void setCartDto(CartDto cartDto) {
        this.cartDto = cartDto;
    }

    public ProductDto getProductDto() {
        return productDto;
    }

    public void setProductDto(ProductDto productDto) {
        this.productDto = productDto;
    }
}
