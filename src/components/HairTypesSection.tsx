import logoHydracurl from "../assets/logo_hydracurl.svg";
import hairtype1 from "../assets/hairtype1.svg";
import hairtype2 from "../assets/hairtype2.svg";
import hairtype3 from "../assets/hairtype3.svg";

/**
 * Hair type item configuration interface.
 * Real photoshoot assets can be swapped directly into the `image` property.
 */
export interface HairTypeItem {
  id: string;
  type: "wavy" | "curly" | "coily";
  label: string;
  image?: string;
  altText: string;
  gradient: string;
  description: string;
  characteristics: string[];
  hoverColor: string;
  hoverPosition: "top" | "bottom";
}

const DEFAULT_HAIR_TYPES: HairTypeItem[] = [
  {
    id: "wavy",
    type: "wavy",
    label: "wavy",
    image: hairtype1,
    altText: "Wavy Hair Model",
    gradient: "from-[#381154] to-[#1d062e]",
    hoverColor: "#0078C8",
    hoverPosition: "top",
    description: "A flexible texture characterized by a consistent flow that sits between straight and curly.",
    characteristics: [
      "Consistent \"S\" shaped flow",
      "Lays closer to the scalp than curls",
      "Easily weighed down by heavy products",
    ],
  },
  {
    id: "curly",
    type: "curly",
    label: "curly",
    image: hairtype2,
    altText: "Curly Hair Model",
    gradient: "from-[#35104f] to-[#1c062c]",
    hoverColor: "#0099BA",
    hoverPosition: "bottom",
    description: "A distinct spiral pattern ranging from loose loops to tight ringlets with a well-defined circular shape.",
    characteristics: [
      "Visible \"O\" shaped curls",
      "Natural volume and lift",
      "High susceptibility to moisture loss",
    ],
  },
  {
    id: "coily",
    type: "coily",
    label: "coily",
    image: hairtype3,
    altText: "Coily Hair Model",
    gradient: "from-[#320f4b] to-[#180426]",
    hoverColor: "#00B4F5",
    hoverPosition: "top",
    description: "Densely packed strands forming tight zig-zags or small coils with significant natural texture.",
    characteristics: [
      "Tight \"Z\" or \"S\" patterns",
      "Noticeable length shrinkage",
      "Fine, delicate strand structure",
    ],
  },
];

/**
 * Sub-component: Circular Badge with circular SVG text and center logo
 */
export function HairTypesBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      <div className="relative w-[110px] h-[110px] sm:w-[124px] sm:h-[124px] md:w-[136px] md:h-[136px] rounded-full bg-[#0C1220] flex items-center justify-center shadow-2xl p-3 border-2 border-white/40">
        <svg
          viewBox="0 0 300 300"
          className="absolute inset-0 w-full h-full animate-[spin_24s_linear_infinite] motion-reduce:animate-none pointer-events-none select-none"
          aria-hidden="true"
        >
          <path
            id="badgeCirclePath"
            d="M 150, 150 m -108, 0 a 108,108 0 1,1 216,0 a 108,108 0 1,1 -216,0"
            fill="transparent"
          />
          <text
            fontSize="25.4"
            fontWeight="400"
            fill="#ffffff"
            letterSpacing="0"
            style={{
              fontFamily: "'Inter', sans-serif",
              dominantBaseline: "central",
            }}
          >
            <textPath href="#badgeCirclePath" startOffset="0%">
              HYDRA CURLS • HYDRA CURLS • HYDRA CURLS •
            </textPath>
          </text>
        </svg>

        <div className="relative z-10 w-14 sm:w-16 h-auto flex items-center justify-center pointer-events-none">
          {logoHydracurl ? (
            <img
              src={logoHydracurl}
              alt="Hydra Curls Logo"
              className="w-full h-auto object-contain"
            />
          ) : (
            <span className="font-script text-white text-base font-bold">Hydra Curls</span>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Sub-component: Heading & Description Block
 */
export function HairTypesHeader() {
  return (
    <div className="text-center max-w-[722px] mx-auto px-4 mt-4 mb-8 md:mb-12 flex flex-col items-center">
      {/* Designed for You */}
      <div className="relative inline-block mb-3">
        <p
          className="font-guthen text-[20px] sm:text-[24px] text-black capitalize leading-none"
          style={{
            fontFamily: "'Guthen Bloots Personal Use', 'Caveat', 'Kaushan Script', cursive",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "100%",
            letterSpacing: "0.1em",
            textTransform: "capitalize",
          }}
        >
          Designed For You
        </p>
        <svg
          className="absolute w-full h-2 -bottom-1.5 left-0 text-gray-400/80"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,5 Q10,10 20,5 T40,5 T60,5 T80,5 T100,5"
            stroke="currentColor"
            fill="none"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      {/* Perfect for Arab Curly, Coily & Wavy Hair */}
      <h2
        className="font-gotham text-[30px] sm:text-[42px] md:text-[50px] lg:text-[54px] font-bold text-black max-w-[850px] mx-auto tracking-normal mt-2 leading-[1.05]"
        style={{
          fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
          fontWeight: 700,
          letterSpacing: "0%",
          textAlign: "center",
        }}
      >
        Perfect for Arab <br />
        <span
          className="font-gotham text-[#00CBF8] inline-block"
          style={{
            fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
            fontWeight: 700,
            letterSpacing: "0%",
            textAlign: "center",
          }}
        >
          Curly, Coily &amp; Wavy Hair
        </span>
      </h2>

      {/* Description */}
      <p
        className="font-kaushan text-[16px] sm:text-[20px] md:text-[24px] text-[#2D3748] max-w-[760px] mx-auto mt-3 sm:mt-4 leading-relaxed sm:leading-normal"
        style={{
          fontFamily: "'Kaushan Script', cursive",
          fontWeight: 400,
          letterSpacing: "0%",
          textAlign: "center",
        }}
      >
        Our range is specifically formulated to meet the unique needs of Arab hair textures, providing targeted care for types 2, 3, and 4.
      </p>
    </div>
  );
}

/**
 * Sub-component: hover reveal panel
 * - Cards 1 & 3: slides down from the TOP of the card with a wavy bottom edge.
 * - Card 2: slides up from the BOTTOM of the card with a wavy top edge.
 * Uses each item's specific brand color (#0078C8, #0099BA, #00B4F5).
 */
function HoverInfoPanel({ item }: { item: HairTypeItem }) {
  const isBottom = item.hoverPosition === "bottom";

  return (
    <div
      className={`absolute inset-x-0 z-20 opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 flex flex-col pointer-events-none ${
        isBottom
          ? "bottom-0 translate-y-full group-hover:translate-y-0"
          : "top-0 -translate-y-full group-hover:translate-y-0"
      }`}
    >
      {/* If coming from bottom, wavy edge is on top */}
      {isBottom && (
        <svg
          viewBox="0 0 350 28"
          preserveAspectRatio="none"
          className="block h-5 sm:h-6 w-full rotate-180 -mb-[1px]"
          aria-hidden="true"
          style={{ color: item.hoverColor }}
        >
          <path
            d="M 0,0 L 350,0 L 350,6
               C 330,24 315,24 297.5,6
               C 280,24 265,24 247.5,6
               C 230,24 215,24 197.5,6
               C 180,24 165,24 147.5,6
               C 130,24 115,24 97.5,6
               C 80,24 65,24 47.5,6
               C 30,24 15,24 0,6
               Z"
            fill="currentColor"
          />
        </svg>
      )}

      {/* Main Content Box */}
      <div
        style={{ backgroundColor: item.hoverColor }}
        className={`px-4 text-left text-white shadow-xl ${
          isBottom ? "pt-2.5 pb-6 sm:px-5 sm:pb-7" : "pt-4 pb-4 sm:px-5 sm:pt-5"
        }`}
      >
        <p className="text-[11px] sm:text-[12px] md:text-[13px] leading-snug text-white font-medium">
          {item.description}
        </p>

        <div className="mt-2.5 space-y-1.5">
          <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] text-white/85">
            Characteristics
          </p>
          <ul className="space-y-1 text-[10px] sm:text-[11px] text-white/95">
            {item.characteristics.map((characteristic) => (
              <li key={characteristic} className="flex items-start gap-1.5 leading-tight">
                <span className="text-white/80 font-bold select-none text-[12px] leading-none mt-[1px]">
                  ›
                </span>
                <span>{characteristic}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* If coming from top, wavy edge is on bottom */}
      {!isBottom && (
        <svg
          viewBox="0 0 350 28"
          preserveAspectRatio="none"
          className="block h-5 sm:h-6 w-full -mt-[1px]"
          aria-hidden="true"
          style={{ color: item.hoverColor }}
        >
          <path
            d="M 0,0 L 350,0 L 350,6
               C 330,24 315,24 297.5,6
               C 280,24 265,24 247.5,6
               C 230,24 215,24 197.5,6
               C 180,24 165,24 147.5,6
               C 130,24 115,24 97.5,6
               C 80,24 65,24 47.5,6
               C 30,24 15,24 0,6
               Z"
            fill="currentColor"
          />
        </svg>
      )}
    </div>
  );
}

/**
 * Sub-component: Single Hair Type Portrait Card
 */
export function HairTypeCard({ item }: { item: HairTypeItem }) {
  return (
    <div
      className={`relative w-full h-[520px] sm:h-[640px] md:h-[774px] overflow-hidden shadow-lg group cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl bg-gradient-to-b ${item.gradient}`}
    >
      {item.image ? (
        <img
          src={item.image}
          alt={item.altText}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-white/50 text-xs font-mono">
          [Photo Placeholder: {item.label} hair model]
        </div>
      )}

      {/* Hover panel */}
      <HoverInfoPanel item={item} />
    </div>
  );
}

/**
 * Sub-component: Three-Column Image Grid
 */
export function HairTypesGrid({ items = DEFAULT_HAIR_TYPES }: { items?: HairTypeItem[] }) {
  return (
    <div className="w-full mb-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 md:gap-5">
        {items.map((item) => (
          <HairTypeCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

/**
 * Main Section Component: HairTypesSection
 */
export function HairTypesSection({
  items = DEFAULT_HAIR_TYPES,
}: {
  items?: HairTypeItem[];
}) {
  return (
    <section
      id="hair-types-section"
      className="relative w-full pt-6 sm:pt-8 md:pt-14 pb-28 sm:pb-40 md:pb-56 lg:pb-64 overflow-hidden z-20 bg-white"
    >
      {/* Dynamic #DAF6FF Background SVG with Slanted Top Edge and Curly Wave Bottom Edge */}
      <svg
        viewBox="0 0 1920 1400"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <path
          d="M 0,180 
             L 1920,0 
             L 1920,1300 
             C 1800,1230 1680,1370 1560,1300 
             C 1440,1230 1320,1370 1200,1300 
             C 1080,1230 960,1370 840,1300 
             C 720,1230 600,1370 480,1300 
             C 360,1230 240,1370 120,1300 
             C 60,1265 20,1255 0,1285 
             Z"
          fill="#DAF6FF"
        />
      </svg>

      {/* Top-left Fluffy 3D Cloud Cluster overlapping the slanted boundary */}
      {/* <div
        className="absolute -top-8 sm:-top-24 md:-top-20 lg:-top-24 left-0 w-[360px] sm:w-[500px] md:w-[640px] lg:w-[740px] pointer-events-none z-[1] select-none"
        aria-hidden="true"
      >
        <img
          src={cloudSvg}
          alt=""
          className="w-full h-auto object-contain opacity-95 drop-shadow-sm"
        />
      </div> */}

      {/* Decorative White Hair Curl Ribbon Swirl on Left */}
      <div
        className="absolute top-10 sm:top-14 md:top-18 left-3 sm:left-8 md:left-14 w-32 sm:w-44 md:w-56 pointer-events-none z-[1]"
        aria-hidden="true"
      >
        <svg viewBox="0 0 240 240" fill="none" className="w-full h-full">
          <path
            d="M 25,125 C 10,70 65,25 120,40 C 175,55 180,130 130,165 C 80,195 30,155 50,100 C 65,60 115,35 165,50"
            stroke="white"
            strokeWidth="16"
            strokeLinecap="round"
            fill="none"
            opacity="0.45"
          />
        </svg>
      </div>

      {/* Main Foreground Content */}
      <div className="relative z-10 flex flex-col items-center">
        <HairTypesBadge />
        <HairTypesHeader />
        <HairTypesGrid items={items} />
      </div>
    </section>
  );
}

export default HairTypesSection;