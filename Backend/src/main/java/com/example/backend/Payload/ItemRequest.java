package com.example.backend.Payload;

import lombok.Data;

@Data
public class ItemRequest {
    private Long productId;
    private Integer quantity;
}
