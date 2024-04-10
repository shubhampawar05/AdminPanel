import React from "react";
import "./style.css";
import { CgSearch } from "react-icons/cg";
import { FiSun } from "react-icons/fi";
import { CgMenu } from "react-icons/cg";
import { GrLanguage } from "react-icons/gr";

const Header = () => {
  return (
    <div className="header">
      <div className="header_searchInput">
        <div>
          <input type="text" placeholder="Search..." />
          <CgSearch />
        </div>
      </div>
      <div className="header_headerIcons">
        <div className="header_Div">
          {" "}
          <GrLanguage />
          English
        </div>
        <div  className="header_Div">
          {" "}
          <FiSun />
        </div>
        <div  className="header_Div">
          <CgMenu />
        </div>
        <div  className="header_Div">
          <div className="header_profilephoto">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
