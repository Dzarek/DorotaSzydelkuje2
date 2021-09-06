//pingwin
import pinguin1 from "./images/Products/pingwin/pingwin1.png";
import pinguin2 from "./images/Products/pingwin/pingwin2.png";
import pinguin3 from "./images/Products/pingwin/pingwin3.png";
//zajączek
import zajączek1 from "./images/Products/zajaczek/krolik.png";
//hipcio
import hipcio1 from "./images/Products/hipcio/hipcio1.jpg";
import hipcio2 from "./images/Products/hipcio/hipcio2.jpg";
import hipcio3 from "./images/Products/hipcio/hipcio3.jpg";
import hipcio4 from "./images/Products/hipcio/hipcio4.jpg";
//misiekBiały
import misiekBiały1 from "./images/Products/misiekBiały/misiekBiały1.jpg";
import misiekBiały2 from "./images/Products/misiekBiały/misiekBiały2.jpg";
import misiekBiały3 from "./images/Products/misiekBiały/misiekBiały3.jpg";
import misiekBiały4 from "./images/Products/misiekBiały/misiekBiały4.jpg";
//owieczka
import owieczka1 from "./images/Products/owieczka/owieczka1.jpg";
import owieczka2 from "./images/Products/owieczka/owieczka2.jpg";
import owieczka3 from "./images/Products/owieczka/owieczka3.jpg";
import owieczka4 from "./images/Products/owieczka/owieczka4.jpg";
import owieczka5 from "./images/Products/owieczka/owieczka5.jpg";
//piesek
import piesek1 from "./images/Products/piesek/piesek1.jpg";
import piesek2 from "./images/Products/piesek/piesek2.jpg";
import piesek3 from "./images/Products/piesek/piesek3.jpg";
import piesek4 from "./images/Products/piesek/piesek4.jpg";
import piesek5 from "./images/Products/piesek/piesek5.jpg";
import piesek6 from "./images/Products/piesek/piesek6.jpg";
//króliczka
import króliczka1 from "./images/Products/króliczka/króliczka1.jpg";
import króliczka2 from "./images/Products/króliczka/króliczka2.jpg";
import króliczka3 from "./images/Products/króliczka/króliczka3.jpg";
//królik
import krolik1 from "./images/Products/królik/krolik1.jpg";
import krolik2 from "./images/Products/królik/krolik2.jpg";
import krolik3 from "./images/Products/królik/krolik3.jpg";
import krolik4 from "./images/Products/królik/krolik4.jpg";
import krolik5 from "./images/Products/królik/krolik5.jpg";
import krolik6 from "./images/Products/królik/krolik6.jpg";
import krolik7 from "./images/Products/królik/krolik&kroliczka1.jpg";
import krolik8 from "./images/Products/królik/krolik&kroliczka2.jpg";
import krolik9 from "./images/Products/królik/krolik&kroliczka3.jpg";
import krolik10 from "./images/Products/królik/krolik&kroliczka4.jpg";
//ośmiorniczka
import osmiorniczka1 from "./images/Products/ośmiorniczka/osmiorniczka1.jpg";
import osmiorniczka2 from "./images/Products/ośmiorniczka/osmiorniczka2.jpg";
import osmiorniczka3 from "./images/Products/ośmiorniczka/osmiorniczka3.jpg";
import osmiorniczka4 from "./images/Products/ośmiorniczka/osmiorniczka4.jpg";
import osmiorniczka5 from "./images/Products/ośmiorniczka/osmiorniczka5.jpg";
//pufa
import pufa1 from "./images/Products/pufa/pufa1.jpg";
import pufa2 from "./images/Products/pufa/pufa2.jpg";
import pufa3 from "./images/Products/pufa/pufa3.jpg";
import pufa4 from "./images/Products/pufa/pufa4.jpg";
import pufa5 from "./images/Products/pufa/pufa5.jpg";
import pufa6 from "./images/Products/pufa/pufa6.jpg";
import pufa7 from "./images/Products/pufa/pufa7.jpg";
import pufa8 from "./images/Products/pufa/pufa8.jpg";
//szary kocyk
import szaryKocyk1 from "./images/Products/szaryKocyk/kocyk1.jpg";
import szaryKocyk2 from "./images/Products/szaryKocyk/kocyk2.jpg";
import szaryKocyk3 from "./images/Products/szaryKocyk/kocyk3.jpg";
import szaryKocyk4 from "./images/Products/szaryKocyk/kocyk4.jpg";
import szaryKocyk5 from "./images/Products/szaryKocyk/kocyk5.jpg";

//orderPage
import pinguinP from "./images/Products/pluszak.png";
import zajaczekP from "./images/Products/królik.png";
import owieczkaP from "./images/Products/bezTła/owieczka1-removebg-preview.png";
import kroliczkaP from "./images/Products/bezTła/króliczka1-removebg-preview.png";
import hipcioP from "./images/Products/bezTła/hipcio1-removebg-preview.png";
import bialyMisP from "./images/Products/bezTła/misiekBiały3-removebg-preview.png";
import piesekP from "./images/Products/bezTła/piesek3-removebg-preview.png";
import osmiorniczkaP from "./images/Products/bezTła/osmiorniczka1-removebg-preview.png";
import krolikP from "./images/Products/bezTła/krolik1-removebg-preview.png";
import szaryKocykP from "./images/Products/bezTła/kocyk1-removebg-preview.png";
import pufaP from "./images/Products/bezTła/pufa6-removebg-preview.png";

export const produkt = [
  {
    id: 1,
    name: "HIPCIO",
    slug: "Hipcio",
    type: "pluszak",
    price: "80 zł",
    size: "23 cm",
    wash: "Pranie - 30°",
    material: "bawełna, poliakryl, kulki silikonowe(wypełnienie)",
    ready: true,
    description:
      "Maskotka HIPCIO ręcznie wykonana na szydełku. Wykorzystane materiały (bawełna, poliakryl, kulki silikonowe) są bezpieczne nawet dla najmłodyszch. HIPCIO wygląda przyjaźnie przez co maluchy chętnie się nim bawią.",
    images: [hipcio1, hipcio2, hipcio3, hipcio4],
    url: `/hipcio`,
    img: hipcioP,
    imgOthers: hipcio1,
  },
  {
    id: 2,
    name: "BIAŁY MIŚ",
    type: "pluszak",
    price: "80 zł",
    size: "23 cm",
    wash: "Pranie - 30°",
    material: "bawełna, poliakryl, kulki silikonowe(wypełnienie)",
    ready: true,
    description:
      "Maskotka BIAŁY MIŚ ręcznie wykonana na szydełku. Wykorzystane materiały (bawełna, poliakryl, kulki silikonowe) są bezpieczne nawet dla najmłodyszch. MIŚ wygląda przyjaźnie przez co maluchy chętnie się nim bawią.",
    images: [misiekBiały1, misiekBiały2, misiekBiały3, misiekBiały4],
    url: `/bialyMis`,
    img: bialyMisP,
    imgOthers: misiekBiały1,
  },
  {
    id: 3,
    name: "KRÓLICZKA",
    type: "pluszak",
    price: "50 zł",
    size: "31 cm",
    wash: "Pranie - 30°",
    material: "bawełna, poliakryl, kulki silikonowe(wypełnienie)",
    ready: true,
    description:
      "Maskotka KRÓLICZKA ręcznie wykonana na szydełku. Wykorzystane materiały (bawełna, poliakryl, kulki silikonowe) są bezpieczne nawet dla najmłodyszch. KRÓLICZKA wygląda przyjaźnie przez co maluchy chętnie się nią bawią.",
    images: [
      króliczka1,
      króliczka2,
      króliczka3,
      krolik7,
      krolik8,
      krolik9,
      krolik10,
    ],
    url: `/kroliczka`,
    img: kroliczkaP,
    imgOthers: króliczka1,
  },
  {
    id: 4,
    name: "KRÓLIK",
    type: "pluszak",
    price: "50 zł",
    size: "31 cm",
    wash: "Pranie - 30°",
    material: "bawełna, poliakryl, kulki silikonowe(wypełnienie)",
    ready: true,
    description:
      " Maskotka KRÓLIK ręcznie wykonana na szydełku. Wykorzystane materiały (bawełna, poliakryl, kulki silikonowe) są bezpieczne nawet dla najmłodyszch. KRÓLIK wygląda przyjaźnie przez co maluchy chętnie się nim bawią.",
    images: [
      krolik1,
      krolik2,
      krolik3,
      krolik4,
      krolik5,
      krolik6,
      krolik7,
      krolik8,
      krolik9,
    ],
    url: `/krolik`,
    img: krolikP,
    imgOthers: krolik1,
  },
  {
    id: 5,
    name: "OŚMIORNICZKA",
    type: "pluszak",
    price: "50 zł",
    size: "18 cm",
    wash: "Pranie - 30°",
    material: "bawełna, poliakryl, kulki silikonowe, grzechotka (wypełnienie)",
    ready: true,
    description:
      "Maskotka OŚMIORNICZKA ręcznie wykonana na szydełku. Wykorzystane materiały (bawełna, poliakryl, kulki silikonowe, grzechotka) są bezpieczne nawet dla najmłodyszch. OŚMIORNICZKA wygląda przyjaźnie przez co maluchy chętnie się nią bawią. Świetnie nadaję się do przymocowania przy wózku lub kołyski dziecka.",
    images: [
      osmiorniczka1,
      osmiorniczka2,
      osmiorniczka3,
      osmiorniczka4,
      osmiorniczka5,
    ],
    url: `/osmiorniczka`,
    img: osmiorniczkaP,
    imgOthers: osmiorniczka1,
  },
  {
    id: 6,
    name: "OWIECZKA",
    type: "pluszak",
    price: "50 zł",
    size: "28 cm",
    wash: "Pranie - 30°",
    material: "bawełna, poliakryl, poliester kulki silikonowe (wypełnienie)",
    ready: true,
    description:
      "Maskotka OWIECZKA ręcznie wykonana na szydełku. Wykorzystane materiały (bawełna, poliakryl, poliester, kulki silikonowe) są bezpieczne nawet dla najmłodyszch. OWIECZKA wygląda przyjaźnie przez co maluchy chętnie się nią bawią.",
    images: [owieczka1, owieczka2, owieczka3, owieczka4, owieczka5],
    url: `/owieczka`,
    img: owieczkaP,
    imgOthers: owieczka1,
  },
  {
    id: 7,
    name: "PIESEK",
    type: "pluszak",
    price: "150 zł",
    size: "53 cm",
    wash: "Pranie - 30°",
    material: "poliester, kulki silikonowe (wypełnienie)",
    ready: true,
    description:
      "Maskotka PIESEK ręcznie wykonana na szydełku. Wykorzystane materiały (poliester, kulki silikonowe) są bezpieczne nawet dla najmłodyszch. Pluszak posiada również elementy tzw. bezpieczne oczka. PIESEK wygląda przyjaźnie przez co maluchy chętnie się nią bawią.",
    images: [piesek1, piesek2, piesek3, piesek4, piesek5, piesek6],
    url: `/piesek`,
    img: piesekP,
    imgOthers: piesek1,
  },
  {
    id: 8,
    name: "PINGWIN",
    type: "pluszak",
    price: "50 zł",
    size: "15 cm",
    wash: "Pranie - 30°",
    material: "bawełna, poliakryl, kulki silikonowe(wypełnienie)",
    ready: false,
    description:
      "Maskotka PINGWIN ręcznie wykonana na szydełku. Wykorzystane materiały (bawełna, poliakryl, kulki silikonowe) są bezpieczne nawet dla najmłodyszch. PINGWIN wygląda przyjaźnie przez co maluchy chętnie się nią bawią.",
    images: [pinguin1, pinguin2, pinguin3],
    url: `/pingwin`,
    img: pinguinP,
    imgOthers: pinguin1,
  },
  {
    id: 9,
    name: "ZAJĄCZEK",
    type: "pluszak",
    price: "150 zł",
    size: "53 cm",
    wash: "Pranie - 30°",
    material: "poliester, kulki silikonowe (wypełnienie)",
    ready: false,
    description:
      "Maskotka ZAJĄCZEK ręcznie wykonana na szydełku. Wykorzystane materiały (poliester, kulki silikonowe) są bezpieczne nawet dla najmłodyszch. Pluszak posiada również elementy tzw. bezpieczne oczka. ZAJĄCZEK wygląda przyjaźnie przez co maluchy chętnie się nią bawią.",
    images: [zajączek1, zajączek1, zajączek1],
    url: `/zajaczek`,
    img: zajaczekP,
    imgOthers: zajączek1,
  },
  {
    id: 10,
    name: "PUFA",
    type: "pufy",
    price: "200 zł",
    size: "śred. 45 cm, wys. 22 cm",
    wash: "Pranie - ręczne",
    material: "sznurek bawełniany z rdzeniem poliestrowym",
    ready: false,
    description:
      "PUFA ręcznie wykonany na szydełku. Wykorzystane materiały (sznurek bawełniany z rdzeniem poliestrowym) są bezpieczne nawet dla najmłodyszch. PUFA idealnie sprawdza się w salonie lub sypialni jako wygodne siedzisko oraz dekoracja wnętrza.",
    images: [pufa1, pufa2, pufa3, pufa4, pufa5, pufa6, pufa7, pufa8],
    url: `/pufa`,
    img: pufaP,
    imgOthers: pufa1,
  },
  {
    id: 11,
    name: "SZARY KOCYK",
    type: "koce",
    price: "70 zł",
    size: "75 cm x 55 cm",
    wash: "Pranie - 30°",
    material: "bawełna, poliester",
    ready: false,
    description:
      "SZARY KOCYK ręcznie wykonany na szydełku. Wykorzystane materiały (bawełna, poliakryl) są bezpieczne nawet dla najmłodyszch. SZARY KOCYK jest milutki i cieplutki, świetnie otuli maluchy do snu.",
    images: [szaryKocyk1, szaryKocyk2, szaryKocyk3, szaryKocyk4, szaryKocyk5],
    url: `/szaryKocyk`,
    img: szaryKocykP,
    imgOthers: szaryKocyk1,
  },
];
