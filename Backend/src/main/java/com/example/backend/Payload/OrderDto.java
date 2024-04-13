package com.example.backend.Payload;



import lombok.Data;

import java.util.List;

@Data
public class OrderDto {
    private Long OrderId;
    private List<OrderItemDto> items;
}
