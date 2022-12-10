import React from "react";

// *API Services Imports*

// *Design Imports*
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import "./topHeader.css";

const TopHeader = () => {
  return (
    <header className="topHeaderContainer">
      {/* Type name from API. */}
      <h1>All Swords</h1>
      <ExpandMore />
    </header>
  );
};

export default TopHeader;
