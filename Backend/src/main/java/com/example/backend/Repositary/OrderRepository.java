package com.example.backend.Repositary;

import com.example.backend.Model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Long> {
//    Optional<Order> findById(long id);
}
