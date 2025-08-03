import React, { useRef } from "react";

const projects = [
  {
    title: "AZHAN Movies",
    desc: `A futuristic Netflix-style movie hub made using JavaScript and TMDB API.`,
    tech: ["HTML", "Tailwind", "JS", "TMDB API"],
    link: "https://cinexverse.netlify.app/",
    image: "../images/3.png", // sci-fi UI
  },
  {
    title: "Call Manager – Task Manager",
    desc: "A robotic task & call log manager in a sci-fi interface.",
    tech: ["Tailwind CSS", "JavaScript", "HTML", "DOM"],
    link: "https://neoversetaskmanager.netlify.app/",
image: "../images/4.png",  },
  {
    title: "Weather Fetch App",
    desc: `Live weather checker made using JavaScript and OpenWeatherMap API.`,
    tech: ["HTML", "Tailwind", "JS", "OpenWeather"],
    link: "https://predatorsweather.netlify.app/",
image: "../images/6.png", 
 },
  {
    title: "Barber Shop Website",
    desc: `Modern barber site with home page, about, pricing, history and contact page.`,
    tech: ["HTML", "Tailwind", "JS"],
    link: "https://azhansbarbershop.netlify.app",
image: "../images/1.png",  },
  {
    title: "My Portfolio",
    desc: `A sleek portfolio built with JavaScript, Next.js & Tailwind CSS.`,
    tech: ["HTML", "Tailwind", "React", "Next.js"],
    link: "https://mazhanbaig7.netlify.app/",
image: "../images/2.png",  },
  {
    title: "Ticket Booking App",
    desc: `Responsive system for booking with localStorage.`,
    tech: ["HTML", "Tailwind", "JS", "TS"],
    link: "https://azhancashierapp.netlify.app/",
image: "../images/5.png",  },
];

const Project = () => {
  const scrollRef = useRef(null);

  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-black via-gray-900 to-black py-24 text-white px-6 relative overflow-hidden"
    >
      <h2 className="text-5xl font-extrabold text-center mb-16">
         Futuristic Projects
      </h2>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 hide-scrollbar"
      >
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className={`w-[350px] h-[280px] snap-center flex-shrink-0 rounded-xl p-6 relative overflow-hidden shadow-[0_0_30px_2px_rgba(0,255,255,0.15)] border border-white/10 backdrop-blur-md group`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center brightness-[.4] transition-all duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${proj.image})` }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/80" />
            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                <p className="text-sm text-white/80">{proj.desc}</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 text-xs my-3">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-white/10 px-2 py-1 rounded-full text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 underline text-sm hover:text-white transition"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
