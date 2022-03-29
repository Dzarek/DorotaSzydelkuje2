import React, { Component } from "react";
import "../styles/BuyPage.css";
import MyFrom2 from "../components/MyForm2";
import Carousel from "react-elastic-carousel";

// import { produkt } from "../data";
import Client from "../Contentful";

class BuyPage extends Component {
  state = {
    active: true,
    pName: "",
    pPrice: 0,
    pSize: 0,
    pWash: "",
    pMaterial: "",
    products: [],
  };

  // getData;
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

  handleChangeState = () => {
    this.setState({
      active: true,
    });
  };

  handleClickFind = (name) => {
    const workData = this.state.products;
    const readyProdukt = workData.filter((item) => item.ready === true);

    let buyProdukt = readyProdukt.find((item) => {
      return item.name === name;
    });
    console.log(buyProdukt.name);
    this.setState({
      active: false,
      pName: buyProdukt.name,
      pPrice: buyProdukt.price,
      pSize: buyProdukt.size,
      pWash: buyProdukt.wash,
      pMaterial: buyProdukt.material,
    });
  };
  render() {
    const workData = this.state.products;
    const readyProdukt = workData.filter((item) => item.ready === true);
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
              {readyProdukt.map((item, index) => {
                return (
                  <li key={index}>
                    <Carousel
                      className="buyNowItem"
                      breakPoints={1}
                      pagination={false}
                    >
                      {item.images.map((img, index) => {
                        return <img src={img} alt={item.name} key={index} />;
                      })}
                    </Carousel>
                    <p onClick={() => this.handleClickFind(item.name)}>
                      <i class="fas fa-sign-in-alt"></i> {item.name} <br />{" "}
                      Cena: {item.price}
                    </p>
                  </li>
                );
              })}
            </ul>
          </section>
          {!this.state.active && (
            <div className="aboutAndBuy">
              <button
                onClick={() => this.handleChangeState()}
                className="buttonBuyPage"
              >
                <i class="far fa-times-circle"></i>
              </button>
              <section className="aboutAndBuyText">
                <span>
                  <h3>{this.state.pName}</h3>
                  <p>
                    CENA: <strong> {this.state.pPrice}</strong>
                  </p>
                  <p>
                    {" "}
                    ROZMIAR: <strong> {this.state.pSize}</strong>
                  </p>
                  <p>
                    PIELĘGNACJA: <strong> {this.state.pWash}</strong>
                  </p>
                  <p>
                    MATERIAŁ: <strong> {this.state.pMaterial}</strong>{" "}
                  </p>
                </span>
              </section>
              <span className="myForm2">
                <h3>Napisz do mnie i zamów</h3>
                <MyFrom2 />
              </span>
            </div>
          )}
          ;
        </div>
      </>
    );
  }
}

export default BuyPage;
