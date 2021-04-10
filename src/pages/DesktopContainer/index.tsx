import React from "react";
import { SideBarRoutes, DesktopRoutes } from "src/routes";
import "./style.scss";

const DesktopContainer: React.FC = () => {
  return (
    <div className="desktop-container">
      <div className="desktop-container__side-bar">
        <SideBarRoutes />
      </div>
      <div className="desktop-container__main">
        <DesktopRoutes />
      </div>
    </div>
  );
};

export default DesktopContainer;
