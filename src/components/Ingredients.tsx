import { CheckCircle2, Heart, Leaf } from "lucide-react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";

const ingredients = [
  {
    icon: (
      <div className="w-10 h-10 bg-black rounded-lg relative overflow-hidden flex-shrink-0">
        <div className="absolute bottom-[-2px] w-full h-[14px] bg-[#00cbf8] rounded-t-[50%]"></div>
        <div className="absolute bottom-1 w-full flex justify-center space-x-1">
           <div className="w-1 h-1 bg-white rounded-full opacity-50"></div>
           <div className="w-1 h-1 bg-white rounded-full opacity-30"></div>
        </div>
      </div>
    ),
    title: "Hyaluronic Acid",
    desc: "Rich in vitamins and fatty acids for ultimate curl definition and softness",
    bgClass: "bg-[#d8f5fa]",
    bgVideo: video1,
    points: ["Deep Hydration", "Moisture Lock", "Plump Curls"],
  },
  {
    icon: <div className="text-3xl leading-none">🏝️</div>,
    title: "Coconut Oil",
    desc: "Natural nourishment that penetrates hair shaft to strengthen and protect",
    bgClass: "bg-[#e0f1fc]",
    bgVideo: video2,
    points: ["Hair Strength", "Natural Shine", "Frizz Control"],
  },
  {
    icon: <div className="text-3xl leading-none">🥑</div>,
    title: "Avocado Extract",
    desc: "Rich in vitamins and fatty acids for ultimate curl definition and softness",
    bgClass: "bg-[#e2dfdb]",
    bgVideo: video3,
    points: ["Curl Definition", "Softness", "Nutrient Rich"],
  },
];

export function Ingredients() {
  return (
    <section className="relative bg-[#f4f9fa] pt-12 md:pt-16 pb-16 md:pb-24 min-h-screen flex flex-col justify-center overflow-hidden z-10">
      
      <div className="relative z-10 mx-auto max-w-[1680px] px-6 sm:px-10 md:px-16 lg:px-[120px] w-full">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
          {/* Top Tag: Premium Ingredients */}
          <div className="relative inline-block mb-3.5">
            <p
              className="font-guthen text-[20px] sm:text-[24px] text-black capitalize leading-none"
              style={{
                fontFamily: "'Guthen Bloots Personal Use', 'Caveat', cursive",
                letterSpacing: "0.1em",
                fontWeight: 400,
              }}
            >
              Premium Ingredients
            </p>
            {/* Squiggly underline */}
            <svg className="absolute w-full h-2 -bottom-1.5 left-0 text-gray-400" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,5 Q10,10 20,5 T40,5 T60,5 T80,5 T100,5" stroke="currentColor" fill="none" strokeWidth="0.6" />
            </svg>
          </div>
          
          {/* Main Title: Powered by Nature's Best Ingredients */}
          <h2
            className="font-gotham font-bold text-[32px] sm:text-[44px] md:text-[54px] text-black leading-[1.05] sm:leading-[1.1] text-center tracking-normal w-full max-w-[900px] mx-auto"
            style={{
              fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
              fontWeight: 700,
            }}
          >
            Powered by
            <span className="block text-[#00cbf8] whitespace-nowrap mt-1 sm:mt-2">
              Nature's Best Ingredients
            </span>
          </h2>
          
          {/* Subtitle: Kaushan Script 24px */}
          <p
            className="mt-6 text-[17px] sm:text-[20px] md:text-[24px] text-[#556877] max-w-[722px] mx-auto leading-[1.3] sm:leading-[1.4] text-center font-normal"
            style={{
              fontFamily: "'Kaushan Script', cursive",
              letterSpacing: "0%",
              fontWeight: 400,
            }}
          >
            Our formulations combine scientifically-proven active ingredients with natural extracts for superior curly hair care.
          </p>
        </div>

        {/* Ingredient Cards (3 equal cards across width with 544px x 449px ratio) */}
        <div className="relative z-20 w-full mb-12">
          
          {/* Orbiting Rotating Text attached to first card's top-left corner (238.5px x 238.5px) */}
          <div className="absolute -left-6 sm:-left-10 lg:-left-[63px] -top-10 sm:-top-14 lg:-top-[83px] w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] lg:w-[238.5px] lg:h-[238.5px] pointer-events-none opacity-40 select-none z-30">
            <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_20s_linear_infinite]">
              <path id="ingredientCirclePath" d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" fill="transparent" />
              <text fontSize="14" fontWeight="600" fill="#7E8F9F" letterSpacing="4" className="font-sans">
                <textPath href="#ingredientCirclePath">
                  Hydra Curls Hydra Curls Hydra Curls
                </textPath>
              </text>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full justify-items-center">
            {ingredients.map((item, i) => (
              <div 
                key={i} 
                className={`relative w-full max-w-[544px] min-h-[400px] lg:min-h-[449px] rounded-[20px] p-6 sm:p-8 lg:p-9 overflow-hidden shadow-sm border border-black/5 transition-transform hover:-translate-y-1 flex flex-col justify-between ${item.bgClass}`}
              >
                {/* Background Video */}
                {item.bgVideo && (
                  <video 
                    src={item.bgVideo} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className={`absolute inset-0 w-full h-full object-cover pointer-events-none z-0 ${i === 0 ? 'opacity-30 mix-blend-multiply scale-110 object-right-bottom' : 'opacity-40 mix-blend-overlay'}`} 
                  />
                )}
                
                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Card Icon (91px x 91px) */}
                    <div className="w-[64px] h-[64px] sm:w-[76px] sm:h-[76px] lg:w-[91px] lg:h-[91px] rounded-[18px] sm:rounded-[20px] bg-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center p-3 lg:p-4 mb-5 lg:mb-6 border border-black/5">
                      {item.icon}
                    </div>
                    
                    {/* Card Header (Gotham Bold 24px, line-height 100%) */}
                    <h3 
                      className="font-gotham font-bold text-[18px] sm:text-[21px] lg:text-[24px] text-black leading-none mb-3"
                      style={{
                        fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
                        fontWeight: 700,
                        letterSpacing: "0%",
                      }}
                    >
                      {item.title}
                    </h3>
                    
                    {/* Card Description (Gotham 350, 20px, line-height 32px, max-w 496px) */}
                    <p 
                      className="font-gotham text-[14px] sm:text-[17px] lg:text-[20px] text-gray-800 leading-[1.5] sm:leading-[1.6] lg:leading-[32px] max-w-[496px] mb-6"
                      style={{
                        fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
                        fontWeight: 350,
                        letterSpacing: "0%",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-[10px] font-bold tracking-wider text-gray-500/80 mb-3 uppercase">
                      PREMIUM INGREDIENTS
                    </p>
                    
                    <ul className="space-y-2">
                      {item.points.map((p, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[13px] sm:text-[14px] text-gray-700 font-medium">
                          <CheckCircle2 size={16} className="text-[#00cbf8]" strokeWidth={2.5} /> 
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Badges Container */}
        <div className="relative z-20 w-full border border-gray-200 bg-white/50 backdrop-blur-sm rounded-[16px] py-5 px-6 md:px-12 flex flex-wrap justify-between items-center gap-4">
          <span className="flex items-center gap-2 text-[13px] text-gray-600 font-bold">
            <CheckCircle2 size={16} className="text-green-500" strokeWidth={2.5} /> No SLS
          </span>
          <span className="flex items-center gap-2 text-[13px] text-gray-600 font-bold">
            <CheckCircle2 size={16} className="text-green-500" strokeWidth={2.5} /> No Silicones
          </span>
          <span className="flex items-center gap-2 text-[13px] text-gray-600 font-bold">
            <CheckCircle2 size={16} className="text-green-500" strokeWidth={2.5} /> No Parabens
          </span>
          <span className="flex items-center gap-2 text-[13px] text-gray-600 font-bold">
            <Heart size={16} className="text-green-500" strokeWidth={2.5} /> Cruelty Free
          </span>
          <span className="flex items-center gap-2 text-[13px] text-gray-600 font-bold">
            <Leaf size={16} className="text-green-500" strokeWidth={2.5} /> Natural Extracts
          </span>
        </div>

      </div>
    </section>
  );
}
