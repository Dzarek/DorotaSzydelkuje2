import React from "react";
import "../styles/App.css";

const Footer = () => {
  return (
    <div className="footerWrap">
      <span className="footerOne">
        &copy; {new Date().getFullYear()} Dorota Janas
      </span>
      <p className="footerTwo">Co mogę dla Ciebie wyszydełkować?</p>
      <span className="footerThree">
        512 235 727 <br /> stepiendorota18@gmail.com
      </span>
    </div>
  );
};

export default Footer;
