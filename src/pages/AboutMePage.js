import React from "react";
import "../styles/AboutMePage.css";

import Dorota1 from "../images/DorotaZdj/Dorota1.png";
import Dorota2a from "../images/DorotaZdj/Dorota2a.jpg";
import Dorota2b from "../images/DorotaZdj/Dorota2b.jpg";
import Dorota2c from "../images/DorotaZdj/Dorota2c.jpg";
import Dorota3a from "../images/DorotaZdj/Dorota3a.jpg";
import Dorota3b from "../images/DorotaZdj/Dorota3b.jpg";
import Dorota4a from "../images/DorotaZdj/Dorota4a.jpg";
import Dorota4b from "../images/DorotaZdj/Dorota4b.jpg";

import arrowDown from "../images/arrowDown.png";

const AboutMePage = () => {
  return (
    <>
      {/* <div className="aboutBg"></div> */}
      <section className="aboutOne">
        <h1 className="aboutHello">Cześć !</h1>
        <span className="pAboutMe">
          <p>mam na imię Dorota</p>
          <p>
            jak widzisz <br /> lubię szydełkować :)
          </p>
          <p>jestem samoukiem</p>
          <p>
            a moje rękodzieła to efekt <br /> wielu godzin spędzonych nad <br />
            schematami i instruktażami
          </p>
          <p>jest to praca i hobby w jednym </p>
          <p>
            ale na włóczce <br /> świat się nie kończy...{" "}
          </p>
        </span>
        <img className="arrowDown" src={arrowDown} alt="arrowDown" />
        <img className="Dorota1" src={Dorota1} alt="Dorota1" />
      </section>
      <section className="aboutOneA">
        <div className="aboutOneA1">
          <img className="Dorota4a" src={Dorota4a} alt="Dorota4a" />
          <p>
            Już od paru lat jestem w szczęśliwym małżeństwie
            <i style={{ marginLeft: "10px" }} class="fas fa-heart"></i>.
            Niedawno powiększyła się nasza rodzina i na świat przyszła nasza
            córeczka Martyna.
            <i style={{ marginLeft: "10px" }} class="fas fa-baby-carriage"></i>
          </p>
        </div>
        <div className="aboutOneA2">
          <img className="Dorota4b" src={Dorota4b} alt="Dorota4b" />
          <p>
            Na co dzień pracuję w księgarni internetowej. Praca jak to praca.
            Najgorzej tylko wstawać na 6:00 bo by człowiek pospał sobie troszkę
            dłużej. <i class="fas fa-bed"></i>
          </p>
        </div>
      </section>
      <section className="aboutTwo">
        <p>
          Uwielbiam górskie wędrówki z rodziną i przyjaciółmi. Czuje się wtedy
          jak dziecko, wolna od wszelkich zmartwień dnia codziennego. Myślę że,
          dobrze jest czasem wentylować się takim górskim czystym powietrzem,
          zwłaszcza gdy mieszka się w Krakowie. Baaardzo polecam taką aktywność!
          <i class="far fa-grin-hearts"></i>
        </p>
        <img className="Dorota2a" src={Dorota2a} alt="Dorota2a" />
        <img className="Dorota2b" src={Dorota2b} alt="Dorota2b" />
        <img className="Dorota2c" src={Dorota2c} alt="Dorota2c" />
      </section>
      <section className="aboutThird">
        <p>
          Choć szydełkowanie to nie praca w kopalni to i tu ręce się po kilku
          godzinach męczą, a przecież są też inne obowiązki (dziecko, mąż, druga
          praca, dom). Gdy mam chwilę dla siebie to zwykle są dwa wyjścia:
          romanse lub kryminały. Oczywiście mam na myśli książki!
          <i class="fas fa-smile-beam"></i>
        </p>
        <img className="Dorota3a" src={Dorota3a} alt="Dorota3a" />
        <img className="Dorota3b" src={Dorota3b} alt="Dorota3b" />
        <p>
          Od dziecka lubiłam sport. Siatkówka, rolki, wyciskanie ciężarów...(no
          dobra, z tym ostatnim żartuję <i class="fas fa-grin-beam-sweat"></i>
          ). W każdym razie gdy tylko pogoda sprzyja to razem z mężem i
          znajomymi umawiamy się w parku i oblegamy boiska.
        </p>
      </section>
    </>
  );
};

export default AboutMePage;
