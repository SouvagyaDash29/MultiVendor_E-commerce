import React from 'react';
import '../Page Components/products sidebar.css'
const Productsidebar = () => {
  return (
    <>
      <div className='product-sidebar'>
      <div className='color-section' >
        <h2 align='center'>Color</h2>
        <input type="radio" id="color-red" name="color" value="red"  />
        <label htmlFor="color-red" className='color-options'>Red</label>
        <br />
        <input type="radio" id="color-blue" name="color" value="blue" />
        <label htmlFor="color-blue" className='color-options'>Blue</label>
        <br />
        {/* Add more color options as needed */}
      </div>

      <div  className='Price-section'>
        <h2 align='center'>Price</h2>
        <input type="checkbox" id="price-low" name="price" value="low"  />
        <label htmlFor="price-low" className='price-options'>Low ($)</label>
        <br />
        <input type="checkbox" id="price-medium" name="price" value="medium" />
        <label htmlFor="price-medium" className='price-options'>Medium ($$)</label>
        <br />
        <input type="checkbox" id="price-high" name="price" value="high" />
        <label htmlFor="price-high" className='price-options'>High ($$$)</label>
        {/* Add more price range options as needed */}
      </div>
      </div>
    </>
  );
}

export default Productsidebar;
