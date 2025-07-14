"use client";
import React from "react";
import Navbar from "./Componenets/Navbar";
import Intro from "./Componenets/Intro";
import About from "./Componenets/About";
import Skill from "./Componenets/Skill";
import Project from "./Componenets/Project";
import Education from "./Componenets/Education";
import Contact from "./Componenets/Contact";
import Footer from "./Componenets/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Skill />
      <Project />
      <Education />
      <Contact />
      <Footer />
    </>
  );
};

export default page;
