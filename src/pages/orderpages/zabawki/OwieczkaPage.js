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
            Maskotka OWIECZKA ręcznie wykonana na szydełku. Wykorzystane
            materiały (bawełna, poliakryl, poliester, kulki silikonowe) są
            bezpieczne nawet dla najmłodyszch. OWIECZKA wygląda przyjaźnie przez
            co maluchy chętnie się nią bawią.
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
              bawełna, poliakryl, poliester <br /> kulki silikonowe(wypełnienie)
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
