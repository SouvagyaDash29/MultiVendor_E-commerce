package com.example.backend.Repositary;

import com.example.backend.Model.Cart;
import com.example.backend.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart, Long> {
    public Optional<Cart> findByUser(User user);
}
