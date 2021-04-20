import React from "react";
import "../../../styles/ZabawkiPage.css";
import ColorKurier from "./ColorKurier";
import OthersZabawki from "./OthersZabawki";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { SRLWrapper } from "simple-react-lightbox";

import owieczka1 from "../../../images/Products/owieczka/owieczka1.jpg";
import owieczka2 from "../../../images/Products/owieczka/owieczka2.jpg";
import owieczka3 from "../../../images/Products/owieczka/owieczka3.jpg";
import owieczka4 from "../../../images/Products/owieczka/owieczka4.jpg";
import owieczka5 from "../../../images/Products/owieczka/owieczka5.jpg";

const zabawki = () => {
  return (
    <div className="zabawkiPage">
      <div className="orderBg"> </div>
      <h1>Owieczka</h1>
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
            <img src={owieczka1} alt="owieczka1" />
            <img src={owieczka2} alt="owieczka2" />
            <img src={owieczka3} alt="owieczka3" />
            <img src={owieczka4} alt="owieczka4" />
            <img src={owieczka5} alt="owieczka5" />
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
            CENA: <strong> 50 zł</strong>
          </p>
          <p>
            ROZMIAR: <strong> 28 cm</strong>
          </p>
          <p>
            PIELĘGNACJA: <strong> Pranie - 30°</strong>
          </p>
          <p>
            MATERIAŁ:{" "}
            <strong>
              {" "}
              1-włóczka(55% bawełna, 45% poliakryl), 2-włóczka(100% poliester)
            </strong>{" "}
          </p>
        </section>
      </div>
      <ColorKurier />
      <OthersZabawki />
    </div>
  );
};

export default zabawki;
