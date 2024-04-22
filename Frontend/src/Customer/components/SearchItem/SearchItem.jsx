import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import frige from '../../../assets/Camera.webp';
import { AiFillStar } from "react-icons/ai";
// import items from "../../DB/data";
import "./SearchItem.css";
import axios from "axios";

const SearchItem = () => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/products/getAll');
        const filteredProducts = response.data.filter(product =>
          product.productName.toLowerCase().includes(term.toLowerCase())
        );
        setFilterData(filteredProducts)
        // console.log(filteredProducts); // Logs the filtered products to the console
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData(); // Call the fetchData function immediately
  
  }, [term]);




  // useEffect(() => {
  //   const filteredData = () => {
  //     const data = items.filter((p) =>
  //       p.title.toLowerCase().includes(term.toLowerCase())
  //     );
  //     console.log(data);
  //     setFilterData(data);
  //   };
  //   filteredData();
  // }, [term]);

  return (
    <div className="Search-section">
      {filterData.map((x, index) => {
        return (
          <div className="Search-card-section" key={index}>
            <div className="Search-card-left">
              <div className="Search-card">
                <img src={frige} alt="img" />
              </div>
              <div className="Search-card-details">
                <h3 className="Search-card-title">{x.productName}</h3>
                <section className="Search-card-reviews">
                  {<AiFillStar />}
                  {<AiFillStar />}
                  {<AiFillStar />}
                  {<AiFillStar />}
                  <div className="Search-total-review">(123 reviews)</div>
                </section>
                <section className="Search-card-price">
                  <div className="Search-price">
                    ${x.price}
                    <del>$3000</del>
                  </div>
                </section>
              </div>
            </div>
            <div className="Search-card-right">
              <div className="Add-to-cart">
                <button>ADD TO CART</button>
              </div>
              <div className="Buy-now">
                <button>BUY NOW</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchItem;
