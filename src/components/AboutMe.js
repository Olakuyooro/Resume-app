import React from "react";
import TypeIt from "typeit-react";
import me from "./images/Me.jpg";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:space-x-16 px-6 md:px-12 py-12">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 55 }}
        className="text-black md:w-2/3"
      >
        <TypeIt
          options={{
            speed: 20,
            waitUntilVisible: true,
          }}
        >
          <p className="text-lg leading-relaxed">
            Hello there. My name is <span className="font-bold">Praise</span>. I am a front-end developer based in Lagos, Nigeria. I have more than 2 years of experience building frontend web applications. I am proficient in technologies such as HTML, CSS, JavaScript, React, and Next.js.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            I intend to transition into full stack development, so I am currently into backend technologies like Node.js, Express.js, and Django. I am seeking out opportunities to broaden my skill sets and improve as a developer. I am committed to solving problems and developing top innovations.
          </p>
        </TypeIt>
      </motion.div>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 55 }}
        className="relative mt-8 md:mt-0"
      >
        <img
          className="h-80 w-80 object-cover rounded-lg shadow-lg"
          src={me}
          alt="Praise Kuyooro"
        />
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
