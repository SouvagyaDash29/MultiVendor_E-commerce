import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard';

const ProductsList = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`YOUR_API_ENDPOINT/products?category=${category}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="products-list">
      <h2>{category} Products</h2>
      <div className="product-cards">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
