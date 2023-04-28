import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Product Developer`,
    jobType: `Remote`,
    jobDuration: `April 2022 - Present`,
    timeDuraton: `Full Time`,
    compnayName: "Stemvedas",
    jobDescription: `My job here is to work on various tech products-app and website
    that the company is planning to launch soon. App- internally
    dubbed as Netflix of Education the company plans to create an
    Education product based on Netflix model. Website- I'm tasked
    with renovating its previous website to give it more modern look
    and make it more dynamic.`,
  },
  {
    jobPosition: `Technology head`,
    jobType: `Dubai | Office`,
    jobDuration: `Mar 2020 - Jan 2022`,
    timeDuraton: `Full Time`,
    compnayName: "Edpark",
    jobDescription: `My primary goal was to create and maintain their website apart from designing flyers 
    and templates to market company's Educational products and courses, run email and 
    social media marketing and maintain their social media pages.
    .`,
  },
  {
    jobPosition: `Web developer | Teacher`,
    jobType: `Dubai | Office`,
    jobDuration: `March 2018 - March 2020`,
    timeDuraton: `Full Time`,
    compnayName: "Premier Genie",
    jobDescription: `I was tasked with renovating company's website as well as
    creating landing pages and temporary websites for their products, courses and competitions. 
    I was also part of teaching team where I taught subjects like Python, Data analysis, web development 
    and Unity Game development.`,
  },
  {
    jobPosition: `R&D Developer`,
    jobType: `Delhi | Office`,
    jobDuration: `Jan 2017 - Dec 2017`,
    timeDuraton: `Full Time`,
    compnayName: "Robotech Pvt Ltd",
    jobDescription: ` I was working as a Research Developer to research and develop various 
    products for company's Educational services. I worked on different Robotics projects which were 
    implemneted across schools in India. I also wrote my own book on Drones-DIY.`,
  },
];

const educatonContent1 = [
  {
    passingYear: "2016-2017",
    degreeTitle: "Python Zero to Hero",
    instituteName: "Udemy",
  },
  {
    passingYear: "2015-2016",
    degreeTitle: "Intro to Python",
    instituteName: "Datacamp",
  },
  {
    passingYear: "2018-2020",
    degreeTitle: "Responsive web design",
    instituteName: "FreeCodeCamp",
  },
  {
    passingYear: "2020",
    degreeTitle: "Front End Libraries Development",
    instituteName: "FreeCodeCamp",
  },
  
];

const educatonContent2 = [
 
  {
    passingYear: "2012-2016",
    degreeTitle: "Bachelor's of Engineering ",
    instituteName: "Basaveshwar Engineering College",
  },
];
const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div
                className="resume-row"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            <h3>Education & Skills</h3>{" "}
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-4 m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="aducation-box">
              <p>Certifications</p>
                {educatonContent1.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>
                  </li>
                ))}
              </ul>

              <ul className="aducation-box">
              <p>Education</p>
                {educatonContent2.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
