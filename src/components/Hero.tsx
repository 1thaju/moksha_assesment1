import { ChevronDown } from "lucide-react";
import { Header } from "./Header";
import heroVideo from "../assets/hero_video.mp4";
import logo from "../assets/logo_hydracurl.svg";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#351052] pt-0">
      <div className="relative h-[calc(100vh+75px)] min-h-[560px] w-full overflow-visible pt-[75px]">
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

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(196,150,255,0.45) 0%, rgba(120,72,181,0.28) 32%, rgba(35,12,57,0.72) 100%)",
          }}
          aria-hidden="true"
        />

        <Header />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pb-10 pt-16 text-center md:pb-14 md:pt-24">
          <div className="mb-6 flex items-center justify-center">
            <img src={logo} alt="Hydra Curls logo" className="h-10 w-auto md:h-12" />
          </div>

          <h1
            className="text-center text-[48px] font-normal leading-[100%] tracking-[0%] drop-shadow-[0_4px_15px_rgba(36,9,62,0.25)] sm:text-[46px] md:text-[52px] lg:text-[60px]"
            style={{
              fontFamily: '"Kaushan Script", cursive',
              fontStyle: "normal",
              background:
                "linear-gradient(90deg, #1D3565 11.52%, #834E99 31.49%, #834E99 73.53%, #1D3565 99.65%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Pure ingredients. Real results.
            <span className="mt-2 block">Every drop matters.</span>
          </h1>

          <svg
            className="mt-8 h-[14px] w-[min(88vw,620px)] opacity-90"
            viewBox="0 0 620 14"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 7 Q 15.5 0, 31 7 T 62 7 T 93 7 T 124 7 T 155 7 T 186 7 T 217 7 T 248 7 T 279 7 T 310 7 T 341 7 T 372 7 T 403 7 T 434 7 T 465 7 T 496 7 T 527 7 T 558 7 T 589 7 T 620 7"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="relative flex justify-center pb-8">
          <ChevronDown className="text-white/70 animate-bounce" size={22} />
        </div>
      </div>
    </section>
  );
}
