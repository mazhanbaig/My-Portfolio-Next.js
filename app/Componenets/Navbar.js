// "use client";
// import React, { useState } from "react";

// const Navbar = () => {
//   // This keeps track of whether the mobile menu is open or closed
//   const [isOpen, setIsOpen] = useState(false);

//   // This function changes the menu from open to close or close to open
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <nav className="bg-black/10 backdrop-blur-md text-white fixed top-0 left-0 w-full z-50 border-b border-white/10 shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[75px]">
//           {/* Logo */}
//           <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">
//             <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
//               AZHAN
//             </span>
//           </h1>

//           {/* Big screen links */}
//           <div className="hidden md:flex space-x-6">
//             <a href="#intro" className="hover:underline">
//               Home
//             </a>
//             <a href="#about" className="hover:underline">
//               About
//             </a>
//             <a href="#skill" className="hover:underline">
//               Skill
//             </a>
//             <a href="#education" className="hover:underline">
//               Education
//             </a>
//             <a href="#projects" className="hover:underline">
//               Projects
//             </a>
//             <a href="#contact" className="hover:underline">
//               Contact
//             </a>
//           </div>

//           {/* Hamburger icon for mobile */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden text-white text-2xl"
//           >
//             <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
//           </button>

//           {/* Mobile menu links - show only if menu is open */}
//           {isOpen && (
//             <div className="md:hidden bg-white/10 backdrop-blur-md text-white w-[120px] flex-col space-y-4 py-4 pl-4 absolute top-[70px] right-4 rounded-lg shadow-md border border-white/10">
//               <a
//                 href="#intro"
//                 className="hover:underline"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Home
//               </a>
//               <a
//                 href="#about"
//                 className="hover:underline"
//                 onClick={() => setIsOpen(false)}
//               >
//                 About
//               </a>
//               <a
//                 href="#skill"
//                 className="hover:underline"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Skill
//               </a>
//               <a
//                 href="#education"
//                 className="hover:underline"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Education
//               </a>
//               <a
//                 href="#projects"
//                 className="hover:underline"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Projects
//               </a>
//               <a
//                 href="#contact"
//                 className="hover:underline"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Contact
//               </a>
//             </div>
//           )}
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="bg-black/50 backdrop-blur-xl text-white fixed top-0 left-0 w-full z-50 shadow-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[75px]">
          {/* Logo */}
          <h1 className="text-3xl font-bold tracking-wide">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
              AZHAN
            </span>
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2 text-sm font-medium">
            {["Home", "About", "Skill", "Education", "Projects", "Contact"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="px-3 py-1 rounded-md hover:bg-white/10 hover:text-white transition duration-200"
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white text-2xl"
          >
            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden absolute top-[75px] right-4 bg-black/90 backdrop-blur-xl text-white w-44 rounded-xl py-4 shadow-lg border border-white/10 space-y-2">
              {[
                "Home",
                "About",
                "Skill",
                "Education",
                "Projects",
                "Contact",
              ].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-2 text-sm hover:bg-white/10 rounded-md transition"
                  onClick={() => setIsOpen(false)} // Close menu after click
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
