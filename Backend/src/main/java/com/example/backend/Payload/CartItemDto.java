package com.example.backend.Payload;

import lombok.Data;

@Data
public class CartItemDto {
    private Long CartItemId;

    private Integer quantity;
    private Double totalPrice;
    private CartDto cartDto;
    private ProductDto productDto;
}
