import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { NAVLINKS } from "../constants/index";
import { motion } from "framer-motion";

const Social = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
      className="fixed bottom-0 left-3 min-[1025px]:left-10 z-10 text-neutral-400 "
    >
      <ul className='flex flex-col items-center text-2xl justify-center list-none after:content[""]  after:block after:w-px after:h-40 after:bg-slate-300 after:my-0 after:mx-auto'>
        <li className=" last-of-type:mb-10 pt-6 cursor-pointer hover:transform hover:-translate-y-1 hover:text-white">
          <a target="_blank" href={NAVLINKS.linkedIn}>
            <FaLinkedin />
          </a>
        </li>
        <li className=" last-of-type:mb-10 pt-6 cursor-pointer hover:transform hover:-translate-y-1 hover:text-white">
          <a target="_blank" href={NAVLINKS.github}>
            <FaGithub />
          </a>
        </li>
        <li className=" last-of-type:mb-10 pt-6 cursor-pointer hover:transform hover:-translate-y-1 hover:text-white">
          <a target="_blank" href={NAVLINKS.x}>
            <FaSquareXTwitter />
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default Social;
