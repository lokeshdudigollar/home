import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

const tabList = ["All", "IT", "Education", "App", "E-commerce"];
const tabListContent = [
  {
    porftoliItems: [
      {
        img: "/img/portfolio/m-portfolio-1.jpg",
        width: 400,
        height: 550,
        title: "Photon Energy",
        subTitle: "Solar provider",
        alterText: "Photon Energy",
        portfolioLink: "https://photon-energy.web.app/",
        delayAnimation: ""
      },
      {
        img: "/img/portfolio/m-portfolio-2.jpg",
        width: 400,
        height: 400,
        title: "Rajalakshmi Buildcon",
        subTitle: "Construction and Painting",
        alterText: "Rajalakshmi Buildcon",
        portfolioLink: "rajalakshmi-buildcon.com",
        delayAnimation: "100"
      },
      {
        img: "/img/portfolio/m-portfolio-3.jpg",
        width: 400,
        height: 700,
        title: "Revive",
        subTitle: "Resell e-commerce",
        alterText: "Revive",
        portfolioLink: "revivemarketplace.app",
        delayAnimation: "200"
      },
      {
        img: "/img/portfolio/m-portfolio-4.jpg",
        width: 400,
        height: 400,
        title: "Heartmade events",
        subTitle: "Event Management",
        alterText: "Heartmade events",
        portfolioLink: "heartmade.ae",
        delayAnimation: "0"
      },
      {
        img: "/img/portfolio/m-portfolio-5.jpg",
        width: 400,
        height: 700,
        title: "Warshatek",
        subTitle: "Auto servicing",
        alterText: "Warshatek",
        portfolioLink: "https://www.warshatek.com/",
        delayAnimation: "100"
      },
      {
        img: "/img/portfolio/m-portfolio-6.jpg",
        width: 400,
        height: 500,
        title: "Snapperrock",
        subTitle: "E-commerce",
        alterText: "Snapperrock",
        portfolioLink: "https://snapperrock.com/",
        delayAnimation: "200"
      },
      {
        img: "/img/portfolio/m-portfolio-7.jpg",
        width: 400,
        height: 700,
        title: "Lorem Ipsum",
        subTitle: "Gipsum Lorem",
        alterText: "Lorem Ipsum",
        portfolioLink: "#",
        delayAnimation: "0"
      },
      {
        img: "/img/portfolio/m-portfolio-8.jpg",
        width: 400,
        height: 550,
        title: "Neutech Systems",
        subTitle: "IT",
        alterText: "Neutech Systems",
        portfolioLink: "https://www.neutechsys.com/",
        delayAnimation: "100"
      },
      {
        img: "/img/portfolio/m-portfolio-9.jpg",
        width: 400,
        height: 400,
        title: "Edpark",
        subTitle: "Education",
        alterText: "Edpark",
        portfolioLink: "edparktech.com",
        delayAnimation: "200"
      }
    ]
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/m-portfolio-6.jpg",
        width: 400,
        height: 550,
        title: "Web Application",
        subTitle: "Behance Shot",
        alterText: "Web Application",
        delayAnimation: "",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template"
      },
      {
        img: "/img/portfolio/m-portfolio-3.jpg",
        width: 400,
        height: 700,
        title: "Visual Design",
        subTitle: "Themeforest Marke",
        alterText: "Business Mockup",
        delayAnimation: "100",
        portfolioLink:
          "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template"
      },
      {
        img: "/img/portfolio/m-portfolio-8.jpg",
        width: 400,
        height: 550,
        title: "Chatting App Design",
        subTitle: "Codecanyon Market",
        alterText: "Chatting App Design",
        delayAnimation: "200",
        portfolioLink:
          "https://www.behance.net/gallery/128278341/Imroz-Vue-JS-Creative-Agency-Portfolio-Template"
      },
      {
        img: "/img/portfolio/m-portfolio-4.jpg",
        width: 400,
        height: 400,
        title: "Business Card",
        subTitle: "Graphicriver Market",
        alterText: "E-Cosmetics",
        delayAnimation: "300",
        portfolioLink:
          "https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template"
      }
    ]
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/m-portfolio-2.jpg",
        width: 400,
        height: 400,
        title: "E-Learning App",
        subTitle: "Nuna ios App",
        alterText: "Illustration",
        delayAnimation: "",
        portfolioLink:
          "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template"
      },

      {
        img: "/img/portfolio/m-portfolio-5.jpg",
        width: 400,
        height: 700,
        title: "Chatting Application",
        subTitle: "Codecanyon Market",
        alterText: "Bottle Illustration",
        delayAnimation: "100",
        portfolioLink:
          "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL"
      },
      {
        img: "/img/portfolio/m-portfolio-6.jpg",
        width: 400,
        height: 550,
        title: "Web Application",
        subTitle: "Behance Shot",
        alterText: "Web Application",
        delayAnimation: "200",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template"
      }
    ]
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/m-portfolio-1.jpg",
        width: 400,
        height: 550,
        title: "Bottle Illustration",
        subTitle: "Figma Shoot",
        alterText: "Bottle Illustration",
        delayAnimation: "",
        portfolioLink:
          "https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template"
      },
      {
        img: "/img/portfolio/m-portfolio-7.jpg",
        width: 400,
        height: 700,
        title: "Business Card",
        subTitle: "Graphicriver Market",
        alterText: "Business Card",
        delayAnimation: "100",
        portfolioLink:
          "https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template"
      },
      {
        img: "/img/portfolio/m-portfolio-9.jpg",
        width: 400,
        height: 400,
        title: "Web Motion",
        subTitle: "Behance Shot",
        alterText: "Web Motion",
        delayAnimation: "200",
        portfolioLink: "https://www.facebook.com/ibthemes"
      }
    ]
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/m-portfolio-2.jpg",
        width: 400,
        height: 400,
        title: "E-Learning App",
        subTitle: "Nuna ios App",
        alterText: "Illustration",
        delayAnimation: "",
        portfolioLink:
          "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template"
      },
      {
        img: "/img/portfolio/m-portfolio-3.jpg",
        width: 400,
        height: 700,
        title: "Visual Design",
        subTitle: "Themeforest Marke",
        alterText: "Business Mockup",
        delayAnimation: "100",
        portfolioLink:
          "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template"
      },

      {
        img: "/img/portfolio/m-portfolio-5.jpg",
        width: 400,
        height: 700,
        title: "Chatting Application",
        subTitle: "Codecanyon Market",
        alterText: "Bottle Illustration",
        delayAnimation: "200",
        portfolioLink:
          "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL"
      },
      {
        img: "/img/portfolio/m-portfolio-6.jpg",
        width: 400,
        height: 550,
        title: "Web Application",
        subTitle: "Behance Shot",
        alterText: "Web Application",
        delayAnimation: "300",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template"
      }
    ]
  }
];

const PortfolioAnimation = () => {
  return (
    <div className="portfolio-filter-01">
      <Tabs>
        <TabList className="filter d-flex flex-wrap justify-content-start">
          {tabList.map((val, i) => (
            <Tab key={i}>{val}</Tab>
          ))}
        </TabList>
        {/* End tablist */}
        <Gallery>
          {tabListContent.map((tabContent, i) => (
            <TabPanel key={i}>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {tabContent.porftoliItems.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={val.width}
                          height={val.height}
                        >
                          {({ ref, open }) => (
                            <div className="gallery-link">
                              <img
                                src={val.img}
                                alt="Childhood"
                                role="button"
                                ref={ref}
                                onClick={open}
                              />
                            </div>
                          )}
                        </Item>

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>
          ))}
        </Gallery>
        {/* End tabpanel */}
      </Tabs>
    </div>
  );
};

export default PortfolioAnimation;
