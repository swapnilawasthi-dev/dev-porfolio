import { RiReactjsLine } from "react-icons/ri";
import { FaAngular } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { SiMongodb } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaAngular className="text-7xl text-red-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaSass className="text-7xl text-pink-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTailwindcss className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiMysql className="text-7xl text-cyan-900" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-500" />
        </div>
      </div>
    </div>
  )
}

export default Technologies
