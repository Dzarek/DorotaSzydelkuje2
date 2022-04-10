import React, { Component } from "react";
import "../styles/OrderPage.css";
import { Link } from "react-router-dom";

class OrderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      activePluszaki: false,
      activePufy: false,
      activeKoce: false,
      activePoduszki: false,
      activeKosze: false,
      products: this.props.products,
    };
  }

  handleChangeState = () => {
    this.setState({
      active: false,
      activePluszaki: false,
      activePufy: false,
      activeKoce: false,
      activePoduszki: false,
      activeKosze: false,
    });
  };
  handleChangeState2 = () => {
    this.setState({
      active: true,
      activePluszaki: false,
      activePufy: false,
      activeKoce: false,
      activePoduszki: false,
      activeKosze: false,
    });
  };
  handleChangeStatePluszaki = () => {
    this.handleChangeState();
    this.setState({
      activePluszaki: true,
    });
  };
  handleChangeStatePufy = () => {
    this.handleChangeState();
    this.setState({
      activePufy: true,
    });
  };
  handleChangeStateKoce = () => {
    this.handleChangeState();
    this.setState({
      activeKoce: true,
    });
  };
  handleChangeStatePoduszki = () => {
    this.handleChangeState();
    this.setState({
      activePoduszki: true,
    });
  };
  handleChangeStateKosze = () => {
    this.handleChangeState();
    this.setState({
      activeKosze: true,
    });
  };

  render() {
    const workData = this.state.products;

    const linksZabawki = workData.filter((item) => item.type === "pluszak");
    const linksPufy = workData.filter((item) => item.type === "pufy");
    const linksKoce = workData.filter((item) => item.type === "koce");
    return (
      <>
        <div className="orderBg"> </div>
        <div
          // onClick={() => this.setState({ active: false })}
          className={this.state.active ? "ring" : "ring activeOrder"}
        >
          {this.state.active && (
            <div className="easyOrder">
              <h1 className="easyOrderha">To proste - wybierz produkt,</h1>
              <h1 className="easyOrderhb">a ja go dla Ciebie wyszydełkuję!</h1>
            </div>
          )}
          {!this.state.activePluszaki &&
          !this.state.activeKoce &&
          !this.state.activePufy ? null : (
            <h1 className="titleProducts">Wybierz interesujący Cię produkt</h1>
          )}
          <h2
            className={this.state.active ? "chooseCategory" : "chooseCategory2"}
          >
            wybierz <br /> kategorie
          </h2>
          <button
            style={
              this.state.activePluszaki ? { backgroundColor: "#ccc" } : null
            }
            onClick={this.handleChangeStatePluszaki}
            className="pluszaki"
          >
            <p>Pluszaki</p>
          </button>
          <button
            style={this.state.activePufy ? { backgroundColor: "#ccc" } : null}
            onClick={this.handleChangeStatePufy}
            className="pufy"
          >
            <p>Pufy</p>
          </button>
          <button
            style={this.state.activeKoce ? { backgroundColor: "#ccc" } : null}
            onClick={this.handleChangeStateKoce}
            className="koce"
          >
            <p>Koce</p>
          </button>
          <button
            style={
              this.state.activePoduszki ? { backgroundColor: "#ccc" } : null
            }
            onClick={this.handleChangeStatePoduszki}
            className="poduszki"
          >
            <p>Poduszki</p>
          </button>
          <button
            style={this.state.activeKosze ? { backgroundColor: "#ccc" } : null}
            onClick={this.handleChangeStateKosze}
            className="kosze"
          >
            <p>Kosze</p>
          </button>
        </div>
        {this.state.activePluszaki && (
          <div className="orderList pluszakiList">
            <button
              style={{ color: "black" }}
              onClick={this.handleChangeState2}
              className="buttonBuyPage"
            >
              <i class="far fa-times-circle"></i>
            </button>
            <span>
              Chyba każde dziecko musi mieć swoją własną przytulankę. Tu
              znajdziesz ręcznie wyszydełkowane zabawki z bawełnianej włóczki,
              które Twoje dziecko pokocha{" "}
              <i style={{ marginLeft: 20 }} class="fas fa-heart"></i>
            </span>
            <ul>
              {linksZabawki.map((link) => {
                const { id, name, slug, img } = link;
                return (
                  <li key={id}>
                    <Link className="link" to={`/order/${slug}`}>
                      <img src={img} alt={name} />
                      <p>{name}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {this.state.activePufy && (
          <div className="orderList pufyList">
            <button
              style={{ color: "black" }}
              onClick={this.handleChangeState2}
              className="buttonBuyPage"
            >
              <i class="far fa-times-circle"></i>
            </button>
            <span>
              Pufy to wygodne siedziska, które dobrze nadają wystrój salonu lub
              sypialni. Idealnie sprawdzają się do siedzenia przy ławie bądź
              przy zabawie z dzieckiem na podłodze.{" "}
            </span>
            <ul>
              {linksPufy.map((link) => {
                const { id, name, slug, img } = link;
                return (
                  <li key={id}>
                    <Link className="link" to={`/order/${slug}`}>
                      <img src={img} alt={name} />
                      <p>{name}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {this.state.activeKoce && (
          <div className="orderList koceList">
            <button
              style={{ color: "black" }}
              onClick={this.handleChangeState2}
              className="buttonBuyPage"
            >
              <i class="far fa-times-circle"></i>
            </button>
            <span>
              W każdym domu znajduje się jakiś koc. Wydaje się że jest to wręcz
              coś niezbędnego w naszym życiu. Nie ma to jak okryć się nim w
              chłodne dni i zrobić sobie krótką drzemke.{" "}
            </span>
            <ul>
              {linksKoce.map((link) => {
                const { id, name, slug, img } = link;
                return (
                  <li key={id}>
                    <Link className="link" to={`/order/${slug}`}>
                      <img src={img} alt={name} />
                      <p>{name}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {this.state.activePoduszki && (
          <div className="orderList poduszkiList">
            <button
              style={{ color: "black" }}
              onClick={this.handleChangeState2}
              className="buttonBuyPage"
            >
              <i class="far fa-times-circle"></i>
            </button>
            <h1 style={{ fontSize: 30, paddingTop: "30vh" }}>
              STRONA W TRAKCIE PRAC... <br /> <br />
              SPRAWDŹ INNE ZAKŁADKI
            </h1>
          </div>
        )}
        {this.state.activeKosze && (
          <div className="orderList koszeList">
            <button
              style={{ color: "black" }}
              onClick={this.handleChangeState2}
              className="buttonBuyPage"
            >
              <i class="far fa-times-circle"></i>
            </button>
            <h1 style={{ fontSize: 30, paddingTop: "30vh" }}>
              STRONA W TRAKCIE PRAC... <br /> <br />
              SPRAWDŹ INNE ZAKŁADKI
            </h1>
          </div>
        )}
      </>
    );
  }
}

export default OrderPage;
