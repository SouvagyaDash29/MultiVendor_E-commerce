package com.example.backend.Service;

import com.example.backend.Payload.OrderDto;

import java.util.List;

public interface OrderService {
    OrderDto createOrder(Long productId, Integer quantity);
    List<OrderDto> getAllOrder();
}
