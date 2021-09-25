import React from "react";
import { NavLink } from "react-router-dom";
import "../../../styles/ZabawkiPage.css";
import colors from "../../../images/Products/colors.png";

const ColorKurier = () => {
  return (
    <>
      <h2 className="orderBuyH2">Zamów rękodzieło!</h2>
      <div className="orderBuy">
        <section className="colorZabawki">
          <p>
            Wybierz odpowiedni dla Ciebie kolor. <br /> Użyje go do
            wyszydełkowania zabawki.
          </p>
          <img src={colors} alt="colors" />
        </section>

        <section className="toBuyZabawki">
          <span>
            ZAMÓW <p>zadzwoń: 512 235 727</p>
            <NavLink className="orderContactBtn" to="/contact">
              napisz!
            </NavLink>
          </span>

          <span>
            PRZESYŁKA{" "}
            <p>
              INPOST Kurier - 13,5 zł <br />
              POCZTA POLSKA Kurier48 - 12,5 zł
            </p>
          </span>
          <span>
            PŁATNOŚĆ{" "}
            <p>
              z góry przelewem na konto: <br /> 23 2490 0005 0000 4004 6143 2313
            </p>
          </span>
        </section>
      </div>
    </>
  );
};

export default ColorKurier;
