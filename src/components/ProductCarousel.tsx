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
    <section className="relative w-full bg-[#f4fbfd] overflow-x-hidden overflow-y-visible flex flex-col pt-4 sm:pt-10 md:pt-16 pb-10 sm:pb-16 md:pb-24">
      
      {/* Top Background area for Clouds */}
      <div className="relative w-full h-[60px] sm:h-[120px] md:h-[180px] z-10">
        <img
          src={cloud}
          alt=""
          className="absolute left-0 bottom-0 w-[90%] sm:w-[75%] md:w-[60%] lg:w-[48%] opacity-90 pointer-events-none select-none"
        />
      </div>

      {/* Main Dome Container */}
      <div className="relative w-full z-20 flex flex-col">
        
        {/* Blue Wave positioned on top edge of the dome */}
        <img
          src={blueWave}
          alt=""
          className="absolute top-0 left-0 w-full h-auto block drop-shadow-lg z-30 -translate-y-[52%] pointer-events-none min-h-[32px] sm:min-h-[50px]"
        />

        {/* Scalable SVG Dome Graphic */}
        <svg
          viewBox="0 0 1920 1200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full h-auto block z-20 aspect-[1920/1200]"
        >
          <defs>
            <linearGradient id="purpleDomeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={products[active].gradient[0]} style={{ transition: "stop-color 0.5s ease" }} />
              <stop offset="100%" stopColor={products[active].gradient[1]} style={{ transition: "stop-color 0.5s ease" }} />
            </linearGradient>
            {/* Curved Path below outer ring for the text */}
            <path id="textPathCurve" d="M -80 50 A 1040 1100 0 0 0 2000 50" fill="none" />
          </defs>

          {/* Outer Faded Shadow Ring 2 */}
          <path d="M 0 0 A 960 1020 0 0 0 1920 0 Z" fill={products[active].ring2} opacity="0.9" style={{ transition: "fill 0.5s ease" }} />

          {/* Inner Faded Shadow Ring 1 */}
          <path d="M 0 0 A 960 970 0 0 0 1920 0 Z" fill={products[active].ring1} opacity="0.9" style={{ transition: "fill 0.5s ease" }} />

          {/* Main Dome Body */}
          <path d="M 0 0 A 960 920 0 0 0 1920 0 Z" fill="url(#purpleDomeGrad)" />

          {/* Curved Text Below Carousel Dome */}
          <text 
            fontSize="72" 
            fill="#7E8F9F" 
            fontWeight="400"
            className="select-none drop-shadow-sm"
            style={{ 
              fontFamily: "'Kaushan Script', cursive",
              letterSpacing: "0%",
            }}
          >
            <textPath href="#textPathCurve" startOffset="50%" textAnchor="middle">
              Experience the power of hydration in every drop.
            </textPath>
          </text>
        </svg>

        {/* Carousel Overlays Container */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          
          {/* Previous Product Preview */}
          <div
            onClick={() => setActive(prevIndex)}
            className="hidden sm:flex absolute left-[12%] sm:left-[14%] md:left-[18%] lg:left-[22%] top-[22%] sm:top-[24%] md:top-[26%] z-30 flex-col items-center justify-center cursor-pointer transition-all duration-300 filter blur-[1.5px] opacity-75 hover:blur-none hover:opacity-100 pointer-events-auto"
            aria-label={`Previous product: ${products[prevIndex].name}`}
          >
            <img
              src={productNextBg}
              alt=""
              className="absolute w-[80px] sm:w-[120px] md:w-[160px] lg:w-[190px] h-auto object-contain -z-10"
              style={{ filter: `hue-rotate(${products[prevIndex].blobHue})`, transition: "filter 0.5s ease" }}
            />
            <img
              src={products[prevIndex].image}
              alt={products[prevIndex].name}
              className="relative z-10 h-[70px] sm:h-[100px] md:h-[140px] lg:h-[170px] w-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Active Centered Product */}
          <div className="absolute left-1/2 top-[30%] sm:top-[33%] md:top-[38%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-40 pointer-events-auto w-full max-w-[280px] sm:max-w-[400px] px-2">
            <div className="relative flex items-center justify-center">
              {/* Rotated Background Blob */}
              <img
                src={productBg}
                alt=""
                className="w-[90px] sm:w-[140px] md:w-[200px] lg:w-[250px] h-auto object-contain select-none -z-10"
                style={{
                  maxWidth: "250px",
                  maxHeight: "350px",
                  borderRadius: "180px",
                  transform: "rotate(4.5deg)",
                  opacity: 1,
                  filter: `hue-rotate(${products[active].blobHue})`,
                  transition: "filter 0.5s ease, transform 0.5s ease",
                }}
              />

              {/* Centered Product Bottle / Tub */}
              <img
                src={products[active].image}
                alt={products[active].name}
                className="absolute z-10 w-[68px] sm:w-[110px] md:w-[160px] lg:w-[210px] h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                style={{
                  maxWidth: "210px",
                  maxHeight: "460px",
                  opacity: 1,
                }}
              />
            </div>

            {/* Active Product Title */}
            <h3 className="relative z-10 mt-1 sm:mt-2 md:mt-3 text-[10px] sm:text-[13px] md:text-[16px] lg:text-[18px] font-bold text-white text-center tracking-wide drop-shadow-md whitespace-nowrap">
              {products[active].name}
            </h3>
          </div>

          {/* Next Product Preview */}
          <div
            onClick={() => setActive(nextIndex)}
            className="hidden sm:flex absolute right-[12%] sm:right-[14%] md:right-[18%] lg:right-[22%] top-[22%] sm:top-[24%] md:top-[26%] z-30 flex-col items-center justify-center cursor-pointer transition-all duration-300 filter blur-[1.5px] opacity-75 hover:blur-none hover:opacity-100 pointer-events-auto"
            aria-label={`Next product: ${products[nextIndex].name}`}
          >
            <img
              src={productNextBg}
              alt=""
              className="absolute w-[80px] sm:w-[120px] md:w-[160px] lg:w-[190px] h-auto object-contain -z-10"
              style={{ filter: `hue-rotate(${products[nextIndex].blobHue})`, transition: "filter 0.5s ease" }}
            />
            <img
              src={products[nextIndex].image}
              alt={products[nextIndex].name}
              className="relative z-10 h-[70px] sm:h-[100px] md:h-[140px] lg:h-[170px] w-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Left Navigation Arrow Button - Positioned safely inside purple dome */}
          <button
            onClick={() => setActive(prevIndex)}
            className="absolute left-[10%] sm:left-[12%] md:left-[14%] lg:left-[16%] top-[32%] sm:top-[35%] md:top-[40%] -translate-y-1/2 z-50 w-6.5 h-6.5 sm:w-8.5 sm:h-8.5 md:w-11 md:h-11 rounded-[7px] sm:rounded-[9px] md:rounded-[12px] bg-white/20 border border-white/30 backdrop-blur-md hover:bg-white/35 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-md pointer-events-auto"
            aria-label="Previous Product"
          >
            <img src={arrow} alt="Previous" className="w-2.5 sm:w-3.5 md:w-4.5 h-auto rotate-180" />
          </button>

          {/* Right Navigation Arrow Button - Positioned safely inside purple dome */}
          <button
            onClick={() => setActive(nextIndex)}
            className="absolute right-[10%] sm:right-[12%] md:right-[14%] lg:right-[16%] top-[32%] sm:top-[35%] md:top-[40%] -translate-y-1/2 z-50 w-6.5 h-6.5 sm:w-8.5 sm:h-8.5 md:w-11 md:h-11 rounded-[7px] sm:rounded-[9px] md:rounded-[12px] bg-white/20 border border-white/30 backdrop-blur-md hover:bg-white/35 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-md pointer-events-auto"
            aria-label="Next Product"
          >
            <img src={arrow} alt="Next" className="w-2.5 sm:w-3.5 md:w-4.5 h-auto" />
          </button>

          {/* Thumbnail Dots/Circles Selector - Positioned strictly inside round purple container */}
          <div className="absolute left-1/2 bottom-[26%] sm:bottom-[27%] md:bottom-[28%] lg:bottom-[29%] -translate-x-1/2 z-50 flex items-center gap-1.5 sm:gap-2.5 md:gap-4 pointer-events-auto">
            {products.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`relative w-6 h-6 sm:w-8 sm:h-8 md:w-11 md:h-11 lg:w-13 lg:h-13 rounded-full flex items-center justify-center p-1 sm:p-1.5 md:p-2 transition-all cursor-pointer ${
                  active === idx
                    ? "border-[2px] border-[#00cbf8] bg-[#00cbf8]/35 shadow-[0_0_12px_rgba(0,203,248,0.8)] scale-110"
                    : "border-[1.5px] border-white/25 bg-white/15 hover:bg-white/30 opacity-75 hover:opacity-100"
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

export default ProductCarousel;
