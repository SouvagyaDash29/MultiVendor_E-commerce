package com.example.backend.Service.Impl;

import com.example.backend.Exception.ResourceNotFoundException;
import com.example.backend.Model.Cart;
import com.example.backend.Model.CartItem;
import com.example.backend.Model.Product;
import com.example.backend.Model.User;
import com.example.backend.Payload.CartDto;
import com.example.backend.Payload.ItemRequest;
import com.example.backend.Repositary.CartRepository;
import com.example.backend.Repositary.ProductRepository;
import com.example.backend.Repositary.UserRepository;
import com.example.backend.Service.CartService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private UserRepository UserRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public CartDto addItem(ItemRequest item, String Username) {
       Long productId = item.getProductId();
       Integer quantity = item.getQuantity();
       User user = this.UserRepository.findByEmail(Username).orElseThrow(()-> new ResourceNotFoundException("User not found"));
       Product product = this.productRepository.findById(productId).orElseThrow(()-> new ResourceNotFoundException("Product not found"));
       if(!product.isStock()){
            new ResourceNotFoundException("product is out of stock");
       }

       CartItem cartItem = new CartItem();
       cartItem.setProduct(product);
       cartItem.setQuantity(quantity);
        double totalPrice = product.getPrice() * quantity;
       cartItem.setTotalPrice(totalPrice);

       Cart cart = user.getCart();
       if(cart == null){
            cart = new Cart();
           cart.setUser(user);
       }
       cartItem.setCart(cart);
       Set<CartItem> items = cart.getItems();

        AtomicReference<Boolean> flag = new AtomicReference<>(false);
       Set<CartItem> newProduct = items.stream().map((i) ->{
           if(i.getProduct().getProductId() == product.getProductId()){
               i.setQuantity(quantity);
               i.setTotalPrice(totalPrice);
               flag.set(true);
           }
           return i;
       }).collect(Collectors.toSet());

       if(flag.get()){
           items.clear();
           items.addAll(newProduct);
       }else {
           cartItem.setCart(cart);
            items.add(cartItem);
       }
      Cart saveCart = this.cartRepository.save(cart);
        return this.modelMapper.map(saveCart,CartDto.class);
    }

    public CartDto getCartAll(String email){
        //find user
        User user = this.UserRepository.findByEmail(email).orElseThrow(()->new ResourceNotFoundException("User Not Found"));
        //find cart
        Cart cart= this.cartRepository.findByUser(user).orElseThrow(()->new ResourceNotFoundException("There is no cart"));

        return this.modelMapper.map(cart,CartDto.class);

    }

}