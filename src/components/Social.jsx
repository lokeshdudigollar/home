import React from "react";
import { FaLinkedinIn, FaWhatsapp, FaSkype, FaGithub } from "react-icons/fa";

const SocialShare = [
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/d-lokesh18/" },
  {
    Social: <FaWhatsapp />,
    link: "https://api.whatsapp.com/send?phone=917406535582"
  },
  { Social: <FaSkype />, link: "https://join.skype.com/invite/b0DUnSVXkNA7" },
  { Social: <FaGithub />, link: "https://github.com/lokeshdudigollar" }
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
