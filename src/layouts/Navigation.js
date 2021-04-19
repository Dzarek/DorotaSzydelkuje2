import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

import icon from "../images/icon2.png";

class Navigation extends Component {
  state = {
    active: true,
  };

  render() {
    const list = [
      { name: "start", path: "/", exact: true },
      { name: "kup gotowe", path: "/buyNow" },
      { name: "na zamówienie", path: "/order" },
      { name: "o mnie", path: "/aboutMe" },
      { name: "kontakt", path: "/contact" },
    ];

    const menu = list.map((item) => (
      <li key={item.name}>
        <NavLink
          onClick={() => this.setState({ active: !this.state.active })}
          to={item.path}
          exact={item.exact ? item.exact : false}
        >
          <img className="iconNav" src={icon} alt="icon" />
          {item.name}
        </NavLink>
      </li>
    ));

    return (
      <>
        <div
          className="burger"
          onClick={() => this.setState({ active: !this.state.active })}
        >
          {this.state.active ? (
            <i className="fas fa-bars"></i>
          ) : (
            <i className="fas fa-arrow-up off"></i>
          )}
        </div>
        <nav className={!this.state.active ? "main" : "main off"}>
          <ul>{menu}</ul>
        </nav>
      </>
    );
  }
}

export default Navigation;
