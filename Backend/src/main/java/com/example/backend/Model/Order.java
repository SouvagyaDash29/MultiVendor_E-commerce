package com.example.backend.Model;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;
    private String orderStatus;
    private String paymentStatus;
    private Date orderDelivered;
    private Double orderAmt;
    private String billingAddress;
    private Date orderCreatedAt;

    @OneToOne
    private User user;

    @OneToMany(mappedBy = "order",cascade = CascadeType.ALL)
    private Set<OrderItem> orderItem = new HashSet<>();

    public Order(Long orderId, String orderStatus, String paymentStatus, Date orderDelivered, Double orderAmt, String billingAddress, Date orderCreatedAt, User user, Set<OrderItem> orderItem) {
        this.orderId = orderId;
        this.orderStatus = orderStatus;
        this.paymentStatus = paymentStatus;
        this.orderDelivered = orderDelivered;
        this.orderAmt = orderAmt;
        this.billingAddress = billingAddress;
        this.orderCreatedAt = orderCreatedAt;
        this.user = user;
        this.orderItem = orderItem;
    }

    public Order(){
        super();
    }

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

    public Date getOrderCreatedAt() {
        return orderCreatedAt;
    }

    public void setOrderCreatedAt(Date orderCreatedAt) {
        this.orderCreatedAt = orderCreatedAt;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<OrderItem> getOrderItem() {
        return orderItem;
    }

    public void setOrderItem(Set<OrderItem> orderItem) {
        this.orderItem = orderItem;
    }
}
