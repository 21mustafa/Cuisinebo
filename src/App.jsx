import { useState } from "react";
import { AboutUs } from "./aboutus/AboutUs";
import "./App.scss";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { Menu } from "./menu/Menu";

function App() {
  return (
    <>
      <Header />

      <AboutUs />

      <Menu />
      <Footer />
    </>
  );
}

export default App;
