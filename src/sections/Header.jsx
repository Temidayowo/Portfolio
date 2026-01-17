import { Menu, X } from "lucide-react";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="font-inter flex flex-row justify-between w-full items-center px-8 md:px-20 py-7 z-50 sticky top-0 left-0 bg-white border-b border-gray-200 shadow-sm">
      <h1 className="font-bold text-3xl">Temidayo</h1>
      <button
        onClick={toggleMenu}
        className="md:hidden ml-auto cursor-pointer"
        aria-label="Toggle menu"
      >
        {isOpen ? <X /> : <Menu />}
      </button>
      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row md:gap-9 md:text-base md:font-medium md:static md:bg-transparent md:px-0 md:py-0 absolute top-20 left-0 right-0 bg-white px-10 py-7`}
      >
        <ul className="w-full flex flex-col md:flex-row md:gap-9 gap-9">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skill">Skills</a>
          </li><li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a
              href="#contact"
              className="md:bg-[#3F20FB]/80 md:text-white md:px-4 md:py-2 md:rounded-lg"
            >
              Contact Me
            </a>
          </li>
          <hr className="h-[0.5px] border-none bg-gray-300 md:hidden" />
          <li className="md:hidden">
            <div className="flex gap-4">
              <FaGithub className="size-6 text-[#303034]" />
              <FaLinkedin className="size-6 text-[#303034]" />
              <FaEnvelope className="size-6 text-[#303034]" />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
