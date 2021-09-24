import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <div className="nab-var">
        <ul>
          <li>home</li>
          <li>facebook</li>
          <li>youtube</li>
          <li>email</li>
         </ul>
      </div>
    </div>
  );
};

export default Header;
