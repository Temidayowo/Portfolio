import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] py-8 px-8 lg:px-20">
      <div className="flex justify-between items-center mb-8 flex-col md:flex-row gap-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-4xl text-white/95 font-bold">Temidayo.</h2>
          <h3 className="text-white/70 text-sm">Front-end Developer</h3>
        </div>

        <ul className="hidden md:flex gap-9 text-white/80 font-medium">
          <li className="cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="cursor-pointer">
            <a href="#skills">Skills</a>
          </li>
          <li className="cursor-pointer">
            <a href="#services">Services</a>
          </li>
          <li className="cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
              </ul>
              <ul className="md:hidden flex flex-row gap-6">
                  <li><FaGithub className="size-6 cursor-pointer text-white/80" /></li>
                  <li><FaLinkedin className="size-6 cursor-pointer text-white/80" /></li>
              </ul>
      </div>

      <hr className="border-white/10 mb-6 h-[0.5px]" />
      <div className="flex flex-row justify-between items-center">
        <p className="text-center text-white/60 text-sm">
          &copy; {new Date().getFullYear()} Temidayo Owoigbe. All rights
          reserved.
        </p>
        <div className="hidden md:flex flex-row gap-6">
          <FaGithub className="size-6 cursor-pointer text-white/80" />
          <FaLinkedin className="size-6 cursor-pointer text-white/80" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
