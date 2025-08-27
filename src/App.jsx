import React, { memo } from "react";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Ribbon from "./components/Ribbon";

// Memoize individual components to prevent unnecessary re-renders
const MemoizedHome = memo(Home);
const MemoizedSkills = memo(Skills);
const MemoizedProjects = memo(Projects);
const MemoizedContact = memo(Contact);
const MemoizedRibbon = memo(Ribbon);

function App() {
  return (
    <div className="w-full">
      {/* Home Section with Header (only on first page) */}
      <MemoizedHome />

      {/* Skills Section */}
      <MemoizedSkills />

      {/* Ribbon between Skills and Projects */}
      <MemoizedRibbon gradientType="blue-purple" />

      {/* Projects Section */}
      <MemoizedProjects />

      {/* Ribbon between Projects and Contact */}
      <MemoizedRibbon gradientType="orange-red" />

      {/* Contact Section */}
      <MemoizedContact />
    </div>
  );
}

export default memo(App);
