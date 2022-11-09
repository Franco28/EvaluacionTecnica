import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Listar from "./app/Listar";
import Agregar from "./app/Agregar";
import TopNav from "./components/nav/TopNav";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <TopNav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Listar />} />
          <Route path="/home" element={<Listar />} />
          <Route path="/agregar" element={<Agregar />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
