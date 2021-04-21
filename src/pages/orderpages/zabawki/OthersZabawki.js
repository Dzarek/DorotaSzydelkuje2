import React from "react";
import { NavLink } from "react-router-dom";
import "../../../styles/ZabawkiPage.css";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import pinguin from "../../../images/Products/pluszak.png";
import owieczka1 from "../../../images/Products/owieczka/owieczka1.jpg";
import krolik from "../../../images/Products/królik.png";
import króliczka1 from "../../../images/Products/króliczka/króliczka1.jpg";
import hipcio1 from "../../../images/Products/hipcio/hipcio1.jpg";
import misiekBiały1 from "../../../images/Products/misiekBiały/misiekBiały1.jpg";
import piesek1 from "../../../images/Products/piesek/piesek1.jpg";
import osmiorniczka1 from "../../../images/Products/ośmiorniczka/osmiorniczka1.jpg";
import krolik1 from "../../../images/Products/królik/krolik1.jpg";
import szaryKocyk1 from "../../../images/Products/szaryKocyk/kocyk1.jpg";
import pufa1 from "../../../images/Products/pufa/pufa1.jpg";

const OthersZabawki = () => {
  return (
    <section className="othersZabawki">
      <h2>Zobacz inne moje rękodzieła</h2>
      <ul>
        <Carousel
          infinite
          autoPlay={3000}
          animationSpeed={2000}
          slidesPerPage={4}
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
          <li>
            <NavLink to="/pingwin">
              <img src={pinguin} alt="krolik" />
              <p>PINGWIN</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/owieczka">
              <img src={owieczka1} alt="owieczka" />
              <p>OWIECZKA</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/zajaczek">
              <img src={krolik} alt="krolik" />
              <p>ZAJĄCZEK</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/kroliczka">
              <img src={króliczka1} alt="zajaczek" />
              <p>KRÓLICZKA</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/hipcio">
              <img src={hipcio1} alt="hipcio1" />
              <p>HIPCIO</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/bialyMis">
              <img src={misiekBiały1} alt="misiekBiały1" />
              <p>BIAŁY MIŚ</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/piesek">
              <img src={piesek1} alt="piesek1" />
              <p>PIESEK</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/osmiorniczka">
              <img src={osmiorniczka1} alt="osmiorniczka1" />
              <p>OŚMIORNICZKA</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/krolik">
              <img src={krolik1} alt="krolik1" />
              <p>KRÓLIK</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/szaryKocyk">
              <img src={szaryKocyk1} alt="szaryKocyk1" />
              <p>SZARY KOCYK</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/pufa">
              <img src={pufa1} alt="pufa1" />
              <p>PUFA</p>
            </NavLink>
          </li>
        </Carousel>
      </ul>
    </section>
  );
};

export default OthersZabawki;
