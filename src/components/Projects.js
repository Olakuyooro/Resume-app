import { useAnimation, useInView, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import shortner from "./images/URL Shortner.png";
import tipCalculator from "./images/Tip calculator app.png";
// import calculator from "./images/Calculator app.png";
import clipboard from "./images/Clipboard landing page.png";
import ipTracker from "./images/React App.png";
import productivePro from "./images/productive-pro.png"
import ecommerce from "./images/E-commerce.png"
import TypeIt from "typeit-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div ref={ref} className="text-white md:ml-8 mt-20 pb-16">
      <motion.section
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1.5, delay: 0.2 }}
        className=""
      >
        <h2 className="md:my-9 pl-4 md:pl-0 text-4xl">PROJECTS</h2>
        <ul className="grid  md:grid-cols-3  md:gap-3">
          {[
            {
              href: "https://url-shortner-livid.vercel.app/",
              src: shortner,
              alt: "url-short",
              description:
                "Url Shortner - This is a url shortener I built using React and Tailwind CSS at the frontend integrated with a shortner api I built using Node js and Express",
            },
            {
              href: "https://productive-pro-beta.vercel.app/",
              src: productivePro,
              alt: "productive-pro",
              description:
                "ProductivePro is a simple and intuitive todo application that allows users to manage their daily tasks efficiently. With user authentication, you can securely register and log in to your account, add and manage tasks, and view them on a calendar."
            },
            {
              href: "https://tip-calculator-alpha-flax.vercel.app/",
              src: tipCalculator,
              alt: "tip-calculator",
              description:
                "Tip Calculator - I built this tip calculator using HTML, CSS, and JavaScript. The calculator accepts the amount to be paid, the tip percentage, with the number of people paying producing the total amount to be paid",
            },
            // {
            //   href: "https://basic-calculator-app-ten.vercel.app/",
            //   src: calculator,
            //   alt: "calculator",
            //   description:
            //     "Basic Calculator - This is a basic calculator that perform simple arithmetic. I built it using HTML, CSS, and JavaScript. It also comes with a theme toggling functionality",
            // },
            {
              href: "https://clipboardlandingsite.netlify.app/",
              src: clipboard,
              alt: "clipboard",
              description: "Clipboard Landing Page - This is a landing page I built using HTML and CSS to show my layout skills"
            },
            {
              href: " https://my-store-kappa-liard.vercel.app/",
              src: ecommerce,
              alt: "e-commerce",
              description: "This e-commerce app is designed to showcase my skills in frontend development using React. The app displays products from the FakeStore API, allowing users to browse items, view detailed information, and add products to their cart."
            },
            {
              href: "https://ip-address-tracker-zeta-kohl.vercel.app/",
              src: ipTracker,
              alt: "ipTracker",
              description: "Ip Tracker - This is an IP tracker I bulit using React and Tailwind CSS integrated with Ipify geolocator API and Leaflet JS"
            },
          ].map((project, index) => (
            <li
              key={index}
              className="relative underline"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={project.href} target="_blank" rel="noreferrer">
                <img
                  className="w p-4 md:h-64"
                  src={project.src}
                  alt={project.alt}
                />
                {index === hoveredIndex && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center p-4">
                    {project.description ? (
                      <TypeIt
                        options={{
                          speed: 50,
                          waitUntilVisible: true,
                        }}
                      >
                        <p className="font-bold text-xs md:block">{project.description}</p>
                      </TypeIt>
                    ) : null}
                  </div>
                )}
              </a>
            </li>
          ))}
        </ul>
      </motion.section>
    </div>
  );
};

export default Projects;
