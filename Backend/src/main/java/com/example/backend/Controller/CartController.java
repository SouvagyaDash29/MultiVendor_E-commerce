package com.example.backend.Controller;

import com.example.backend.Payload.CartDto;
import com.example.backend.Payload.ItemRequest;
import com.example.backend.Service.CartService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;


@RestController
@RequestMapping("/cart")
//@CrossOrigin(origins = "http://localhost:3000")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/")
    public ResponseEntity<CartDto> addToCart(@RequestBody ItemRequest itemRequest, Principal principal) {
        String email = principal.getName();
        System.out.println(email);
        CartDto addItem = this.cartService.addItem(itemRequest,principal.getName());
        return new ResponseEntity<CartDto>(addItem, HttpStatus.OK);
    }
    @GetMapping("/")
    public ResponseEntity<CartDto>getAllCart(Principal principal){
        CartDto getcartAll = this.cartService.getCartAll(principal.getName());
        return new ResponseEntity<CartDto>(getcartAll,HttpStatus.ACCEPTED);
    }
}
