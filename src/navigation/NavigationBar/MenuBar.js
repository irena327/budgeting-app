import React from "react";
import RightMenuBar from "./RightMenuBar.js";
import LeftMenuBar from "./LeftMenuBar.js";
import "./NavigationBar.css";

const MenuBar = () => {
  return (
    <nav className="menuBar">
      <div className="menuCon">
        <div className="leftMenu">
          <LeftMenuBar />
        </div>
        <div className="rightMenu">
          <RightMenuBar />
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;