import React, { useState } from "react";
import avatar from "../assets/images/avatar.png";
import "./styles/Nav.css";
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = function () {
    setIsScrolled(document.documentElement.scrollTop > 100 ? true : false);
  };
  return (
    <nav className={`${isScrolled && "nav-black"} `}>
      <div className="nav-logo ">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt=""
        />
      </div>
      <div className="nav_avatar">
        <img src={avatar} alt="" />
      </div>
    </nav>
  );
}

export default Navbar;
