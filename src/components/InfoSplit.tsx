import { ArrowRight } from "lucide-react";
import rectangle1 from "../assets/Rectangle1.svg";
import rectangle2 from "../assets/rectangle2.svg";
import irregularLines from "../assets/irregular_lines.svg";

export function InfoSplit() {
  return (
    <section className="relative bg-[#f4fbfd] pt-4 md:pt-6 pb-6 overflow-hidden flex flex-col justify-between">
      
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

      {/* Full-width container with 0px edge padding so cards bleed flush to left & right screen edges */}
      <div className="w-full flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-6 items-center justify-between z-10">
        
        {/* Left Card: Rectangle1.svg with irregular_lines.svg overlay */}
        <div className="relative w-full md:w-1/2 flex-1">
          <img
            src={rectangle1}
            alt=""
            className="w-full h-auto block"
          />
          
          {/* Irregular lines SVG overlay inside Rectangle 1 */}
          <img
            src={irregularLines}
            alt=""
            className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-80"
          />

          <div className="absolute inset-0 p-6 sm:p-8 md:p-10 lg:p-14 pt-8 sm:pt-10 md:pt-12 flex flex-col justify-start z-10">
            <h3 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-bold text-[#1a1a2e] mb-3 sm:mb-4">
              Lorem Ipsum
            </h3>
            <p className="text-[13px] sm:text-[14.5px] md:text-[15.5px] lg:text-[16.5px] text-[#475569] leading-relaxed max-w-[95%] sm:max-w-[88%] mb-6 sm:mb-8 font-normal">
              Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand. Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand.Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand.
            </p>
            <div>
              <button className="inline-flex items-center gap-2 rounded-lg bg-[#00cbf8] hover:bg-[#00b8e0] text-white px-5 py-2.5 font-semibold text-sm transition-all shadow-xs cursor-pointer active:scale-98">
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Card: rectangle2.svg vector graphic */}
        <div className="relative w-full md:w-1/2 flex-1">
          <img
            src={rectangle2}
            alt="Lorem Ipsum - Hydra Curls"
            className="w-full h-auto block"
          />
        </div>

      </div>

    </section>
  );
}
