import React from "react";

const Footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="relative bg-black text-neutral-400 pt-10 px-6 pb-5 overflow-hidden border-t border-neutral-700">
        <div className="absolute w-40 h-40 bg-yellow-500 opacity-10 rounded-full top-[-40px] left-[-40px] animate-ping blur-2xl z-0"></div>
        <div className="absolute w-40 h-40 bg-cyan-400 opacity-20 rounded-full bottom-[-60px] right-[-60px] animate-pulse blur-2xl z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h2 className="text-3xl font-extrabold text-white tracking-wide">
              AZHAN
            </h2>
            <p className="mt-4 text-sm max-w-xs">
              Front-End Developer passionate about clean code, creative design,
              and futuristic experiences.
            </p>
          </div>
          <div>
            <h3 className="text-xl text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#intro" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-white font-semibold mb-4">
              Stay Inspired
            </h3>
            <p className="text-sm italic">
              "Every line of code is a step toward the future."
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-800 pt-6 text-center text-xs text-neutral-500">
          &copy; 2025 <strong className="text-white">Azhan</strong> — Built with
          ⚡ using Tailwind CSS
        </div>
      </footer>
    </>
  );
};

export default Footer;
