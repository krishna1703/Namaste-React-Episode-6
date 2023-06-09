import React from "react";
import { LOGO_LINK } from "../utils/constants";
import { useState } from "react";

const Header = () => {

  const [login, Setlogin] = useState("Login")


  return (
    <div className="header">
      <div className="food-logo">
        <img src={LOGO_LINK} />
      </div>
      <div>

      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="log-in" onClick={() => {
            login == "Login" ? Setlogin("Logout") : Setlogin("Login")

          }}>{login}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
