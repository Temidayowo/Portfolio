import { FaCode } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import { IoRocket } from "react-icons/io5";

const About = () => {
  return (
    <section className="flex lg:grid grid-cols-2 bg-white py-20 lg:py-36 px-8 lg:px-20" id="about">
      <div className="hidden lg:flex items-center mb-12 lg:mb-0">
        <div className="relative z-0">
          <img
            src="/Temidayo.jpg"
            alt="Temidayo"
            className="lg:max-w-md rounded-lg relative z-10 shadow-2xl"
          />
          <div className="w-60  h-60 bg-[#ededfb] absolute -right-8 -bottom-8 rounded-xl -z-10"></div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-[#6366f1] font-semibold text-base uppercase text-center lg:flex justify-center lg:justify-start">
          <span className="w-fit bg-[#efeffe] lg:bg-transparent px-4 lg:px-0 py-1 rounded-full">
            About Me
          </span>
        </h3>
        <h1 className=" font-bold">
          Passionate Developer, Problem Solver
        </h1>
        <p className="text-[#4b5563]">
          I’m a frontend developer with a strong passion for crafting clean,
          responsive, and engaging user interfaces. I specialize in turning
          ideas and designs into interactive web experiences that feel smooth,
          intuitive, and accessible. <br />
          <br /> My approach blends modern frontend technologies with a deep
          focus on user experience. I believe great interfaces don’t just look
          good — they guide users, tell a story, and make every interaction feel
          effortless. <br />
          <br /> When I’m not building interfaces, you’ll find me refining UI
          details, learning new frontend frameworks, or experimenting with
          animations and performance techniques to stay sharp in this
          fast-moving field.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="flex flex-row gap-4 items-center md:gap-0 md:flex-col lg:gap-2 rounded-xl bg-[#f9fafb] mt-3 px-4 py-6">
            <FaCode className="text-[#6366f1] size-7" />
            <div className="">
              <h3 className="text-xl font-semibold">Clean Code</h3>
              <span className="text-sm text-[#4b5563]">
                Writing maintainable, scalable solutions
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center md:gap-0 md:flex-col lg:gap-2 rounded-xl bg-[#f9fafb] mt-3 px-4 py-6">
            <HiUserGroup className="text-[#6366f1] size-7" />
            <div>
              <h3 className="text-lg font-semibold">Team Player</h3>
              <span className="text-sm text-[#4b5563]">
                Collaborative approach to development
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center md:gap-0 md:flex-col lg:gap-2 rounded-xl bg-[#f9fafb] mt-3 px-4 py-6 md:hidden">
            <IoRocket className="text-[#6366f1] size-9" />
            <div>
              <h3 className="text-lg font-semibold">Fast Learner</h3>
              <span className="text-sm text-[#4b5563]">
                Always exploring new technologies and best practices in web
                development.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
