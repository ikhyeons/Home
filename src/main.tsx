import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { RecoilRoot } from "recoil";
import BabylonWrap from "./Components/babylon/BabylonWrap";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <BabylonWrap />
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
