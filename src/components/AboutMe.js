import React from "react";
import TypeIt from "typeit-react";
import me from "./images/Me.jpg";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="flex space-x-28">
      {" "}
      <div className="text-white w-72 ml-4 sm:w-[35rem] md:mt-20 md:ml-12 h-[30rem]">
        <TypeIt
          options={{
            speed: 10,
            waitUntilVisible: true,
          }}
        >
          <p>
            Hello there. My name is Praise. I am a front-end developer based in
            Lagos, Nigeria. I have more than a year of experience building
            frontend web applications. I am proficient in technologies such as
            HTML, CSS, JavaScript, React, and Next.js. I intend to transition
            into full stack development, so I am currently learning backend
            technologies like Node.js, Express.js, and Django. I am seeking out
            opportunities to broaden my skill sets and improve as a developer. I
            am committed to solving problems and developing top innovations.
          </p>
        </TypeIt>
      </div>
      <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 55 }}
        >
        <img className="h-[33rem]" width={450} src={me} alt="me" />
      </motion.div>
    </div>
  );
};

export default AboutMe;
