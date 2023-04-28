import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
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
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      imageName: "team-2",
      desc: ` My old website looked like a mess and I barely had time to look after it. 
      I was looking for professional digital agency that could revamp my existing website and 
      manage it accordingly. A friend strongly recommended codeplab to me and their online reviews 
      looked promising so I went ahead with them. It took them less than 15 days to deliver and 
      the new version looks and works so much better. 
      My website looks great visually and the loading speed has also increased. 
      Their customer support is great. I don’t even have to follow up, 
      they take care of everything by themselves and keep me informed. Highly recommended.`,
      reviewerName: "Farhaad",
      designation: "CEO at Insaaf Oil",
      delayAnimation: "",
    },
    {
      imageName: "team-1",
      desc: `  I used their service for designing our company logo, stationary items and few brochures. 
      Personally this is the most professional team I have ever worked with.
      What I like about them? They have a proper "thought process" which really made things easy 
      for both of us to achieve our goal. Communication was platinum level.
      I also wanted them to take over the web design but, the final decision was made by the company owners
      to allocate the job to some other agency they were familiar with. I love the logo they created for us.`,
      reviewerName: "Matt Brandon",
      designation: "Freelancer",
      delayAnimation: "200",
    },
    {
      imageName: "team-4",
      desc: ` Since having our new website built by lokesh dudigollar,
              we have seen a 200% increase in the number of online contact forms being filled out 
              and returned to us. Lokesh and his team worked closely with us to provide 
              a site that met all of the criteria that we were looking for. 
              The end result was a website that is attractive, organized and effective. 
              Thanks to Mr.Lokesh  for all of your hard work and support!`,
      reviewerName: "Monish Shankar",
      designation: "Engineer",
      delayAnimation: "400",
    },
  ];

  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="testimonial-01 media">
              <div className="avatar">
                <img
                  src={`img/testimonial/${val.imageName}.jpg`}
                  alt="review comments"
                ></img>
              </div>
              <div className="media-body">
                <p>{val.desc}</p>
                <h6>{val.reviewerName}</h6>
                <span>{val.designation}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
