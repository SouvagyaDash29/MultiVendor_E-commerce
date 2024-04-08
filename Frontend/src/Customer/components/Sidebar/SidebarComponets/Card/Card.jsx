import React from "react";
// import { AiFillStar } from "react-icons/ai";
import Cart from "../../../../../assets/svg/Group 1269.svg";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ id, img, title, star, reviews, newPrice, prevPrice,cart,setCart }) => {

  const addToCart =(id,newPrice,title,img) =>{
    const obj = {
      id,newPrice,title,img
    }
    setCart([...cart,obj]);
    console.log("Cart items are = ",cart);
  }
  

  return (
    <>
      <section className="customer-section-card" key={id}>
        <Link to={`/Product/${id}`}>
          <img src={img} alt={title} className="card-img" />
        </Link>
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star}
            {star}
            {star}
            {star}
            <div className="total-review">{reviews}</div>
          </section>
          <section className="card-price">
            <div className="price">
              ${newPrice}
              <del>{prevPrice}</del>
            </div>
            <div className="bag">
              <img src={Cart} alt="cart-button" onClick={()=>addToCart(id,newPrice,title,img)}/>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
