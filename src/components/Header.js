import React from "react";
import "../css/header.css";
import hulu from "../img/hulu2.png";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SeacrhIcon from "@material-ui/icons/Search";
import PersonOutLineIcon from "@material-ui/icons/PersonOutline";

function Header() {
  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icon header__icon-active">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className="header__icon">
          <FlashOnIcon />
          <p>Trending</p>
        </div>
        <div className="header__icon">
          <LiveTvIcon />
          <p>Verified</p>
        </div>
        <div className="header__icon">
          <VideoLibraryIcon />
          <p>Collections</p>
        </div>
        <div className="header__icon">
          <SeacrhIcon />
          <p>Search</p>
        </div>
        <div className="header__icon">
          <PersonOutLineIcon /> 
          <p>Accounts</p>
        </div>
      </div>
      <img src={hulu} alt="" />
    </div>
  );
}

export default Header;
