import React from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import NavBar from './navigation/NavBar';
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Educations from "./components/Educations";
//import About from "./components/About";
import Contacts from "./components/Contacts";


function App() {
  return (
    <BrowserRouter>

      <NavBar />

      <div className="container">
        <Home />
        <Projects/>
        <Experience/>
        <Educations />
        <Contacts />
      </div>
    </BrowserRouter >
  );
}

export default App;

