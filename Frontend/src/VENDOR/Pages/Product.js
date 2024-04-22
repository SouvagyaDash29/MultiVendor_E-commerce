import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Pages/Product.css';

const ProductsPageVendor = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => { 
        fetchProducts();
    }, []);

    // Function to fetch the list of products
    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:9090/vendor/products');
            const data = response.data;
            setProducts(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setLoading(false);
        }
    };

    // Function to handle the Add Product button click
    const handleAddProduct = () => {
        navigate('/ProductRegistration');
    };

    

    // Function to handle the deletion of a product
    const handleDeleteProduct = async (productId) => {
        try {
            // Send DELETE request to delete the product by its ID
            await axios.delete(`http://localhost:9090/vendor/product/${productId}`);

            // Remove the deleted product from the state
            setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleAddCategory=()=>{
        navigate( '/addcategory')
    }

    return (
        <div className="products-container">
            <button onClick={handleAddProduct}>Add Product</button>
            <button onClick={handleAddCategory} style={{backgroundColor:"green",position:"absolute", left:"990px"}}>Add Category</button>
           
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
                            <th> Brand</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Color</th>
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
                                <td> {product.brand}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td> {product.color}</td>
                                <td>{product.productDescription}</td>
                                <td>
                                    <img
                                        src={`http://localhost:9090/vendor/products/${product.id}/image`}
                                        alt={product.productName}
                                        className="product-image"
                                    />
                                </td>
                                <td>
                                    <button onClick={() => navigate(`/UpdateProduct/${product.id}`)}>
                                        Update
                                    </button>
                                    <button onClick={() => handleDeleteProduct(product.id)}>
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
