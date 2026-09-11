import React from "react";
import clockGif from "../assets/clock.gif";
import outerClockGif from "../assets/outerclock.gif";
import ingredientsBg from "../assets/ingrdiants_bg.svg";
import { Droplet, Sparkles } from "lucide-react";
import { WaveDivider } from "./WaveDivider";

export function PromiseSection() {
  return (
    <section className="relative w-full bg-[#f4fbfd] pt-32 md:pt-48 pb-32 overflow-hidden z-10">
      <img
        src={ingredientsBg}
        alt=""
        className="absolute top-[-20px] md:top-[-80px] left-0 w-full h-auto min-w-[1400px] object-cover object-top pointer-events-none z-0"
      />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        {/* Top Header Centered */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-3">
            <p className="font-script text-xl text-black">The Hydra Curls Promise</p>
            {/* Simple squiggly underline */}
            <svg className="absolute w-full h-2 -bottom-1 left-0 text-gray-400" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,5 Q10,10 20,5 T40,5 T60,5 T80,5 T100,5" stroke="currentColor" fill="none" strokeWidth="0.5" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-black leading-tight">
            Clinically Proven <br />
            <span className="text-[#00cbf8]">48-Hour</span> Hydration
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start relative">
          {/* Left Content */}
          <div className="relative z-10 pt-4">
            <p className="text-sm md:text-[15px] text-gray-600 max-w-[400px] font-medium leading-relaxed mb-10">
              Our advanced formula with Hyaluronic Acid doesn't just coat your
              hair; it penetrates the cuticle to lock in moisture from the inside out,
              providing continuous hydration for two full days.
            </p>

            <div className="relative ml-2 flex flex-col gap-10">
              {/* Squiggly/Dashed Line connecting the dots */}
              <div className="absolute left-[8px] top-[15px] bottom-[15px] w-[5px] border-l-[1.5px] border-[#00cbf8] border-dashed opacity-40">
                {/* Wavy css effect if possible, but dashed is close enough */}
              </div>

              <div className="relative pl-10">
                <div className="absolute left-[-2px] top-0 text-[#00cbf8]">
                  <Droplet size={20} strokeWidth={2.5} className="fill-transparent" />
                </div>
                <h4 className="font-bold text-black text-sm md:text-base">Moisture Attraction</h4>
                <p className="text-[13px] text-gray-500 mt-1.5 leading-relaxed max-w-[280px] font-medium">
                  Hyaluronic Acid acts like a magnet for moisture,
                  drawing hydration into each strand.
                </p>
              </div>

              <div className="relative pl-10">
                <div className="absolute left-[-2px] top-1 text-[#00cbf8]">
                  <Sparkles size={20} strokeWidth={2.5} className="fill-transparent" />
                </div>
                <h4 className="font-bold text-black text-sm md:text-base">Strengthening Seal</h4>
                <p className="text-[13px] text-gray-500 mt-1.5 leading-relaxed max-w-[280px] font-medium">
                  Coconut & Avocado oils seal the hair cuticle,
                  preventing moisture loss and adding strength.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Clock & 48 Hours */}
          <div className="relative flex flex-col items-center justify-center z-10 pt-10 md:pt-0">
            
            {/* Decorative Arrow from left to right */}
            <svg className="absolute left-[-25%] top-[15%] w-40 h-24 hidden md:block opacity-30" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,35 Q40,-10 90,30" stroke="#000" strokeWidth="0.5" fill="none" />
              <path d="M85,22 L93,31 L81,36" stroke="#000" strokeWidth="0.5" fill="none" />
            </svg>

            {/* Combined Gifs */}
            <div className="relative w-36 h-36 md:w-44 md:h-44 mb-2">
              <img src={outerClockGif} alt="" className="absolute inset-0 w-full h-full object-contain z-10" />
              <img src={clockGif} alt="Clock" className="absolute inset-0 w-full h-full object-contain scale-[0.6] z-20" />
            </div>

            <div className="relative flex items-end justify-center -mt-6">
              <h2 className="text-[110px] md:text-[140px] font-black text-black leading-none tracking-tighter">
                48
              </h2>
              <div className="absolute right-[-15px] bottom-[25px] md:right-[-25px] md:bottom-[35px] bg-[#00cbf8] text-white text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-lg transform -rotate-[10deg] shadow-lg whitespace-nowrap">
                Hours
              </div>
            </div>

            <p className="text-center text-[11px] md:text-[13px] text-gray-500 font-medium mt-1">
              of continuous curl hydration<br />and frizz control.
            </p>
          </div>

        </div>
      </div>
      
      {/* Wave at bottom to transition to ingredients section */}
      <WaveDivider color="#f4f9fa" className="z-20" />
    </section>
  );
}
