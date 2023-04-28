import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function SimpleSlider() {
  const PreviewGallery = [
    
    {
      imageName: "light-theme",
      title: "Light Theme",
      routePath: "home-light-animation",
    },
   
   
    {
      imageName: "sidebar-dark",
      title: "Dark theme",
      routePath: "dark-particle-effect",
    },
   
  ];

  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {PreviewGallery.map((val, i) => (
          <div className="portfolio-filter-01 m-15px-tb" key={i}>
            <div>
              <div className="single-demo">
                <div className="title text-center">
                  <h3 className="dark-color">{val.title}</h3>
                </div>
                {/* End .title */}
                <div data-aos="fade-up" data-aos-duration="1200">
                  <Link to={val.routePath} target="_blank">
                    <div className="product-img">
                      <img
                        src={`img/preview/${val.imageName}.png`}
                        alt="intro page"
                      ></img>
                    </div>
                  </Link>
                </div>
                {/* End produt-img */}
              </div>
            </div>

            {/* End .single-demo */}
          </div>
        ))}
      </Slider>
    </>
  );
}
