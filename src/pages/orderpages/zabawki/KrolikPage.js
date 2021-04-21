import React from "react";
import "../../../styles/ZabawkiPage.css";
import ColorKurier from "./ColorKurier";
import OthersZabawki from "./OthersZabawki";
import { SRLWrapper } from "simple-react-lightbox";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import krolik1 from "../../../images/Products/królik/krolik1.jpg";
import krolik2 from "../../../images/Products/królik/krolik2.jpg";
import krolik3 from "../../../images/Products/królik/krolik3.jpg";
import krolik4 from "../../../images/Products/królik/krolik4.jpg";
import krolik5 from "../../../images/Products/królik/krolik5.jpg";
import krolik6 from "../../../images/Products/królik/krolik6.jpg";
import krolik7 from "../../../images/Products/królik/krolik&kroliczka1.jpg";
import krolik8 from "../../../images/Products/królik/krolik&kroliczka2.jpg";
import krolik9 from "../../../images/Products/królik/krolik&kroliczka3.jpg";
import krolik10 from "../../../images/Products/królik/krolik&kroliczka4.jpg";

const zabawki = () => {
  return (
    <div className="zabawkiPage">
      <div className="orderBg"> </div>
      <h1>Królik</h1>
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
            <img src={krolik1} alt="krolik1" />
            <img src={krolik2} alt="krolik2" />
            <img src={krolik3} alt="krolik3" />
            <img src={krolik4} alt="krolik4" />
            <img src={krolik5} alt="krolik5" />
            <img src={krolik6} alt="krolik6" />
            <img src={krolik7} alt="krolik7" />
            <img src={krolik8} alt="krolik8" />
            <img src={krolik9} alt="krolik9" />
            <img src={krolik10} alt="krolik10" />
          </Carousel>
        </section>
      </SRLWrapper>
      <div className="textAndDetails">
        <section className="textZabawki">
          <p>
            Maskotka KRÓLIK ręcznie wykonana na szydełku. Wykorzystane materiały
            (bawełna, poliakryl, kulki silikonowe) są bezpieczne nawet dla
            najmłodyszch. KRÓLIK wygląda przyjaźnie przez co maluchy chętnie się
            nim bawią. <br /> *KRÓLIK ma partnerke - KRÓLICZKE, razem w zestawie
            za 80 zł.
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
            CENA: <strong> 50 zł, (*zestaw 80 zł)</strong>
          </p>
          <p>
            ROZMIAR: <strong> 31 cm</strong>
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
