import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import CookieConsent from "react-cookie-consent";
import { Route, Switch } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";

//NAWIGACJA
import HomePage from "../pages/HomePage";
import BuyPage from "../pages/BuyPage";
import OrderPage from "../pages/OrderPage";
import AboutMePage from "../pages/AboutMePage";
import ContactPage from "../pages/ContactPage";
import CookiePage from "../pages/CookiePage";
import ErrorPage from "../pages/ErrorPage";

//ZABAWKI
import AllProducts from "../pages/orderpages/zabawki/AllProducts";

import Client from "../Contentful";
import Loading from "../components/Loading";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "dorotaSzydelkuje",
        order: "sys.createdAt",
      });
      let products = response.items;
      products = products.map((item) => {
        let {
          name,
          slug,
          type,
          price,
          size,
          wash,
          material,
          ready,
          description,
        } = item.fields;
        let { id } = item.sys;
        let img = item.fields.img.fields.file.url;
        let imgOthers = item.fields.imgOthers.fields.file.url;
        let images = item.fields.images;
        images = images.map((image) => {
          return image.fields.file.url;
        });
        return {
          id,
          name,
          slug,
          type,
          price,
          size,
          wash,
          material,
          ready,
          description,
          img,
          imgOthers,
          images,
        };
      });
      this.setState({
        products,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="appBg"></div>
          <div className="App">
            <header>{<Navigation />}</header>
            <main>
              <section className="page">
                <ScrollToTop />
                <Switch>
                  {/* NAWIGACJA */}
                  <Route path="/" exact component={HomePage} />
                  <Route exact path="/buyNow">
                    {this.state.products.length > 0 ? (
                      <BuyPage products={this.state.products} />
                    ) : (
                      <Loading />
                    )}
                  </Route>
                  <Route exact path="/order">
                    {this.state.products.length > 0 ? (
                      <OrderPage products={this.state.products} />
                    ) : (
                      <Loading />
                    )}
                  </Route>
                  <Route exact path="/aboutMe" component={AboutMePage} />
                  <Route exact path="/contact" component={ContactPage} />
                  <Route exact path="/cookie" component={CookiePage} />
                  <Route exact path="/order/:slug" component={AllProducts} />
                  <Route component={ErrorPage} />
                </Switch>
              </section>
            </main>
            <footer>{<Footer />}</footer>
            <CookieConsent
              buttonText="Akceptuje"
              cookieName="myAwesomeCookieName2"
              className="cookieInfo"
              style={{
                background: "rgba(0,0,0, .8)",
                fontSize: "20px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "0 20px",
                textAlign: "left",
              }}
              buttonStyle={{
                color: "#fff",
                fontSize: "18px",
                backgroundColor: "rgba(46, 66, 83, 0.911)",
                padding: "10px",
                borderRadius: "5px",
              }}
              expires={7}
            >
              Strona korzysta z plików cookies. Pozostając na niej wyrażasz
              zgodę na ich używanie. <br /> Ze szczegółowymi informacjami
              dotyczącymi cookies na tej stronie można się zapoznać tutaj:
              <NavLink className="cookieLink" to="/cookie">
                {""} Polityka Prywatności
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
