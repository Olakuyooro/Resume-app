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
    <div className="bg-gray-900 text-white py-4 px-6 md:px-12">
      <div className="flex justify-between items-center">
        <div>
          <motion.h3
            className="text-xl font-bold"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            Kuyooro Praise
          </motion.h3>
          <motion.h3
            className="text-lg font-medium"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 50, delay: 0.25 }}
          >
            Frontend Developer
          </motion.h3>
        </div>
        <div className="md:hidden relative">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            {isMenuOpen ? <IoMdClose /> : <MdMenu />}
          </button>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-black flex z-10 flex-col space-y-3 mt-2 w-48 h-auto right-0 absolute py-3 px-4 rounded-lg shadow-lg"
            >
              <Contact />
              <a
                className="hover:underline"
                href="https://drive.google.com/file/d/1Mnb13wL0Sm1TAF9ARSnDiXyqhKyteQRp/view?usp=drive_link"
                download=""
              >
                Download Resume
              </a>
            </motion.div>
          )}
        </div>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.25 }}
          className="hidden md:flex space-x-6 items-center"
        >
          <Contact />
          <motion.a
            className="hover:underline"
            href="https://drive.google.com/file/d/1TVPYTHueE_xpMnldFG2Y4KsogcO1_xfW/view?usp=drive_link"
            download=""
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
