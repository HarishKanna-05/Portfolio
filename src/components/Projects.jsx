import React, { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaPlay,
  FaCode,
  FaStar,
} from "react-icons/fa";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projectsData = [
    {
      id: 1,
      title: "Local LLM Financial Statement Assistant",
      description:
        "Secure PDF analysis with local Ollama LLM, LangChain RAG, and ChromaDB for natural language queries on financial statements.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      technologies: [
        "Ollama",
        "LangChain",
        "ChromaDB",
        "Python",
        "PDF Analysis",
      ],
      category: "ai",
      githubUrl: "https://github.com/HarishKanna-05/Local-llm-RAG",
      liveUrl: "#",
      featured: true,
      status: "completed",
    },
    {
      id: 2,
      title: "Digital Influencers Marketing Assistant",
      description:
        "Streamlit app integrating Gemini API & YouTube Data API for SME influencer marketing in Tamil Nadu with data-driven insights.",
      image:
        "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=400&fit=crop",
      technologies: [
        "Streamlit",
        "Gemini API",
        "YouTube API",
        "Python",
        "Data Analysis",
      ],
      category: "ai",
      githubUrl: "https://github.com/HarishKanna-05/Influencer-Recom",
      liveUrl: "#",
      featured: true,
      status: "completed",
    },
    {
      id: 3,
      title: "Event Management Platform",
      description:
        "Full-stack React, MongoDB, Express app with TailwindCSS & WebGL for centralized event scheduling and management.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      technologies: ["React", "MongoDB", "Express", "TailwindCSS", "WebGL"],
      category: "fullstack",
      githubUrl: "https://github.com/HarishKanna-05/Event-management",
      liveUrl: "#",
      featured: true,
      status: "completed",
    },
    {
      id: 4,
      title: "Porsche Website (Frontend)",
      description:
        "Responsive React + TailwindCSS website clone showcasing premium automotive design with modern UI/UX principles.",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
      technologies: ["React", "TailwindCSS", "JavaScript", "Responsive Design"],
      category: "frontend",
      githubUrl: "https://github.com/HarishKanna-05/Porsche-website",
      liveUrl: "#",
      featured: false,
      status: "completed",
    },
    {
      id: 5,
      title: "Bookstore",
      description:
        "MERN stack bookstore application with comprehensive authentication, user management, and book inventory system.",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
      technologies: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Authentication",
      ],
      category: "fullstack",
      githubUrl: "https://github.com/HarishKanna-05/Bookstore",
      liveUrl: "#",
      featured: false,
      status: "completed",
    },
    // {
    //   id: 6,
    //   title: "AI Wardrobe Assistant",
    //   description:
    //     "Streamlit application that suggests clothing combinations from uploaded images using Gemini API for intelligent wardrobe recommendations.",
    //   image:
    //     "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    //   technologies: [
    //     "Streamlit",
    //     "Gemini API",
    //     "Python",
    //     "Image Upload",
    //     "AI Assistant",
    //   ],
    //   category: "ai",
    //   githubUrl: "https://github.com/HarishKanna-05/ai-wardrobe",
    //   liveUrl: "#",
    //   featured: true,
    //   status: "completed",
    // },
  ];

  const categories = [
    { id: "all", label: "All Projects", count: projectsData.length },
    {
      id: "fullstack",
      label: "Full Stack",
      count: projectsData.filter((p) => p.category === "fullstack").length,
    },
    {
      id: "frontend",
      label: "Frontend",
      count: projectsData.filter((p) => p.category === "frontend").length,
    },
    {
      id: "ai",
      label: "AI/ML",
      count: projectsData.filter((p) => p.category === "ai").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  const ProjectCard = ({ project }) => (
    <div className="group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-violet-500/50 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10">
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-3 left-3 z-20 flex items-center space-x-1 bg-gradient-to-r from-violet-600 to-purple-600 px-2 py-1 rounded-full text-xs font-semibold text-white">
          <FaStar size={8} />
          <span>Featured</span>
        </div>
      )}

      {/* Status Badge */}
      <div className="absolute top-3 right-3 z-20">
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            project.status === "completed"
              ? "bg-green-500/20 text-green-400 border border-green-500/30"
              : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
          }`}
        >
          {project.status === "completed" ? "Completed" : "In Progress"}
        </span>
      </div>

      {/* Project Image */}
      <div className="relative h-32 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60"></div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 bg-violet-600 hover:bg-violet-700 px-3 py-1.5 rounded-full text-white text-sm font-medium transition-all duration-300 transform hover:scale-105"
          >
            <FaPlay size={10} />
            <span>Live</span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-full text-white text-sm font-medium transition-all duration-300 transform hover:scale-105"
          >
            <FaCode size={10} />
            <span>Code</span>
          </a>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-0.5 bg-gray-800 text-gray-300 text-xs rounded-md font-medium border border-gray-700"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-0.5 bg-gray-800 text-gray-400 text-xs rounded-md font-medium border border-gray-700">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-800">
          <div className="flex space-x-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-violet-400 transition-colors duration-300"
            >
              <FaExternalLinkAlt size={14} />
            </a>
          </div>
          <span className="text-xs text-gray-500">
            {project.technologies.length} tech
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-600">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Showcasing projects that solve unique challenges with innovative
            solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/25"
                  : "bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700"
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
