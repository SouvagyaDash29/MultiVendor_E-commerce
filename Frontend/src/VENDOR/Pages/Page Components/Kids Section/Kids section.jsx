import React from 'react';
import ProductCard from './ProductCard'; // Assuming you have a ProductCard component

const KidsProducts = () => {
  return (
    <div>
      <h2>Kids' Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/* Render ProductCard components for kids' products */}
        <ProductCard category="kids" />
        {/* Add more ProductCard components as needed */}
      </div>
    </div>
  );
}

export default KidsProducts;
