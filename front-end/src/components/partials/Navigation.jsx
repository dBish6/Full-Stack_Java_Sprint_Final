import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

// *Modal Import"
import PasswordModal from "../modals/PasswordModal";

// *Design Imports*
import blackRavenLogo from "../../assets/images/blackRavenLogo-DesignEvo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartTwoTone";

import "./partials.css";

const Navigation = () => {
  const [isClickedFirstLink, toggleIsClickedFirstLink] = useState(false);
  const [isClickedSecondLink, toggleIsClickedSecondLink] = useState(false);
  const [isClickedThirdLink, toggleIsClickedThirdLink] = useState(false);

  const [isClickedLongSwords, toggleIsClickedLongSwords] = useState(false);
  const [isClickedShortSwords, toggleIsClickedShortSwords] = useState(false);
  const [isClickedDaggers, toggleIsClickedDaggers] = useState(false);
  const [isClickedMaces, toggleIsClickedMaces] = useState(false);
  const location = useLocation();

  // Stops bottom links from being active when the user clicks on the top bar links.
  useEffect(() => {
    if (
      location.pathname === "/home" ||
      location.pathname === "/home/about" ||
      location.pathname === "/home/support"
    ) {
      toggleIsClickedLongSwords(false);
      toggleIsClickedShortSwords(false);
      toggleIsClickedDaggers(false);
      toggleIsClickedMaces(false);
    }

    // Top Bar Links
    if (location.pathname === "/home") {
      toggleIsClickedFirstLink(true);
      toggleIsClickedSecondLink(false);
      toggleIsClickedThirdLink(false);
    } else if (location.pathname === "/home/about") {
      toggleIsClickedFirstLink(false);
      toggleIsClickedSecondLink(true);
      toggleIsClickedThirdLink(false);
    } else if (location.pathname === "/home/support") {
      toggleIsClickedFirstLink(false);
      toggleIsClickedSecondLink(false);
      toggleIsClickedThirdLink(true);
    }

    // Bottom Bar Links
    if (location.pathname === "/home/longSwords") {
      // Keeps sword tab active when user clicks on bottom links for certain swords.
      toggleIsClickedFirstLink(true);
      toggleIsClickedSecondLink(false);
      toggleIsClickedThirdLink(false);

      toggleIsClickedLongSwords(true);
      toggleIsClickedShortSwords(false);
      toggleIsClickedDaggers(false);
      toggleIsClickedMaces(false);
    } else if (location.pathname === "/home/shortSwords") {
      toggleIsClickedFirstLink(true);
      toggleIsClickedSecondLink(false);
      toggleIsClickedThirdLink(false);

      toggleIsClickedLongSwords(false);
      toggleIsClickedShortSwords(true);
      toggleIsClickedDaggers(false);
      toggleIsClickedMaces(false);
    } else if (location.pathname === "/home/daggers") {
      toggleIsClickedFirstLink(true);
      toggleIsClickedSecondLink(false);
      toggleIsClickedThirdLink(false);

      toggleIsClickedLongSwords(false);
      toggleIsClickedShortSwords(false);
      toggleIsClickedDaggers(true);
      toggleIsClickedMaces(false);
    } else if (location.pathname === "/home/maces") {
      toggleIsClickedFirstLink(true);
      toggleIsClickedSecondLink(false);
      toggleIsClickedThirdLink(false);

      toggleIsClickedLongSwords(false);
      toggleIsClickedShortSwords(false);
      toggleIsClickedDaggers(false);
      toggleIsClickedMaces(true);
    }
  }, [location.pathname]);

  return (
    <div className="navContainer">
      <div className="logoContainer">
        <NavLink to="/home">
          <img src={blackRavenLogo} alt="blackRavenLogo-DesignEvo.png" />
        </NavLink>
        <div>
          <p>Raven</p>
          <p>Blacksmith Co.</p>
        </div>
      </div>
      <div className="barsContainer">
        <div className="topBar">
          <div>
            <NavLink
              to="/home"
              className={isClickedFirstLink ? "activateLink" : ""}
            >
              Swords
            </NavLink>
            <NavLink
              to="/home/about"
              className={isClickedSecondLink ? "activateLink" : ""}
            >
              About
            </NavLink>
            <NavLink
              to="/home/support"
              className={isClickedThirdLink ? "activateLink" : ""}
            >
              Support
            </NavLink>
          </div>
          <div className="topBarRight">
            <PasswordModal />
            <NavLink to="/login">login</NavLink>
            <p>|</p>
            <NavLink to="/register">Sign Up</NavLink>
          </div>
        </div>
        <div className="bottomBar">
          <div>
            <NavLink
              to="/home/longSwords"
              className={isClickedLongSwords ? "activeLink" : ""}
            >
              Long Swords
            </NavLink>
            <NavLink
              to="/home/shortSwords"
              className={isClickedShortSwords ? "activeLink" : ""}
            >
              Short Swords
            </NavLink>
            <NavLink
              to="/home/daggers"
              className={isClickedDaggers ? "activeLink" : ""}
            >
              Daggers
            </NavLink>
            <NavLink
              to="/home/maces"
              className={isClickedMaces ? "activeLink" : ""}
            >
              Maces
            </NavLink>
          </div>
          <div className="bottomBarRight">
            <input type="text" name="search" placeholder="Search" />
            <ShoppingCartIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
