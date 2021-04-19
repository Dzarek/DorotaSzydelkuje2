import React from "react";
import "../../../styles/ZabawkiPage.css";
import ColorKurier from "./ColorKurier";
import OthersZabawki from "./OthersZabawki";
import { SRLWrapper } from "simple-react-lightbox";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import misiekBiały1 from "../../../images/Products/misiekBiały/misiekBiały1.jpg";
import misiekBiały2 from "../../../images/Products/misiekBiały/misiekBiały2.jpg";
import misiekBiały3 from "../../../images/Products/misiekBiały/misiekBiały3.jpg";
import misiekBiały4 from "../../../images/Products/misiekBiały/misiekBiały4.jpg";

const zabawki = () => {
  return (
    <div className="zabawkiPage">
      <div className="orderBg"> </div>
      <h1>Biały Miś</h1>
      <SRLWrapper>
        <section className="pictureZabawki">
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
            <img src={misiekBiały1} alt="misiekBiały1" />
            <img src={misiekBiały2} alt="misiekBiały2" />
            <img src={misiekBiały3} alt="misiekBiały3" />
            <img src={misiekBiały4} alt="misiekBiały4" />
          </Carousel>
        </section>
      </SRLWrapper>
      <div className="textAndDetails">
        <section className="textZabawki">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            dolores ut animi aperiam quis quaerat eaque dignissimos molestias
            possimus, doloremque illo nobis tempora voluptas temporibus!
            Aspernatur modi nisi quibusdam ex? <br /> <br /> Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Nisi, dolor non beatae
            asperiores molestias exercitationem porro! Pariatur, neque debitis
            nihil, molestiae error quo, mollitia praesentium officiis nulla
            voluptate voluptatem expedita?
          </p>
        </section>
        <section className="detailsZabawki">
          <p>
            CENA: <strong> 80 zł</strong>
          </p>
          <p>
            ROZMIAR: <strong> 23 cm</strong>
          </p>
          <p>
            PIELĘGNACJA: <strong> Pranie - 30°</strong>
          </p>
          <p>
            MATERIAŁ: <strong> 55% bawełna, 45% poliakryl</strong>{" "}
          </p>
        </section>
      </div>
      <ColorKurier />
      <OthersZabawki />
    </div>
  );
};

export default zabawki;
