import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
import PromotionBanner from '../../components/Carousel/PromotionBanner';
import Bestselling from '../../Json/Bestselling.json';
import  Deals from '../../Json/Deals.json';


const Home = () => {
  return (
    <div className='home'>
      <PromotionBanner />
      <div className="Bestselling-section">
        <h3>Best Selling</h3>
        <div className="Bestselling-item">
          {Bestselling.map((selling, index) => {
            return (
              <div className="Bestselling-product" key={index}>
                <Link to={selling.Link} style={{ textDecoration: "none" }}>
                  <div className="product">
                    <label className="discount-tag" style={{ color: "#F5F5F5" }}>
                      {selling.discount}
                    </label>
                    <img src={selling.image} alt="img" />
                    <h4>{selling.name}</h4>
                    <div className="price-section">
                      <label>{selling.price}</label>
                      <label><del>{selling.price1}</del></label>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="Bestselling-section">
        <h3>Hot Prices</h3>
        <div className="Bestselling-item">
          {Bestselling.map((selling, index) => {
            return (
              <div className="Bestselling-product" key={index}>
                <Link to={selling.Link} style={{ textDecoration: "none" }}>
                  <div className="product">
                    <label className="discount-tag" style={{ color: "#F5F5F5" }}>
                      {selling.discount}
                    </label>
                    <img src={selling.image} alt="img" />
                    <h4>{selling.name}</h4>
                    <div className="price-section">
                      <label>{selling.price}</label>
                      <label><del>{selling.price1}</del></label>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="Deals">
        <h3>Deals of the day</h3>
        <div className="deal-section">
          {Deals.map((deal, index) => {
            return (
              <div key={index} className="d-style">
                <Link to={deal.Link}  style={{ textDecoration: "none" }}>
                  <div className="d-content">
                    <img src={deal.image} alt="img" />
                    <h5>{deal.name}</h5>
                    <h6>{deal.message}</h6>
                   </div> 
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      
    </div>
  )
}

export default Home