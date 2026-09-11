import { useState } from "react";
import bottle from "../assets/curlesBottle.svg";
import conditioner from "../assets/CONDITIONER1 6.svg";
import cream from "../assets/CREAM 1.svg";
import gel1 from "../assets/GEL 1.svg";
import gel2 from "../assets/GEL 2.svg";
import arrow from "../assets/arrow.svg";
import productBg from "../assets/product bg.svg";
import productNextBg from "../assets/product next bg.svg";
import cloud from "../assets/cloud.svg";
import blueWave from "../assets/bluewave.svg";

const products = [
  {
    name: "Hydrating Shampoo",
    image: bottle,
    gradient: ["#6c367e", "#4a1f59"],
    blobHue: "0deg",
    ring1: "#bfa6cc",
    ring2: "#ded4e8",
  },
  {
    name: "Hydrating Conditioner",
    image: conditioner,
    gradient: ["#5b6ab3", "#414d8a"],
    blobHue: "-100deg",
    ring1: "#aab5e3",
    ring2: "#d6dcf2",
  },
  {
    name: "Defining Gel",
    image: gel1,
    gradient: ["#0084d1", "#0064a3"],
    blobHue: "-160deg",
    ring1: "#8ccdf5",
    ring2: "#cce8fa",
  },
  {
    name: "Defining Cream",
    image: cream,
    gradient: ["#00c2f3", "#009acc"],
    blobHue: "-180deg",
    ring1: "#8ee1f7",
    ring2: "#ccf2fb",
  },
  {
    name: "Hydrating Mask",
    image: gel2,
    gradient: ["#00a2b8", "#007e91"],
    blobHue: "-200deg",
    ring1: "#82d6e3",
    ring2: "#c5eef5",
  },
];

export function ProductCarousel() {
  const [active, setActive] = useState(0);

  const prevIndex = (active - 1 + products.length) % products.length;
  const nextIndex = (active + 1) % products.length;

  return (
    <section className="relative w-full bg-[#f4fbfd] overflow-x-hidden overflow-y-visible flex flex-col pt-10 md:pt-20 pb-20">
      
      {/* Top Background area for Clouds */}
      <div className="relative w-full h-[150px] md:h-[200px] z-10">
        <img
          src={cloud}
          alt=""
          className="absolute left-0 bottom-0 w-[85%] sm:w-[70%] md:w-[60%] lg:w-[50%] opacity-90 pointer-events-none"
        />
      </div>

      {/* Main Dome Container */}
      <div className="relative w-full z-20 flex flex-col">
        
        {/* Blue Wave positioned absolutely on the top edge of the dome to hide the straight line */}
        <img
          src={blueWave}
          alt=""
          className="absolute top-0 left-0 w-full h-auto block drop-shadow-lg z-30 -translate-y-[55%]"
        />

        <svg
          viewBox="0 0 1920 1150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full h-auto block z-20"
        >
          <defs>
            <linearGradient id="purpleDomeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={products[active].gradient[0]} style={{ transition: "stop-color 0.5s ease" }} />
              <stop offset="100%" stopColor={products[active].gradient[1]} style={{ transition: "stop-color 0.5s ease" }} />
            </linearGradient>
            {/* The path for the curved text to follow. Offset nicely below the dome */}
            <path id="textPathCurve" d="M -100 200 A 960 1060 0 0 0 2020 200" />
          </defs>

          {/* Outer Faded Shadow Ring 2 (Lightest) */}
          <path d="M 0 0 A 960 1020 0 0 0 1920 0 Z" fill={products[active].ring2} opacity="0.9" style={{ transition: "fill 0.5s ease" }} />

          {/* Inner Faded Shadow Ring 1 (Medium) */}
          <path d="M 0 0 A 960 970 0 0 0 1920 0 Z" fill={products[active].ring1} opacity="0.9" style={{ transition: "fill 0.5s ease" }} />

          {/* Main Purple Half-Circle / Dome */}
          <path d="M 0 0 A 960 920 0 0 0 1920 0 Z" fill="url(#purpleDomeGrad)" />

          {/* Curved Text */}
          <text 
            fontSize="46" 
            fill="#7E8F9F" 
            fontWeight="normal" 
            fontStyle="italic"
            style={{ fontFamily: 'var(--font-script, cursive)' }}
          >
            <textPath href="#textPathCurve" startOffset="50%" textAnchor="middle">
              Experience the power of hydration in every drop.
            </textPath>
          </text>
        </svg>

        {/* Absolute overlays for products and controls inside the dome */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          
          {/* Previous Product (Positioned Up-Left & Slightly Blurred) */}
          <div
            onClick={() => setActive(prevIndex)}
            className="absolute left-[12%] sm:left-[18%] md:left-[22%] top-[22%] sm:top-[25%] md:top-[28%] z-30 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 filter blur-[1.5px] opacity-85 hover:blur-none hover:opacity-100 pointer-events-auto"
          >
            <img
              src={productNextBg}
              alt=""
              className="absolute w-[110px] sm:w-[150px] md:w-[180px] lg:w-[200px] h-auto object-contain -z-10"
              style={{ filter: `hue-rotate(${products[prevIndex].blobHue})`, transition: "filter 0.5s ease" }}
            />
            <img
              src={products[prevIndex].image}
              alt={products[prevIndex].name}
              className="relative z-10 h-[100px] sm:h-[130px] md:h-[160px] lg:h-[180px] w-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Active Present Product (Centered, Upright) */}
          <div className="absolute left-1/2 top-[42%] md:top-[45%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-40 pointer-events-auto">
            {/* Organic Pink/Purple Product Background Blob */}
            <img
              src={productBg}
              alt=""
              className="absolute w-[180px] sm:w-[240px] md:w-[300px] lg:w-[340px] h-auto object-contain opacity-95 -z-10"
              style={{ filter: `hue-rotate(${products[active].blobHue})`, transition: "filter 0.5s ease" }}
            />
            {/* Active Product Image */}
            <img
              src={products[active].image}
              alt={products[active].name}
              className="relative z-10 h-[160px] sm:h-[220px] md:h-[280px] lg:h-[300px] w-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
            />
            {/* Active Product Name */}
            <h3 className="relative z-10 mt-3 sm:mt-4 md:mt-5 text-[16px] sm:text-[18px] md:text-[20px] font-bold text-white text-center tracking-wide drop-shadow-md">
              {products[active].name}
            </h3>
          </div>

          {/* Next Product (Positioned Up-Right & Slightly Blurred) */}
          <div
            onClick={() => setActive(nextIndex)}
            className="absolute right-[12%] sm:right-[18%] md:right-[22%] top-[22%] sm:top-[25%] md:top-[28%] z-30 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 filter blur-[1.5px] opacity-85 hover:blur-none hover:opacity-100 pointer-events-auto"
          >
            {/* Blue Product Background Blob */}
            <img
              src={productNextBg}
              alt=""
              className="absolute w-[110px] sm:w-[150px] md:w-[180px] lg:w-[200px] h-auto object-contain -z-10"
              style={{ filter: `hue-rotate(${products[nextIndex].blobHue})`, transition: "filter 0.5s ease" }}
            />
            {/* Next Product Image */}
            <img
              src={products[nextIndex].image}
              alt={products[nextIndex].name}
              className="relative z-10 h-[100px] sm:h-[130px] md:h-[160px] lg:h-[180px] w-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Left Navigation Arrow Button */}
          <button
            onClick={() => setActive(prevIndex)}
            className="absolute left-[12%] sm:left-[18%] md:left-[22%] top-[50%] md:top-[55%] -translate-y-1/2 z-50 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-[10px] md:rounded-[12px] bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-lg pointer-events-auto"
            aria-label="Previous Product"
          >
            <img src={arrow} alt="Previous" className="w-4 sm:w-5 md:w-6 h-auto rotate-180" />
          </button>

          {/* Right Navigation Arrow Button */}
          <button
            onClick={() => setActive(nextIndex)}
            className="absolute right-[12%] sm:right-[18%] md:right-[22%] top-[50%] md:top-[55%] -translate-y-1/2 z-50 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-[10px] md:rounded-[12px] bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-lg pointer-events-auto"
            aria-label="Next Product"
          >
            <img src={arrow} alt="Next" className="w-4 sm:w-5 md:w-6 h-auto" />
          </button>

          {/* Thumbnail Circles Row near bottom curve */}
          <div className="absolute left-1/2 bottom-[18%] sm:bottom-[20%] md:bottom-[22%] -translate-x-1/2 z-50 flex items-center gap-3 sm:gap-4 md:gap-5 pointer-events-auto">
            {products.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`relative w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center p-2 sm:p-2.5 transition-all cursor-pointer ${
                  active === idx
                    ? "border-[2px] border-[#00cbf8] bg-[#00cbf8]/20 shadow-[0_0_15px_rgba(0,203,248,0.6)] scale-110"
                    : "border-[1.5px] border-white/20 bg-white/10 hover:bg-white/25 opacity-70 hover:opacity-100"
                }`}
                aria-label={`Select ${item.name}`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </button>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}
