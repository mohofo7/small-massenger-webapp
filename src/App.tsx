import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { useMediaQuery } from "./utils/useMediaQuery";
import "./theme/main.scss";

const App: React.FC = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  return (
    <Router>
      {/*{!isSmallScreen && <SideBar />}*/}
      <Routes small={isSmallScreen} />
    </Router>
  );
};

export default App;
