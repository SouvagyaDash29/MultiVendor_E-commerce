import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import items from "../../DB/data";
import "./SearchItem.css";

const SearchItem = () => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filteredData = () => {
      const data = items.filter((p) =>
        p.title.toLowerCase().includes(term.toLowerCase())
      );
      console.log(data);
      setFilterData(data);
    };
    filteredData();
  }, [term]);

  return (
    <div className="Search-section">
      {filterData.map((x, index) => {
        return (
          <div className="Search-card-section">
            <div className="Search-card-left">
              <div className="Search-card">
                <img src={x.img} alt="img" />
              </div>
              <div className="Search-card-details">
                <h3 className="Search-card-title">{x.title}</h3>
                <section className="Search-card-reviews">
                  {x.star}
                  {x.star}
                  {x.star}
                  {x.star}
                  <div className="Search-total-review">{x.reviews}</div>
                </section>
                <section className="Search-card-price">
                  <div className="Search-price">
                    ${x.newPrice}
                    <del>{x.prevPrice}</del>
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
