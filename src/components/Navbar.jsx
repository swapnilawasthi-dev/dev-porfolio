import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 items-center">
        <a href="/">
          <img className="mx-2 w-10" src={logo} alt="logo" />
        </a>
      </div>
      <div className="m-8 flex item-center justify-center gap-4 text-2xl">
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
      </div>
    </nav>
  );
};

export default Navbar;
