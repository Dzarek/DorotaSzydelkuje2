import React from "react";
import "../styles/App.css";
import logoJarek from "../images/logoJarek.png";

const Footer = () => {
  return (
    <div className="footerWrap">
      <span className="logoJarek">
        <p>projekt i wykonanie</p>
        <a href="https://www.jarekjanas.com">
          <img src={logoJarek} alt="logo Jarosław Janas" />
        </a>{" "}
      </span>
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
