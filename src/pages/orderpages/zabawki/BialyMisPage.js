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
            Maskotka BIAŁY MIŚ ręcznie wykonana na szydełku. Wykorzystane
            materiały (bawełna, poliakryl, kulki silikonowe) są bezpieczne nawet
            dla najmłodyszch. MIŚ wygląda przyjaźnie przez co maluchy chętnie
            się nim bawią.
            <br /> <br /> Wykonany przeze mnie pluszak nie zniszczy się tak
            szybko jak to nie raz bywa z tymi kupionymi w markecie. Wyrób jest
            wytrzymały (nie kurczy się i nie mechaci). Można prać w pralce w
            30°.
            <br /> <br /> Zamówienie staram się wykonać najszybciej jak tylko to
            możliwe, jednak czas realizacji zależny jest od różnych
            okoliczności. Dlatego termin wykonania ustalam indywidualnie.
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
            MATERIAŁ:{" "}
            <strong>
              {" "}
              bawełna, poliakryl, <br /> kulki silikonowe(wypełnienie)
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
