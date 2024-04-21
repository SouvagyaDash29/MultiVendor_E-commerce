package com.example.backend.Payload;



import com.example.backend.Model.User;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;


public class CartDto {
    private Long CartID;
    private Set<CartItemDto> items = new HashSet<>();
    @JsonManagedReference
    private UserDto user;

    public Long getCartID() {
        return CartID;
    }

    public void setCartID(Long cartID) {
        CartID = cartID;
    }

    public Set<CartItemDto> getItems() {
        return items;
    }

    public void setItems(Set<CartItemDto> items) {
        this.items = items;
    }

    public UserDto getUser() {
        return user;
    }

    public void setUser(UserDto user) {
        this.user = user;
    }
}
