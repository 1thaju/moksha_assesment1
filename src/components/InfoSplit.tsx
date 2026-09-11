import { ArrowRight } from "lucide-react";
import rectangle1 from "../assets/Rectangle1.svg";
import irregularLines from "../assets/irregular_lines.svg";
import allProducts from "../assets/allproducts.svg";

export function InfoSplit() {
  return (
    <section className="relative bg-[#f4fbfd] pt-4 md:pt-6 pb-8 overflow-hidden flex flex-col justify-between">
      
      {/* Full-width grey wave separator line matching Hero section wave model */}
      <div className="w-full overflow-hidden leading-none pt-2 pb-6 md:pb-8">
        <svg
          className="w-full h-[12px] sm:h-[16px] md:h-[20px]"
          viewBox="0 0 1240 14"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 7 Q 15.5 0, 31 7 T 62 7 T 93 7 T 124 7 T 155 7 T 186 7 T 217 7 T 248 7 T 279 7 T 310 7 T 341 7 T 372 7 T 403 7 T 434 7 T 465 7 T 496 7 T 527 7 T 558 7 T 589 7 T 620 7 T 651 7 T 682 7 T 713 7 T 744 7 T 775 7 T 806 7 T 837 7 T 868 7 T 899 7 T 930 7 T 961 7 T 992 7 T 1023 7 T 1054 7 T 1085 7 T 1116 7 T 1147 7 T 1178 7 T 1209 7 T 1240 7"
            stroke="#94a3b8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeOpacity="0.18"
          />
        </svg>
      </div>

      {/* Full-width container with two half-screen width boxes and gap-5 between them */}
      <div className="w-full flex flex-col md:flex-row gap-5 items-stretch justify-between z-10">
        
        {/* Left Card: Rectangle1.svg with irregular_lines.svg overlay */}
        <div className="relative w-full md:w-[calc(50%-10px)] flex-1 overflow-hidden bg-[#DAF6FF] rounded-2xl md:rounded-none min-h-[380px] sm:min-h-[440px] md:min-h-[480px] flex flex-col justify-between">
          {/* Top Wavy Cap + Background SVG */}
          <img
            src={rectangle1}
            alt=""
            className="pointer-events-none absolute inset-0 w-full h-full object-cover block"
          />
          
          {/* Irregular lines SVG overlay inside Rectangle 1 */}
          <img
            src={irregularLines}
            alt=""
            className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-80"
          />

          {/* Card Content in natural flow */}
          <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12 pt-10 sm:pt-12 md:pt-14 flex flex-col justify-start">
            <h3 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-bold text-[#1a1a2e] mb-3 sm:mb-4">
              Lorem Ipsum
            </h3>
            <p className="text-[13px] sm:text-[14.5px] md:text-[15.5px] lg:text-[16px] text-[#475569] leading-relaxed max-w-[95%] sm:max-w-[88%] mb-6 sm:mb-8 font-normal">
              Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand. Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand.Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand.
            </p>
            <div>
              <button className="inline-flex items-center gap-2 rounded-lg bg-[#00cbf8] hover:bg-[#00b8e0] text-white px-5 py-2.5 font-semibold text-sm transition-all shadow-xs cursor-pointer active:scale-98">
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Card: Matching styled card with allproducts.svg positioned at bottom */}
        <div className="relative w-full md:w-[calc(50%-10px)] flex-1 overflow-hidden bg-[#DAF6FF] rounded-2xl md:rounded-none min-h-[460px] sm:min-h-[500px] md:min-h-[480px] flex flex-col justify-between">
          {/* Top Wavy Cap + Background SVG */}
          <img
            src={rectangle1}
            alt=""
            className="pointer-events-none absolute inset-0 w-full h-full object-cover block"
          />
          
          {/* Irregular lines SVG overlay */}
          <img
            src={irregularLines}
            alt=""
            className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-80"
          />

          {/* Blue Radial Glow Gradient behind products */}
          <div
            className="pointer-events-none absolute inset-0 z-15"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 88% 85%, rgba(0, 213, 253, 0.6) 0%, rgba(23, 211, 240, 0.35) 45%, rgba(218, 246, 255, 0) 75%)",
            }}
            aria-hidden="true"
          />

          {/* Card Content in natural flow */}
          <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12 pt-10 sm:pt-12 md:pt-14 flex flex-col justify-start pb-4">
            <h3 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-bold text-[#1a1a2e] mb-3 sm:mb-4">
              Lorem Ipsum
            </h3>
            <p className="text-[13px] sm:text-[14.5px] md:text-[15.5px] lg:text-[16px] text-[#475569] leading-relaxed max-w-[95%] sm:max-w-[88%] mb-5 sm:mb-6 font-normal">
              Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand. Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand.Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand.
            </p>
            <div>
              <button className="inline-flex items-center gap-2 rounded-lg bg-[#00cbf8] hover:bg-[#00b8e0] text-white px-5 py-2.5 font-semibold text-sm transition-all shadow-xs cursor-pointer active:scale-98">
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* All Products SVG lineup at bottom in natural flex layout */}
          <div className="relative z-20 flex justify-center md:justify-end items-end px-4 sm:px-6 -mt-2 sm:mt-0">
            <img
              src={allProducts}
              alt="Hydra Curls All Products"
              className="w-[85%] sm:w-[80%] md:w-[75%] lg:w-[70%] max-w-[420px] md:max-w-[480px] h-auto object-contain block drop-shadow-md"
            />
          </div>
        </div>

      </div>

    </section>
  );
}

export default InfoSplit;
