import React from "react";
import { motion } from "framer-motion";
import Contact from "./Contact";

const Navbar = () => {
  return (
    <div className="md:flex justify-between text-white px-12 hidden">
      <main>
        <motion.h3
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          Kuyooro Praise
        </motion.h3>
        <motion.h3
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.25 }}
        >
          Frontend Developer
        </motion.h3>
      </main>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.25 }}
        className="flex space-x-6"
      >
        <Contact />
        <motion.a
          href="https://drive.google.com/file/d/1v3enbHqvhaTh8XcuNZmkJUifMu0f15ZN/view?usp=drive_link"
          download=""
        >
          Download Resume
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Navbar;
