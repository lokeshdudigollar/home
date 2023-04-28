import React from "react";

const ServiceContent = [
  {
    icon: "icon-desktop",
    title: "Web Design/Development",
    descriptions: `I'm a web designer and a product developer. 
                    I create websites and apps for product owners to bring their idea into reality. 
                    We will partner one-on-one to bring your dream website/app to life, 
                    so you can finally cross “build dream website/app” off your to-do list once 
                    and avoid any tech headaches!`,
  },
  {
    icon: "icon-target",
    title: "Freelancing",
    descriptions: `I offer freelancing services in Web and App related projects, 
    Search Engine Optimization(SEO), Logo/pamphlet designs.`,
  },
  {
    icon: "icon-mobile",
    title: "Teaching",
    descriptions: `I'm a highly passionate freelance Technology teacher who specializes 
    in teaching dozens of techology(STEM) subjects that are need of the hour for all types of students.
    My subjects include- -Python, Javascript, C#, Game/App development,Web development, Computer Science of all curriculums,
    3D designing, Artificial Intelligence and Machine Learning, Robotics,Virtual Reality.`,
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div className="col-md-6 col-lg-4 my-3" key={i}>
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
