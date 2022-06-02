import React from "react";
import "./assets/main.css";
import { HomePage } from "./main-components/home-page/HomePage";
import Footer from "./side-components/footer/Footer";
import Header from "./side-components/header/Header";

const App = () => {
  return (
    <div style={{ padding: "30px" }}>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
