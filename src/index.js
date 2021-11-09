import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import configureProductStore from "./hook-store/product-store";
import configureCounterStore from "./hook-store/counter-store";

import "./index.css";
import App from "./App";

configureProductStore();
configureCounterStore();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
