import { FaGraduationCap, FaSuitcase } from "react-icons/fa6";

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center gap-9 lg:gap-3 py-20 px-8 lg:px-20"
    >
      <h3 className="hidden lg:block uppercase text-[#6366f1] text-base font-semibold">
        Career Journey
      </h3>
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
        Experience & Education
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:mt-7 w-full gap-6 lg:gap-20">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 items-center">
            <FaGraduationCap className="size-9 text-[#6366f1]" />
            <h4 className="text-xl font-bold">Education and Certifications</h4>
          </div>
          <div className="flex flex-col  gap-4">
            <div className="border-l-2 rounded-lg py-6 bg-[#efeffe] px-8 border-[#6366f1] flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <h2 className="font-semibold text-lg">
                    Bachelor of Science in Computer Science
                  </h2>
                  <p className="font-medium text-sm text-[#4b5563]">
                    2024 - Present
                  </p>
                </div>
                <h3 className="text-[#6366f1] font-semibold text-md">
                  Redeemers University, Ede
                </h3>
              </div>
              <div>
                <p className="text-sm text-[#4b5563]">
                  Currently pursuing formal education with a strong focus on
                  technology and problem-solving. Actively developing skills in
                  frontend development, web technologies, and modern development
                  tools. Combining academic learning with hands-on projects to
                  build real-world applications.
                </p>
              </div>
            </div>
            <div className="border-l-2 rounded-lg py-6 bg-[#efeffe] px-8 border-[#6366f1] flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <h2 className="font-semibold text-lg">
                    Front-end Web Development
                  </h2>
                  <p className="font-medium text-sm text-[#4b5563]">2025</p>
                </div>
                <h3 className="text-[#6366f1] font-semibold text-md">Udemy</h3>
              </div>
              <div>
                <p className="text-sm text-[#4b5563]">
                  Successfully completed frontend web development training on
                  Udemy. Focused on building responsive, user-friendly web
                  interfaces. Applied concepts through hands-on projects and
                  continuous practice.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <FaSuitcase className="size-9 text-[#6366f1]" />
              <h4 className="text-xl font-bold">Work Experience</h4>
            </div>
            <div className="flex flex-col  gap-4">
              <div className="border-l-2 rounded-lg py-6 bg-[#efeffe] px-8 border-[#6366f1] flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <h2 className="font-semibold text-lg">
                      Front-end Web Developer
                    </h2>
                    <p className="font-medium text-sm text-[#4b5563]">
                      2025 - Present
                    </p>
                  </div>
                  <h3 className="text-[#6366f1] font-semibold text-md">
                    Freelancer
                  </h3>
                </div>
                <div>
                  <p className="text-sm text-[#4b5563]">
                    Working as a freelance frontend developer, building
                    responsive and user-focused web interfaces. Collaborating
                    with clients to translate ideas and designs into functional
                    web solutions. Continuously improving skills through
                    real-world projects and client feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
