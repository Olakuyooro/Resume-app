import React, { useState } from "react";
import { motion } from "framer-motion";
import Contact from "./Contact";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex md:flex-row justify-between text-white px-6 md:px-12 ">
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
      <div className="md:hidden relative">
        <button onClick={toggleMenu} className="text-2xl">
          {isMenuOpen ? <IoMdClose /> : <MdMenu />}
        </button>
        {isMenuOpen && (
          <div className="bg-white flex flex-col space-y-3 mt-2 w-60 h-48 top-7 right-[-1.5rem] absolute p-3">
            <Contact />
            <a
              className="text-black"
              href="https://drive.google.com/file/d/1FpMzdGso4nDLN6QXNKuuW6vzBryexnaK/view?usp=drive_link"
              download=""
            >
              Download Resume
            </a>
          </div>
        )}
      </div>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.25 }}
        className="md:flex space-x-6 hidden"
      >
        <Contact />
        <motion.a
          href="https://drive.google.com/file/d/1FpMzdGso4nDLN6QXNKuuW6vzBryexnaK/view?usp=drive_link"
          download=""
        >
          Download Resume
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Navbar;
