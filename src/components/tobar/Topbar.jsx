import React from "react";
import "./topbar.css";

import { NotificationsNone, Language, Settings } from "@mui/icons-material";

//
//
export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Kavyadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <NotificationsNone />
            <span className="iconsBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
            <Language />
            <span className="iconsBadge">3</span>
          </div>
          <div className="topbarIconsContainer">
            <Settings />
            <span className="iconsBadge">2</span>
          </div>
          <img
            src="https://m.media-amazon.com/images/I/41CPFR668OL._AC_SY780_.jpg"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};
