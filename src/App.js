import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { MainSection } from "./components/mainsection/MainSection";
import { AboutSection } from "./components/aboutsection/AboutSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <AboutSection/>
    </div>
  );
}

export default App;
