import React, { useEffect, useMemo, useState } from 'react'
import frige from '../../../assets/Watch.webp';
import { AiFillStar } from "react-icons/ai";
import cart from "../../../assets/svg/Group 1269.svg";
import axios from 'axios';



const PriceRangeRadioGroup = ({ handlePriceRangeChange }) => {
  return (
    <div>
       <input
        type="radio"
        id="all"
        name="priceRange"
        value=""
        onChange={() => handlePriceRangeChange("")}
      />
      <label htmlFor="all">All</label>
      
      <input
        type="radio"
        id="500-1000"
        name="priceRange"
        value="2000-3000"
        onChange={() => handlePriceRangeChange({ min: 500, max: 999 })}
      />
      <label htmlFor="500-1000">$500 - $1000</label>
      
      <input
        type="radio"
        id="1000-2000"
        name="priceRange"
        value="2000-3000"
        onChange={() => handlePriceRangeChange({ min: 1000, max: 2000 })}
      />
      <label htmlFor="1000-2000">$1000 - $2000</label>

      <input
        type="radio"
        id="2000-3000"
        name="priceRange"
        value="2000-3000"
        onChange={() => handlePriceRangeChange({ min: 2000, max: 3000 })}
      />
      <label htmlFor="2000-3000">$500 - $1000</label>
    </div>
  );
};

const Watch = ({ results }) => {
  const [brands, setBrands] = useState([]);
  const [id, setId] = useState("");
  const [colors, setColors] = useState([]);
  const [brand, setBrand] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [color, setColor] = useState("");


  //API call to get brand name and color
  const fetchBrands = async () => {
    axios
      .get("http://localhost:8080/products/subcategory/6")
      .then((response) => {
        const uniqueBrands = [
          ...new Set(response.data.map((product) => product.brand)),
        ];

        const uniqueColor = [
          ...new Set(response.data.map((product) => product.color)),
        ];
        setBrands(uniqueBrands);
        setColors(uniqueColor);
        // console.log(uniqueBrands)
      });
    };

    useEffect(() => {
      fetchBrands();
      // getId();
    }, []);


     // filtration for brand, price, and color
  const filteredProducts = useMemo(() => {
    return results.filter((product) => {
      return (
        (!brand || product.brand === brand) &&
        (!priceRange ||
          (product.price >= priceRange.min &&
            product.price <= priceRange.max)) &&
        (!color || product.color === color)
      );
    });
  }, [results, brand, priceRange, color]);

  // Function to handle brand change
  const handleBrandChange = (brandValue) => {
    setBrand(brandValue);
  };

  // Function to handle price range change
  const handlePriceRangeChange = (priceRangeValue) => {
    setPriceRange(priceRangeValue);
  };

  // Function to handle color change
  const handleColorChange = (colorValue) => {
    setColor(colorValue);
  };

  //clear all filter properties
  const resetFilters = () => {
    setBrand("");
    setPriceRange("");
    setColor("");
  };


   // Check if results is undefined or empty
   const hasFilteredProducts = results.length > 0;
  

  return (
    <>
    {/* <BrandRadioGroup handleBrandChange={handleBrandChange} /> */}
    <div>
        {brands.map((brand) => (
          <button key={brand} onClick={() => handleBrandChange(brand)}>
            {brand}
          </button>
        ))}
        <button onClick={() => handleBrandChange("")}>All</button>
      </div>

      <PriceRangeRadioGroup handlePriceRangeChange={handlePriceRangeChange} />

      <div>
        {colors.map((color) => (
          <div key={color}>
            <input
              type="radio"
              id={color}
              name="color"
              value={color}
              onChange={() => handleColorChange(color)}
            />
            <label htmlFor={color}>{color}</label>
        
          </div>
        ))}
        <button onClick={() => handleColorChange("")}>All</button>
      </div>

      <button onClick={resetFilters}>Clear Filters</button>

      {filteredProducts.length === 0 ? (
        <div>Results not found</div>
      ) : (
    <div className="Results">
      {filteredProducts.map((product) => (
        <div className="Electronic-card">
          <div className="ELectronic-card-img">
            <img src={frige} alt="img" />
          </div>
          <div className="Electronic-details">
            <div className="Electronic-card-title"><h3>{product.productName}</h3></div>
            <div className="Electronic-card-review">
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <div className="Electronic-total-review"> (123 reviews) </div>
            </div>
            <div className="Electronic-price">${product.price}
            <del>$2000</del>
          <div className="Electronic-cart">
            <img src={cart} alt="cart" />
          </div>
            </div>
          </div>
        </div>







        // <div key={product.productId}>
        //   {/* Render product details */}
        //   <h3>{product.productName}</h3>
        //   <p>{product.productDescription}</p>
        //   <p>{product.price}</p>
        //   {/* Add more details as needed */}
        // </div>
      ))}
    </div>
    )}
    {/* Show "Product not found" if there are no products after filtering */}
    {!hasFilteredProducts && <div>Product not found</div>}
    </>
  );
};

export default Watch;