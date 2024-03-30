import React from 'react';
import '../Page Components/ProductCard.css'
const ProductCard= ({ product }) => {
  const { name, price, category } = product;

  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Category: {category}</p>
    </div>
  );
}

export default ProductCard;
