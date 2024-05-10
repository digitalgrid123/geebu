// App.js
import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import About from "./components/About";
import Point from "./components/Point";
import Approach from "./components/Approach";
import Product from "./components/Product";
import Benefit from "./components/Benefit";
import Contact from "./components/Contact";
// Import other components here

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <Menu />
        </div>
      </div>
      <main className="main-content">
        <div className="row">
          <div className="col-md-10 offset-md-2 padding-zero">
            <About />
            <Point />
            <Approach />
            <Product />
            <Benefit />
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
