import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <nav className=" flex items-center justify-between py-2">
        <div className="flex flex-shrink-0 items-center">
          <a href="/">
            <img className="mx-2 w-10" src={logo} alt="logo" />
          </a>
        </div>
        {/* <div className="m-8 flex item-center justify-center gap-4 text-2xl">
        <button
          className=" hover:text-white text-lg"
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          About
        </button>
        <button
          className=" hover:text-white text-lg"
          onClick={() =>
            document
              .getElementById("technologies")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Technologies
        </button>
        <button
          className=" hover:text-white text-lg"
          onClick={() =>
            document
              .getElementById("experience")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Experience
        </button>
        <button
          className=" hover:text-white text-lg"
          onClick={() =>
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Projects
        </button>
        <button
          className="text-white text-base ml-2 border-2 px-4 py-1 rounded-md hover:bg-[rgba(256,256,256,0.1)]"
          onClick={() =>
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Resume
        </button>
      </div> */}
        <div className="hidden md:flex m-8 item-center justify-center gap-4 text-2xl">
          <button
            className="hover:text-white text-lg"
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </button>
          <button
            className="hover:text-white text-lg"
            onClick={() =>
              document
                .getElementById("technologies")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Technologies
          </button>
          <button
            className="hover:text-white text-lg"
            onClick={() =>
              document
                .getElementById("experience")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Experience
          </button>
          <button
            className="hover:text-white text-lg"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </button>
          <button
            className="text-white text-base ml-2 border-2 px-4 py-1 rounded-md hover:bg-[rgba(256,256,256,0.1)]"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Resume
          </button>
        </div>
        <button
          className="md:hidden text-lg text-white"
          onClick={toggleDropdown}
        >
          {isDropdownOpen ? (
            <BiChevronUp size={30} />
          ) : (
            <BiChevronDown size={30} />
          )}
        </button>
      </nav>
      {isDropdownOpen && (
        <div className=" flex flex-col items-center">
          <button
            className=" text-2xl py-1"
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </button>
          <button
            className=" text-2xl py-1"
            onClick={() =>
              document
                .getElementById("technologies")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Technologies
          </button>
          <button
            className=" text-2xl py-1"
            onClick={() =>
              document
                .getElementById("experience")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Experience
          </button>
          <button
            className=" text-2xl py-1"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </button>
          <button
            className=" text-2xl py-1"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Resume
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
