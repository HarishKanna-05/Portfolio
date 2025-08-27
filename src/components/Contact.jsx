import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-gray-50 to-white py-12"
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block p-1.5 bg-violet-100 rounded-full mb-2">
            <FaPaperPlane className="text-violet-600 text-lg" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
              Connect
            </span>
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Let’s create something great together
          </p>
        </div>

        <div className="max-w-sm mx-auto">
          {/* Contact Information */}
          <div className="space-y-3">
            {/* Email Card */}
            <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-gradient-to-r from-violet-100 to-purple-100 rounded-lg group-hover:from-violet-200 group-hover:to-purple-200 transition-all duration-300">
                    <FaEnvelope className="text-violet-600 text-base" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-900 mb-0.5">
                    Email
                  </h4>
                  <a
                    href="mailto:harishkannaaravindan@gmail.com"
                    className="text-sm text-gray-600 hover:text-violet-600 transition-colors duration-300 break-all"
                  >
                    harishkannaaravindan@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-gradient-to-r from-violet-100 to-purple-100 rounded-lg group-hover:from-violet-200 group-hover:to-purple-200 transition-all duration-300">
                    <FaGithub className="text-violet-600 text-base" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-900 mb-0.5">
                    GitHub
                  </h4>
                  <a
                    href="https://github.com/HarishKanna-05"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-violet-600 transition-colors duration-300"
                  >
                    HarishKanna-05
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-gradient-to-r from-violet-100 to-purple-100 rounded-lg group-hover:from-violet-200 group-hover:to-purple-200 transition-all duration-300">
                    <FaMapMarkerAlt className="text-violet-600 text-base" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-900 mb-0.5">
                    Location
                  </h4>
                  <p className="text-sm text-gray-600">Chennai, Tamil Nadu</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
              <h4 className="text-sm font-semibold text-gray-900 mb-2 text-center">
                Connect With Me
              </h4>
              <div className="flex justify-center space-x-2">
                <a
                  href="https://www.linkedin.com/in/harishkannaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg hover:from-blue-200 hover:to-blue-100 transition-all duration-300 text-blue-600 hover:text-blue-700 transform hover:-translate-y-0.5"
                >
                  <FaLinkedinIn className="text-base" />
                </a>
                <a
                  href="https://github.com/HarishKanna-05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg hover:from-gray-200 hover:to-gray-100 transition-all duration-300 text-gray-700 hover:text-gray-900 transform hover:-translate-y-0.5"
                >
                  <FaGithub className="text-base" />
                </a>
                <a
                  href="mailto:harishkannaaravindan@gmail.com"
                  className="p-2 bg-gradient-to-r from-red-100 to-red-50 rounded-lg hover:from-red-200 hover:to-red-100 transition-all duration-300 text-red-600 hover:text-red-700 transform hover:-translate-y-0.5"
                >
                  <FaEnvelope className="text-base" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
