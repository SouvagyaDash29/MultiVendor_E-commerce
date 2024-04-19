package com.example.backend.Controller;

import com.example.backend.Payload.CartDto;
import com.example.backend.Payload.ItemRequest;
import com.example.backend.Service.CartService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;


@RestController
@RequestMapping("/cart")
//@CrossOrigin(origins = "http://localhost:3000")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/")
    public ResponseEntity<CartDto> addToCart(@RequestBody ItemRequest itemRequest, Principal principal) {

        String email = principal != null ? principal.getName() : "Anonymous";
        System.out.println("Principal email: " + email);
//        String email = principal.getName();
//        System.out.println(email);
        CartDto addItem = this.cartService.addItem(itemRequest,principal.getName());
        return new ResponseEntity<CartDto>(addItem, HttpStatus.OK);
    }
}
