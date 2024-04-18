package com.example.backend.Payload;

import lombok.Data;

@Data
public class OrderItemDto {
    private Long OrderItemId;
    private Integer quantity;
}
