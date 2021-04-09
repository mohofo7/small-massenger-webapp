import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configStore from "./store/configStore";
import { Routes, DesktopRoutes } from "./routes";
import { useMediaQuery } from "./utils/useMediaQuery";
import "./theme/main.scss";

const { persistor, store } = configStore();

const App: React.FC = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          {/*{!isSmallScreen && <SideBar />}*/}
          {isSmallScreen && <Routes />}
          {!isSmallScreen && <DesktopRoutes />}
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
