import React from "react";
import "../../../styles/ZabawkiPage.css";
import ColorKurier from "./ColorKurier";
import OthersZabawki from "./OthersZabawki";
import { SRLWrapper } from "simple-react-lightbox";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import krolik1 from "../../../images/Products/krolik/krolik.png";

const zabawki = () => {
  return (
    <div className="zabawkiPage">
      <div className="orderBg"> </div>
      <h1>Zajączek</h1>
      <SRLWrapper>
        <section className="pictureZabawki">
          <Carousel
            infinite
            autoPlay={3000}
            animationSpeed={2000}
            slidesPerPage={3}
            // itemWidth={500}
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
            <img src={krolik1} alt="krolik2" />
            <img src={krolik1} alt="krolik1" />
            <img src={krolik1} alt="krolik3" />
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
            MATERIAŁ: <strong>100% poliester</strong>{" "}
          </p>
        </section>
      </div>
      <ColorKurier />
      <OthersZabawki />
    </div>
  );
};

export default zabawki;
