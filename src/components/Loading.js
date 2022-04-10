import React from "react";
import icon from "../images/yarnBall.png";

const Loading = () => {
  return (
    <div className="loader">
      <img src={icon} alt="loading" />
      <h2>wczytywanie...</h2>
    </div>
  );
};

export default Loading;
