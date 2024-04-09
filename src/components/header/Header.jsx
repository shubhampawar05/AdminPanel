import React from "react";
import "./style.css";
import { CgSearch } from "react-icons/cg";
import { FiSun } from "react-icons/fi";
import { CgMenu } from "react-icons/cg";

const Header = () => {
  return (
    <div className="header">
      <div className="searchInput">
        <div>
          <input type="text" placeholder="Search..." />
          <CgSearch />
        </div>
      </div>
      <div className="headerIcons">
        <FiSun />
        <CgMenu />
        <div className="profilephoto">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
