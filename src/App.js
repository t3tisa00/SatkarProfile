import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/profile.js";
import Skills from "./components/Skills.js";
import Projects from "./components/Projects";
import Boka from "./components/Footlast.js";

function App() {
  return (
    <div className="App">
      <Profile />
      <Skills />
      <Projects />
      <Boka />
    </div>
  );
}

export default App;
