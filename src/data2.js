import Client from "./Contentful";
import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [contentProduct, setContentProduct] = useState([]);

  const fetchDrinks = useCallback(async () => {
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
      setContentProduct(products);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    fetchDrinks();
  }, [fetchDrinks]);

  return (
    <AppContext.Provider
      value={{
        contentProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
