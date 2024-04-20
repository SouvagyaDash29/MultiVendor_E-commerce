package com.example.backend.Payload;

import lombok.Data;


public class OrderItemDto {
    private Long OrderItemId;
    private Integer quantity;

    public Long getOrderItemId() {
        return OrderItemId;
    }

    public void setOrderItemId(Long orderItemId) {
        OrderItemId = orderItemId;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
