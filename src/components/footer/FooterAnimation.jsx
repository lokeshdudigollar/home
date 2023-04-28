import React from "react";
import {
  
  FaLinkedinIn,
  FaWhatsapp,
  FaSkype,

} from "react-icons/fa";

const SocialShare = [
 
  { Social: <FaLinkedinIn />, link: "www.linkedin.com/in/d-lokesh18" },
  { Social: <FaWhatsapp />, link: "https://api.whatsapp.com/send?phone=917406535582" },
  { Social: <FaSkype />, link: "https://join.skype.com/invite/b0DUnSVXkNA7" },
  
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-end">
          <p>
            © {new Date().getFullYear()} copyright{" "}
           
            all right reserved
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;
