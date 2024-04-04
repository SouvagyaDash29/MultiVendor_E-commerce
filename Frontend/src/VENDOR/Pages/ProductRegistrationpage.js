import React, { useState } from "react";
import axios from "axios";
import "../Pages/ProductRegistration.css";

function ProductRegistration() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    file: null, // Update state for image file
  });
  const [base64Data, setBase64Data] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    let file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const binaryString = reader.result;
        setBase64Data(btoa(binaryString));
      };
      reader.readAsBinaryString(file);
      
      // setProduct({
      //   ...product,
      //   file: file, // Update image state with selected file
      // });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create FormData object to send file along with other data
      const formData = new FormData();
      formData.append("name", product.name);
      formData.append("description", product.description);
      formData.append("price", product.price);
      formData.append("category", product.category);
      formData.append("brand", product.brand); // Add brand
      formData.append("color", "Black"); // Add color
      // formData.append("file", product.file);
      formData.append("file", base64Data); // Add base64 data
      
      // Make POST request to backend API endpoint
      const response = await axios.post(
        "http://localhost:9090/vendor/product",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type for FormData
          },
        }
      );

      // Handle response from backend if needed
      console.log("Response from backend:", response.data);

      // Reset form fields after successful submission
      setProduct({
        name: "",
        description: "",
        price: "",
        category: "",
        file: null,
      });
      setBase64Data(null); // Reset base64 data
    } catch (error) {
      console.error("Error submitting product data:", error);
    }
  };

  return (
    <div className="product-registration-container">
      <h2 className="Product-Registration-heading">Product Registration</h2>
      <form onSubmit={handleSubmit} className="product-registration-form">
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
        </div>
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
        </div>
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
        </div>
        <div className="form-group">
          <label htmlFor="brand" className="labels">
            Brand :
          </label>
          <select
            id="brand"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            required
            className="input-fields"
          >
            <option value="">Select Brand</option>
            <option value="Brand1">Oppo</option>
            <option value="Brand2">Samsung</option>
            <option value="Brand3">Brand3</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="category" className="labels">
            Category :
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
            className="input-fields"
          />
        </div>
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
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
        <button type="reset" className="reset-button">
          Clear
        </button>
      </form>
    </div>
  );
}

export default ProductRegistration;
