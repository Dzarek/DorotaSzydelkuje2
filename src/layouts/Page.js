import React from "react";
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
import PinguinPage from "../pages/orderpages/zabawki/PinguinPage";
import OwieczkaPage from "../pages/orderpages/zabawki/OwieczkaPage";
import ZajaczekPage from "../pages/orderpages/zabawki/ZajaczekPage";
import KroliczkaPage from "../pages/orderpages/zabawki/KroliczkaPage";
import HipcioPage from "../pages/orderpages/zabawki/HipcioPage";
import PiesekPage from "../pages/orderpages/zabawki/PiesekPage";
import BialyMisPage from "../pages/orderpages/zabawki/BialyMisPage";
import OsmiorniczkaPage from "../pages/orderpages/zabawki/OsmiorniczkaPage";
import KrolikPage from "../pages/orderpages/zabawki/KrolikPage";
//PUFY
import PufaPage from "../pages/orderpages/pufy/PufaPage";
//KOCE
import SzaryKocykPage from "../pages/orderpages/koce/SzaryKocykPage";

const Page = () => {
  return (
    <>
      <ScrollToTop />
      <Switch>
        {/* NAWIGACJA */}
        <Route path="/" exact component={HomePage} />
        <Route path="/buyNow" component={BuyPage} />
        <Route path="/order/" component={OrderPage} />
        <Route path="/aboutMe" component={AboutMePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/cookie" component={CookiePage} />
        {/* ZABAWKI */}
        <Route path="/pingwin" component={PinguinPage} />
        <Route path="/owieczka" component={OwieczkaPage} />
        <Route path="/kroliczka" component={KroliczkaPage} />
        <Route path="/zajaczek" component={ZajaczekPage} />
        <Route path="/hipcio" component={HipcioPage} />
        <Route path="/piesek" component={PiesekPage} />
        <Route path="/bialymis" component={BialyMisPage} />
        <Route path="/osmiorniczka" component={OsmiorniczkaPage} />
        <Route path="/krolik" component={KrolikPage} />
        {/* PUFY */}
        <Route path="/pufa" component={PufaPage} />
        {/* KOCE */}
        <Route path="/szaryKocyk" component={SzaryKocykPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page;
