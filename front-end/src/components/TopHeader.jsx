import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";

// *API Services Imports*

// *Design Imports*
import { ExpandMore } from "@mui/icons-material";
import "./topHeader.css";

const TopHeader = () => {
  const [dropdown, toggleDropdown] = useState(false);
  const flipRef = useRef(null);
  // TODO: This is probably where we can use useLocation; the descriptions.
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <header className="topHeaderContainer">
        {/* Type name from API. */}
        <h1>All Swords</h1>
        {/* {console.log(flipRef.current.className)} */}
        <div>
          <ExpandMore
            className={dropdown ? "expandLess" : ""}
            ref={flipRef}
            onClick={() => {
              !flipRef.current.classList.contains("expandLess")
                ? toggleDropdown(true)
                : toggleDropdown(false);
            }}
            // WHY DON'T THIS WORK!
            title="More Information"
          />
          <p>More Information</p>
        </div>
      </header>
      {dropdown && (
        <div className="dropdownContainer">
          {location.pathname === "/home" ? (
            <div className="dropdown">
              <div className="dropdownContent">
                <h3>Background</h3>
                <p className="description">
                  A sword is an edged, bladed weapon intended for manual cutting
                  or thrusting. Its blade, longer than a knife or dagger, is
                  attached to a hilt and can be straight or curved. A thrusting
                  sword tends to have a straighter blade with a pointed tip. A
                  slashing sword is more likely to be curved and to have a
                  sharpened cutting edge on one or both sides of the blade. Many
                  swords are designed for both thrusting and slashing. The
                  precise definition of a sword varies by historical epoch and
                  geographic region. Historically, the sword developed in the
                  Bronze Age, evolving from the dagger; the earliest specimens
                  date to about 1600 BC. The later Iron Age sword remained
                  fairly short and without a crossguard. The spatha, as it
                  developed in the Late Roman army, became the predecessor of
                  the European sword of the Middle Ages, at first adopted as the
                  Migration Period sword, and only in the High Middle Ages,
                  developed into the classical arming sword with crossguard.
                </p>
                <div className="sincerely">
                  <p>Sincerely, Wikipedia</p>
                </div>
              </div>
            </div>
          ) : undefined}
        </div>
      )}
    </>
  );
};

export default TopHeader;
