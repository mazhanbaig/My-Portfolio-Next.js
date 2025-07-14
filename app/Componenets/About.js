"use client";
import React from "react";

const About = () => {
  return (
    <>
      {/* About Me */}
      <section
        id="about"
        className="h-fit w-full bg-fixed bg-cover bg-center my-auto"
        style={{ backgroundImage: "url('/images/aboutmelogo.jpg')" }}
      >
        <div className="bg-black/70 backdrop-blur-xs w-full h-full px-4 py-10">
          <h1 className="text-4xl text-center font-bold text-white mb-8">
            About Me
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-[30px]">
            <div className="max-w-[600px] w-full text-white space-y-6">
              <div>
                <h2 className="text-2xl text-yellow-300 font-semibold">
                  Who I Am
                </h2>
                <p className="text-lg leading-relaxed">
                  I’m Azhan, a passionate Front-End Web Developer who loves
                  building intuitive and visually compelling digital
                  experiences. I enjoy turning ideas into interactive interfaces
                  using HTML, CSS, JavaScript, and Tailwind CSS.
                </p>
              </div>
              <div>
                <h2 className="text-2xl text-yellow-300 font-semibold">
                  My Mission
                </h2>
                <p className="text-lg leading-relaxed">
                  My goal is to design clean, functional websites that offer
                  users an enjoyable and seamless experience. I’m deeply focused
                  on creating projects that are both user-friendly and
                  performance-oriented.
                </p>
              </div>
              <div>
                <h2 className="text-2xl text-yellow-300 font-semibold">
                  Beyond Coding
                </h2>
                <p className="text-lg leading-relaxed">
                  Outside of development, I’m a curious learner, space
                  enthusiast, and chess player. I love exploring how things work
                  and applying logical thinking in and out of code.
                </p>
              </div>
              <div>
                <h2 className="text-2xl text-yellow-300 font-semibold">
                  Always Improving
                </h2>
                <p className="text-lg leading-relaxed">
                  I regularly sharpen my skills through platforms like
                  freeCodeCamp, YouTube tutorials, and by building real-world
                  projects. Growth is a journey, and I’m committed to learning
                  something new every day.
                </p>
              </div>
              <div>
                <h2 className="text-2xl text-yellow-300 font-semibold">
                  Future Goals
                </h2>
                <p className="text-lg leading-relaxed">
                  I plan to learn JavaScript frameworks like React, contribute
                  to open-source, and collaborate with other developers to solve
                  meaningful problems through code.
                </p>
              </div>
            </div>
            <img
              className="h-[300px] min-w-[300px] rounded-full border-4 object-cover object-center border-white shadow-lg"
              src="/images/aboutmelogo.jpg"
              alt="Azhan"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
