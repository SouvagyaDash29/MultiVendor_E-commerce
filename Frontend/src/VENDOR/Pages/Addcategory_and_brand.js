import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Pages/addcategory.css";

function AddCategory() {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch categories from the backend
    axios
      .get("http://localhost:8080/categories/getAll")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });

    // Fetch brands from the backend
    axios
      .get("http://localhost:8080/subcategories/getAll")
      .then((response) => {
        setBrands(response.data);
      })
      .catch((error) => {
        console.error("Error fetching brands:", error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!category || !subcategory) {
      setError("Please enter both category and subcategory.");
      return;
    }

    try {
      // Make POST request to backend API endpoint to add category and subcategory
      const response = await axios.post(
        "http://localhost:8080/categories/create",
        { categoryName: category }
      );
      const categoryId = response.data.categoryId;

      await axios.post("http://localhost:8080/subcategories/create", {
        subcategoryName: subcategory,
        categoryId,
      });

      // Reset form fields after successful submission
      setCategory("");
      setSubcategory("");
      setMessage("Category and subcategory added successfully.");
      setError("");
    } catch (error) {
      console.error("Error adding category and subcategory:", error);
      setMessage("");
      setError("Error adding category and subcategory. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>Add Category and Subcategory</h2>
      {message && <div className="message success">{message}</div>}
      {error && <div className="message error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="custom-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="subcategory">Subcategory:</label>
          <input
            type="text"
            id="subcategory"
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            required
            className="custom-input"
          />
        </div>
        <button type="submit" className="submit-button1">
          Add Category and Subcategory
        </button>
      </form>
    </div>
  );
}

export default AddCategory;
