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
      
      {/* Top Section with Dynamic #77DBFC Wave Background */}
      <div className="relative w-full overflow-hidden z-10 pt-16 sm:pt-20 lg:pt-24 pb-0">
        
        {/* Dynamic SVG Background (#77DBFC) with Multi-Wave Top and Large Sweeping Bottom Wave */}
        <svg
          viewBox="0 0 1920 1050"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
        >
          {/* Main #77DBFC Shape */}
          <path
            d="M 0,60 
               C 120,20 240,100 360,55 
               C 480,15 600,95 720,55 
               C 840,15 960,95 1080,55 
               C 1200,15 1320,95 1440,55 
               C 1560,15 1680,95 1800,55 
               C 1860,35 1900,25 1920,45 
               L 1920,950 
               C 1580,890 1260,980 920,930 
               C 580,880 260,970 0,910 
               Z"
            fill="#77DBFC"
          />

          {/* Decorative Background Swirls / Loops */}
          <path
            d="M 50,420 C 150,300 220,500 120,620 C 20,740 180,800 280,720"
            stroke="white"
            strokeWidth="38"
            strokeLinecap="round"
            fill="none"
            opacity="0.18"
          />
          <path
            d="M 1600,200 C 1750,120 1880,300 1780,450 C 1680,600 1850,750 1950,680"
            stroke="white"
            strokeWidth="42"
            strokeLinecap="round"
            fill="none"
            opacity="0.16"
          />
          <path
            d="M 750,850 C 850,750 950,900 880,980"
            stroke="white"
            strokeWidth="32"
            strokeLinecap="round"
            fill="none"
            opacity="0.18"
          />
        </svg>
        
        {/* Decorative Crosses (Top Section) */}
        <img src={crossSvg} alt="" className="absolute top-[10%] left-[8%] w-10 h-10 rotate-12 opacity-40 z-0 animate-pulse" />
        <img src={crossSvg} alt="" className="absolute top-[35%] left-[48%] w-6 h-6 -rotate-45 opacity-30 z-0 animate-pulse" style={{ animationDelay: "1s" }} />
        <img src={crossSvg} alt="" className="absolute bottom-[25%] right-[12%] w-14 h-14 rotate-90 opacity-50 z-0 animate-pulse" style={{ animationDelay: "2s" }} />
        <img src={crossSvg} alt="" className="absolute top-[20%] right-[22%] w-8 h-8 rotate-180 opacity-20 z-0 animate-pulse" style={{ animationDelay: "1.5s" }} />
        <img src={crossSvg} alt="" className="absolute bottom-[15%] left-[18%] w-5 h-5 rotate-45 opacity-60 z-0 animate-pulse" style={{ animationDelay: "0.5s" }} />
        <img src={crossSvg} alt="" className="absolute top-[60%] right-[30%] w-12 h-12 -rotate-12 opacity-30 z-0 animate-pulse" style={{ animationDelay: "0.8s" }} />
        <img src={crossSvg} alt="" className="absolute top-[5%] right-[45%] w-7 h-7 rotate-180 opacity-40 z-0 animate-pulse" style={{ animationDelay: "1.2s" }} />

        {/* Decorative Rotating Text on Right */}
        <div className="absolute right-[-60px] lg:right-[-40px] top-[10px] w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] pointer-events-none opacity-[0.25] select-none z-0">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_25s_linear_infinite]">
            <path id="circlePathComm" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
            <text fontSize="7" fontWeight="bold" fill="#ffffff" letterSpacing="2">
              <textPath href="#circlePathComm">
                Hydra Curls Hydra Curls Hydra Curls
              </textPath>
            </text>
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-[1720px] px-4 sm:px-8 lg:px-12 w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mt-2 sm:mt-4">
          
          {/* Left column - Model Image (Flush left 0, positioned higher up, overflow hidden) */}
          <div className="w-full lg:w-[56%] flex justify-start relative z-20 -ml-4 sm:-ml-8 lg:-ml-16 xl:-ml-28 -mt-6 sm:-mt-10 lg:-mt-14 overflow-hidden">
            <img 
              src={modelSvg} 
              alt="Hydra Curls Model Before and After" 
              className="w-full max-w-[1091px] h-auto object-contain block drop-shadow-2xl" 
            />
          </div>

          {/* Right column - Testimonials and Header */}
          <div className="w-full lg:w-[44%] flex flex-col justify-center lg:pl-4 relative z-20 pb-12 sm:pb-16 lg:pb-20 max-w-[726px]">
            
            <div className="mb-8 text-center lg:text-left">
              {/* Top Tag: Real Women, Real Results */}
              <div className="relative inline-block mb-3">
                <p 
                  className="font-guthen text-[20px] sm:text-[24px] text-white capitalize leading-none"
                  style={{
                    fontFamily: "'Guthen Bloots Personal Use', 'Caveat', cursive",
                    letterSpacing: "0.1em",
                    fontWeight: 400,
                  }}
                >
                  Real Women, Real Results
                </p>
                {/* Squiggly underline */}
                <svg className="absolute w-full h-2 -bottom-1.5 left-0 text-white/75" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q10,10 20,5 T40,5 T60,5 T80,5 T100,5" stroke="currentColor" fill="none" strokeWidth="0.8" />
                </svg>
              </div>
              
              {/* Main Heading: Hear from Our Community (Gotham Bold 54px, 100% line-height) */}
              <h2 
                className="font-gotham font-bold text-[32px] sm:text-[42px] md:text-[48px] lg:text-[54px] text-black leading-[1.05] sm:leading-[1.1] tracking-normal mt-1"
                style={{
                  fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0%",
                }}
              >
                Hear from Our <span className="font-gotham font-bold text-white">Community</span>
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

        {/* Bottom White Wave Divider (z-30 to smoothly clip and overlay the model bottom) */}
        <svg
          viewBox="0 0 1920 120"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-full h-[60px] sm:h-[80px] md:h-[100px] pointer-events-none select-none z-30 translate-y-[1px]"
        >
          <path
            d="M 0,55 
               C 360,15 740,95 1140,45 
               C 1480,5 1740,75 1920,35 
               L 1920,120 
               L 0,120 
               Z"
            fill="#ffffff"
          />
        </svg>
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
          <div className="text-center mb-12 px-4 flex flex-col items-center">
            {/* Tag: Influencer Approved */}
            <div className="relative inline-block mb-3">
              <p 
                className="font-guthen text-[20px] sm:text-[24px] text-black capitalize leading-none"
                style={{
                  fontFamily: "'Guthen Bloots Personal Use', 'Caveat', cursive",
                  letterSpacing: "0.1em",
                  fontWeight: 400,
                }}
              >
                Influencer Approved
              </p>
              <svg className="absolute w-full h-2 -bottom-1.5 left-0 text-gray-400/80" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q10,10 20,5 T40,5 T60,5 T80,5 T100,5" stroke="currentColor" fill="none" strokeWidth="0.8" />
              </svg>
            </div>
            
            {/* Main Title: See What The Experts Are Saying (Gotham Bold 54px, 100% line-height, max-w-[524px]) */}
            <h2 
              className="font-gotham font-bold text-[32px] sm:text-[44px] md:text-[54px] text-black leading-[1.05] sm:leading-[1.1] text-center tracking-normal max-w-[524px] mx-auto"
              style={{
                fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
                fontWeight: 700,
                letterSpacing: "0%",
              }}
            >
              See What The <br />
              <span className="font-gotham font-bold text-[#00cbf8]">Experts Are Saying</span>
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
