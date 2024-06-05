import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.svg";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { motion } from "framer-motion";
import resumeFile from "../assets/SwapnilAwasthi_Resume.pdf";

const container = (delay) => ({
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className=" max-[425px]:mt-5 flex items-center justify-between py-2">
        <motion.div
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="flex flex-shrink-0 items-center"
        >
          <a href="/">
            <img className="mx-2 w-10" src={logo} alt="logo" />
          </a>
        </motion.div>
        <div className="hidden md:flex m-8 item-center justify-center gap-4 text-2xl">
          <motion.button
            variants={container(0.2)}
            initial="hidden"
            animate="visible"
            className="hover:text-white text-lg"
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </motion.button>
          <motion.button
            variants={container(0.4)}
            initial="hidden"
            animate="visible"
            className="hover:text-white text-lg"
            onClick={() =>
              document
                .getElementById("technologies")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Technologies
          </motion.button>
          <motion.button
            variants={container(0.6)}
            initial="hidden"
            animate="visible"
            className="hover:text-white text-lg"
            onClick={() =>
              document
                .getElementById("experience")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Experience
          </motion.button>
          <motion.button
            variants={container(0.8)}
            initial="hidden"
            animate="visible"
            className="hover:text-white text-lg"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </motion.button>
          <motion.a
            href={resumeFile}
            download="SwapnilAwasthi_Resume.pdf"
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="text-white text-base ml-2 border-2 px-4 py-1 rounded-md hover:bg-[rgba(256,256,256,0.1)]"
          >
            Resume
          </motion.a>
        </div>
        <motion.button
          variants={container(0.2)}
          initial="hidden"
          animate="visible"
          className="md:hidden text-lg text-white"
          onClick={toggleDropdown}
        >
          {isDropdownOpen ? (
            <BiChevronUp size={30} />
          ) : (
            <BiChevronDown size={30} />
          )}
        </motion.button>
      </nav>
      {isDropdownOpen && (
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className=" bg-slate-900 mt-1 z-10  absolute right-0 left-0 flex flex-col items-center"
          ref={dropdownRef}
        >
          <button
            className=" text-xl py-2 w-full font-mono rounded-lg border-t-2"
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </button>
          <button
            className=" text-xl py-2 w-full font-mono rounded-lg border-t-2"
            onClick={() =>
              document
                .getElementById("technologies")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Technologies
          </button>
          <button
            className=" text-xl py-2 w-full font-mono rounded-lg border-t-2"
            onClick={() =>
              document
                .getElementById("experience")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Experience
          </button>
          <button
            className=" text-xl py-2 w-full font-mono rounded-lg border-t-2"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </button>
          <a
            href={resumeFile}
            download="SwapnilAwasthi_Resume.pdf"
            className=" text-xl py-2 w-full font-mono text-center rounded-lg border-b-2 border-t-2"
          >
            Resume
          </a>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
