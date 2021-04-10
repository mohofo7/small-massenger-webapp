import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { IStore } from "./store/configStore";
import { Theme } from "./store/reducer/theme";
import { Routes } from "./routes";
import DesktopContainer from "./pages/DesktopContainer";
import { useMediaQuery } from "./utils/useMediaQuery";
import "./theme/main.scss";

const App: React.FC = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const theme = useSelector<IStore, Theme>((state) => state.theme);

  useEffect(() => {
    document.documentElement.className = "";
    document.documentElement.classList.add(`theme_${theme.toLowerCase()}`);
  }, [theme]);

  return (
    <div>
      {isSmallScreen && <Routes />}
      {!isSmallScreen && <DesktopContainer />}
    </div>
  );
};

export default App;
