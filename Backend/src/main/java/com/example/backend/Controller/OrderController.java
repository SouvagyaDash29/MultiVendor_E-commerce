package com.example.backend.Controller;

import com.example.backend.Payload.OrderDto;
import com.example.backend.Payload.OrderRequest;
import com.example.backend.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/")
    public ResponseEntity<OrderDto> createOrder(@RequestBody OrderRequest orderRequest, Principal principal) {
        String Username = principal.getName();
       OrderDto order = this.orderService.createOrder(orderRequest,Username);
        return new ResponseEntity<OrderDto>(order, HttpStatus.CREATED);
    }
}
