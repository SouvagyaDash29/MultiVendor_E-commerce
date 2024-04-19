package com.example.backend.Model;



import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long CartID;

    @OneToMany
    private Set<CartItem> items = new HashSet<>();
}
