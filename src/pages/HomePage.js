import React from "react";
import "../styles/HomePage.css";
import { NavLink } from "react-router-dom";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

// import pinguin from "../images/Products/pluszak.png";
// import sheep from "../images/Products/sheep.png";
// import krolik from "../images/Products/królik.png";
// import rabbit from "../images/Products/rabbit.png";

import pinguin from "../images/Products/pluszak.png";
import krolik from "../images/Products/królik.png";
import owieczka1 from "../images/Products/bezTła/owieczka1-removebg-preview.png";
import króliczka1 from "../images/Products/bezTła/króliczka1-removebg-preview.png";
import hipcio1 from "../images/Products/bezTła/hipcio1-removebg-preview.png";
import misiekBiały1 from "../images/Products/bezTła/misiekBiały3-removebg-preview.png";
import piesek1 from "../images/Products/bezTła/piesek3-removebg-preview.png";

import koc from "../images/Products/koc.png";
import kosz from "../images/Products/kosz.png";
import poduszka from "../images/Products/poduszka.png";
import pufa from "../images/Products/pufa.png";

import yarnBall from "../images/yarnBall.png";
import catYarn from "../images/catYarn.gif";
import videoBg from "../images/backgroundVideo2.mp4";

const HomePage = () => {
  return (
    <>
      <div className="home">
        <video
          src={videoBg}
          autoPlay
          muted
          loop
          playsInline
          // nocontrols
          type="video/mp4"
        ></video>
        <div className="begin">
          <h1>Dorota Szydełkuje</h1>
          <p>
            Jeśli szukasz czegoś oryginalnego i nieprzeciętnego, <br /> czegoś
            co jest milutkie i cieplutkie, <br /> wyjątkowego ubrania, zabawki
            lub ozdoby,
            <br /> jeśli kochasz włóczkę tak jak ja... <br /> zapraszam do mojej
            oferty<i className="fas fa-smile-beam"></i>
          </p>
        </div>
        <img className="yarnBall" src={yarnBall} alt="yarnBall" />
      </div>

      <div className="home2">
        <section>
          <p>
            Kupisz tutaj produkty wykonane ręcznie ze starannością i miłością do
            tego fachu, które będą Ci długo służyły.
          </p>
          <p>
            Z włóczki można uszyć tak wiele ciekawych i praktycznych rzeczy.
            Każdy znajdzie tu coś dla siebie.
          </p>
          <p>
            A może zainspiruje Cię swoim rękodziełem i sama/sam zaczniesz
            szydełkować? Polecam bo to naprawdę miłe i wciągające zajęcie!
          </p>
          <span></span>
          <span></span>
        </section>
      </div>
      <div className="home3">
        <div className="home3Right">
          <h2>Zajrzyj do zakładki</h2>
          <NavLink className="navlinkhome3" to="/buyNow">
            {" "}
            KUP GOTOWE{" "}
          </NavLink>
          <p>
            Znajdziesz tam produkty, które są już wyszydełkowane przeze mnie i
            mogę je już dzisiaj do Ciebie wysłać!
          </p>
        </div>
        <span>
          <Carousel
            infinite
            autoPlay={2500}
            animationSpeed={1000}
            slidesPerPage={2}
            // itemWidth={800}
          >
            <img src={hipcio1} alt="hipcio1" />
            <img src={krolik} alt="krolik" />
            <img src={owieczka1} alt="owieczka1" />
            <img src={piesek1} alt="piesek1" />
            <img src={króliczka1} alt="króliczka1" />
            <img src={pinguin} alt="pinguin" />
            <img src={misiekBiały1} alt="misiekBiały1" />
          </Carousel>
        </span>
      </div>
      <div className="home4">
        <h2>
          W zakładce{" "}
          <NavLink className="navlinkhome4" to="/order">
            {" "}
            "NA ZAMÓWIENIE"
          </NavLink>{" "}
          możesz wybrać konkretną rzecz z 5 kategori:{" "}
        </h2>
        <ul>
          <li>
            <img src={pinguin} alt="pinguin" />
            pluszaki
          </li>
          <li>
            <img src={koc} alt="pinguin" />
            koce
          </li>
          <li>
            <img src={pufa} alt="pinguin" />
            pufy
          </li>
          <li>
            <img src={poduszka} alt="pinguin" />
            poduszki
          </li>
          <li>
            <img src={kosz} alt="pinguin" />
            kosze
          </li>
        </ul>
        <p>
          {" "}
          spersonalizuj i wybierz kolor taki jaki Tobie odpowiada!{" "}
          <i className="far fa-smile-wink"></i>{" "}
        </p>
        <img className="catYarn" src={catYarn} alt="catYarn" />
      </div>
    </>
  );
};

export default HomePage;
