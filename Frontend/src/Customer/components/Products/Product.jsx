import React from "react";
import "./Product.css";
// import { AiFillStar } from "react-icons/ai";
// import { RiShoppingCartLine } from "react-icons/ri";
// import Cart from "../../../assets/svg/Group 1269.svg"

const Product = ({result}) => {
  return (
    <>
      <section className="card-container">
        {result}        
      </section>
      
    </>
  );
};

export default Product;
