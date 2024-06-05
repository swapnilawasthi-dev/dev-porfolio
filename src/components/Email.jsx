import React from "react";
import { CONTACT } from "../constants/index";
import { motion } from "framer-motion";

const Email = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
      className="fixed bottom-0 right-3 min-[1025px]:right-10 z-10 text-neutral-400 "
    >
      <div className=' z-200 flex flex-col items-center justify-center list-none after:content[""]  after:block after:w-px after:h-40 after:bg-slate-300 after:my-0 after:mx-auto'>
        <a
          href={`mailto:${CONTACT.email}`}
          className="mb-10 cursor-pointer hover:transform hover:-translate-y-1 hover:text-white"
          style={{ writingMode: "vertical-rl" }}
        >
          {CONTACT.email}
        </a>
      </div>
    </motion.div>
  );
};

export default Email;
