import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../../DB/data";
import "./ProductDetails.css";
import Product from "../Products/Product";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setproduct] = useState({});

  // const [relatedProduct, setrelatedProduct] = useState([]);

  useEffect(() => {
    const filteredProduct = Products.filter((product) => product.id === id);
    // console.log(filteredProduct)
    setproduct(filteredProduct[0]);

    // const relatedProduct = Products.filter((p) => p.company === product.company)
    // // console.log(relatedProduct)
    // setrelatedProduct(relatedProduct)
  }, [id]);

  return (
    <>
      <div className="productDetails">
        <div className="productDetails-left">
          <img src={product.img} alt="img" />
        </div>
        <div className="productDetails-right">
          <div className="product-title">{product.title}</div>
          <div className="productDetails-price">
            <label>${product.newPrice}</label>
            <del>{product.prevPrice}</del>
            <span>75% Off</span>
          </div>
          <div className="productDetails-star">
            <div className="star">
              {product.star}
              {product.star}
              {product.star}
              {product.star}
            </div>
            <span>400 Ratings</span>
            <label>{product.reviews}</label>
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
          <span>It is a very nice product</span>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
