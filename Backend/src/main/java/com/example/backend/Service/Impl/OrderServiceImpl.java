package com.example.backend.Service.Impl;

import com.example.backend.Exception.ResourceNotFoundException;
import com.example.backend.Model.Order;
import com.example.backend.Model.OrderItem;
import com.example.backend.Model.Product;
import com.example.backend.Payload.OrderDto;
import com.example.backend.Payload.OrderItemDto;
import com.example.backend.Payload.ProductDto;
import com.example.backend.Repositary.OrderRepository;
import com.example.backend.Service.OrderService;
import com.example.backend.Service.ProductService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;
@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final ModelMapper modelMapper;
    private final ProductService productService;

    public OrderServiceImpl(OrderRepository orderRepository, ModelMapper modelMapper, ProductService productService) {
        this.orderRepository = orderRepository;
        this.modelMapper = modelMapper;
        this.productService = productService;
    }

    @Override
    public OrderDto createOrder(Long productId, Integer quantity) {
        Order order = new Order();
        order.setOrderDate(new Date());
        List<OrderItem> orderItems = new ArrayList<>();

        ProductDto productDto = productService.getById(productId);
        if (productDto != null) {
            Product product = modelMapper.map(productDto, Product.class);

            OrderItem orderItem = new OrderItem();
            orderItem.setProduct(product);
            orderItem.setQuantity(quantity);
            orderItem.setOrder(order);
            orderItems.add(orderItem);
        } else {
            throw new ResourceNotFoundException("Product not found with ID: " + productId);
        }

        order.setOrderItems(orderItems);
        order = orderRepository.save(order);
        return modelMapper.map(order, OrderDto.class);
    }

    @Override
    public List<OrderDto> getAllOrder() {
        List<Order> orders = orderRepository.findAll();
        return orders.stream().map(order -> modelMapper.map(order, OrderDto.class)).collect(Collectors.toList());
    }
}
