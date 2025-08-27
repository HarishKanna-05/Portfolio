import React from "react";
import coloredLogo from "../assets/colored-logo.png";

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="absolute top-2 left-0 right-0 z-50 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between w-full">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img
            src={coloredLogo}
            alt="Logo"
            className="h-16 sm:h-20 md:h-24 lg:h-28 -mt-3 sm:-mt-4 md:-mt-5 lg:-mt-6 w-auto"
          />
        </div>

        {/* Navigation in the center */}
        <nav className="bg-black bg-opacity-30 backdrop-blur-xl -mt-3 sm:-mt-4 md:-mt-5 lg:-mt-6 rounded-full px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
            {[
              { id: "home", label: "Home" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white text-xs sm:text-sm md:text-base font-medium px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full hover:bg-violet-600 hover:scale-110 transition-all hover:shadow-lg"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Empty space on the right for balance */}
        <div className="w-6 sm:w-8 md:w-10 lg:w-12"></div>
      </div>
    </header>
  );
}

export default Header;
