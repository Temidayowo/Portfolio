import { ArrowRight } from "lucide-react";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

// {"#f9fafc"}
// to
// #eff3ff

const Hero = () => {
  return (
    <section
      className="flex flex-col-reverse lg:grid grid-cols-2 bg-linear-to-br from-[#f9fafc] to-[#EFF3FF] lg:h-screen"
      id="hero"
    >
      <div className="w-full flex flex-col justify-center px-8 md:px-20 lg:py-24 py-16">
        <h3 className="text-[#3F20FB]/80 md:text-2xl font-semibold">
          Front-End Developer
        </h3>
        <h1 className="font-bold text-3xl md:text-6xl leading-9 md:leading-17 mt-4 mb-6 tracking-wide [word-spacing:-2px]">
          Building Digital Experience That
          <span className="text-[#3F20FB]/80"> Matter</span>
        </h1>
        <div className="flex flex-col gap-8">
          <p className="text-sm md:text-lg text-[#4b5563]">
            I craft responsive, user-centric web applications using modern
            technologies. Specializing in React, Node.js, and cloud solutions
            that drive business results.
          </p>
          <div>
            <button className="bg-[#3F20FB]/80 text-white text-sm md:text-base px-4 md:px-8 py-2 md:py-4 rounded-lg font-semibold hover:bg-[#3F20FB] transition duration-300 cursor-pointer">
              {" "}
              <a href="#contact" className="flex items-center gap-3.5">
                Let's Talk <ArrowRight className="size-5 md:size-7" />
              </a>
            </button>
          </div>
          <div className=" flex flex-row gap-8">
            <a href="https://github.com/Temidayowo">
              <FaGithub className="size-5 md:size-6 cursor-pointer text-[#303034]" />
            </a>
            <a href="https://github.com/owoigbetemidayo">
              <FaLinkedin className="size-5 md:size-6 cursor-pointer text-[#303034]" />
            </a>
            <a href="mailto:owoigbetemidayo@gmail.com">
              <FaEnvelope className="size-5 md:size-6 cursor-pointer text-[#303034]" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex lg:justify-center items-center px-8 py-15 md:px-20 lg:py-0 z-0">
        <div className="relative">
          <img
            src="/hero-img.png"
            alt="Hero"
            className="max-w-48 md:max-w-64 lg:max-w-md object-contain rounded-full lg:rounded-lg shadow-lg relative z-10 border-4 border-[#ececfc] lg:border-none"
          />
          <div className="hidden lg:block absolute -top-7 -right-7 shadow-2xs p-4 bg-white rounded-lg text-xs font-semibold z-20">
            {" "}
            <span className="text-[#3F20FB] text-2xl font-bold">10+</span>{" "}
            <br />
            Project Completed
          </div>
          <div className="absolute bottom-0 lg:-bottom-7 -right-35 md:-right-50 lg:right-auto lg:-left-7 bg-[#ececfc] lg:bg-white rounded-full lg:rounded-lg p-2 lg:p-4 z-10 shadow-2xl">
            <div className="hidden lg:block">
              <span className="text-[#3F20FB] text-2xl font-bold">1+</span>{" "}
              <br />
              Years Experience
            </div>
            <div className="lg:hidden flex flex-row items-center gap-4 justify-center h-full text--sm">
              {" "}
              <span className="h-1.5 w-1.5 bg-green-500 rounded-full"></span>
              Available for Work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
