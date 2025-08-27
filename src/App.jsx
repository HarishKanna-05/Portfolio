import React from "react";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Ribbon from "./components/Ribbon";

function App() {
  return (
    <div className="w-full">
      {/* Home Section with Header (only on first page) */}
      <Home />

      {/* Skills Section */}
      <Skills />

      {/* Ribbon between Skills and Projects */}
      <Ribbon gradientType="blue-purple" />

      {/* Projects Section */}
      <Projects />

      {/* Ribbon between Projects and Contact */}
      <Ribbon gradientType="orange-red" />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default App;
