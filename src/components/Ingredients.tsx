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
    <section className="relative bg-[#f4f9fa] pt-16 pb-28 md:pb-36 overflow-hidden z-10">
      
      {/* Decorative Rotating Text on Left */}
      <div className="absolute left-[-150px] top-[20%] w-[350px] h-[350px] pointer-events-none opacity-20 select-none">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_20s_linear_infinite]">
          <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
          <text fontSize="8" fontWeight="bold" fill="#a0b0b5" letterSpacing="3">
            <textPath href="#circlePath">
              Hydra Curls Hydra Curls Hydra Curls
            </textPath>
          </text>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-3">
            <p className="font-script text-xl text-black">Premium Ingredients</p>
            <svg className="absolute w-full h-2 -bottom-1 left-0 text-gray-400" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,5 Q10,10 20,5 T40,5 T60,5 T80,5 T100,5" stroke="currentColor" fill="none" strokeWidth="0.5" />
            </svg>
          </div>
          
          <h2 className="text-3xl md:text-[42px] font-extrabold mt-2 text-black tracking-tight">
            Powered by <span className="text-[#00cbf8]">Nature's</span><br />
            Best Ingredients
          </h2>
          
          <p className="mt-5 text-[15px] text-gray-500 max-w-xl mx-auto font-script italic">
            Our formulations combine scientifically-proven active ingredients with<br/>
            natural extracts for superior curly hair care.
          </p>
        </div>

        {/* Ingredient Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 relative z-20">
          {ingredients.map((item, i) => (
            <div 
              key={i} 
              className={`relative rounded-[20px] p-8 overflow-hidden shadow-sm transition-transform hover:-translate-y-1 ${item.bgClass}`}
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
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-5">
                  {item.icon}
                </div>
                
                <h3 className="text-[17px] font-extrabold text-black mb-2">{item.title}</h3>
                
                <p className="text-[13px] text-gray-600 font-medium leading-relaxed mb-6">
                  {item.desc}
                </p>
                
                <p className="text-[9px] font-bold tracking-wider text-gray-400/80 mb-3 uppercase">
                  PREMIUM INGREDIENTS
                </p>
                
                <ul className="space-y-2 mt-auto">
                  {item.points.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[13px] text-gray-600 font-medium">
                      <CheckCircle2 size={16} className="text-[#00cbf8]" strokeWidth={2.5} /> 
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
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
