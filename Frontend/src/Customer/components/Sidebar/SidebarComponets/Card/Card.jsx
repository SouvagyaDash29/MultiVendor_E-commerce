import React from "react";
// import { AiFillStar } from "react-icons/ai";
import Cart from "../../../../../assets/svg/Group 1269.svg";
import { Link } from "react-router-dom";

const Card = ({ id, img, title, star, reviews, newPrice, prevPrice }) => {
  return (
    <>
      <section className="card" key={id}>
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
              <img src={Cart} alt="cart-button" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
