import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PromotionBanner.css';

const settings = {
    dots: true,
  fade: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,

  };
const PromotionBanner = () => {
  return (
    <div>
         <div className='banner'>
       
        <Slider {...settings} className='slider'>
          <div className='slides'>
            <img src="../../assets/Tv_1.webp" alt="img" />
          </div>
          <div className='slides'>
            <img src="../../assets/phone_1.webp" alt="img" />
          </div>
          <div className='slides'>
            <img src="../../assets/phone_2.webp" alt="img" />
          </div>
          <div className='slides'>
            <img src="../../assets/phone_4.jpg" alt="img" />
          </div>
          <div className='slides'>
            <img src="../../assets/phone_5.jpg" alt="img" />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default PromotionBanner