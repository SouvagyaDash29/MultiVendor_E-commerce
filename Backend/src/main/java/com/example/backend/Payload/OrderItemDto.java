package com.example.backend.Payload;

import com.example.backend.Model.Order;
import com.example.backend.Model.Product;
import com.fasterxml.jackson.annotation.JsonIgnore;


public class OrderItemDto {
    private Long orderItemId;
    private ProductDto product;
    private Double totalproductprice;
    private Integer quantity;
    @JsonIgnore
    private OrderDto order;

    public Long getOrderItemId() {
        return orderItemId;
    }

    public void setOrderItemId(Long orderItemId) {
        this.orderItemId = orderItemId;
    }

    public ProductDto getProduct() {
        return product;
    }

    public void setProduct(ProductDto product) {
        this.product = product;
    }

    public Double getTotalproductprice() {
        return totalproductprice;
    }

    public void setTotalproductprice(Double totalproductprice) {
        this.totalproductprice = totalproductprice;
    }

    public OrderDto getOrder() {
        return order;
    }

    public void setOrder(OrderDto order) {
        this.order = order;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
