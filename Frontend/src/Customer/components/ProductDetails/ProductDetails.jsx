import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../../DB/data";
import frige from "../../../assets/Camera.webp";
import { AiFillStar } from "react-icons/ai";
import "./ProductDetails.css";
import Product from "../Products/Product";
import axios from "axios";

const ProductDetails = ({ results }) => {
  const { id } = useParams();

  const [product, setproduct] = useState({});

  // const [relatedProduct, setrelatedProduct] = useState([]);


  const getId = async () => {
    axios.get("http://localhost:8080/products/getAll")
      .then((response) => {
        const uniqueId = response.data;
        const test = uniqueId.filter((product)=>product.productId == id);
        // console.log(test[0]);
        setproduct(test[0]);
      })
  }
  useEffect(() => {
    // fetchBrands();
    getId();
  }, []);


  // useEffect(() => {
  //   const filteredProduct = Products.filter((product) => product.id === id);
  //   // console.log(filteredProduct)
  //   setproduct(filteredProduct[0]);

  //   // const relatedProduct = Products.filter((p) => p.company === product.company)
  //   // // console.log(relatedProduct)
  //   // setrelatedProduct(relatedProduct)
  // }, [id]);

  return (
    <>
      <div className="productDetails">
        <div className="productDetails-left">
          <img src={frige} alt="img" />
        </div>
        <div className="productDetails-right">
          <div className="product-title">{product.productName}</div>
          <div className="productDetails-price">
            <label>${product.price}</label>
            <del>$2000</del>
            <span>75% Off</span>
          </div>
          <div className="productDetails-star">
            <div className="star">
              {<AiFillStar />}
              {<AiFillStar />}
              {<AiFillStar />}
              {<AiFillStar />}
            </div>
            <span>400 Ratings</span>
            <label>123 reviews</label>
          </div>
          <div className="productDetails-size">
            <h3>Size</h3>
            <div className="size-buttons">
              <button>S</button>
              <button>M</button>
              <button>L</button>
            </div>
          </div>
          <div className="Product-Detail-buttons">
          <div className="buy-now">
            <button>BUY NOW</button>
          </div>
          <div className="Add-to-cart">
            <button>ADD TO CART</button>
          </div>
          </div>
          <h3>Description</h3>
          <span>{product.productDescription}</span>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
