import { ChevronDown } from "lucide-react";
import heroVideo from "../assets/hero_video.mp4";
import logo from "../assets/logo_hydracurl.svg";

export function Hero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#351052] pt-0">
      {/* 100vh + 100px Container */}
      <div className="relative mx-auto flex h-[calc(100vh+100px)] min-h-[680px] w-full max-w-[1920px] flex-col justify-between overflow-hidden">
        {/* Background Video Layer */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-100"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>

        {/* Radial Purple Glow Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(196,150,255,0.45) 0%, rgba(120,72,181,0.28) 32%, rgba(35,12,57,0.72) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Central Hero Content */}
        <div className="relative mx-auto flex w-full max-w-[1098px] flex-1 flex-col items-center justify-center px-4 py-8 text-center sm:px-6">
          {/* Logo in Hero — 204x98px */}
          <div className="mb-6 flex items-center justify-center sm:mb-8">
            <img
              src={logo}
              alt="Hydra Curls logo"
              className="h-auto w-[150px] object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)] sm:w-[180px] lg:w-[204px]"
              style={{
                maxWidth: "203.67px",
                height: "auto",
                opacity: 1,
              }}
            />
          </div>

          {/* Hero Headline — Kaushan Script 80px, 100% line-height, text-align: center */}
          <h1
            className="w-full text-center text-[36px] font-normal leading-[105%] tracking-normal drop-shadow-[0_4px_18px_rgba(36,9,62,0.35)] sm:text-[52px] md:text-[66px] lg:text-[80px]"
            style={{
              fontFamily: '"Kaushan Script", cursive',
              fontStyle: "normal",
              fontWeight: 400,
              background:
                "linear-gradient(90deg, #1D3565 11.52%, #834E99 31.49%, #834E99 73.53%, #1D3565 99.65%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Pure ingredients. Real results.
            <span className="mt-2 block sm:mt-3">Every drop matters.</span>
          </h1>

          {/* Waveline in Hero — 471x16px, 3px stroke width */}
          <div className="mt-8 flex w-full items-center justify-center sm:mt-10 lg:mt-12">
            <svg
              className="h-[16px] w-[min(90vw,471px)] text-white opacity-95"
              viewBox="0 0 471 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M0 8 C 19.6 0, 39.2 0, 58.8 8 C 78.4 16, 98 16, 117.6 8 C 137.2 0, 156.8 0, 176.4 8 C 196 16, 215.6 16, 235.2 8 C 254.8 0, 274.4 0, 294 8 C 313.6 16, 333.2 16, 352.8 8 C 372.4 0, 392 0, 411.6 8 C 431.2 16, 450.8 16, 471 8"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Bottom Chevron Down */}
        <div className="relative flex justify-center pb-6 lg:pb-8">
          <ChevronDown
            className="animate-bounce cursor-pointer text-white/80 transition-colors hover:text-white"
            size={30}
            style={{ width: "30px", height: "30px", opacity: 1 }}
          />
        </div>
      </div>
    </section>
  );
}
