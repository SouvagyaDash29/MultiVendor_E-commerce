import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Pages/addcategory.css';

function AddCategory() {
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch categories from the backend
        axios.get('http://localhost:9090/categories')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });

        // Fetch brands from the backend
        axios.get('http://localhost:9090/brands')
            .then(response => {
                setBrands(response.data);
            })
            .catch(error => {
                console.error('Error fetching brands:', error);
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate form data
        if (!category || !brand) {
            setError('Please enter a category and brand.');
            return;
        }

        try {
            // Make POST request to backend API endpoint to add category
            const response = await axios.post('http://localhost:9090/categories', { name: category, brand });
            
            // Reset form fields after successful submission
            setCategory('');
            setBrand('');
            setMessage(response.data.message);
            setError('');
        } catch (error) {
            console.error('Error adding category:', error);
            setMessage('');
            setError('Error adding category. Please try again.');
        }
    };

    return (
        <div className="container">
            <h2>Add Category</h2>
            {message && <div className="message success">{message}</div>}
            {error && <div className="message error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="category">Category:</label>
<input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} required className="custom-input" />


                </div>
                <div className="form-group">
                    <label htmlFor="brand">Brand:</label>
                    <input type="text" id="brand" value={brand} onChange={(e) => setBrand(e.target.value)} required className="custom-input" />                </div>
                <button type="submit" className="submit-button1">Add Category And Brand</button>
            </form>
        </div>
    );
}

export default AddCategory;
