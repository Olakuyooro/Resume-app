import React, { useEffect, useRef } from "react";
import html from "./images/html.svg";
import css from "./images/css.svg";
import js from "./images/js.svg";
import reactIcon from "./images/reactIcon.svg";
import tailwind from "./images/tailwind.svg";
// import next from "./images/nextjs.svg";
import node from "./images/nodejs.svg";
import express from "./images/express.svg";
import typescript from "./images/typescript.svg";
import { useAnimation, useInView, motion } from "framer-motion";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const skills = [
    { src: html, alt: "html", delay: 0.25 },
    { src: css, alt: "css", delay: 0.35 },
    { src: js, alt: "js", delay: 0.45 },
    { src: typescript, alt: "typescript", delay: 0.55 },
    { src: tailwind, alt: "tailwind", delay: 0.65 },
    { src: reactIcon, alt: "react", delay: 0.75 },
    // { src: next, alt: "next", delay: 0.85 },
    { src: node, alt: "node", delay: 0.85 },
    { src: express, alt: "express", delay: 0.95 },
  ];

  return (
    <div className="px-12 mt-12" ref={ref}>
      <h2 className="text-4xl text-white mb-8">Skills</h2>
      <div className="grid grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.img
            key={index}
            width={200}
            src={skill.src}
            alt={skill.alt}
            variants={imageVariants}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: skill.delay }}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
