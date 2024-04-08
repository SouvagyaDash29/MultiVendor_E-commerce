import React, { useState, useEffect } from "react";
import './Cart.css';

const Cart = ({ cart, setCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const handleIncrement = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity++;
    setCart(updatedCart);
  };

  const handleDecrement = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity--;
      setCart(updatedCart);
    }
  };

  useEffect(() => {
    calculateTotalPrice(cart);
  }, [cart]);

  const calculateTotalPrice = (cart) => {
    let totalPrice = 0;
    if (Array.isArray(cart)) { // Check if cart is an array
      cart.forEach((item) => {
        totalPrice += item.newPrice * item.quantity;
      });
    }
    setTotalPrice(totalPrice);
  };

  return (
    <article>
      {cart.map(({ id, img, newPrice, title, quantity }, index) => (
        <div className="cart_box" key={index}>
          <div className="cart_img">
            <img src={img} alt="" />
            <p>{title}</p>
          </div>
          <div>
            <span className="newPrice">{newPrice}</span>
            <div>
              <button onClick={() => handleDecrement(index)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => handleIncrement(index)}>+</button>
            </div>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        </div>
      ))}
      <div>
        <h3>Total Price: {totalPrice}</h3>
      </div>
    </article>
  );
};

export default Cart;
