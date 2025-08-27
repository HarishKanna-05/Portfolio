import React, { useState, useEffect } from "react";
import {
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

function Skills() {
  const [showMore, setShowMore] = useState(false);

  const skillsData = [
    { name: "Java", level: 90, icon: FaJava, color: "#f89820" },
    { name: "Python", level: 80, icon: FaPython, color: "#3776ab" },
    { name: "C++", level: 70, icon: SiCplusplus, color: "#00599c" },
    { name: "JavaScript", level: 90, icon: FaJs, color: "#f7df1e" },
    { name: "React JS", level: 90, icon: FaReact, color: "#61dafb" },
    { name: "HTML", level: 90, icon: FaHtml5, color: "#e34f26" },
    { name: "Tailwind CSS", level: 90, icon: SiTailwindcss, color: "#06b6d4" },
    { name: "Express", level: 80, icon: SiExpress, color: "#000000" },
    { name: "MongoDB", level: 80, icon: SiMongodb, color: "#47a248" },
    { name: "SQL", level: 80, icon: FaDatabase, color: "#336791" },
    { name: "GitHub", level: 90, icon: FaGithub, color: "#181717" },
  ];

  // Check if mobile view
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Get skills to display
  const displayedSkills =
    isMobile && !showMore ? skillsData.slice(0, 5) : skillsData;

  const CircularProgress = ({
    percentage,
    size = 90,
    strokeWidth = 6,
    IconComponent,
    iconColor,
  }) => {
    const [animatedPercentage, setAnimatedPercentage] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        setAnimatedPercentage(percentage);
      }, 200);
      return () => clearTimeout(timer);
    }, [percentage]);

    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = circumference;
    const strokeDashoffset =
      circumference - (animatedPercentage / 100) * circumference;

    // Render the icon component
    const IconElement = IconComponent;

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          className="transform -rotate-90 transition-all duration-1000 ease-out"
          width={size}
          height={size}
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#f3f4f6"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#8b5cf6"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
            style={{
              filter: "drop-shadow(0 4px 8px rgba(139, 92, 246, 0.3))",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <IconElement size={28} color={iconColor} className="drop-shadow-lg" />
        </div>
      </div>
    );
  };

  const SkillCard = ({ skill }) => (
    <div className="group bg-white rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="flex flex-col items-center text-center space-y-3">
        <CircularProgress
          percentage={skill.level}
          IconComponent={skill.icon}
          iconColor={skill.color}
        />
        <div>
          <h3 className="font-bold text-base text-gray-800 mb-1">
            {skill.name}
          </h3>
          <span className="text-xs text-violet-600 font-medium bg-violet-50 px-2 py-1 rounded-full">
            {skill.level}% Proficiency
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My expertise across various programming languages, frameworks, and
            technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
          {displayedSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

        {/* Show More Button - only on mobile */}
        {isMobile && (
          <div className="text-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-6 py-3 bg-violet-600 text-white font-semibold rounded-full hover:bg-violet-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
