import { IoLayers } from "react-icons/io5";
import { FaCode, FaPalette } from "react-icons/fa6";
import { Check } from "lucide-react";
import MarqueeSlider from "./MarqueeSlider";

const Skills = () => {
  return (
    <section
      className="flex flex-col gap-10 lg:gap-20 bg-linear-to-br px-8 md:px-20 py-12 from-[#f9fafc] to-[#EFF3FF]"
      id="skill"
    >
      <div className="flex flex-col gap-4  items-center">
        <h3 className="hidden lg:block uppercase text-[#6366f1] font-semibold text-lg">
          Expertise
        </h3>
        <h1 className="lg:text-4xl text-2xl font-bold">Skills & Technologies</h1>
        <p className="hidden md:block text-[#4b5563]">
          A comprehensive toolkit for building modern, scalable web
          applications.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 justify-items-center">
        <div className="bg-white shadow-2xl w-full py-8 px-10 rounded-xl">
          <div className="flex flex-col gap-4 mb-6">
            <IoLayers className="text-4xl text-[#6366f1]" />
            <h2 className="text-xl font-semibold">Framework & Libraries</h2>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-4">
              <Check className="text-[#6366f1]" />{" "}
              <h3 className="font-medium text-[#4b5563]">React</h3>
            </div>
            <div className="flex gap-4">
              <Check className="text-[#6366f1]" />{" "}
              <h3 className="font-medium text-[#4b5563]">Tailwind CSS</h3>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-2xl w-full py-8 px-10 rounded-xl">
          <div className="flex flex-col gap-4 mb-6">
            <FaCode className="text-4xl text-[#6366f1]" />
            <h2 className="text-xl font-semibold">Languages & Tools</h2>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-4">
              <Check className="text-[#6366f1]" /> <h3>JavaScript</h3>
            </div>
            <div className="flex gap-4">
              <Check className="text-[#6366f1]" /> <h3>HTML5</h3>
            </div>
            <div className="flex gap-4">
              <Check className="text-[#6366f1]" /> <h3>CSS3</h3>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-2xl w-full py-8 px-10 rounded-xl">
          <div className="flex flex-col gap-4 mb-6">
            <FaPalette className="text-4xl text-[#6366f1]" />
            <h2 className="text-xl font-semibold">Styling & UI</h2>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-4">
              <Check className="text-[#6366f1]" /> <h3>Tailwind CSS</h3>
            </div>
            <div className="flex gap-4">
              <Check className="text-[#6366f1]" /> <h3>CSS Modules</h3>
            </div>
            <div className="flex gap-4">
              <Check className="text-[#6366f1]" /> <h3>Flexbox & Grid</h3>
            </div>
          </div>
        </div>
      </div>
      <MarqueeSlider />
    </section>
  );
};

export default Skills;
