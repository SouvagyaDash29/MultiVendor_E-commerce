package com.example.backend.Model;


import javax.persistence.*;
        import java.util.HashSet;
import java.util.Set;

@Entity

public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long CartID;

    @OneToMany(mappedBy = "cart",cascade = CascadeType.ALL)
    private Set<CartItem> items = new HashSet<>();

    @OneToOne
    private User user;

    public Long getCartID() {
        return CartID;
    }

    public void setCartID(Long cartID) {
        CartID = cartID;
    }

    public Set<CartItem> getItems() {
        return items;
    }

    public void setItems(Set<CartItem> items) {
        this.items = items;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
