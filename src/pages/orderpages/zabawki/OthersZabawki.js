import React from "react";
import { NavLink } from "react-router-dom";
import "../../../styles/ZabawkiPage.css";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import { produkt } from "../../../data";
const linksZabawki = produkt.filter((item) => item.type === "pluszak");

const OthersZabawki = () => {
  return (
    <section className="othersZabawki">
      <h2>Zobacz inne moje rękodzieła</h2>
      <ul>
        <Carousel
          infinite
          autoPlay={3000}
          animationSpeed={2000}
          slidesPerPage={3}
          breakpoints={{
            900: {
              slidesPerPage: 1,
            },
          }}
          addArrowClickHandler
          stopAutoPlayOnHover
          arrowLeft={
            <IoIosArrowDropleftCircle className="arrowrRightLeftFeatures" />
          }
          arrowRight={
            <IoIosArrowDroprightCircle className="arrowrRightLeftFeatures" />
          }
        >
          {linksZabawki.map((link) => {
            const { id, name, url, imgOthers } = link;
            return (
              <li key={id}>
                <NavLink to={url}>
                  <img src={imgOthers} alt={name} />
                  <p>{name}</p>
                </NavLink>
              </li>
            );
          })}
        </Carousel>
      </ul>
    </section>
  );
};

export default OthersZabawki;
