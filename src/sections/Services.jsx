import { Code, LayoutGrid, MonitorSmartphone } from "lucide-react";

const Services = () => {
  return (
    <section
      className="flex flex-col items-center justify-center py-20 px-8 lg:px-20 bg-[#efeffe]"
      id="services"
    >
      <div className="text-center flex flex-col gap-4 mb-12">
        <h3 className="hidden lg:block uppercase text-[#6366f1] text-base font-semibold">
          What I do
        </h3>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
          Services I Offer
        </h1>
        <p className="hidden md:block text-[#4b5563]">
          Comprehensive web development solutions tailored to your needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        <div className="bg-white shadow-lg w-full py-8 px-10 rounded-xl flex gap-4">
          <div>
            <Code className="size-6 md:size-7 text-[#6366f1]" />
          </div>
          <div>
            <h2 className="text-base md:text-xl font-semibold mb-2">
              Web Development
            </h2>
            <p className="text-[#4b5563] text-sm md:text-base">
              Building fast, interactive, and scalable user interfaces, focused
              on clean code, performance, and usability. Using modern tools to
              deliver reliable web experiences.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg w-full py-8 px-10 rounded-xl flex gap-4">
          <div>
            <LayoutGrid className="size-6 md:size-7 text-[#6366f1]" />
          </div>
          <div>
            <h2 className="text-base md:text-xl font-semibold mb-2">
              UI Implementation
            </h2>
            <p className="text-[#4b5563] text-sm md:text-base">
              Converting design mockups into pixel-perfect interfaces. Ensuring
              accuracy, responsiveness, and accessibility. Bringing designs to
              life on the web.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg w-full py-8 px-10 rounded-xl flex gap-4">
          <div>
            <MonitorSmartphone className="size-6 md:size-7 text-[#6366f1]" />
          </div>
          <div>
            <h2 className="text-base md:text-xl font-semibold mb-2">
              Responsive Design
            </h2>
            <p className="text-[#4b5563] text-sm md:text-base">
              Designing layouts that adapt across all screen sizes. Optimized
              for mobile, tablet, and desktop devices. Providing a consistent
              user experience everywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
