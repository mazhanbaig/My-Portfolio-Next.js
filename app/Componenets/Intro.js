"use client";
import React from "react";

const Intro = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="intro"
        className="pt-[100px] min-h-[750px] w-full bg-cover bg-center bg-fixed px-4 flex flex-col items-center justify-center text-center gap-6 sm:flex-row sm:justify-around"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        {/* Image on Top (mobile) */}
        <img
          src="/images/my-image.jpg"
          alt="Azhan"
          className="w-[250px] h-[250px] rounded-full border-4 border-white object-cover shadow-lg sm:w-[300px] sm:h-[300px]"
        />

        {/* Text below image on mobile */}
        <div className="max-w-[550px]">
          <h2 className="text-4xl font-bold mb-4 text-white">Hi, I'm Azhan</h2>
          <p className="text-xl text-white mb-6">
            I'm a passionate Full-Stack Web and App Developer focused on building
            responsive and user-friendly websites and softwares using HTML, CSS, JavaScript,
            Tailwind CSS, React (Next.js),Node.js, Express.js, MangoDB and React Native.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <button className="animate-pulse bg-white text-black hover:bg-yellow-700 hover:text-white px-4 py-2 rounded-xl">
              Hire me!
            </button>
            <a href="#contact">
              <button className="animate-pulse bg-white text-black hover:bg-yellow-700 hover:text-white px-4 py-2 rounded-xl">
                Contact me
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
