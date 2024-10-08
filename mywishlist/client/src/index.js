// src/index.js
import React from "react";
import ReactDOM from "react-dom/client"; // React 18부터 ReactDOM의 import 방식이 변경되었습니다.
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // root 생성
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
