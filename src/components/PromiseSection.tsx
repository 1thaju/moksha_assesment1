import clockGif from "../assets/clock.gif";
import outerClockGif from "../assets/outerclock.gif";
import { Droplet, Sparkles } from "lucide-react";

export function PromiseSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center  pt-36 sm:pt-44 md:pt-52 lg:pt-56 pb-28 sm:pb-32 md:pb-40 overflow-hidden z-10 bg-transparent">
      
      {/* Dynamic Blue Container Background */}
      <svg
        viewBox="0 0 1920 1000"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
      >
        {/* Top concave arc with gentle small wave curls, sides, and bottom wave curls */}
        <path
          d="M 0,70 
             C 100,45 220,115 340,90 
             C 460,70 560,175 680,165 
             C 780,155 860,240 960,230 
             C 1060,220 1140,155 1240,165 
             C 1360,175 1460,70 1580,90 
             C 1700,115 1820,45 1920,70 
             L 1920,930 
             C 1680,880 1440,990 1200,940 
             C 960,890 720,1000 480,940 
             C 240,890 100,960 0,940 
             Z"
          fill="#DAF6FF"
        />
      </svg>
      
      <div className="relative z-10 max-w-[1680px] mx-auto px-6 sm:px-10 md:px-16 lg:px-[120px] w-full">
        
        {/* Top Header Centered */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20 md:mb-24">
          <div className="relative inline-block mb-3">
            <p
              className="font-guthen text-[20px] sm:text-[24px] text-black capitalize leading-none"
              style={{
                fontFamily: "'Guthen Bloots Personal Use', 'Caveat', cursive",
                letterSpacing: "0.1em",
                fontWeight: 400,
              }}
            >
              The Hydra Curls Promise
            </p>
            {/* Squiggly underline */}
            <svg className="absolute w-full h-2 -bottom-1.5 left-0 text-gray-400" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,5 Q10,10 20,5 T40,5 T60,5 T80,5 T100,5" stroke="currentColor" fill="none" strokeWidth="0.6" />
            </svg>
          </div>
          
          <h2
            className="font-gotham font-bold text-[32px] sm:text-[44px] md:text-[54px] text-black leading-[1.05] sm:leading-[1.1] text-center tracking-normal max-w-[560px]"
            style={{
              fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
              fontWeight: 700,
            }}
          >
            Clinically Proven <br />
            <span className="text-[#00cbf8]">48-Hour</span> Hydration
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-12 sm:gap-16 lg:gap-24 xl:gap-32 items-center justify-between relative">
          {/* Left Content */}
          <div className="relative z-10 max-w-[852px]">
            <p 
              className="font-gotham text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] text-black leading-[1.5] sm:leading-[1.6] lg:leading-[44px] mb-8 sm:mb-12"
              style={{
                fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
                fontWeight: 350,
                letterSpacing: "0%",
              }}
            >
              Our advanced formula with Hyaluronic Acid doesn't just coat your
              hair; it penetrates the cuticle to lock in moisture from the inside out,
              providing continuous hydration for two full days.
            </p>

            <div className="relative ml-1 flex flex-col gap-8 sm:gap-10">
              {/* Squiggly vertical wave line */}
              <div className="absolute left-[8px] top-[10px] bottom-[10px] w-[6px] overflow-visible pointer-events-none">
                <svg className="w-full h-full text-[#00cbf8] opacity-70" preserveAspectRatio="none" viewBox="0 0 10 100">
                  <path d="M5,0 Q0,10 5,20 T5,40 T5,60 T5,80 T5,100" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>

              <div className="relative pl-10 sm:pl-12">
                <div className="absolute left-[-2px] top-0.5 text-[#00cbf8]">
                  <Droplet size={22} strokeWidth={2.4} className="fill-transparent" />
                </div>
                <h4 
                  className="font-gotham text-[16px] sm:text-[20px] lg:text-[24px] text-black leading-none mb-1.5"
                  style={{
                    fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
                    fontWeight: 350,
                    letterSpacing: "0%",
                  }}
                >
                  Moisture Attraction
                </h4>
                <p className="text-[13px] md:text-[15px] text-gray-600 leading-relaxed max-w-[420px] font-normal">
                  Hyaluronic Acid acts like a magnet for moisture,
                  drawing hydration into each strand.
                </p>
              </div>

              <div className="relative pl-10 sm:pl-12">
                <div className="absolute left-[-2px] top-0.5 text-[#00cbf8]">
                  <Sparkles size={22} strokeWidth={2.4} className="fill-transparent" />
                </div>
                <h4 
                  className="font-gotham text-[16px] sm:text-[20px] lg:text-[24px] text-black leading-none mb-1.5"
                  style={{
                    fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
                    fontWeight: 350,
                    letterSpacing: "0%",
                  }}
                >
                  Strengthening Seal
                </h4>
                <p className="text-[13px] md:text-[15px] text-gray-600 leading-relaxed max-w-[420px] font-normal">
                  Coconut & Avocado oils seal the hair cuticle,
                  preventing moisture loss and adding strength.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Clock & 48 Hours */}
          <div className="relative flex flex-col items-center justify-center z-10 pt-4 lg:pt-0 min-w-[240px]">
            
            {/* Decorative Sketched Arrow pointing from left text toward the clock without collision */}
            <svg 
              className="absolute right-[96%] lg:right-[100%] top-[22%] w-[120px] lg:w-[150px] h-[55px] hidden md:block opacity-40 text-gray-700 pointer-events-none select-none -translate-y-1/2" 
              viewBox="0 0 140 60" 
              fill="none"
            >
              <path d="M 10,46 Q 75,10 126,30" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
              <path d="M 114,22 L 128,31 L 117,38" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>

            {/* Combined Gifs (Clock: 162.29px x 162.29px) */}
            <div className="relative w-[120px] h-[120px] sm:w-[145px] sm:h-[145px] lg:w-[162.3px] lg:h-[162.3px] mb-2">
              <img src={outerClockGif} alt="" className="absolute inset-0 w-full h-full object-contain z-10" />
              <img src={clockGif} alt="Clock" className="absolute inset-0 w-full h-full object-contain scale-[0.6] z-20" />
            </div>

            {/* 48 Display (Width 214px, Height ~197px) */}
            <div className="relative flex items-end justify-center -mt-6 sm:-mt-8 w-full max-w-[214px]">
              <h2 className="text-[110px] sm:text-[140px] md:text-[170px] lg:text-[197px] font-black text-black leading-none tracking-tighter">
                48
              </h2>
              <div className="absolute right-[-15px] bottom-[25px] md:right-[-25px] md:bottom-[35px] bg-[#00cbf8] text-white text-[10px] sm:text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-lg transform -rotate-[10deg] shadow-lg whitespace-nowrap">
                Hours
              </div>
            </div>

            <p className="text-center text-[11px] sm:text-[13px] md:text-[14px] text-gray-500 font-medium mt-1.5">
              of continuous curl hydration<br />and frizz control.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
