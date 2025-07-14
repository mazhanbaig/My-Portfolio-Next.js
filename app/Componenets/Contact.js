"use client";
import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full h-fit py-20 px-6 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/images/aboutpageimage.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md z-0 rounded-lg"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-white">
        <h2 className="text-5xl font-extrabold text-center mb-6">Contact Me</h2>
        <p className="text-center max-w-2xl mx-auto text-lg text-gray-300 mb-10">
          Got a project in mind, feedback, or just want to connect? I'm always
          happy to chat and collaborate!
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
              <FaInstagram className="text-pink-400 text-2xl" />
              <a
                href="https://instagram.com/mazhanbaig"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base hover:underline"
              >
                Instagram: @mazhanbaig
              </a>
            </div>
            <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
              <FaWhatsapp className="text-green-400 text-2xl" />
              <a
                href="https://wa.me/923227895432"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base hover:underline"
              >
                WhatsApp: +92 322 6045911
              </a>
            </div>
            <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
              <FaPhone className="text-amber-400 text-2xl" />
              <a href="tel:+923227895432" className="text-base hover:underline">
                Phone: +92 322 6045911
              </a>
            </div>
            <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
              <FaEnvelope className="text-red-400 text-2xl" />
              <a
                href="mailto:mazhanbaig44@gmail.com"
                className="text-base hover:underline"
              >
                Email: mazhanbaig44@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
              <FaLocationDot className="text-blue-300 text-2xl" />
              <span className="text-base">Karachi, Pakistan</span>
            </div>
          </div>

          {/* Contact Card */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg hover:shadow-purple-500/30 transition">
            <h3 className="text-2xl font-bold mb-4">Let's Build Together</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              I’m open to freelance, internships, and collaboration
              opportunities. Whether you're a brand, business, or developer —
              let’s create something awesome!
            </p>
            <div className="mt-6">
              <a
                href="mailto:mazhanbaig44@gmail.com"
                className="inline-block bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
