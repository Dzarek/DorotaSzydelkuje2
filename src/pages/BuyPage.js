import React, { Component } from "react";
import "../styles/BuyPage.css";

import MyFrom2 from "../components/MyForm2";
import Carousel from "react-elastic-carousel";

//hipcio
import hipcio1 from "../images/Products/hipcio/hipcio1.jpg";
import hipcio2 from "../images/Products/hipcio/hipcio2.jpg";
import hipcio3 from "../images/Products/hipcio/hipcio3.jpg";
import hipcio4 from "../images/Products/hipcio/hipcio4.jpg";
//misiekBiały
import misiekBiały1 from "../images/Products/misiekBiały/misiekBiały1.jpg";
import misiekBiały2 from "../images/Products/misiekBiały/misiekBiały2.jpg";
import misiekBiały3 from "../images/Products/misiekBiały/misiekBiały3.jpg";
import misiekBiały4 from "../images/Products/misiekBiały/misiekBiały4.jpg";
import misiekBiały5 from "../images/Products/misiekBiały/misiekBiały5.jpg";
//owieczka
import owieczka1 from "../images/Products/owieczka/owieczka1.jpg";
import owieczka2 from "../images/Products/owieczka/owieczka2.jpg";
import owieczka3 from "../images/Products/owieczka/owieczka3.jpg";
import owieczka4 from "../images/Products/owieczka/owieczka4.jpg";
import owieczka5 from "../images/Products/owieczka/owieczka5.jpg";
//piesek
import piesek1 from "../images/Products/piesek/piesek1.jpg";
import piesek2 from "../images/Products/piesek/piesek2.jpg";
import piesek3 from "../images/Products/piesek/piesek3.jpg";
import piesek4 from "../images/Products/piesek/piesek4.jpg";
import piesek5 from "../images/Products/piesek/piesek5.jpg";
import piesek6 from "../images/Products/piesek/piesek6.jpg";
//króliczka
import króliczka1 from "../images/Products/króliczka/króliczka1.jpg";
import króliczka2 from "../images/Products/króliczka/króliczka2.jpg";
import króliczka3 from "../images/Products/króliczka/króliczka3.jpg";
import króliczka4 from "../images/Products/króliczka/króliczka4.jpg";

class BuyPage extends Component {
  state = {
    active: true,
    activePingwin: false,
    activeOwieczka: false,
    activeKroliczka: false,
    activeZajac: false,
    activePiesek: false,
    activeHipcio: false,
    activeBialyMis: false,
  };

  handleChangeState = () => {
    this.setState({
      active: false,
      activePingwin: false,
      activeOwieczka: false,
      activeKroliczka: false,
      activeZajac: false,
      activePiesek: false,
      activeHipcio: false,
      activeBialyMis: false,
    });
  };
  handleChangeStatePinguin = () => {
    this.handleChangeState();
    this.setState({
      activePingwin: true,
    });
  };
  handleChangeStateOwieczka = () => {
    this.handleChangeState();
    this.setState({
      activeOwieczka: true,
    });
  };
  handleChangeStateKroliczka = () => {
    this.handleChangeState();
    this.setState({
      activeKroliczka: true,
    });
  };
  handleChangeStatePiesek = () => {
    this.handleChangeState();
    this.setState({
      activePiesek: true,
    });
  };
  handleChangeStateHipcio = () => {
    this.handleChangeState();
    this.setState({
      activeHipcio: true,
    });
  };
  handleChangeStateBialyMis = () => {
    this.handleChangeState();
    this.setState({
      activeBialyMis: true,
    });
  };
  render() {
    return (
      <>
        <div className="buyPage">
          <div className="orderBg"> </div>
          <h1 className={this.state.active ? null : "activeH1Buy"}>
            Tu znajdziesz rzeczy już gotowe, <br /> uszyte przeze mnie
            wcześniej, które możesz mieć od razu
          </h1>
          <section className={this.state.active ? "toBuyNow2" : "toBuyNow"}>
            <ul>
              <li>
                <Carousel breakPoints={1} pagination={false}>
                  <img src={owieczka1} alt="owieczka1" />
                  <img src={owieczka2} alt="owieczka2" />
                  <img src={owieczka3} alt="owieczka3" />
                  <img src={owieczka4} alt="owieczka4" />
                  <img src={owieczka5} alt="owieczka5" />
                </Carousel>
                <p onClick={this.handleChangeStateOwieczka}>
                  <i class="fas fa-sign-in-alt"></i> OWIECZKA <br /> Cena: 50zł
                </p>
              </li>
              <li>
                <Carousel breakPoints={1} pagination={false}>
                  <img src={króliczka1} alt="króliczka1" />
                  <img src={króliczka2} alt="króliczka2" />
                  <img src={króliczka3} alt="króliczka3" />
                  <img src={króliczka4} alt="króliczka4" />
                </Carousel>
                <p onClick={this.handleChangeStateKroliczka}>
                  <i class="fas fa-sign-in-alt"></i> KRÓLICZKA
                  <br /> Cena: 50zł
                </p>
              </li>
              <li>
                <div>
                  <Carousel breakPoints={1} pagination={false}>
                    <img src={piesek1} alt="piesek1" />
                    <img src={piesek2} alt="piesek2" />
                    <img src={piesek3} alt="piesek3" />
                    <img src={piesek4} alt="piesek4" />
                    <img src={piesek5} alt="piesek5" />
                    <img src={piesek6} alt="piesek6" />
                  </Carousel>
                </div>
                <p onClick={this.handleChangeStatePiesek}>
                  <i class="fas fa-sign-in-alt"></i> PIESEK
                  <br /> Cena: 150zł
                </p>
              </li>
              <li>
                <Carousel breakPoints={1} pagination={false}>
                  <img src={hipcio1} alt="hipcio1" />
                  <img src={hipcio2} alt="hipcio2" />
                  <img src={hipcio3} alt="hipcio3" />
                  <img src={hipcio4} alt="hipcio4" />
                </Carousel>
                <p onClick={this.handleChangeStateHipcio}>
                  <i class="fas fa-sign-in-alt"></i> HIPCIO
                  <br /> Cena: 80zł
                </p>
              </li>
              <li>
                <Carousel breakPoints={1} pagination={false}>
                  <img src={misiekBiały1} alt="misiekBiały1" />
                  <img src={misiekBiały2} alt="misiekBiały2" />
                  <img src={misiekBiały3} alt="misiekBiały3" />
                  <img src={misiekBiały4} alt="misiekBiały4" />
                  <img src={misiekBiały5} alt="misiekBiały5" />
                </Carousel>
                <p onClick={this.handleChangeStateBialyMis}>
                  <i class="fas fa-sign-in-alt"></i> BIAŁY MIŚ
                  <br /> Cena: 80zł
                </p>
              </li>
            </ul>
          </section>
          {this.state.activeOwieczka ? (
            <div className="aboutAndBuy">
              <button
                onClick={this.handleChangeState}
                className="buttonBuyPage"
              >
                <i class="far fa-times-circle"></i>
              </button>
              <section className="aboutAndBuyText">
                <span>
                  <h3>OWIECZKA</h3>
                  <p>
                    CENA: <strong> 50 zł</strong>
                  </p>
                  <p>
                    {" "}
                    ROZMIAR: <strong> ok. 28cm</strong>
                  </p>
                  <p>
                    PIELĘGNACJA: <strong> Pranie - 30°</strong>
                  </p>
                  <p>
                    MATERIAŁ:{" "}
                    <strong>
                      {" "}
                      bawełna, poliakryl, poliester, kulki silikonowe
                    </strong>{" "}
                  </p>
                </span>
              </section>
              <span className="myForm2">
                <h3>Napisz do mnie i zamów</h3>
                <MyFrom2 />
              </span>
            </div>
          ) : null}
          {this.state.activePiesek ? (
            <div className="aboutAndBuy">
              <button
                onClick={this.handleChangeState}
                className="buttonBuyPage"
              >
                <i class="far fa-times-circle"></i>
              </button>
              <section className="aboutAndBuyText">
                <span>
                  <h3>PIESEK</h3>
                  <p>
                    CENA: <strong> 150 zł</strong>
                  </p>
                  <p>
                    {" "}
                    ROZMIAR: <strong> ok. 53cm</strong>
                  </p>
                  <p>
                    PIELĘGNACJA: <strong> Pranie - 30°</strong>
                  </p>
                  <p>
                    MATERIAŁ: <strong>poliester, kulki silikonowe</strong>{" "}
                  </p>
                </span>
              </section>
              <span className="myForm2">
                <h3>Napisz do mnie i zamów</h3>
                <MyFrom2 />
              </span>
            </div>
          ) : null}
          {this.state.activeKroliczka ? (
            <div className="aboutAndBuy">
              <button
                onClick={this.handleChangeState}
                className="buttonBuyPage"
              >
                <i class="far fa-times-circle"></i>
              </button>
              <section className="aboutAndBuyText">
                <span>
                  <h3>KRÓLICZKA</h3>
                  <p>
                    CENA: <strong> 50 zł</strong>
                  </p>
                  <p>
                    {" "}
                    ROZMIAR: <strong> ok. 31cm</strong>
                  </p>
                  <p>
                    PIELĘGNACJA: <strong> Pranie - 30°</strong>
                  </p>
                  <p>
                    MATERIAŁ:{" "}
                    <strong> bawełna, poliakryl, kulki silikonowe</strong>{" "}
                  </p>
                </span>
              </section>
              <span className="myForm2">
                <h3>Napisz do mnie i zamów</h3>
                <MyFrom2 />
              </span>
            </div>
          ) : null}
          {this.state.activeHipcio ? (
            <div className="aboutAndBuy">
              <button
                onClick={this.handleChangeState}
                className="buttonBuyPage"
              >
                <i class="far fa-times-circle"></i>
              </button>
              <section className="aboutAndBuyText">
                <span>
                  <h3>HIPCIO</h3>
                  <p>
                    CENA: <strong> 80 zł</strong>
                  </p>
                  <p>
                    {" "}
                    ROZMIAR: <strong> ok. 23cm</strong>
                  </p>
                  <p>
                    PIELĘGNACJA: <strong> Pranie - 30°</strong>
                  </p>
                  <p>
                    MATERIAŁ:{" "}
                    <strong> bawełna, poliakryl, kulki silikonowe</strong>{" "}
                  </p>
                </span>
              </section>
              <span className="myForm2">
                <h3>Napisz do mnie i zamów</h3>
                <MyFrom2 />
              </span>
            </div>
          ) : null}
          {this.state.activeBialyMis ? (
            <div className="aboutAndBuy">
              <button
                onClick={this.handleChangeState}
                className="buttonBuyPage"
              >
                <i class="far fa-times-circle"></i>
              </button>
              <section className="aboutAndBuyText">
                <span>
                  <h3>BIAŁY MIŚ</h3>
                  <p>
                    CENA: <strong> 80 zł</strong>
                  </p>
                  <p>
                    {" "}
                    ROZMIAR: <strong> ok. 23cm</strong>
                  </p>
                  <p>
                    PIELĘGNACJA: <strong> Pranie - 30°</strong>
                  </p>
                  <p>
                    MATERIAŁ:{" "}
                    <strong> bawełna, poliakryl, kulki silikonowe</strong>{" "}
                  </p>
                </span>
              </section>
              <span className="myForm2">
                <h3>Napisz do mnie i zamów</h3>
                <MyFrom2 />
              </span>
            </div>
          ) : null}
        </div>
      </>
    );
  }
}

export default BuyPage;
