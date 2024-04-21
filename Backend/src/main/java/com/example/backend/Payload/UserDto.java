package com.example.backend.Payload;


import com.fasterxml.jackson.annotation.JsonBackReference;

import java.util.Date;


public class UserDto {
    private Long userId;
    private String name;
    private String email;
    private String password;
    private String address;
    private String gender;
    private String phone;
    private Date date;
    @JsonBackReference
    private CartDto cart;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public CartDto getCart() {
        return cart;
    }

    public void setCart(CartDto cart) {
        this.cart = cart;
    }
}
