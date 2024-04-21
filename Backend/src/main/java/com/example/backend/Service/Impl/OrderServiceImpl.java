package com.example.backend.Service.Impl;

import com.example.backend.Exception.ResourceNotFoundException;
import com.example.backend.Model.*;
import com.example.backend.Payload.CartDto;
import com.example.backend.Payload.OrderDto;
import com.example.backend.Payload.OrderRequest;
import com.example.backend.Repositary.CartRepository;
import com.example.backend.Repositary.OrderRepository;
import com.example.backend.Repositary.UserRepository;
import com.example.backend.Service.OrderService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Set;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private OrderRepository orderRepository;

    @Override
    public OrderDto createOrder(OrderRequest request, String Username) {
        User user = this.userRepository.findByEmail(Username).orElseThrow(()->new ResourceNotFoundException("User not found"));
        Long cartID = request.getCartID();
        String orderAddress = request.getOrderAddress();
        Cart cart = this.cartRepository.findById(cartID).orElseThrow(()->new ResourceNotFoundException("Cart not found"));
        Set<CartItem> items = cart.getItems();
        Order order = new Order();

        AtomicReference<Double> totalOrderPrice = new AtomicReference<Double>(0.0);
        Set<OrderItem> orderItems = items.stream().map((cartItem)->{
           OrderItem orderItem = new OrderItem();
           orderItem.setProduct(cartItem.getProduct());
           orderItem.setQuantity(cartItem.getQuantity());

            orderItem.setTotalproductprice(cartItem.getTotalPrice());           orderItem.setOrder(order);

            totalOrderPrice.set(totalOrderPrice.get() + orderItem.getTotalproductprice());
            Long productId = orderItem.getProduct().getProductId();
            return orderItem;
        }).collect(Collectors.toSet());

        order.setBillingAddress(orderAddress);
        order.setOrderDelivered(null);
        order.setOrderStatus("CREATED");
        order.setPaymentStatus("NOT PAID");
        order.setUser(user);
        order.setOrderItem(orderItems);
        order.setOrderAmt(totalOrderPrice.get());
        order.setOrderCreatedAt(new Date());
        Order save;
        if(order.getOrderAmt()>0){
            save = this.orderRepository.save(order);
            cart.getItems().clear();
            this.cartRepository.save(cart);
            System.out.println("Hello");
        } else {
            System.out.println(order.getOrderAmt());
            throw new ResourceNotFoundException("Order not found");
        }


        return this.modelMapper.map(save, OrderDto.class);
    }
}
