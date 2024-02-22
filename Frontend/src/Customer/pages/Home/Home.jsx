import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import Carosel from "../../components/Carousel/Carosel";
import Watch from "../../../assets/Watch.webp";
import TV from "../../../assets/Tv.webp";
import Refrigerator from "../../../assets/Refrigerator.webp";
import Iphone from "../../../assets/Iphone.webp";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import cart from "../../../assets/svg/Group 1269.svg";

const arrival = [
  {
    img: Watch,
    productName: "Smart Watch",
    price: "$1000",
  },
  {
    img: TV,
    productName: "Smart TV",
    price: "$1000",
  },
  {
    img: Refrigerator,
    productName: "Smart Watch",
    price: "$1000",
  },
  {
    img: Iphone,
    productName: "Smart Watch",
    price: "$1000",
  },
];

const Home = () => {
  return (
    <div>
      <Carosel />
      <div className="categorie-section">
        <ul>
          <li>
            <NavLink to="/*">Man</NavLink>
          </li>
          <li>
            <NavLink to="/*">Women</NavLink>
          </li>
          <li>
            <NavLink to="/*">Kid</NavLink>
          </li>
          <li>
            <NavLink to="/*">Watch</NavLink>
          </li>
          <li>
            <NavLink to="/*">Shoes</NavLink>
          </li>
          <li>
            <NavLink to="/*">Mobiles</NavLink>
          </li>
        </ul>
      </div>
      <div className="New-arrival-section">
        <div className="section-heading">
          New arrivals
          <span>
            See More
            <MdOutlineKeyboardDoubleArrowRight />
          </span>
        </div>
        <div className="product-section">
          {arrival.map((product, index) => {
            return (
              <div className="products"  key={index}>
                <div className="product-contanier">
                  <img src={product.img} alt="img" />
                </div>
                <div className="product-detail-section">
                  <h3>{product.productName}</h3>
                  <h4>{product.price}</h4>

                  <span>Product Details </span>
                  <img src={cart} alt="icon" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="New-arrival-section">
        <div className="section-heading">
          Weekly Offers
          <span>
            See More
            <MdOutlineKeyboardDoubleArrowRight />
          </span>
        </div>
        <div className="product-section">
          {arrival.map((product, index) => {
            return (
              <div className="products"  key={index}>
                <div className="product-contanier">
                  <img src={product.img} alt="img" />
                </div>
                <div className="product-detail-section">
                  <h3>{product.productName}</h3>
                  <h4>{product.price}</h4>

                  <span>Product Details </span>
                  <img src={cart} alt="icon" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
