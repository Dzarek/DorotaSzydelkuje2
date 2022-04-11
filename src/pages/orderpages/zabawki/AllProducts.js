import React, { useEffect, useState } from "react";
import "../../../styles/ZabawkiPage.css";
import ColorKurier from "./ColorKurier";
import OthersZabawki from "./OthersZabawki";
import { SRLWrapper } from "simple-react-lightbox";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

// import { produkt } from "../../../data";
import Client from "../../../Contentful";
import Loading from "../../../components/Loading";
import { useLocation } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const slug = location.pathname.slice(7, location.pathname.length);

  // getData;
  const getData = async () => {
    setIsLoading(true);
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
      setIsLoading(false);
      return setProducts(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const workData = products.filter((item) => item.slug === slug);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {workData.map((data, id) => {
        const { name, price, size, wash, material, description, images } = data;
        return (
          <div key={id} className="zabawkiPage">
            <div className="orderBg"> </div>
            <h1>{name}</h1>
            <SRLWrapper>
              <section className="pictureZabawki">
                <Carousel
                  infinite
                  autoPlay={3000}
                  animationSpeed={2000}
                  slidesPerPage={3}
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
                  {images.map((img, index) => {
                    return <img src={img} alt={name} key={index} />;
                  })}
                </Carousel>
              </section>
            </SRLWrapper>
            <div className="textAndDetails">
              <section className="textZabawki">
                <p>
                  {description}
                  <br /> <br /> Wykonany przeze mnie produkt nie zniszczy się
                  tak szybko jak to nie raz bywa z tymi kupionymi w markecie.
                  Wyrób jest wytrzymały (nie kurczy się i nie mechaci). Można
                  prać w pralce w 30°.
                  <br /> <br /> Zamówienie staram się wykonać najszybciej jak
                  tylko to możliwe, jednak czas realizacji zależny jest od
                  różnych okoliczności. Dlatego termin wykonania ustalam
                  indywidualnie.
                </p>
              </section>
              <section className="detailsZabawki">
                <p>
                  CENA: <strong> {price}</strong>
                </p>
                <p>
                  ROZMIAR: <strong> {size}</strong>
                </p>
                <p>
                  PIELĘGNACJA: <strong> {wash}</strong>
                </p>
                <p>
                  MATERIAŁ: <strong> {material}</strong>{" "}
                </p>
              </section>
            </div>
            <ColorKurier />
            <OthersZabawki />
          </div>
        );
      })}
    </>
  );
};
export default AllProducts;
