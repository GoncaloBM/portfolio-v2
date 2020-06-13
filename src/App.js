import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { MainSection } from "./components/mainsection/MainSection";
import { AboutSection } from "./components/aboutsection/AboutSection";
import { ProjectsSection } from './components/projectssection/ProjectsSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <AboutSection/>
      <ProjectsSection/>
    </div>
  );
}

export default App;
