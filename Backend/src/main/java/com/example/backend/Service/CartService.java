package com.example.backend.Service;

import com.example.backend.Payload.CartDto;
import com.example.backend.Payload.ItemRequest;

public interface CartService {
    CartDto addItem(ItemRequest item, String Username);
    CartDto getCartAll(String email);
    CartDto getCartById(Long cartId);
    CartDto removeCartItem(String Username, Long productId);
}
