import React from "react";
import {
  FaCode,
  FaPalette,
  FaDraftingCompass,
  FaLaptopCode,
  FaDatabase,
  FaRocket,
} from "react-icons/fa";

function Ribbon({ items = [], gradientType = "blue-purple" }) {
  // Default items if none provided
  const defaultItems = [
    { text: "Website Design", icon: FaLaptopCode },
    { text: "Wireframe", icon: FaDraftingCompass },
    { text: "Frontend Dev", icon: FaCode },
    { text: "Backend Dev", icon: FaDatabase },
    { text: "UI/UX Design", icon: FaPalette },
    { text: "Deployment", icon: FaRocket },
  ];

  const ribbonItems = items.length > 0 ? items : defaultItems;

  // Different gradient configurations
  const gradients = {
    "blue-purple": {
      main: "from-indigo-500 via-violet-500 to-purple-500",
      overlay: "from-indigo-600/20 via-violet-600/20 to-purple-600/20",
      leftEdge: "from-indigo-700",
      rightEdge: "from-purple-700",
    },
    "orange-red": {
      main: "from-orange-500 via-red-500 to-pink-500",
      overlay: "from-orange-600/20 via-red-600/20 to-pink-600/20",
      leftEdge: "from-orange-700",
      rightEdge: "from-pink-700",
    },
  };

  const currentGradient = gradients[gradientType] || gradients["blue-purple"];

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-r ${currentGradient.main} py-4`}
    >
      {/* Ribbon Background Pattern */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${currentGradient.overlay}`}
      ></div>

      {/* Moving Ribbon Content */}
      <div className="flex animate-scroll whitespace-nowrap">
        {/* First set of items */}
        <div className="flex items-center space-x-8 px-4">
          {ribbonItems.map((item, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center space-x-2 text-white"
            >
              <item.icon className="text-lg" />
              <span className="font-medium text-sm">{item.text}</span>
              {index < ribbonItems.length - 1 && (
                <span className="text-gray-200 mx-4">✦</span>
              )}
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex items-center space-x-8 px-4">
          {ribbonItems.map((item, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center space-x-2 text-white"
            >
              <item.icon className="text-lg" />
              <span className="font-medium text-sm">{item.text}</span>
              {index < ribbonItems.length - 1 && (
                <span className="text-gray-200 mx-4">✦</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Decorative edges */}
      <div
        className={`absolute top-0 left-0 w-4 h-full bg-gradient-to-r ${currentGradient.leftEdge} to-transparent`}
      ></div>
      <div
        className={`absolute top-0 right-0 w-4 h-full bg-gradient-to-l ${currentGradient.rightEdge} to-transparent`}
      ></div>
    </div>
  );
}

export default Ribbon;
