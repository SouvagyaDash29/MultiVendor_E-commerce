import React from "react";
// import { AiFillStar } from "react-icons/ai";
import Cart from "../../../../../assets/svg/Group 1269.svg";

const Card = ({ img, title, star, reviews, newPrice, prevPrice }) => {
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
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
              <del>{prevPrice}</del>
              {newPrice}
            </div>
            <div className="bag">
              <img src={Cart} alt="cart-button" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
