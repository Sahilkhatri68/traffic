import React from "react";
import { BsGraphUp } from "react-icons/bs";
import { MdOutlineMonitor } from "react-icons/md";
import { HiDocumentReport } from "react-icons/hi";
import { GoSettings } from "react-icons/go";
import { AiOutlineFileSearch } from "react-icons/ai";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import ComputerIcon from "@mui/icons-material/Computer";
import "../assets/css/sidebar.css";
function Sidebar() {
  return (
    <div>
      <div className="itemsContainer">
        <div className="leftsidebar">
          <div className="riconsCont">
            <BsGraphUp className="rricons" />
          </div>
          <div className="sidetext">Dashboard</div>
        </div>
        <div className="leftsidebar">
          <div className="riconsCont">
            <ComputerIcon className="rricons" />
          </div>
          <div className="sidetext">Live</div>
          <div className="sidetext">Monitoring</div>
        </div>
        <div className="leftsidebar">
          <div className="riconsCont">
            <MdOutlineMonitor className="rricons" />
          </div>
          <div className="sidetext">Violations </div>
        </div>
        <div className="leftsidebar">
          <div className="riconsCont">
            <AiOutlineFileSearch className="rricons" />
          </div>
          <div className="sidetext">Search</div>
        </div>
        <div className="leftsidebar">
          <div className="riconsCont">
            <HiDocumentReport className="rricons" />
          </div>
          <div className="sidetext">Reports</div>
        </div>
        <div className="leftsidebar">
          <div className="riconsCont">
            <GoSettings className="rricons" />
          </div>
          <div className="sidetext">Admin</div>
          <div className="sidetext">Settings</div>
        </div>
        <div className="leftsidebar">
          <div className="riconsCont">
            <LiveHelpIcon className="rricons" />
          </div>
          <div className="sidetext">About</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
