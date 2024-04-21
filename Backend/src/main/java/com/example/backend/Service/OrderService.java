package com.example.backend.Service;

import com.example.backend.Payload.OrderDto;
import com.example.backend.Payload.OrderRequest;

public interface OrderService {
    OrderDto createOrder(OrderRequest request, String Username);
    void CancelOrder(Long orderId);
}
