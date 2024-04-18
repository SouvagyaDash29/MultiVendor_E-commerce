package com.example.backend.Controller;

import com.example.backend.Payload.OrderDto;
import com.example.backend.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {
    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService){
        this.orderService = orderService;
    }

    @PostMapping("/create")
    public ResponseEntity<OrderDto> createOrder(@RequestBody Map<String, Integer> orderRequest){
        Long productId = (long) orderRequest.get("productId");
        Integer quantity = orderRequest.get("quantity");
        OrderDto createdOrder = orderService.createOrder(productId, quantity);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdOrder);
    }


    @GetMapping("/getAll")
    public ResponseEntity<List<OrderDto>> getAllOrder(){
        List<OrderDto> orders = orderService.getAllOrder();
        return ResponseEntity.ok(orders);
    }
}
