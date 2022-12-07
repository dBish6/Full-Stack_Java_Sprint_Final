import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navContainer">
      <div className="LogoContainer">
        <img
          src="blackRavenLogo-DesignEvo.png"
          alt="blackRavenLogo-DesignEvo.png"
        />
        <p>Raven</p>
        <p>Blacksmith Co.</p>
      </div>
      <div className="topBar">
        <NavLink to="/home/swords">Swords</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/support">Support</NavLink>
      </div>
      <div className="bottomBar"></div>
    </div>
  );
};

export default Navigation;
