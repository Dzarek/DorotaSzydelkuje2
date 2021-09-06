import React from "react";

import "../styles/ContactPage.css";

import MyFrom from "../components/MyForm";

import contact1 from "../images/Contact/contact1.png";
import contact2 from "../images/Contact/contact2.png";
import contact3 from "../images/Contact/contact3.png";

const Contact = () => {
  return (
    <>
      <div className="formik">
        <div className="myForm">
          <MyFrom />
        </div>
      </div>
      <div className="contactMedia">
        <div className="social1">
          <img className="contact1" src={contact1} alt="icon" />
          <p>stepiendorota18@gmail.com</p>
        </div>
        <div className="social2">
          <img className="contact2" src={contact2} alt="icon" />
          <p>512 235 727</p>
        </div>
        <div className="social3">
          <img className="contact3" src={contact3} alt="icon" />
          <p>Dorota Janas</p>
        </div>
        <div className="social4">
          <i class="fas fa-university"></i>
          <h1>dane do przelewu: </h1>
          <p>bank: Alior Bank</p>
          <p>nr konta : 23 2490 0005 0000 4004 6143 2313</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
