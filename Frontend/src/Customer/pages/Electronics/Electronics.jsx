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


//handle for brand filter

// const BrandRadioGroup = ({ handleBrandChange }) => {
//   return (
//     <div>
//       <input
//         type="radio"
//         id="alL"
//         name="brand"
//         value=""
//         onChange={() => handleBrandChange("")}
//       />
//       <label htmlFor="alL">All</label>
//       <br />
//       <input
//         type="radio"
//         id="logitech"
//         name="brand"
//         value="Logitech"
//         onChange={() => handleBrandChange("Logitech")}
//       />
//       <label htmlFor="logitech">Logitech</label>
//       <br />
//       <button onClick={() => handleBrandChange("Arctic Fox ")}>
//         Artic Fox
//       </button>
//     </div>
//   );
// };

//handle for price filter

const PriceRangeRadioGroup = ({ handlePriceRangeChange }) => {
  return (
    <div>
      <input
        type="radio"
        id="500-1000"
        name="priceRange"
        value="2000-3000"
        onChange={() => handlePriceRangeChange({ min: 500, max: 1000 })}
      />
      <label htmlFor="500-1000">$500 - $1000</label>
      <br />
      <input
        type="radio"
        id="all"
        name="priceRange"
        value=""
        onChange={() => handlePriceRangeChange("")}
      />
      <label htmlFor="all">All</label>
      <br />
    </div>
  );
};

//handle for color filter

// const ColorRadioGroup = ({ handleColorChange }) => {
//   return (
//     <div>
//       <input
//         type="radio"
//         id="black"
//         name="color"
//         value="black"
//         onChange={() => handleColorChange("Black")}
//       />
//       <label htmlFor="black">Black</label>
//       <br />
//       <input
//         type="radio"
//         id="All"
//         name="color"
//         value=""
//         onChange={() => handleColorChange("")}
//       />
//       <label htmlFor="All">All</label>
//       <br />
//     </div>
//   );
// };

const Electronics = ({ results }) => {
  const [brands, setBrands] = useState([]);
  const [id, setId] = useState("");
  const [colors, setColors] = useState([]);
  const [brand, setBrand] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [color, setColor] = useState("");

  
  //API call to get brand name and color
  const fetchBrands = async () => {
    axios
      .get("http://localhost:8080/products/subcategory/5")
      .then((response) => {
        const uniqueBrands = [
          ...new Set(response.data.map((product) => product.brand)),
        ];
        const uniqueColor = [
          ...new Set(response.data.map((product) => product.color)),
        ];
        setBrands(uniqueBrands);
        setColors(uniqueColor);
        // console.log(results)
      });
    };
    
  //   const getId = async () => {
  //     axios
  //     .get("http://localhost:8080/products/subcategory/5")
  //     .then((response) => {
  //       const uniqueId = response.data.map((product) => product.productId);
  //       console.log(uniqueId);
  //       setId(uniqueId);
  //     })
  // }
  // const getId = (results) => {
  //   const productIds = results.map((product) => product.productId);
  //   console.log(productIds);
  //   return productIds; // Optionally, you can return the array of product IDs
  // }
  

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

  // console.log({subCategory})

  // const [products, setProducts] = useState([]);
  // const [selectCategory, setSelectCategory] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch("http://localhost:8080/products/subcategory/5");
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch data");
  //     }
  //     const data = await response.json();
  //     setProducts(data);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   setIsLoading(false);
  // };

  // const handleChange = (event) => {
  //   setSelectCategory(event.target.value);
  // };

  // const handleClick = (event) => {
  //   setSelectCategory(event.target.value);
  // };

  // const filteredProducts = products.filter((product) => {
  //   if (!selectCategory) return true;
  //   return product.category === selectCategory;
  // });
  // if (!results || results.length === 0) {
  //   return <div>No results found</div>; // Render a message indicating no results
  // }

  // // Check if filteredProducts array is empty after applying filters
  // if (filteredProducts.length === 0) {
  //   return <div>Product not found</div>; // Render a message indicating no products found after applying filters
  // }

  // // Check if results is undefined or empty
  // // if (!filteredProducts || filteredProducts.length === 0) {
  // //   return <div>No results found</div>; // Render a message indicating no results
  // // }

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
      {/* <ColorRadioGroup handleColorChange={handleColorChange} /> */}

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
            <br />
          </div>
        ))}
        <button onClick={() => handleColorChange("")}>All</button>
      </div>

      <button onClick={resetFilters}>Clear Filters</button>

      {/* Show "No results found" if there are no products after filtering */}
      {/* {!hasFilteredProducts && <div>No results found</div>} */}

      {filteredProducts.length === 0 ? (
        <div>Results not found</div>
      ) : (
        <div className="Results">
          {filteredProducts.map((product, index) => (
            <div className="Electronic-card" key={index}>
              <Link to={`/Product/${product.productId}`} className="ELectronic-card-img">
                <img src={frige} alt="img" />
              </Link>
              <div className="Electronic-details">
                <div className="Electronic-card-title">
                  <h3>{product.productName}</h3>
                </div>
                <div className="Electronic-card-review">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <div className="Electronic-total-review"> (123 reviews) </div>
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

            //     // <div key={product.productId}>
            //     //   {/* Render product details */}
            //     //   <h3>{product.productName}</h3>
            //     //   <p>{product.productDescription}</p>
            //     //   <p>{product.price}</p>
            //     //   {/* Add more details as needed */}
            //     // </div>
          ))}
        </div>
      )}
      {/* Show "Product not found" if there are no products after filtering */}
      {!hasFilteredProducts && <div>Product not found</div>}
    </>
  );
};

export default Electronics;

{
  /* <>

{isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ProElct>
          {filteredProducts.map(({ productId, img, productName, star, reviews, price, prevPrice }) => (
            <Card
              key={productId}
              id={productId}
              // img={img}
              title={productName}
              // star={star}
              // reviews={reviews}
              newPrice={price}
              // prevPrice={prevPrice}
              // cart={cart}
              // setCart={setCart}
            />
          ))}
        </ProElct>
      )}
</> */
}
