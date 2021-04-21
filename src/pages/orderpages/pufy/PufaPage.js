import React from "react";
import "../../../styles/ZabawkiPage.css";
import ColorKurier from "../zabawki/ColorKurier";
import OthersZabawki from "../zabawki/OthersZabawki";
import { SRLWrapper } from "simple-react-lightbox";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import pufa1 from "../../../images/Products/pufa/pufa1.jpg";
import pufa2 from "../../../images/Products/pufa/pufa2.jpg";
import pufa3 from "../../../images/Products/pufa/pufa3.jpg";
import pufa4 from "../../../images/Products/pufa/pufa4.jpg";
import pufa5 from "../../../images/Products/pufa/pufa5.jpg";
import pufa6 from "../../../images/Products/pufa/pufa6.jpg";
import pufa7 from "../../../images/Products/pufa/pufa7.jpg";
import pufa8 from "../../../images/Products/pufa/pufa8.jpg";

const zabawki = () => {
  return (
    <div className="zabawkiPage">
      <div className="orderBg"> </div>
      <h1>PUFA</h1>
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
            <img src={pufa1} alt="pufa1" />
            <img src={pufa2} alt="pufa2" />
            <img src={pufa3} alt="pufa3" />
            <img src={pufa4} alt="pufa4" />
            <img src={pufa5} alt="pufa5" />
            <img src={pufa6} alt="pufa6" />
            <img src={pufa7} alt="pufa7" />
            <img src={pufa8} alt="pufa8" />
          </Carousel>
        </section>
      </SRLWrapper>
      <div className="textAndDetails">
        <section className="textZabawki">
          <p>
            PUFA ręcznie wykonany na szydełku. Wykorzystane materiały (sznurek
            bawełniany z rdzeniem poliestrowym) są bezpieczne nawet dla
            najmłodyszch. PUFA idealnie sprawdza się w salonie lub sypialni jako
            wygodne siedzisko oraz dekoracja wnętrza.
            <br /> <br /> Wykonana przeze mnie pufa nie zniszczy się tak szybko
            jak to nie raz bywa z tymi kupionymi w markecie. Wyrób jest
            wytrzymały (nie kurczy się i nie mechaci). Można prać ręcznie.
            <br /> <br /> Zamówienie staram się wykonać najszybciej jak tylko to
            możliwe, jednak czas realizacji zależny jest od różnych
            okoliczności. Dlatego termin wykonania ustalam indywidualnie.
          </p>
        </section>
        <section className="detailsZabawki">
          <p>
            CENA: <strong> 200 zł</strong>
          </p>
          <p>
            ROZMIAR: <strong> śred. 45 cm, wys. 22 cm</strong>
          </p>
          <p>
            PIELĘGNACJA: <strong> Pranie - ręczne</strong>
          </p>
          <p>
            MATERIAŁ:{" "}
            <strong> sznurek bawełniany z rdzeniem poliestrowym</strong>{" "}
          </p>
        </section>
      </div>
      <ColorKurier />
      <OthersZabawki />
    </div>
  );
};

export default zabawki;
