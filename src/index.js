import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import reportWebVitals from "./reportWebVitals";
import FinalGrade from "./Components/finalgrade";
import { 
  BrowserRouter,
  Routes,
  Route,
 } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="finalGrade" element={<FinalGrade />} />
    </Routes>
    <Footer />
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
