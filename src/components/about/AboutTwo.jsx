import React from "react";
import Social from "../Social";
import Testimonials from "../testimonial/Testimonial";
import Services from "../service/Service";


const AboutTwo = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/about-me-2.jpg" alt="about" />
                  </div>
                  <Social />
                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Software Developer</p>
                  <h3>Lokesh Dudigollar</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div className="col-lg-7 ml-auto">
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>
                <div className="about-text">
                  <p>
                  I'm a versaltile Tech Developer, I love to create beautiful and functional websites. 
                  I love to create various tech products which involve web stacks, Python and Data analysis. 
                  Apart from that I love teaching and been doing that in my free time!
                  </p>
                  
                  <p>
                    I have 5+ years of experience in the Tech and Education field.
                    I'm from Bengaluru. I'm currently working at Stemvedas as the Product developer.
                    I'm also working as Freelancer for various web/app related projects[within company's permissions]. 
                    I like work with new people and gain new experiences.
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Lokesh Dudigollar</span>
                        </li>
                        <li>
                          <label>Birthday: </label>
                          <span>16th June 1993</span>
                        </li>
                        <li>
                          <label>Age: </label>
                          <span>29 years</span>
                        </li>
                        <li>
                          <label>Full time Job: </label>
                          <span>Available</span>
                        </li>
                        
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Phone: </label>
                          <span>(+91) 74065 35582</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>lokesh.dudigollar@gmail.com</span>
                        </li>
                        <li>
                          <label>Skype: </label>
                          <span>lokesh.dudigollar</span>
                        </li>
                        <li>
                          <label>Freelance: </label>
                          <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}
          <div className="title">
            <h3>What I do?</h3>
          </div>
          <Services />
          {/* End .row */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          

          <div className="title">
            <h3>Testimonials.</h3>
          </div>
          <Testimonials />
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default AboutTwo;
