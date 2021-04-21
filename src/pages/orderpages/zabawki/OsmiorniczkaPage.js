import React from "react";
import "../../../styles/ZabawkiPage.css";
import ColorKurier from "./ColorKurier";
import OthersZabawki from "./OthersZabawki";
import { SRLWrapper } from "simple-react-lightbox";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import osmiorniczka1 from "../../../images/Products/ośmiorniczka/osmiorniczka1.jpg";
import osmiorniczka2 from "../../../images/Products/ośmiorniczka/osmiorniczka2.jpg";
import osmiorniczka3 from "../../../images/Products/ośmiorniczka/osmiorniczka3.jpg";
import osmiorniczka4 from "../../../images/Products/ośmiorniczka/osmiorniczka4.jpg";
import osmiorniczka5 from "../../../images/Products/ośmiorniczka/osmiorniczka5.jpg";

const zabawki = () => {
  return (
    <div className="zabawkiPage">
      <div className="orderBg"> </div>
      <h1>Ośmiorniczka</h1>
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
            <img src={osmiorniczka1} alt="osmiorcznika1" />
            <img src={osmiorniczka2} alt="osmiorcznika2" />
            <img src={osmiorniczka3} alt="osmiorcznika3" />
            <img src={osmiorniczka4} alt="osmiorcznika4" />
            <img src={osmiorniczka5} alt="osmiorcznika5" />
          </Carousel>
        </section>
      </SRLWrapper>
      <div className="textAndDetails">
        <section className="textZabawki">
          <p>
            Maskotka OŚMIORNICZKA ręcznie wykonana na szydełku. Wykorzystane
            materiały (bawełna, poliakryl, kulki silikonowe, grzechotka) są
            bezpieczne nawet dla najmłodyszch. OŚMIORNICZKA wygląda przyjaźnie
            przez co maluchy chętnie się nią bawią. Świetnie nadaję się do
            przymocowania przy wózku lub kołyski dziecka.
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
            ROZMIAR: <strong> 18 cm</strong>
          </p>
          <p>
            PIELĘGNACJA: <strong> Pranie - 30°</strong>
          </p>
          <p>
            MATERIAŁ:{" "}
            <strong>
              {" "}
              bawełna, poliakryl, <br /> kulki silikonowe,
              grzechotka(wypełnienie)
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
