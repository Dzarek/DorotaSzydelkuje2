import React from "react";
import "../../../styles/ZabawkiPage.css";
import ColorKurier from "../zabawki/ColorKurier";
import OthersZabawki from "../zabawki/OthersZabawki";
import { SRLWrapper } from "simple-react-lightbox";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import szaryKocyk1 from "../../../images/Products/szaryKocyk/kocyk1.jpg";
import szaryKocyk2 from "../../../images/Products/szaryKocyk/kocyk2.jpg";
import szaryKocyk3 from "../../../images/Products/szaryKocyk/kocyk3.jpg";
import szaryKocyk4 from "../../../images/Products/szaryKocyk/kocyk4.jpg";
import szaryKocyk5 from "../../../images/Products/szaryKocyk/kocyk5.jpg";

const zabawki = () => {
  return (
    <div className="zabawkiPage">
      <div className="orderBg"> </div>
      <h1>Szary Kocyk</h1>
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
            <img src={szaryKocyk1} alt="szaryKocyk1" />
            <img src={szaryKocyk2} alt="szaryKocyk2" />
            <img src={szaryKocyk3} alt="szaryKocyk3" />
            <img src={szaryKocyk4} alt="szaryKocyk4" />
            <img src={szaryKocyk5} alt="szaryKocyk5" />
          </Carousel>
        </section>
      </SRLWrapper>
      <div className="textAndDetails">
        <section className="textZabawki">
          <p>
            SZARY KOCYK ręcznie wykonany na szydełku. Wykorzystane materiały
            (bawełna, poliakryl) są bezpieczne nawet dla najmłodyszch. SZARY
            KOCYK jest milutki i cieplutki, świetnie otuli maluchy do snu.
            <br /> <br /> Wykonany przeze mnie kocyk nie zniszczy się tak szybko
            jak to nie raz bywa z tymi kupionymi w markecie. Wyrób jest
            wytrzymały (nie kurczy się i nie mechaci). Można prać w pralce w
            30°.
            <br /> <br /> Zamówienie staram się wykonać najszybciej jak tylko to
            możliwe, jednak czas realizacji zależny jest od różnych
            okoliczności. Dlatego termin wykonania ustalam indywidualnie.
          </p>
        </section>
        <section className="detailsZabawki">
          <p>
            CENA: <strong> 70 zł</strong>
          </p>
          <p>
            ROZMIAR: <strong> 75 cm x 55 cm</strong>
          </p>
          <p>
            PIELĘGNACJA: <strong> Pranie - 30°</strong>
          </p>
          <p>
            MATERIAŁ: <strong> bawełna, poliester</strong>{" "}
          </p>
        </section>
      </div>
      <ColorKurier />
      <OthersZabawki />
    </div>
  );
};

export default zabawki;
