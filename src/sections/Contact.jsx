import {
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa6";
import { IoIosGlobe } from "react-icons/io";

const Contact = () => {
  return (
    <section className="py-20 px-8 lg:px-20 bg-[#f1f4fe] flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 border-[0.5px] border-[#534fdd] rounded-xl overflow-hidden shadow-lg">
        <div className="flex flex-col justify-center bg-[#534fdd] px-8 md:px-14 py-16 lg:py-o md:pr-28">
          <h3 className="text-[#c6d1fd] font-semibold text-base uppercase text-center lg:text-left hidden lg:block">
            Get in Touch
          </h3>
          <h1 className="text-white/90 text-2xl md:text-3xl lg:text-4xl font-bold">
            Let's Work Together
          </h1>
          <p className="text-white/70 text-sm md:text-base mt-4">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or you just want to say
            hi, feel free to reach out.
          </p>
          <div className="flex flex-col gap-5 mt-8">
            <div className="flex gap-4">
              <span className="h-10 w-10 md:h-12 md:w-12 shrink-0 bg-white/15 flex items-center justify-center rounded-md">
                <FaEnvelope className="size-4 md:size-5 text-white/95" />
              </span>
              <div className="flex flex-col leading-tight">
                <h4 className="text-white/60 text-sm md:text-base">Email</h4>
                <p className="text-base md:text-lg font-semibold text-white/80">
                  owoigbetemidayo@gmail.com
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="h-10 w-10 md:h-12 md:w-12 shrink-0 bg-white/15 flex items-center justify-center rounded-md">
                <FaPhone className="size-4 md:size-5 text-white/95" />
              </span>
              <div className="flex flex-col leading-tight">
                <h4 className="text-white/60 text-sm md:text-base">Phone</h4>
                <p className="text-base md:text-lg font-semibold text-white/80">
                  +234 810 123 4567
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="h-10 w-10 md:h-12 md:w-12 shrink-0 bg-white/15 flex items-center justify-center rounded-md">
                <FaLocationDot className="size-4 md:size-5 text-white/95" />
              </span>
              <div className="flex flex-col leading-tight">
                <h4 className="text-white/60 text-sm md:text-base">Location</h4>
                <p className="text-base md:text-lg font-semibold text-white/80">
                  Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/owoigbetemidayo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="h-10 w-10 md:h-12 md:w-12 bg-white/15 hover:bg-white/30 flex items-center justify-center rounded-md">
                <FaGithub className="size-4 md:size-5 text-white/95" />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/owoigbetemidayo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="h-10 w-10 md:h-12 md:w-12 bg-white/15 hover:bg-white/30 flex items-center justify-center rounded-md">
                <FaLinkedin className="size-4 md:size-5 text-white/95" />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/owoigbetemidayo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="h-10 w-10 md:h-12 md:w-12 bg-white/15 hover:bg-white/30 flex items-center justify-center rounded-md">
                <IoIosGlobe className="size-4 md:size-5 text-white/95" />
              </span>
            </a>
          </div>
        </div>
        <div className="bg-white p-4 md:px-14 py-12">
          <form className="flex flex-col gap-2">
            <div>
              <label htmlFor="Name" className="text-sm md:text-[15px] font-medium">Your Name</label>
              <input
                type="text"
                id="Name"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md py-2 px-2 md:px-4 md:py-3  mt-2 mb-4 font-medium focus:outline-none focus:ring-2 focus:ring-[#534fdd]"
              />
            </div>
            <div>
              <label htmlFor="Email" className="text-sm md:text-[15px] font-medium">Email Address</label>
              <input
                type="email"
                id="Email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md py-2 px-2 md:px-4 md:py-3  mt-2 mb-4 font-medium focus:outline-none focus:ring-2 focus:ring-[#534fdd]"
              />
            </div>
            <div>
              <input
                type="text"
                id="Name"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md py-2 px-2 md:px-4 md:py-3  mt-2 mb-4 font-medium focus:outline-none focus:ring-2 focus:ring-[#534fdd]"
              />
            </div>
            <div>
              <label htmlFor="Message" className="text-sm md:text-[15px] font-medium">Message</label>
              <textarea
                name="message"
                id="Message"
                className="w-full border border-gray-300 rounded-md py-2 px-2 md:px-4 md:py-3  mt-2 mb-4 font-medium focus:outline-none focus:ring-2 focus:ring-[#534fdd] resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex gap-3 items-center justify-center w-full bg-[#4f46e5]/90 hover:cursor-pointer hover:bg-[#4f46e5] py-3 rounded-xl text-white/90 md:text-lg font-semibold"
            >
              Send Message <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
