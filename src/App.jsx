import {React, useEffect, useState} from "react";
import "./App.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

import NavbarTop from "./components/navbar/NavbarTop";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 500
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <NavbarTop />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
