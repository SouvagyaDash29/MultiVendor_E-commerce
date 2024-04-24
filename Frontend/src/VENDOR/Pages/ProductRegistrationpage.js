import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Pages/ProductRegistration.css";

function ProductRegistration() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    brand: "",
    file: null,
  });

  const [subCategories, setSubCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Fetch categories from the server when the component mounts
    axios
      .get("http://localhost:8080/products/categories")
      .then((response) => {
        setSubCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  // Fetch brands when category changes
  useEffect(() => {
    const subcategory = axios
      .get(`http://localhost:8080/subcategories/getAll`)
      .then((response) => {
        setBrands(response.data);
        console.log(subcategory);
      })
      .catch((error) => {
        console.error("Error fetching brands:", error);
      });
  }, []);

  // Helper function to validate input fields
  const validateField = (name, value) => {
    let error = "";
    switch (
      name
      // Validation cases...
    ) {
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  // Handle form field changes and perform validation
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
    validateField(name, value);
  };

  // Handle file input changes and perform validation
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProduct({
      ...product,
      file,
    });
    validateField("file", file);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    let valid = true;
    for (const key in product) {
      validateField(key, product[key]);
      if (errors[key]) {
        valid = false;
      }
    }

    // If form is not valid, do not submit
    if (!valid) {
      return;
    }

    try {
      // Create FormData object to send data and file
      const formData = new FormData();
      formData.append("name", product.name);
      formData.append("description", product.description);
      formData.append("price", product.price);
      formData.append("category", product.category);
      formData.append("brand", product.brand);
      formData.append("color", "Black");
      formData.append("file", product.file);

      // Make POST request to backend API endpoint
      const response = await axios.post(
        "http://localhost:8080/products/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Handle response from backend if needed
      console.log("Response from backend:", response.data);

      // Reset form fields and errors after successful submission
      setProduct({
        name: "",
        description: "",
        price: "",
        category: "",
        brand: "",
        file: null,
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting product data:", error); // Log the error for debugging

      // Check if the error is a network error
      if (error.response) {
        // Server responded with a non-2xx status code
        console.error("Server Error:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Network Error:", error.request);
      } else {
        // Something else happened while setting up the request
        console.error("Other Error:", error.message);
      }
    }
  };

  return (
    <div className="product-registration-container">
      <h2 className="Product-Registration-heading">Product Registration</h2>
      <form onSubmit={handleSubmit} className="product-registration-form">
        {/* Name Input */}
        <div className="form-group">
          <label htmlFor="name" className="labels">
            Product Name :
          </label>
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
            <span
              className="error-message"
              style={{
                color: "red",
                fontSize: "14px",
                position: "absolute",
                left: "400px",
                top: "90px",
              }}
            >
              {errors.name}
            </span>
          )}
        </div>

        {/* Description Input */}
        <div className="form-group">
          <label htmlFor="description" className="labels">
            Description :
          </label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
            className="input-fields"
          />
          {errors.description && (
            <span
              className="error-message"
              style={{
                color: "red",
                fontSize: "14px",
                position: "absolute",
                left: "400px",
                top: "170px",
              }}
            >
              {errors.description}
            </span>
          )}
        </div>

        {/* Price Input */}
        <div className="form-group">
          <label htmlFor="price" className="labels">
            Price :
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            className="input-fields"
          />
          {errors.price && (
            <span
              className="error-message"
              style={{
                color: "red",
                fontSize: "14px",
                position: "absolute",
                left: "400px",
                top: "250px",
              }}
            >
              {errors.price}
            </span>
          )}
        </div>

        {/* Brand Dropdown */}
        <div className="form-group">
          <label htmlFor="brand" className="labels">
            Brand :
          </label>
          {/* <select
            id="brand"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            required
            className="input-fields"
          >
          
          {/* {brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
            {brand.name}
            </option>
          ))} */}
          <select>
            <option value="">Select brand</option>
            <option value="">Adidas</option>
            <option value="">puma</option>
          </select>
        </div>

        {/* Subcategory Dropdown */}
        <div className="form-group">
          <label htmlFor="subcategory" className="labels">
            Subcategory :
          </label>
          <select
            id="subcategory"
            name="subcategory"
            value={product.category}
            onChange={handleChange}
            required
            className="input-fields"
          >
            {/* <option value="" disabled></option> */}
            {brands.map((subcategory) => (
              <option key={subcategory.subcategoryId} value={subcategory.id}>
                {subcategory.subcategoryName}
              </option>
            ))}
          </select>
          {errors.subcategory && (
            <span
              className="error-message"
              style={{
                color: "red",
                fontSize: "14px",
                position: "absolute",
                left: "400px",
                top: "410px",
              }}
            >
              {errors.subcategory}
            </span>
          )}
        </div>

        {/* File Input */}
        <div className="form-group">
          <label htmlFor="file" className="labels">
            Product Image :
          </label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleImageChange}
            required
            className="input-fields"
          />
          {errors.file && (
            <span
              className="error-message"
              style={{
                color: "red",
                fontSize: "14px",
                position: "absolute",
                left: "400px",
                top: "490px",
              }}
            >
              {errors.file}
            </span>
          )}
        </div>

        {/* Submit and Reset Buttons */}
        <div className="button-group">
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button
            type="reset"
            className="reset-button1"
            onClick={() => {
              setProduct({
                name: "",
                description: "",
                price: "",
                category: "",
                brand: "",
                file: null,
              });
              setErrors({});
            }}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductRegistration;
