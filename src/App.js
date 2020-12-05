import React, { useEffect, useRef } from "react";
import { visitors } from "./api/visitors";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { MainSection } from "./components/mainsection/MainSection";
import { AboutSection } from "./components/aboutsection/AboutSection";
import { ProjectsSection } from "./components/projectssection/ProjectsSection";
import { EndSection } from "./components/endsection/EndSection";
import { SkillsSection } from "./components/skillssection/SkillsSection";
import { ContactSection } from "./components/contactsection/ContactSection";

function App() {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToContent = (a) => {
    if (a === 0) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (a === 1) {
      skillRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (a === 2) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (a === 3) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    visitors(1);
  }, []);

  return (
    <div className="App">
      <Navbar scrollToContent={scrollToContent} />
      <MainSection />
      <AboutSection ref={aboutRef} />
      <SkillsSection ref={skillRef} />
      <ProjectsSection ref={projectRef} />
      <ContactSection ref={contactRef} scrollToContent={scrollToContent} />
      <EndSection />
    </div>
  );
}

export default App;
