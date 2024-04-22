import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import frige from "../../../assets/Camera.webp";
import { AiFillStar } from "react-icons/ai";
import cart from "../../../assets/svg/Group 1269.svg";
import "./Electronics.css";
import ProElct from "../../components/Products/ProElct";
import Card from "../../components/Sidebar/SidebarComponets/Card/Card";
import { subCategory } from "../../Api/apiService";
import { Link } from "react-router-dom";


//Price Radio Button functionality
const PriceRangeRadioGroup = ({ handlePriceRangeChange }) => {
  return (
    <>
      <h2 className="Electronic-sidebar-title">Price</h2>
      <div className="Electronic-sidebar-price-label">
        <label htmlFor="All" className="Electronic-sidebar-label-container">
          <input
            type="radio"
            id="All"
            name="priceRange"
            value=""
            onChange={() => handlePriceRangeChange({ min: 0, max: Infinity })}
          />
          <span className="Electronic-checkmark"></span>All
        </label>
        <label htmlFor="500-1000" className="Electronic-sidebar-label-container">
          <input
            type="radio"
            id="500-1000"
            name="priceRange"
            value="500-1000"
            onChange={() => handlePriceRangeChange({ min: 2000, max: 4000 })}
          />
          <span className="Electronic-checkmark"></span>$2000 - $4000
        </label>

        <label htmlFor="3000-5000" className="Electronic-sidebar-label-container">
          <input
            type="radio"
            id="3000-5000"
            name="priceRange"
            value="3000-5000"
            onChange={() => handlePriceRangeChange({ min: 4000, max: 6000 })}
          />
          <span className="Electronic-checkmark"></span>$4000 - $6000
        </label>

        <label htmlFor="4000-6000" className="Electronic-sidebar-label-container">
          <input
            type="radio"
            id="4000-6000"
            name="priceRange"
            value="4000-6000"
            onChange={() => handlePriceRangeChange({ min: 6000, max: 8000 })}
          />
          <span className="Electronic-checkmark"></span>$6000 - $8000
        </label>

        <label htmlFor="8000-10000" className="Electronic-sidebar-label-container">
          <input
            type="radio"
            id="8000-10000"
            name="priceRange"
            value="8000-10000"
            onChange={() => handlePriceRangeChange({ min: 8000, max: 10000 })}
          />
          <span className="Electronic-checkmark"></span>$8000 - $10000
        </label>
      </div>
    </>
  );
};

const Electronics = ({ results }) => {
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [brand, setBrand] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
  const [color, setColor] = useState("");
  const [subCategory, setSubCategory] = useState("");


  //get filter for Barnd, color, and Category
  const fetchBrands = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/products/byCategory/2"
      );
      const uniqueBrands = [
        ...new Set(response.data.map((product) => product.brand)),
      ];
      const uniqueColors = [
        ...new Set(response.data.map((product) => product.color.toUpperCase())),
      ];
      const uniqueSubCategories = [
        ...new Set(response.data.map((product) => product.subcategoryName)),
      ];
      setBrands(uniqueBrands);
      setColors(uniqueColors);
      setSubCategories(uniqueSubCategories);
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);


  //filter function for brand , price, color and category
  const filteredProducts = useMemo(() => {
    return (
      results?.filter((product) => {
        return (
          (!brand || product.brand === brand) &&
          product.price >= priceRange.min &&
          product.price <= priceRange.max &&
          (!color || product.color === color) &&
          (!subCategory || product.subcategoryName === subCategory)
        );
      }) ?? []
    );
  }, [results, brand, priceRange, color, subCategory]);

  const handleBrandChange = (brandValue) => {
    setBrand(brandValue);
  };

  const handlePriceRangeChange = (priceRangeValue) => {
    setPriceRange(priceRangeValue);
  };

  const handleColorChange = (colorValue) => {
    setColor(colorValue);
  };

  const handleSubCategoryChange = (subCategoryValue) => {
    setSubCategory(subCategoryValue);
  };

  const resetFilters = () => {
    setBrand("");
    setPriceRange({ min: 0, max: Infinity });
    setColor("");
    setSubCategory("");
  };

  const hasFilteredProducts = filteredProducts.length > 0;

  return (
    <>
    {/* sidebar */}

    {/* Category in sidebar */}
      <div className="Electronic-sidebar">
        <div>
          <h2 className="Electronic-sidebar-title"> Category</h2>
          <div className="Electronic-sidebar-label">
            <label htmlFor="All" className="Electronic-sidebar-label-container">
              <input
                type="radio"
                id="All"
                name="subcategory"
                value=""
                checked={!subCategory}
                onChange={() => handleSubCategoryChange("")}
              />
              <span className="Electronic-checkmark"></span>All
            </label>
            {subCategories.map((subCategoryItem) => (
              <label key={subCategoryItem} className="Electronic-sidebar-label-container">
                <input
                  type="radio"
                  id={subCategoryItem}
                  name="subcategory"
                  value={subCategoryItem}
                  onChange={() => handleSubCategoryChange(subCategoryItem)}
                />
                <span className="Electronic-checkmark"></span>
                {subCategoryItem}
              </label>
            ))}
          </div>
        </div>

{/* price in sidebar */}
        <PriceRangeRadioGroup handlePriceRangeChange={handlePriceRangeChange} />

{/* color in sidebar */}
        <div>
          <h2 className="Electronic-sidebar-title"> Color</h2>
          <div className="Electronic-sidebar-label">
            <label htmlFor="All" className="Electronic-sidebar-label-container">
              <input
                type="radio"
                id="All"
                name="color"
                value=""
                checked={!color}
                onChange={() => handleColorChange("")}
              />
              <span className="Electronic-checkmark"></span>All
            </label>
            {colors.map((colorItem) => (
              <div key={colorItem}>
                <label htmlFor={colorItem} className="Electronic-sidebar-label-container">
                  <input
                    type="radio"
                    id={colorItem}
                    name="color"
                    value={colorItem}
                    onChange={() => handleColorChange(colorItem)}
                  />
                  <span
                    className="Electronic-checkmark"
                    style={{
                      backgroundColor: colorItem,
                      border: colorItem === "WHITE" ? "1px solid black" : "",
                    }}
                  ></span>
                  {colorItem}
                </label>
              </div>
            ))}
          </div>
        </div>
{/* clear filter */}
        
        <button onClick={resetFilters}>Clear Filters</button>

      </div>

 {/* filter for brand Name    */}
      <div className="Electronic-product">
        <div className="Electronic-categories">
          Brand
          <div className="Electronic-categories-btns">
            <button
              className={`Electronic-btns ${!brand ? "active" : ""}`}
              onClick={() => handleBrandChange("")}
            >
              All
            </button>
            {brands.map((brandItem) => (
              <button
                key={brandItem}
                className={`Electronic-btns ${brand === brandItem ? "active" : ""}`}
                onClick={() => handleBrandChange(brandItem)}
                style={{
                  backgroundColor: brand === brandItem ? "lightgrey" : "",
                }}
              >
                {brandItem}
              </button>
            ))}
          </div>
        </div>
{/* filtered product item */}
        <div className="Electronic-product-item">
          {hasFilteredProducts ? (
            <div className="Results">
              {filteredProducts.map((product, index) => (
                <div className="Electronic-card" key={index}>
                  <Link
                    to={`/Product/${product.productId}`}
                    className="ELectronic-card-img"
                  >
                    <img src={frige} alt="img" />
                  </Link>
                  <div className="Electronic-details">
                    <div className="Electronic-card-title">
                      <>{product.productName}</>
                    </div>
                    <div className="Electronic-card-review">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <div className="Electronic-total-review">
                        {" "}
                        (123 reviews){" "}
                      </div>
                    </div>
                    <div className="Electronic-price">
                      ${product.price}
                      <del>$2000</del>
                      <div className="Electronic-cart">
                        <img src={cart} alt="cart" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>No results found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Electronics;
