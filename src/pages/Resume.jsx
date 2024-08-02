import React from "react";
import resumeFile from "../assets/SwapnilAwasthi-Resume.pdf";
import logoDark from "../assets/logo_dark.svg";
import logoLight from "../assets/logo_light.svg";
import { BiSun, BiMoon } from "react-icons/bi";
import profilePic from "../assets/image.jpg";
import Social from "../components/Social";
import Email from "../components/Email";

const Resume = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="overflow-x-hidden min-[769px]:h-screen  text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        {/* Dark Mode */}
        {!isDarkMode && (
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        )}
        {/* Light Mode */}
        {isDarkMode && (
          <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(148,147,147,.9)_100%)]"></div>
        )}
      </div>
      <Social isDarkMode={isDarkMode} />
      <Email isDarkMode={isDarkMode} />
      <nav className=" max-[425px]:mt-5 flex items-center justify-between py-8 mx-auto px-8 max-md:px-4 ">
        <div className="flex  flex-shrink-0 items-center ">
          {isDarkMode ? (
            <a href="/">
              <img className="mx-2 w-10" src={logoLight} alt="logo" />
            </a>
          ) : (
            <a href="/">
              <img className="mx-2 w-10" src={logoDark} alt="logo" />
            </a>
          )}
        </div>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`ml-4 text-lg  ${
            isDarkMode ? "text-slate-900" : " text-white"
          }`}
        >
          {!isDarkMode ? <BiSun size={30} /> : <BiMoon size={30} />}
        </button>
      </nav>
      <div className="flex h-5/6 items-center min-[769px]:mx-20 max-[768px]:mx-10 max-[768px]:flex-col justify-center">
        <div className="w-2/5 p-4 items-center justify-center max-[768px]:w-full">
          {/* Profile Card */}
          <div>
            <div className="  p-6 rounded-lg w-full shadow-lg">
              <img
                className="w-36 h-36 rounded-full mx-auto"
                src={profilePic}
                alt="Profile"
              />
              <h2
                className={`text-center text-2xl font-semibold mt-4 ${
                  isDarkMode ? "text-slate-700" : ""
                }`}
              >
                Swapnil Awasthi
              </h2>
              <p
                className={`text-center   mt-2 ${
                  isDarkMode
                    ? "text-slate-800"
                    : " text-gray-400 dark:text-gray-300"
                }`}
              >
                Software Engineer @Abacusdesk
              </p>
              {/* Add more profile details as needed */}
            </div>
          </div>
        </div>
        <div className=" w-3/5 flex max-[768px]:w-full items-center justify-center px-10 py-10 shadow-lg overflow-auto overflow-y-auto">
          <object
            width="100%"
            data={resumeFile}
            className="min-[1025px]:h-[680px] max-[768px]:h-[600px] max-[425px]:h-[300px] max-[1024px]:h-[500px]"
            type="application/pdf"
          >
            {" "}
          </object>
        </div>
      </div>
    </div>
  );
};

export default Resume;
