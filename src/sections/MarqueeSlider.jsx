const tech = [
  { name: "HTML", logo: "/HTML5.png" },
  { name: "CSS", logo: "/CSS3.png" },
  { name: "JavaScript", logo: "/JavaScript.png" },
  { name: "TypeScript", logo: "/TypeScript.png" },
  { name: "React", logo: "/React.png" },
  { name: "Tailwind", logo: "/Tailwind CSS.png" },
  { name: "Vite", logo: "/Vite.js.png" },
  { name: "Git", logo: "/Git.png" },
];

export default function MarqueeSlider() {
  return (
      <div className="relative overflow-hidden py-10">
          <h3 className="text-center text-[#4b5563] font-semibold mb-4">Technologies I Work With</h3>
      <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
        {[...tech, ...tech, ...tech].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 py-4 rounded-xl backdrop-blur-sm"
          >
            <img
              src={item.logo}
              alt={item.name}
              width={28}
              height={28}
              className="w-6 md:w-7 h-6 md:h-7"
            />
            <span className="hidden md:block hover:cursor-default text-[#4b5563] text-sm font-semibold">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
