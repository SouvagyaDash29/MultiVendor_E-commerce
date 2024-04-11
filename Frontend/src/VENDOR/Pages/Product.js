import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Pages/Product.css';

const ProductsPageVendor = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:9090/vendor/products');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setProducts(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setLoading(false);
        }
    };

    const handleClick = () => {
        navigate('/ProductRegistration');
    };

    return (
        <div className="products-container">
            <button onClick={handleClick}>Add Product</button>
            <h2>Products</h2>
            {loading ? (
                <div className="loader">
                    <p>Loading...</p>
                </div>
            ) : products.length === 0 ? (
                <p>No products currently available</p>
            ) : (
                <table className="product-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Product Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.productName}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>{product.productDescription}</td>
                                <td>
                                    <img
                                        src={`http://localhost:9090/vendor/products/${product.id}/image`}
                                        alt={product.productName}
                                        className="product-image"
                                    />
                                </td>
                                <td>
                                    <button onClick={() => navigate(`/ProductUpdate/${product.id}`)}>
                                        Update
                                    </button>
                                    <button onClick={() => console.log('Delete product')}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ProductsPageVendor;
