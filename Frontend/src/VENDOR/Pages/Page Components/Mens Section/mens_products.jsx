import React from 'react';
import ProductCard from './ProductCard'; // Assuming you have a ProductCard component

const MensProducts = () => {
  return (
    <div>
      <h2>Men's Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/* Render ProductCard components for men's products */}
        <ProductCard category="men" />
        {/* Add more ProductCard components as needed */}
      </div>
    </div>
  );
}

export default MensProducts;
