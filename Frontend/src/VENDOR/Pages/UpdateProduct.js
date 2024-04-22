import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../Pages/productupdate.css';

function ProductUpdate() {
    const { productId } = useParams();
   
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        brand: '',
        file: null,
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const productResponse = await axios.get(`http://localhost:9090/vendor/product/${productId}`);
                const productData = productResponse.data;

                setProduct({
                    name: productData.productName,
                    description: productData.productDescription,
                    price: productData.price,
                    category: productData.category,
                    brand: productData.brand,
                    file: null,
                });
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchProductData();
    }, [productId]);

    const validate = () => {
        const errorMessages = {};
        
        if (!product.name.trim()) {
            errorMessages.name = 'Product name is required';
        }
        
        if (!product.description.trim()) {
            errorMessages.description = 'Product description is required';
        }
        
        if (isNaN(product.price) || parseFloat(product.price) <= 0) {
            errorMessages.price = 'Price must be a positive number';
        }
        
        if (!product.category.trim()) {
            errorMessages.category = 'Category is required';
        }
        
        if (!product.brand.trim()) {
            errorMessages.brand = 'Brand is required';
        }

        setErrors(errorMessages);
        return Object.keys(errorMessages).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProduct((prevProduct) => ({
            ...prevProduct,
            file,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = validate();
        if (!isValid) return;

        try {
            const formData = new FormData();
            formData.append('productName', product.name);
            formData.append('productDescription', product.description);
            formData.append('price', product.price);
            formData.append('category', product.category);
            formData.append('brand', product.brand);
            if (product.file) {
                formData.append('file', product.file);
            }

            const response = await axios.put(`http://localhost:9090/vendor/product/${productId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Product updated successfully:', response.data);
            navigate('/vendor/products');
        } catch (error) {
            console.error('Error updating product data:', error);
        }
    };

    return (
        <div className="product-update-container">
            <h2 className="product-update-heading">Update Product</h2>
            <form onSubmit={handleSubmit} className="product-update-form">
                <div className="form-group">
                    <label htmlFor="name" className="labels">Product Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                        className="input-fields"
                    />
                    {errors.name && (
                        <div className="error-message">{errors.name}</div>
                    )}
                </div>
                
                <div className="form-group">
                    <label htmlFor="description" className="labels">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        required
                        className="input-fields"
                    />
                    {errors.description && (
                        <div className="error-message">{errors.description}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="price" className="labels">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                        min="0"
                        className="input-fields"
                    />
                    {errors.price && (
                        <div className="error-message">{errors.price}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="category" className="labels">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        required
                        className="input-fields"
                    />
                    {errors.category && (
                        <div className="error-message">{errors.category}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="brand" className="labels">Brand:</label>
                    <input
                        type="text"
                        id="brand"
                        name="brand"
                        value={product.brand}
                        onChange={handleChange}
                        required
                        className="input-fields"
                    />
                    {errors.brand && (
                        <div className="error-message">{errors.brand}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="file" className="labels">Product Image:</label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={handleImageChange}
                        className="input-fields"
                    />
                </div>

                <div className="button-group">
                    <button type="submit" className="submit-button">
                        Update
                    </button>
                    <button type="reset" className="reset-button">
                        Clear
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ProductUpdate;
