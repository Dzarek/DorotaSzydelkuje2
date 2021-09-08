import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/ZabawkiPage.css";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { produkt } from "../../../data";

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
          {produkt.map((link) => {
            const { id, name, slug, imgOthers } = link;
            return (
              <li
                onClick={() => {
                  window.location.reload();
                }}
              >
                <Link key={id} to={`/order/${slug}`}>
                  <img src={imgOthers} alt={name} />
                  <p>{name}</p>
                </Link>
              </li>
            );
          })}
        </Carousel>
      </ul>
    </section>
  );
};

export default OthersZabawki;
