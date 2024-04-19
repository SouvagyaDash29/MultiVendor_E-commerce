package com.example.backend.Payload;



import com.example.backend.Model.User;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
public class CartDto {
    private Long CartID;
    private Set<CartItemDto> items = new HashSet<>();
    private UserDto user;
}
