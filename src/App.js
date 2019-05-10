import React from "react";
import "./config/ReactotronConfig";

import { Provider } from "react-redux";
import store from "./store";
import Routes from "./routes";
import "./styles.css";
import "font-awesome/css/font-awesome.css";

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
