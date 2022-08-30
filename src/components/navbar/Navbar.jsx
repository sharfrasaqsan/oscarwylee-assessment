import React from "react";
import "./navbar.css";
import Logo from "../../assets/OW-Logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <button className="navbar-btn">book an eye test</button>
      </div>
      <div className="navbar-left">
        <i className="left-icon fa-solid fa-bars"></i>
        <img src={Logo} alt="avatar" className="navbar-img" />
        <div className="cart-hide" style={{ position: "relative" }}>
          <i className="icon-cart fa-solid fa-bag-shopping"></i>
          <i className="cart-number fa-solid fa-circle"></i>
          <span className="cart-total">2</span>
        </div>
      </div>

      <div className="navbar-center">
        <ul className="navbar-list">
          <li className="navbar-list-item">Glasses</li>
          <li className="navbar-list-item">Sunglasses</li>
          <li className="navbar-list-item">Locations</li>
          <li className="navbar-list-item">Eye Test Info</li>
          <li className="navbar-list-item">Offers</li>
        </ul>
      </div>

      <div className="navbar-right">
        <button className="navbar-btn">book an eye test</button>
        <div className="navbar-icons">
          <i className="icon-search fa-solid fa-magnifying-glass"></i>
          <i className="icon-profile fa-regular fa-user"></i>
          <div style={{ position: "relative" }}>
            <i className="icon-cart fa-solid fa-bag-shopping"></i>
            <i className="cart-number fa-solid fa-circle"></i>
            <span className="cart-total">2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
