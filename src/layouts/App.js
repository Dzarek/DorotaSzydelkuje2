import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";
import CookieConsent from "react-cookie-consent";

class App extends Component {
  render() {
    return (
      <>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="appBg"></div>
          <div className="App">
            <header>
              {/* {<Header />} */}
              {<Navigation />}
            </header>
            <main>
              <section className="page">{<Page />}</section>
            </main>
            <footer>{<Footer />}</footer>
            <CookieConsent
              buttonText="Akceptuje"
              cookieName="myAwesomeCookieName2"
              className="cookieInfo"
              style={{
                background: "rgba(0,0,0, .8)",
                fontSize: "24px",
                // height: "30vh",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
              buttonStyle={{
                color: "#222",
                fontSize: "18px",
                // margin: "0 10vw 0 0",
                backgroundColor: "pink",
                padding: "10px",
                boxShadow: "0 0 2px 2px pink",
              }}
              expires={7}
            >
              Strona korzysta z plików cookies. Pozostając na niej wyrażasz
              zgodę na ich używanie. <br /> Ze szczegółowymi informacjami
              dotyczącymi cookies na tej stronie można się zapoznać tutaj:
              <NavLink className="cookieLink" to="/cookie">
                {" "}
                (Polityka Prywatności)
              </NavLink>
              .
            </CookieConsent>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
