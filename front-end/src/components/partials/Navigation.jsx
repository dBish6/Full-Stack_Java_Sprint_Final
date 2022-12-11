import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

// *Custom Hooks Imports*

// *API Services Imports*

// *Modal Import"
import PasswordModal from "../modals/PasswordModal";

// *Design Imports*
import blackRavenLogo from "../../assets/images/blackRavenLogo-DesignEvo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartTwoTone";

import "./partials.css";

const Navigation = () => {
  const [isClickedFirstLink, toggleIsClickedFirstLink] = useState(true);
  const [isClickedSecondLink, toggleIsClickedSecondLink] = useState(false);
  const [isClickedThirdLink, toggleIsClickedThirdLink] = useState(false);

  const [isClickedLongSwords, toggleIsClickedLongSwords] = useState(false);
  const [isClickedShortSwords, toggleIsClickedShortSwords] = useState(false);
  const [isClickedMaces, toggleIsClickedMaces] = useState(false);
  const location = useLocation();

  // Stops bottom links from being active when users goes to all swords, about, support.
  useEffect(() => {
    if (
      location.pathname === "/home" ||
      location.pathname === "/home/about" ||
      location.pathname === "/home/support"
    ) {
      toggleIsClickedLongSwords(false);
      toggleIsClickedShortSwords(false);
      toggleIsClickedMaces(false);
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
              onClick={() => {
                toggleIsClickedFirstLink(true);
                toggleIsClickedSecondLink(false);
                toggleIsClickedThirdLink(false);
              }}
            >
              Swords
            </NavLink>
            <NavLink
              to="/home/about"
              className={isClickedSecondLink ? "activateLink" : ""}
              onClick={() => {
                toggleIsClickedSecondLink(true);
                toggleIsClickedFirstLink(false);
                toggleIsClickedThirdLink(false);
              }}
            >
              About
            </NavLink>
            <NavLink
              to="/home/support"
              className={isClickedThirdLink ? "activateLink" : ""}
              onClick={() => {
                toggleIsClickedThirdLink(true);
                toggleIsClickedFirstLink(false);
                toggleIsClickedSecondLink(false);
              }}
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
              onClick={() => {
                toggleIsClickedLongSwords(true);
                toggleIsClickedShortSwords(false);
                toggleIsClickedMaces(false);
              }}
            >
              Long Swords
            </NavLink>
            <NavLink
              to="/home/shortSwords_Daggers"
              className={isClickedShortSwords ? "activeLink" : ""}
              onClick={() => {
                toggleIsClickedLongSwords(false);
                toggleIsClickedShortSwords(true);
                toggleIsClickedMaces(false);
              }}
            >
              Short Swords/Daggers
            </NavLink>
            <NavLink
              to="/home/maces"
              className={isClickedMaces ? "activeLink" : ""}
              onClick={() => {
                toggleIsClickedLongSwords(false);
                toggleIsClickedShortSwords(false);
                toggleIsClickedMaces(true);
              }}
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
