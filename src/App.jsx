import React, { Component }  from 'react';

import Intro from "./components/intro/Intro.jsx";
import About from "./components/about/About.jsx";
import ProductList from "./components/productList/ProductList.jsx"
import Contact from "./components/contact/Contact.jsx"
import Toggle from "./components/toggle/Toggle.jsx";
import { useContext } from "react";
import { ThemeContext } from "./context.js";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  //style={{ backgroundColor:darkMode ? "#222" : "red", color: "white" }}
  return (
    <div style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>
      <Intro />
      <About />
      <ProductList />   
      <Contact />
      <Toggle />
    </div>
  ); 
};

export default App;