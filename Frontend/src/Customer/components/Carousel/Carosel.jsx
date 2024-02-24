import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carosel.css";
import sliderImg1 from '../../../assets/home-section-carosel/Tv_1.webp';
import sliderImg2 from '../../../assets/home-section-carosel/Home1.webp';
import sliderImg3 from '../../../assets/home-section-carosel/phone_5.jpg';
import sliderImg4 from '../../../assets/home-section-carosel/phone_4.jpg';
import sliderImg5 from '../../../assets/home-section-carosel/phone_1.webp';

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
};
const Carosel = () => {
  return (
    <>
      <div className="slider-contanier">
        <div className="sliders">
          
            <Slider {...settings} className="slider-left">

              <img src={sliderImg1} alt="img" />
              
              <img src={sliderImg2} alt="img" />
              
              <img src={sliderImg3} alt="img" />
              
              <img src={sliderImg4} alt="img" />
              
              <img src={sliderImg5} alt="img" />
            </Slider>
          </div>
          
      </div>
    </>
  );
};

export default Carosel;
