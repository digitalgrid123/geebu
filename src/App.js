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
        <div className="col-sm-1">
          <Menu />
        </div>
        <div className="col-sm-11 p-0">
          <main className="main-content">
            <About />
            <Point />
            <Approach />
            <Product />
            <Benefit />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
