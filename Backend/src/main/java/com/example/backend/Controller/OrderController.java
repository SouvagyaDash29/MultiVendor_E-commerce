package com.example.backend.Controller;

import com.example.backend.Payload.ApiResponse;
import com.example.backend.Payload.OrderDto;
import com.example.backend.Payload.OrderRequest;
import com.example.backend.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @DeleteMapping("/{orderId}")
    public ResponseEntity<?> cancelOrderById(@PathVariable Long orderId) {
        this.orderService.CancelOrder(orderId);
        return new ResponseEntity<ApiResponse>(new ApiResponse("Order deleted",true),HttpStatus.OK);
    }
}
