"use client";
import React from "react";
import { FaSchool, FaUniversity, FaGraduationCap } from "react-icons/fa"; // Font Awesome icons via react-icons

const Education = () => {
  return (
    <section id="education" className="bg-[#0b0b0f] py-20 px-4 text-white">
      <h2 className="text-5xl font-extrabold text-center mb-16">
        My Education
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* 🔹 School */}
        <div className="relative group w-full max-w-sm p-6 bg-white/5 rounded-3xl border border-purple-600 backdrop-blur-md shadow-xl hover:shadow-purple-500/40 transition duration-500 hover:scale-105">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center shadow-lg ring-4 ring-purple-400/30">
            <FaSchool className="text-white text-2xl" />
          </div>
          <h3 className="mt-12 text-2xl font-bold text-purple-300 text-center">
            School
          </h3>
          <p className="text-sm text-center text-gray-400 mb-2">
            Army Public School COD
          </p>
          <ul className="text-gray-300 text-sm space-y-1 mt-4 pl-4 list-disc">
            <li>SSC I: 89%</li>
            <li>SSC II: 94%</li>
            <li>Strong foundation in tech & academics</li>
          </ul>
        </div>

        {/* 🔹 College */}
        <div className="relative group w-full max-w-sm p-6 bg-white/5 rounded-3xl border border-cyan-500 backdrop-blur-md shadow-xl hover:shadow-cyan-500/40 transition duration-500 hover:scale-105">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-cyan-500 w-20 h-20 rounded-full flex items-center justify-center shadow-lg ring-4 ring-cyan-400/30">
            <FaUniversity className="text-white text-2xl" />
          </div>
          <h3 className="mt-12 text-2xl font-bold text-cyan-300 text-center">
            College
          </h3>
          <p className="text-sm text-center text-gray-400 mb-2">
            Army Public College COD
          </p>
          <ul className="text-gray-300 text-sm space-y-1 mt-4 pl-4 list-disc">
            <li>1st Year: 90%+ (Est.)</li>
            <li>2nd Year: 90%+ (Est.)</li>
            <li>Deep focus on Full-Stack growth</li>
          </ul>
        </div>

        {/* 🔹 University */}
        <div className="relative group w-full max-w-sm p-6 bg-white/5 rounded-3xl border border-blue-500 backdrop-blur-md shadow-xl hover:shadow-blue-500/40 transition duration-500 hover:scale-105">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center shadow-lg ring-4 ring-blue-400/30">
            <FaGraduationCap className="text-white text-2xl" />
          </div>
          <h3 className="mt-12 text-2xl font-bold text-blue-300 text-center">
            University (Planned)
          </h3>
          <p className="text-sm text-center text-gray-400 mb-2">
            Master in AI
          </p>
          <ul className="text-gray-300 text-sm space-y-1 mt-4 pl-4 list-disc">
            <li>Mastering In AI & Robotics</li>
            <li>Contributing to open-source</li>
            <li>Building futuristic projects</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
