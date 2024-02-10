import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PromotionBanner.css';
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";

const settings = {
    dots: true,
  fade: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrow: true,
  // nextArrow: <IoIosArrowBack />,
  // prevArrow: <IoIosArrowForward />,
  autoplay: true,
  autoplaySpeed: 6000

  };
const PromotionBanner = () => {
  return (
    <>
         <div className='banner'>
       
        <Slider {...settings} className='slider'>

            <img src="../../assets/Tv_1.webp" alt="img" />

            <img src="../../assets/phone_1.webp" alt="img" />

            <img src="../../assets/phone_2.webp" alt="img" />

            <img src="../../assets/phone_4.jpg" alt="img" />

            <img src="../../assets/phone_5.jpg" alt="img" />
          
        </Slider>
      </div>
    </>
  )
}

export default PromotionBanner