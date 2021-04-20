import React from "react";
import "../../../styles/ZabawkiPage.css";
import ColorKurier from "./ColorKurier";
import OthersZabawki from "./OthersZabawki";
import { SRLWrapper } from "simple-react-lightbox";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import piesek1 from "../../../images/Products/piesek/piesek1.jpg";
import piesek2 from "../../../images/Products/piesek/piesek2.jpg";
import piesek3 from "../../../images/Products/piesek/piesek3.jpg";
import piesek4 from "../../../images/Products/piesek/piesek4.jpg";
import piesek5 from "../../../images/Products/piesek/piesek5.jpg";
import piesek6 from "../../../images/Products/piesek/piesek6.jpg";

const zabawki = () => {
  return (
    <div className="zabawkiPage">
      <div className="orderBg"> </div>
      <h1>Piesek</h1>
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
            <img src={piesek1} alt="piesek1" />
            <img src={piesek2} alt="piesek2" />
            <img src={piesek3} alt="piesek3" />
            <img src={piesek4} alt="piesek4" />
            <img src={piesek5} alt="piesek5" />
            <img src={piesek6} alt="piesek6" />
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
            CENA: <strong> 150 zł</strong>
          </p>
          <p>
            ROZMIAR: <strong> 53 cm</strong>
          </p>
          <p>
            PIELĘGNACJA: <strong> Pranie - 30°</strong>
          </p>
          <p>
            MATERIAŁ: <strong> 100% poliester</strong>{" "}
          </p>
        </section>
      </div>
      <ColorKurier />
      <OthersZabawki />
    </div>
  );
};

export default zabawki;
