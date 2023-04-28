import React from "react";
import TextLoop from "react-text-loop";

const conctInfo = {
  phone: "+91 74065 35582",
  email: "lokesh.dudigollar@gmail.com"
};

const sliderContent = {
  name: "Lokesh Dudigollar",
  designation: "Software Developer",
  description: `I design and develop services for customers of all sizes,
  specializing in creating stylish, modern websites, web/app
  services and online stores.`,
  btnText: " Donwload CV"
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="tel:+91 74065 35582">{conctInfo.phone}</a>
            <a href="mailto:mail%20to:lokesh.dudigollar@gmail.com">
              {conctInfo.email}
            </a>
          </div>
          <div className="hb-lang"></div>
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Hello, My name is
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <TextLoop>
                    <p className="loop-text lead">Software Developer</p>
                    <p className="loop-text lead"> Full-stack Developer</p>
                    <p className="loop-text lead"> Website designer</p>
                    <p className="loop-text lead"> Technology Teacher</p>
                  </TextLoop>
                </div>

                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  {sliderContent.description}
                </p>
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <a
                    className="px-btn px-btn-white"
                    href="img/resume.png"
                    download
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url( "img/slider/home-banner.png")`
            //backgroundImage: `url( "img/slider/home-banner.png")`
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
