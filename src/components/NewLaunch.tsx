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
    <section
      id="new-launch"
      className="relative z-30 w-full bg-[#f3dff] -mt-[45px] sm:-mt-[60px] md:-mt-[80px] lg:-mt-[95px] pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-12 md:pb-14 overflow-visible"
      style={{
        maxWidth: "1920px",
        margin: "0 auto",
      }}
    >
      {/* 1. Palm Leaf in Top Right Corner */}
      <div
        className="pointer-events-none absolute top-0 right-0 z-10 select-none overflow-hidden"
        aria-hidden="true"
      >
        <img
          src={leaf}
          alt=""
          className="w-[220px] sm:w-[300px] md:w-[400px] lg:w-[480px] xl:w-[560px] max-w-[560px] h-auto object-contain object-top object-right opacity-100"
        />
      </div>

      {/* 2. Top Cyan Wave Transition Banner - Overlapping Hero Video Layer */}
      <div className="pointer-events-none absolute left-0 top-0 -translate-y-1/2 z-40 w-full leading-[0]">
        <img
          src={blueWave}
          alt=""
          className="w-full h-auto block min-h-[48px] sm:min-h-[64px] md:min-h-[80px] lg:min-h-[96px]"
        />
      </div>

      {/* 3. Background Swooping Thread Graphic */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center overflow-hidden opacity-40 select-none">
        <img
          src={thread}
          alt=""
          className="w-full min-w-[1100px] max-w-[1920px] h-auto object-cover"
          aria-hidden="true"
        />
      </div>

      {/* 4. Main Content Container */}
      <div className="relative mx-auto w-full max-w-[1920px] px-6 sm:px-10 md:px-16 lg:px-16 xl:px-[120px] z-20">
        <div className="grid grid-cols-1 items-center gap-8 md:gap-10 lg:grid-cols-[1.1fr_0.9fr] xl:grid-cols-[692px_1fr] lg:gap-8 xl:gap-12">
          
          {/* Left Column: Title, Logo, Paragraph, Badges, CTAs */}
          <div className="flex flex-col items-start justify-center text-left z-30 max-w-[692px]">
            
            {/* New Launch Title + Hand-drawn squiggly underline */}
            <div className="mb-3 sm:mb-4 flex flex-col items-start">
              <h2
                className="font-guthen capitalize text-[#1a1a2e]"
                style={{
                  fontFamily: "'Guthen Bloots Personal Use', 'Caveat', 'Kaushan Script', cursive",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "24px",
                  lineHeight: "100%",
                  letterSpacing: "0.1em",
                  textTransform: "capitalize",
                }}
              >
                New Launch
              </h2>
              {/* Hand-drawn squiggly underline matching reference */}
              <svg
                className="w-24 sm:w-28 h-2 text-[#1a1a2e] opacity-80 mt-1"
                viewBox="0 0 100 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 4.5 C 14 1.5, 26 7.5, 38 4.5 C 50 1.5, 62 7.5, 74 4.5 C 86 1.5, 94 6, 98 4"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Logo in New Launch */}
            <div className="mb-5 sm:mb-6 flex items-center">
              <img
                src={logo}
                alt="Hydra Curls"
                className="w-auto h-auto object-contain"
                style={{
                  width: "168px",
                  height: "81px",
                  maxWidth: "168px",
                  maxHeight: "81px",
                }}
              />
            </div>

            {/* Paragraph in New Launch */}
            <div className="mb-5 sm:mb-6 w-full max-w-[692px]">
              <p
                className="font-kaushan text-[#334155] text-[19px] sm:text-[21px] md:text-[23px] lg:text-[24px] leading-[135%] sm:leading-[130%]"
                style={{
                  fontFamily: "'Kaushan Script', cursive",
                  fontWeight: 400,
                  fontStyle: "normal",
                  letterSpacing: "0%",
                }}
              >
                Revolutionary hair care range specially designed for Arab curly, coily &amp;
                wavy hair. Experience{" "}
                <span
                  className="font-kaushan text-[#00cbf8] font-bold"
                  style={{
                    fontFamily: "'Kaushan Script', cursive",
                    fontWeight: 400,
                    letterSpacing: "0%",
                  }}
                >
                  48-hour hydration
                </span>{" "}
                with natural ingredients like Hyaluronic Acid, Coconut &amp; Avocado.
              </p>
            </div>

            {/* Badges / CTC Type Cards Row */}
            <ul className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6 sm:mb-7">
              {badges.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 rounded-[10px] border border-[#00cbf8]/40 bg-[#e6f7fc]/95 px-3 sm:px-3.5 py-2 shadow-xs transition-all hover:bg-[#dcf3fa]"
                  style={{
                    minHeight: "40px",
                    borderRadius: "10px",
                  }}
                >
                  <Icon size={16} className="shrink-0 text-[#00cbf8]" />
                  <span
                    className="font-gotham text-[#334155] text-[13px] sm:text-[14px] md:text-[15px] font-normal leading-tight whitespace-nowrap"
                    style={{
                      fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
                    }}
                  >
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap gap-3.5 sm:gap-4 items-center">
              {/* Button 1: Explore Products */}
              <button
                type="button"
                className="group inline-flex items-center justify-center rounded-[10px] bg-[#00cbf8] text-white shadow-[0_4px_16px_rgba(0,203,248,0.38)] transition-all duration-300 hover:bg-[#00b8e0] hover:shadow-[0_6px_22px_rgba(0,203,248,0.48)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                style={{
                  width: "240px",
                  height: "58px",
                  borderRadius: "10px",
                  padding: "10px 16px",
                  gap: "10px",
                }}
              >
                <span
                  className="font-gotham flex items-center justify-center gap-2 text-center text-[18px] sm:text-[20px] font-normal"
                  style={{
                    fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
                    fontWeight: 400,
                    lineHeight: "100%",
                  }}
                >
                  Explore Products
                  <ArrowRight className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>

              {/* Button 2: Learn Curly Girl Method */}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-[10px] border-2 border-[#00cbf8] bg-transparent hover:bg-[#00cbf8]/10 px-6 text-[#00cbf8] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                style={{
                  height: "58px",
                  borderRadius: "10px",
                  padding: "10px 16px",
                }}
              >
                <span
                  className="font-gotham text-center text-[16px] sm:text-[18px] font-normal"
                  style={{
                    fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
                    fontWeight: 400,
                    lineHeight: "100%",
                  }}
                >
                  Learn Curly Girl Method
                </span>
              </button>
            </div>

          </div>

          {/* Right Column: Visual Composition (Watersplash + Product Bottle) */}
          <div className="relative flex items-center justify-center min-h-[300px] sm:min-h-[380px] md:min-h-[460px] lg:min-h-[520px] xl:min-h-[560px]">
            
            {/* Watersplash Image - reduced size */}
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center z-10 select-none"
              aria-hidden="true"
            >
              <img
                src={splash}
                alt=""
                className="w-[240px] sm:w-[320px] md:w-[400px] lg:w-[460px] xl:w-[520px] max-w-[520px] h-auto object-contain opacity-100"
                style={{
                  maxWidth: "520px",
                  maxHeight: "520px",
                }}
              />
            </div>

            {/* Product Bottle Image - reduced size & rotated -19.5deg */}
            <div className="relative z-20 flex items-center justify-center select-none">
              <img
                src={bottle}
                alt="Parachute Advansed Hydra Curls Shampoo Bottle"
                className="w-auto h-[260px] sm:h-[340px] md:h-[410px] lg:h-[470px] xl:h-[530px] max-h-[530px] object-contain drop-shadow-[0_20px_32px_rgba(30,10,50,0.32)] transition-transform duration-500 hover:scale-105"
                style={{
                  maxWidth: "240px",
                  transform: "rotate(-19.5deg)",
                  transformOrigin: "center center",
                }}
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default NewLaunch;