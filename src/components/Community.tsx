import React from "react";
import communityBg from "../assets/community bg.svg";
import modelSvg from "../assets/model.svg";
import feedbackSvg from "../assets/feedback 1.svg";
import crossSvg from "../assets/cross.svg";
import arrowSvg from "../assets/arrow.svg";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";

export function Community() {
  const influencerVideos = [
    video1, video2, video3, video1,
    video3, video1, video2, video3
  ];

  return (
    <section className="w-full flex flex-col bg-white overflow-hidden">
      
      {/* Top Blue Section */}
      <div className="relative w-full overflow-hidden z-10 pt-16 pb-12">
        {/* Background SVG wave stretched to fill so waves aren't clipped */}
        <img
          src={communityBg}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-fill pointer-events-none z-0"
        />
        
        {/* Decorative Crosses (Top Section) */}
        <img src={crossSvg} alt="" className="absolute top-[10%] left-[8%] w-10 h-10 rotate-12 opacity-40 z-0 animate-pulse" />
        <img src={crossSvg} alt="" className="absolute top-[35%] left-[48%] w-6 h-6 -rotate-45 opacity-30 z-0 animate-pulse" style={{ animationDelay: "1s" }} />
        <img src={crossSvg} alt="" className="absolute bottom-[25%] right-[12%] w-14 h-14 rotate-90 opacity-50 z-0 animate-pulse" style={{ animationDelay: "2s" }} />
        <img src={crossSvg} alt="" className="absolute top-[20%] right-[22%] w-8 h-8 rotate-180 opacity-20 z-0 animate-pulse" style={{ animationDelay: "1.5s" }} />
        <img src={crossSvg} alt="" className="absolute bottom-[15%] left-[18%] w-5 h-5 rotate-45 opacity-60 z-0 animate-pulse" style={{ animationDelay: "0.5s" }} />
        <img src={crossSvg} alt="" className="absolute top-[60%] right-[30%] w-12 h-12 -rotate-12 opacity-30 z-0 animate-pulse" style={{ animationDelay: "0.8s" }} />
        <img src={crossSvg} alt="" className="absolute top-[5%] right-[45%] w-7 h-7 rotate-180 opacity-40 z-0 animate-pulse" style={{ animationDelay: "1.2s" }} />

        {/* Decorative Rotating Text on Right */}
        <div className="absolute right-[-100px] top-[-50px] w-[350px] h-[350px] pointer-events-none opacity-[0.15] select-none z-0">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_25s_linear_infinite]">
            <path id="circlePathComm" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
            <text fontSize="7" fontWeight="bold" fill="#ffffff" letterSpacing="2">
              <textPath href="#circlePathComm">
                Hydra Curls Hydra Curls Hydra Curls
              </textPath>
            </text>
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-6 mt-4">
          
          {/* Left column - Model Image */}
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end relative -mb-12 z-20">
            <img 
              src={modelSvg} 
              alt="Hydra Curls Model Before and After" 
              className="w-full max-w-[650px] h-auto object-contain drop-shadow-xl" 
            />
          </div>

          {/* Right column - Testimonials and Header */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center lg:pl-4 relative z-10 pb-12">
            
            <div className="mb-6 text-center lg:text-left">
              <div className="relative inline-block mb-2">
                <p className="font-script text-[22px] text-white">Real Women, Real Results</p>
                {/* Simple squiggly underline */}
                <svg className="absolute w-full h-2 -bottom-1 left-0 text-white/70" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q10,10 20,5 T40,5 T60,5 T80,5 T100,5" stroke="currentColor" fill="none" strokeWidth="1" />
                </svg>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-black leading-tight tracking-tight mt-1">
                Hear from Our <span className="text-white">Community</span>
              </h2>
            </div>

            {/* Testimonials Container */}
            <div className="flex relative items-center">
              <div className="flex flex-col gap-5 w-full max-w-[420px] z-10">
                <img 
                  src={feedbackSvg} 
                  alt="Testimonial" 
                  className="w-full h-auto drop-shadow-2xl transition-transform hover:-translate-y-1 hover:scale-[1.02]" 
                />
                <img 
                  src={feedbackSvg} 
                  alt="Testimonial" 
                  className="w-full h-auto drop-shadow-2xl transition-transform hover:-translate-y-1 hover:scale-[1.02]" 
                />
              </div>
              
              {/* Scroll/Carousel Controls */}
              <div className="absolute right-0 sm:right-[-10px] lg:right-[-20px] flex flex-col gap-4 z-20">
                <button className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-gray-50 transition-colors active:scale-95 border border-gray-100">
                  <img src={arrowSvg} alt="Up" className="w-4 h-4 md:w-5 md:h-5 -rotate-90 invert opacity-70" />
                </button>
                <button className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-gray-50 transition-colors active:scale-95 border border-gray-100">
                  <img src={arrowSvg} alt="Down" className="w-4 h-4 md:w-5 md:h-5 rotate-90 invert opacity-70" />
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Bottom White Section - Influencer Approved */}
      <div className="relative w-full bg-white pt-20 pb-10">
        
        {/* Decorative Crosses (Bottom Section) - Darker/Opaque for white bg */}
        <img src={crossSvg} alt="" className="absolute top-[5%] left-[25%] w-8 h-8 rotate-45 opacity-10 pointer-events-none z-0" />
        <img src={crossSvg} alt="" className="absolute top-[40%] right-[8%] w-12 h-12 -rotate-90 opacity-[0.08] pointer-events-none z-0" />
        <img src={crossSvg} alt="" className="absolute bottom-[30%] left-[10%] w-10 h-10 rotate-12 opacity-15 pointer-events-none z-0" />
        <img src={crossSvg} alt="" className="absolute top-[70%] right-[40%] w-6 h-6 rotate-180 opacity-[0.05] pointer-events-none z-0" />
        <img src={crossSvg} alt="" className="absolute bottom-[15%] right-[25%] w-14 h-14 -rotate-45 opacity-10 pointer-events-none z-0" />

        {/* Decorative Rotating Text on Left */}
        <div className="absolute left-[-150px] top-[10%] w-[350px] h-[350px] pointer-events-none opacity-[0.05] select-none z-0">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_25s_linear_infinite]">
            <path id="circlePathExpert" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
            <text fontSize="7" fontWeight="bold" fill="#000000" letterSpacing="2">
              <textPath href="#circlePathExpert">
                Hydra Curls Hydra Curls Hydra Curls
              </textPath>
            </text>
          </svg>
        </div>

        {/* Faint Background Circles */}
        <div className="absolute right-[5%] top-[10%] w-64 h-64 border-[30px] border-gray-50 rounded-full opacity-50 pointer-events-none z-0"></div>

        <div className="relative z-10 w-full">
          {/* Header */}
          <div className="text-center mb-12 px-4">
            <div className="relative inline-block mb-3">
              <p className="font-script text-[22px] text-black">Influencer Approved</p>
              <svg className="absolute w-full h-2 -bottom-1 left-0 text-gray-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q10,10 20,5 T40,5 T60,5 T80,5 T100,5" stroke="currentColor" fill="none" strokeWidth="1" />
              </svg>
            </div>
            
            <h2 className="text-3xl md:text-[42px] font-extrabold text-black leading-tight tracking-tight mt-1">
              See What The <br />
              <span className="text-[#00cbf8]">Experts Are Saying</span>
            </h2>
          </div>

          {/* Videos Grid */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-0">
            {influencerVideos.map((vid, i) => (
              <div key={i} className="aspect-[3/4] sm:aspect-[4/5] relative group overflow-hidden bg-gray-100 cursor-pointer">
                <video 
                  src={vid} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}
