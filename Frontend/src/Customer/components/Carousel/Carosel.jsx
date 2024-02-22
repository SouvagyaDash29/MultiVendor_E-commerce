import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carosel.css";
import CSimg1 from "../../../assets/home-section-carosel/Green Simple Fashion Sale Promotion Banner Landscape 1.webp";
import CSimg2 from "../../../assets/home-section-carosel/Blue and Purple Gradient Laptop Sale Banner (3) 1.webp";
// import CSimg3 from "../../../assets/Carosel1/16136135_5691822.webp";
// import CSimg4 from "../../../assets/Carosel1/Blue_and_Purple_Gradient_Laptop_Sale_Banner_7.WEBP";
// import CSimg5 from "../../../assets/home-section-carosel/Green and Black Vivid Bold Blocks Electronics and Appliances Banner.webp";
// import CSimg6 from "../../../assets/Carosel2/Blue and Purple Gradient Laptop Sale Banner (8).webp";
// import CSimg7 from "../../../assets/Carosel2/Blue and Purple Gradient Laptop Sale Banner (9).webp";
// import CSimg8 from "../../../assets/Carosel3/Blue and Purple Gradient Laptop Sale Banner (6).webp";
import CSimg9 from "../../../assets/home-section-carosel/Blue and Purple Gradient Laptop Sale Banner (5) 1.webp";
import CSimg10 from "../../../assets/home-section-carosel/Blue and Purple Gradient Laptop Sale Banner (1) 1.webp";

const settings = {
  // dots: true,
  fade: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  // nextArrow: <IoIosArrowBack />,
  // prevArrow: <IoIosArrowForward />,
  autoplay: true,
  autoplaySpeed: 4000,
};
const Carosel = () => {
  return (
    <>
      <div className="slider-contanier">
        <div className="sliders">
          
            <Slider {...settings} className="slider-left">

              <img src={CSimg1} alt="img" />
              
              <img src={CSimg2} alt="img" />
              
              {/* <img src={CSimg5} alt="img" /> */}
              
              <img src={CSimg9} alt="img" />
              
              <img src={CSimg10} alt="img" />
            </Slider>
          </div>
          
          {/* <div className="slider-right">
            <Slider {...settings} className="slider-right-up">
              <img src={CSimg5} alt="icon" />
              <img src={CSimg6} alt="icon" />
              <img src={CSimg7} alt="icon" />
            </Slider>
            <Slider {...settings} className="slider-right-down">
              <img src={CSimg8} alt="icon" />
              <img src={CSimg9} alt="icon" />
              <img src={CSimg10} alt="icon" />
            </Slider>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Carosel;
