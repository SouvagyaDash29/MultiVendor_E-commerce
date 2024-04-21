package com.example.backend.Payload;

import com.example.backend.Model.OrderItem;
import com.example.backend.Model.User;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

public class OrderDto {
    private Long orderId;
    private String orderStatus;
    private String paymentStatus;
    private Date orderDelivered;
    private Double orderAmt;
    private String billingAddress;
    private User user;
    private Set<OrderItemDto> orderItem = new HashSet<>();

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public Date getOrderDelivered() {
        return orderDelivered;
    }

    public void setOrderDelivered(Date orderDelivered) {
        this.orderDelivered = orderDelivered;
    }

    public Double getOrderAmt() {
        return orderAmt;
    }

    public void setOrderAmt(Double orderAmt) {
        this.orderAmt = orderAmt;
    }

    public String getBillingAddress() {
        return billingAddress;
    }

    public void setBillingAddress(String billingAddress) {
        this.billingAddress = billingAddress;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<OrderItemDto> getOrderItem() {
        return orderItem;
    }

    public void setOrderItem(Set<OrderItemDto> orderItem) {
        this.orderItem = orderItem;
    }
}
