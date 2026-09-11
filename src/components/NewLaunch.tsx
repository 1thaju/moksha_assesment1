import { ArrowRight, Droplets, ShieldCheck, Sparkles } from "lucide-react";
import blueWave from "../assets/bluewave.svg";
import bottle from "../assets/curlesBottle.svg";
import leaf from "../assets/leaf.svg";
import splash from "../assets/water-splash-isolated 1.svg";
import thread from "../assets/thread.svg";
import logo from "../assets/logo_hydracurl.svg";

const badges = [
  { icon: ShieldCheck, label: "No SLS, Silicones, Parabens" },
  { icon: Droplets, label: "48-Hour Hydration" },
  { icon: Sparkles, label: "Hair Types 2, 3, 4" },
];

export function NewLaunch() {
  return (
    <section className="relative bg-[#f0f8fb] pt-12 pb-20 md:pt-16 md:pb-28">
      {/* Palm Tree Leaf pinned to top-right corner behind the blue wave */}
      <img
        src={leaf}
        alt=""
        className="pointer-events-none absolute right-0 top-0 z-10 w-[280px] sm:w-[360px] md:w-[460px] lg:w-[540px] max-h-[320px] sm:max-h-[400px] md:max-h-[480px] h-auto object-top object-right"
      />

      {/* Cyan Wave Banner transitioning cleanly between Hero and NewLaunch */}
      <div className="pointer-events-none absolute left-0 top-0 -translate-y-1/2 z-20 w-full leading-[0]">
        <img src={blueWave} alt="" className="w-full h-auto block min-h-[50px]" />
      </div>

      {/* Main Section Content */}
      <div className="relative mx-auto max-w-[1340px] px-6 sm:px-10 lg:px-16 pt-4 md:pt-8">
        <div className="relative grid items-center gap-10 md:grid-cols-[1.05fr_1.15fr] lg:gap-14">
          
          {/* Left Column: Text & CTAs */}
          <div className="relative z-10 max-w-[560px]">
            {/* Title with brush stroke */}
            <div className="inline-block mb-4">
              <p className="font-script not-italic text-[36px] sm:text-[42px] md:text-[48px] lg:text-[52px] leading-none text-[#1a1a2e]">
                New Launch
              </p>
              {/* Hand-drawn underline graphic matching reference image */}
              <svg
                className="w-28 h-2.5 text-[#1a1a2e] opacity-80 mt-1.5"
                viewBox="0 0 100 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5C25 2 75 6 98 3"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Logo */}
            <div className="mb-6 flex items-center">
              <img
                src={logo}
                alt="Hydra Curls logo"
                className="h-[56px] sm:h-[64px] md:h-[74px] w-auto shrink-0"
              />
            </div>

            {/* Description */}
            <p className="max-w-[500px] font-sans italic text-[16px] sm:text-[18px] md:text-[19px] font-normal leading-[1.8] text-[#334155] mb-7">
              Revolutionary hair care range specially designed for Arab curly, coily &amp;
              wavy hair. Experience{" "}
              <span className="font-bold text-[#00cbf8] not-italic">
                48-hour hydration
              </span>{" "}
              with natural ingredients like Hyaluronic Acid, Coconut &amp; Avocado.
            </p>

            {/* Badges */}
            <ul className="flex flex-wrap gap-3 mb-8">
              {badges.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2.5 rounded-lg border border-[#00cbf8]/25 bg-[#e6f7fc] px-4 py-2.5 font-sans not-italic text-[13.5px] sm:text-[14.5px] font-medium text-[#334155] shadow-xs"
                >
                  <Icon size={18} className="shrink-0 text-[#00cbf8]" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center">
              <button className="inline-flex items-center gap-2.5 rounded-lg bg-[#00cbf8] hover:bg-[#00b8e0] px-7 py-3.5 font-sans not-italic text-[15.5px] sm:text-[16px] font-semibold text-white shadow-[0_4px_16px_rgba(0,203,248,0.35)] transition-all cursor-pointer active:scale-98">
                Explore Products <ArrowRight size={19} />
              </button>
              <button className="inline-flex items-center gap-2.5 rounded-lg border-2 border-[#00cbf8] bg-transparent hover:bg-[#00cbf8]/10 px-6.5 py-3.5 font-sans not-italic text-[15.5px] sm:text-[16px] font-semibold text-[#00cbf8] transition-all cursor-pointer">
                Learn Curly Girl Method
              </button>
            </div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="relative flex min-h-[380px] sm:min-h-[440px] md:min-h-[500px] items-center justify-center">
            {/* Thread SVG background graphic */}
            <img
              src={thread}
              alt=""
              className="pointer-events-none absolute -left-[35%] top-1/2 -translate-y-1/2 w-[160%] max-w-none opacity-30 z-0"
            />

            {/* Water Splash isolated around bottle */}
            <img
              src={splash}
              alt=""
              className="pointer-events-none absolute left-[0%] sm:left-[4%] md:left-[8%] top-[10%] w-[320px] sm:w-[400px] md:w-[480px] max-w-none opacity-90 z-0"
            />

            {/* Shampoo Bottle tilted clockwise ~13 degrees */}
            <img
              src={bottle}
              alt="Hydra Curls shampoo bottle"
              className="relative z-10 h-[320px] sm:h-[380px] md:h-[440px] w-auto rotate-[13deg] drop-shadow-[0_24px_32px_rgba(45,15,79,0.28)] transition-transform duration-300 hover:rotate-[10deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}