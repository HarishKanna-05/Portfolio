import React from "react";
import Landing from "./Landing";
import Header from "./Header";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
function Home() {
  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Download PDF function
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "../../public/resume.pdf";
    link.download = "Harish_Kanna_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background animation */}
      <Landing />

      {/* Header - only on home page */}
      <Header />

      {/* Main content overlay */}
      <div className="relative z-10 h-full w-full flex flex-col justify-center max-w-7xl mx-auto px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 drop-shadow-2xl text-white">
            I'm Harish Kanna
          </h1>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-light mb-8 drop-shadow-lg text-white opacity-90">
            Web Developer
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mb-16 drop-shadow-lg text-white opacity-80 leading-relaxed">
            As a creative developer, I craft digital products that not only work
            seamlessly but also leave a lasting impression
          </p>
          <div className="flex flex-wrap gap-6">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-2 bg-violet-600 rounded-full text-white font-bold "
            >
              View Projects
            </button>
            <button
              onClick={downloadResume}
              className="px-6 py-2 bg-white  rounded-full text-black font-bold "
            >
              Resume
            </button>
          </div>
        </div>
      </div>

      {/* Social media box - only on first page */}
      <div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-95 backdrop-blur-xl rounded-full shadow-2xl border border-gray-200 border-opacity-20"
        style={{
          zIndex: 99999,
          pointerEvents: "auto",
        }}
      >
        <div className="flex items-center justify-center space-x-8 px-10 py-2">
          {/* LinkedIn */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(
                "https://www.linkedin.com/in/harishkannaa/",
                "_blank"
              );
            }}
          >
            <FaLinkedinIn className="w-6 h-6 text-black" />
          </button>

          {/* GitHub */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open("https://github.com/HarishKanna-05", "_blank");
            }}
          >
            <FaGithub className="w-6 h-6 text-black" />
          </button>

          {/* Email */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.location.href = "mailto:harishkannaaravindan@gmail.com";
            }}
          >
            <BiLogoGmail className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
