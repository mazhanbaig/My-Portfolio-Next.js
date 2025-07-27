import React from "react";

const Project = () => {
  return (
    <>
      {/* 🚀 My Projects Section */}
      <section id="projects" className="bg-[#0b0b0f] py-20 px-6 text-white">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-cyan-400">
          🚀 My Projects
        </h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* 🎬 Movie Website */}
          <div className="bg-white/5 border border-purple-500 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-[1.03] transition-all duration-300">
            <h3 className="text-xl font-bold mb-2 text-purple-300">
              AZHAN Movies
            </h3>
            <p className="text-sm text-gray-300 mb-3">
              A futuristic Netflix-style movie site using TMDB API with movie
              rows, search, and responsive layout.
            </p>
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              <span className="bg-gray-700 px-2 py-1 rounded">HTML</span>
              <span className="bg-gray-700 px-2 py-1 rounded">Tailwind CSS</span>
              <span className="bg-gray-700 px-2 py-1 rounded">JavaScript</span>
              <span className="bg-gray-700 px-2 py-1 rounded">TMDB API</span>
            </div>
            <a
              href="https://azhanmovies.netlify.app/"
              target="_blank"
              className="text-purple-400 hover:underline hover:text-purple-300"
            >
              Live Demo
            </a>
          </div>

          {/* ☁️ Weather App */}
          <div className="bg-white/5 border border-cyan-500 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-[1.03] transition-all duration-300">
            <h3 className="text-xl font-bold mb-2 text-cyan-300">
              Weather Fetch App
            </h3>
            <p className="text-sm text-gray-300 mb-3">
              Live weather checker using OpenWeatherMap API with responsive
              design and search input.
            </p>
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              <span className="bg-gray-700 px-2 py-1 rounded">HTML</span>
              <span className="bg-gray-700 px-2 py-1 rounded">Tailwind CSS</span>
              <span className="bg-gray-700 px-2 py-1 rounded">JavaScript</span>
              <span className="bg-gray-700 px-2 py-1 rounded">OpenWeather API</span>
            </div>
            <a
              href="https://predatorsweather.netlify.app/"
              target="_blank"
              className="text-cyan-400 hover:underline hover:text-cyan-300"
            >
              Live Demo
            </a>
          </div>

          {/* 💈 Barber Shop */}
          <div className="bg-white/5 border border-pink-500 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-[1.03] transition-all duration-300">
            <h3 className="text-xl font-bold mb-2 text-pink-300">
              Barber Shop Website
            </h3>
            <p className="text-sm text-gray-300 mb-3">
              A stylish barber shop site with services, gallery, and contact
              form. Modern and mobile-friendly.
            </p>
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              <span className="bg-gray-700 px-2 py-1 rounded">HTML</span>
              <span className="bg-gray-700 px-2 py-1 rounded">Tailwind CSS</span>
              <span className="bg-gray-700 px-2 py-1 rounded">JavaScript</span>
            </div>
            <a
              href="https://azhansbarbershop.netlify.app"
              target="_blank"
              className="text-pink-400 hover:underline hover:text-pink-300"
            >
              Live Demo
            </a>
          </div>

          {/* 🌐 Portfolio */}
          <div className="bg-white/5 border border-blue-500 rounded-2xl p-6 backdrop-blur-md shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-xl font-bold mb-2 text-blue-500">My Portfolio</h3>
            <p className="text-sm text-gray-300 mb-4">
              A sleek, responsive portfolio built with React and Tailwind CSS.
              Includes projects, skills, and contact section.
            </p>
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              <span className="bg-gray-700 px-2 py-1 rounded">HTML</span>
              <span className="bg-gray-700 px-2 py-1 rounded">Tailwind CSS</span>
              <span className="bg-gray-700 px-2 py-1 rounded">JavaScript</span>
              <span className="bg-gray-700 px-2 py-1 rounded">React.js</span>
              <span className="bg-gray-700 px-2 py-1 rounded">Next.js</span>
            </div>
            <a
              href="https://mazhanbaig7.netlify.app/"
              target="_blank"
              className="text-blue-400 hover:underline hover:text-blue-300"
            >
              Live Demo
            </a>
          </div>

          {/* 🎟️ Booking Web App */}
          <div className="bg-white/5 border border-blue-500 rounded-2xl p-6 backdrop-blur-md shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-xl font-bold mb-2 text-blue-400">
              Ticket Booking App
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              A responsive ticket booking system using localStorage, Tailwind,
              and vanilla JavaScript. Clean UI & user-friendly.
            </p>
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              <span className="bg-gray-700 px-2 py-1 rounded">HTML</span>
              <span className="bg-gray-700 px-2 py-1 rounded">Tailwind CSS</span>
              <span className="bg-gray-700 px-2 py-1 rounded">JavaScript</span>
            </div>
            <a
              href="https://azhancashierapp.netlify.app/"
              target="_blank"
              className="text-blue-300 hover:underline hover:text-blue-200"
            >
              Live Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
