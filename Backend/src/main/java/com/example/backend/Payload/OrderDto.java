package com.example.backend.Payload;



import lombok.Data;

import java.util.List;

@Data
public class OrderDto {
    private Long OrderId;
    private List<OrderItemDto> items;

    public Long getOrderId() {
        return OrderId;
    }

    public void setOrderId(Long orderId) {
        OrderId = orderId;
    }

    public List<OrderItemDto> getItems() {
        return items;
    }

    public void setItems(List<OrderItemDto> items) {
        this.items = items;
    }
}
