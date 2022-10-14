import React from "react";
import "../assets/css/header.css";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { BiPowerOff } from "react-icons/bi";
// import { BsGraphUp } from "react-icons/bs";

import IconButton from "@mui/material/IconButton";
function Header() {
  return (
    <div style={{ backgroundColor: "#F9FBFB" }}>
      <div className="header">
        <div className="leftcont">
          <div>
            <IconButton aria-label="delete">
              <AiOutlineMenu className="muiicon" />
            </IconButton>
          </div>
          <div className="heaedingcont">
            <div className="heading">Vehant</div>
            <div className="lowerheading">Technology</div>
          </div>
        </div>
        <div className="rightcont">
          <div className="infodiv">
            <div>Hello, </div> &nbsp;
            <div> Poonam</div>
          </div>
          <div className="icondiv">
            <div>
              <IconButton aria-label="delete">
                <FaRegUserCircle className="muiicon" />
              </IconButton>
            </div>
            <div>
              <IconButton aria-label="delete">
                <BiPowerOff className="muiicon" style={{ fontSize: 25 }} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
