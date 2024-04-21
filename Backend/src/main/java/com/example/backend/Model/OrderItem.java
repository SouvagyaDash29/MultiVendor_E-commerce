package com.example.backend.Model;

import javax.persistence.*;

@Entity
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderItemId;

    @OneToOne
    private Product product;

    private Double totalproductprice;
    private Integer quantity;

    @ManyToOne
    private Order order;

    public OrderItem(Long orderItemId, Product product, double totalproductprice, Order order) {
        this.orderItemId = orderItemId;
        this.product = product;
        this.totalproductprice = totalproductprice;
        this.order = order;
    }

    public OrderItem() {
        super();
    }


    public Long getOrderItemId() {
        return orderItemId;
    }

    public void setOrderItemId(Long orderItemId) {
        this.orderItemId = orderItemId;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Double getTotalproductprice() {
        return totalproductprice;
    }

    public void setTotalproductprice(Double totalproductprice) {
        this.totalproductprice = totalproductprice;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
