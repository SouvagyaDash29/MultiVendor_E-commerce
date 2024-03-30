import React, { useState, useEffect } from 'react';
import '../Pages/Product.css';
import { useNavigate } from 'react-router-dom';
const ProductsPageVendor = () => {
  const [selectedCategory, setSelectedCategory] = useState('men');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [vendorName, setVendorName] = useState('');
 
  useEffect(() => {
    // Fetch vendor name (replace 'https://your-api-url.com/vendor' with actual API endpoint)
    fetch('https://your-api-url.com/vendor')
      .then(response => response.json())
      .then(data => {
        setVendorName(data.name);
      })
      .catch(error => console.error('Error fetching vendor name:', error));

    // Fetch categories (replace 'https://your-api-url.com/categories' with actual API endpoint)
    fetch('https://your-api-url.com/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data);
      })
      .catch(error => console.error('Error fetching categories:', error));

    // Fetch products based on the selected category 
    fetch(`http://localhost:9090/products`)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, [selectedCategory]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const navigate = useNavigate();
  const handleClick = () => {
   
    navigate('/ProductRegistration');
  };
  return (
    <div className='products-container' style={{ alignItems:'center', justifyContent:'center', position:'absolute',left:'790px', top:'120px'}} >
    <button  style={{background:'blue', color:'white', position:'absolute', borderRadius:'10px', height:'40px', width:'100px',left:'390px'}} onClick={handleClick}  >Add Product</button>
      <h2 className='vendor-heading' >{vendorName ? `${vendorName}'s Products` : ' Your Products'}</h2>
      <h2> </h2>
      {loading ? (
        <p className='loader'>Loading...</p>
      ) : products.length === 0 ? (
        <p className='vendor-paragraph'>No products currently available for {vendorName}</p>
      ) : (
        <table className='product-table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {/* {product.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>
                  <div className='category-dropdown'>
                    <select value={product.category} onChange={() => handleCategoryClick(product.category)}>
                      {categories.map(category => (
                        <option key={category.id} value={category.value}>{category.label}</option>
                      ))}
                    </select>
                  </div>
                </td>
                <td>{product.price}</td>
                <td>{product.description}</td>
              </tr>
            ))} */}
            
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductsPageVendor;