import cloudSvg from "../assets/cloud.svg";
import logoHydracurl from "../assets/logo_hydracurl.svg";
import modelWavy from "../assets/model_wavy.jpg";
import modelCurly from "../assets/model_curly.jpg";
import modelCoily from "../assets/model_coily.jpg";

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
}

const DEFAULT_HAIR_TYPES: HairTypeItem[] = [
  {
    id: "wavy",
    type: "wavy",
    label: "wavy",
    image: modelWavy, // Swap with exported Figma/brand asset: assets/models/wavy-hair.jpg
    altText: "Model with natural wavy Arab hair texture",
    gradient: "from-[#381154] to-[#1d062e]",
    description: "A flexible texture characterized by a consistent flow that sits between straight and curly.",
    characteristics: ["Consistent \"S\" shaped flow", "Lays closer to the scalp than curls", "Easily weighed down by heavy products"],
  },
  {
    id: "curly",
    type: "curly",
    label: "curly",
    image: modelCurly, // Swap with exported Figma/brand asset: assets/models/curly-hair.jpg
    altText: "Model with defined curly Arab hair texture",
    gradient: "from-[#35104f] to-[#1c062c]",
    description: "A distinct spiral pattern ranging from loose loops to tight ringlets with a well-defined circular shape.",
    characteristics: ["Visible \"O\" shaped curls", "Natural volume and lift", "High susceptibility to moisture loss"],
  },
  {
    id: "coily",
    type: "coily",
    label: "coily",
    image: modelCoily, // Swap with exported Figma/brand asset: assets/models/coily-hair.jpg
    altText: "Model with rich coily Arab hair texture",
    gradient: "from-[#320f4b] to-[#180426]",
    description: "Densely packed strands forming tight zig-zags or small coils with significant natural texture.",
    characteristics: ["Tight \"Z\" or \"S\" patterns", "Noticeable length shrinkage", "Fine, delicate strand structure"],
  },
];

/**
 * Sub-component: Circular Badge with circular SVG text and center logo
 */
export function HairTypesBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      <div className="relative w-[110px] h-[110px] sm:w-[124px] sm:h-[124px] md:w-[130px] md:h-[130px] rounded-full bg-[#0C1220] flex items-center justify-center shadow-2xl p-3 border-2 border-white/40">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full animate-[spin_24s_linear_infinite] motion-reduce:animate-none pointer-events-none select-none"
          aria-hidden="true"
        >
          <path
            id="badgeCirclePath"
            d="M 50, 50 m -36.5, 0 a 36.5,36.5 0 1,1 73,0 a 36.5,36.5 0 1,1 -73,0"
            fill="transparent"
          />
          <text fontSize="7.8" fontWeight="700" fill="#ffffff" letterSpacing="2.6">
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

      <svg className="w-11 h-3 mt-2 text-white/80" viewBox="0 0 44 10" fill="none" aria-hidden="true">
        <path d="M4,2 Q22,10 40,2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/**
 * Sub-component: Heading & Description Block
 */
export function HairTypesHeader() {
  return (
    <div className="text-center max-w-2xl mx-auto px-4 mt-2 mb-8 md:mb-12">
      <p className="font-script text-[20px] sm:text-[24px] text-gray-700 italic font-semibold mb-1">
        Designed For You
      </p>

      <h2 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold text-black leading-tight tracking-tight mt-1">
        Perfect for Arab <br className="hidden sm:inline" />
        <span className="text-[#17D3F0]">Curly, Coily &amp; Wavy Hair</span>
      </h2>

      <p className="mt-2.5 sm:mt-3 font-script text-[14px] sm:text-[15px] md:text-[16px] text-gray-600 leading-relaxed italic max-w-[500px] mx-auto">
        Our range is specifically formulated to meet the unique needs of Arab hair textures, providing targeted care for types 2, 3, and 4.
      </p>
    </div>
  );
}

/**
 * Sub-component: hover reveal panel — slides down from the TOP of the card,
 * solid purple fill with a multi-curl wavy bottom edge (matching the wave
 * divider language used elsewhere on the page), instead of a plain
 * rounded-rectangle panel rising from the bottom.
 *
 * All three cards use this exact same component/animation, so if one card
 * still appears to animate from a different direction than the others once
 * hovered in isolation (not during fast mouse movement across cards), that
 * points to an external CSS conflict rather than anything in this file.
 */
function HoverInfoPanel({ item }: { item: HairTypeItem }) {
  return (
    <div className="absolute inset-x-0 top-0 z-20 -translate-y-full opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
      <div className="bg-[#3a1a5c] px-4 pt-4 pb-8 sm:px-5 sm:pt-5 text-left">
        <p className="text-[11px] sm:text-[12px] md:text-[13px] leading-relaxed text-white font-medium">
          {item.description}
        </p>
        <div className="mt-2.5 space-y-1.5">
          <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] text-white/70">
            Characteristics
          </p>
          <ul className="space-y-1 text-[10px] sm:text-[11px] text-white/90">
            {item.characteristics.map((characteristic) => (
              <li key={characteristic} className="flex items-start gap-2">
                <span className="mt-0.5 text-[#17D3F0]">✓</span>
                <span>{characteristic}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Wavy bottom edge — multiple curls, matching the reference's more
          pronounced scalloped edge instead of one shallow dip */}
      <svg
        viewBox="0 0 300 30"
        preserveAspectRatio="none"
        className="block h-5 w-full sm:h-6"
        aria-hidden="true"
      >
        <path
          d="M0,0 L300,0 L300,12
             C 275,26 250,2 225,14
             C 200,26 175,2 150,14
             C 125,26 100,2 75,14
             C 50,26 25,2 0,14
             Z"
          fill="#3a1a5c"
        />
      </svg>
    </div>
  );
}

/**
 * Sub-component: Single Hair Type Portrait Card
 * Aspect ratio taken directly from the Figma frame (619 x 774 ≈ 0.7997,
 * i.e. ~4:5) rather than an approximated 3:4.
 */
export function HairTypeCard({ item }: { item: HairTypeItem }) {
  return (
    <div
      className={`relative aspect-[619/774] w-full overflow-hidden shadow-lg group cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl bg-gradient-to-b ${item.gradient}`}
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

      <div className="absolute inset-0 bg-gradient-to-t from-[#140220]/80 via-[#140220]/25 to-transparent" />

      {/* Brand logo lockup — top-right corner, no color filter */}
      <div className="absolute top-4 right-4 z-30 bg-black/25 backdrop-blur-xs px-2.5 py-1.5 rounded-lg border border-white/20 shadow-sm">
        {logoHydracurl ? (
          <img
            src={logoHydracurl}
            alt="Hydra Curls"
            className="h-5 sm:h-5.5 w-auto object-contain"
          />
        ) : (
          <span className="font-script text-white text-xs">Hydra Curls</span>
        )}
      </div>

      {/* Hover panel — slides down from the top with a multi-curl wavy edge */}
      <HoverInfoPanel item={item} />

      {/* Bottom gradient overlay & cursive script hair type label — untouched by the hover panel now */}
      <div className="absolute inset-x-0 bottom-0 pt-28 pb-6 md:pb-8 bg-gradient-to-t from-[#140220]/95 via-[#140220]/45 to-transparent flex justify-center items-end z-10">
        <span className="font-script text-white text-5xl sm:text-6xl md:text-[64px] tracking-wide drop-shadow-md select-none transition-transform duration-300 group-hover:scale-108">
          {item.label}
        </span>
      </div>
    </div>
  );
}

/**
 * Sub-component: Three-Column Image Grid
 * Full-bleed (no max-width/side padding) with a real gap between cards.
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
 * (Parallax opacity/translateY effect removed — it required a real
 * scroll-driven `parallaxProgress` value that was never wired up, which was
 * locking the section's opacity at 0.35 and causing a washed-out look.
 * Revisit as a proper scroll-linked effect later if there's time after the
 * core assignment is done.)
 */
export function HairTypesSection({
  items = DEFAULT_HAIR_TYPES,
}: {
  items?: HairTypeItem[];
}) {
  return (
    <section
      id="hair-types-section"
      className="relative w-full bg-[#DCEEF7] pt-14 sm:pt-16 md:pt-20 pb-0 overflow-hidden z-20 shadow-[0_-25px_50px_rgba(0,0,0,0.08)]"
    >
      {/* Diagonal Slanted Top Cut & Cloud Texture */}
      <div
        className="absolute top-0 left-0 right-0 h-28 sm:h-36 md:h-44 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-6 sm:-top-10 -left-6 md:left-4 w-[380px] sm:w-[500px] md:w-[620px] opacity-80">
          <img src={cloudSvg} alt="" className="w-full h-auto object-contain" />
        </div>

        <div className="absolute top-8 left-10 md:left-28 w-36 h-36 opacity-20 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-white" stroke="currentColor" strokeWidth="2.5">
            <path d="M 20,80 Q 10,20 60,30 T 70,80" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <HairTypesBadge />
        <HairTypesHeader />
        <HairTypesGrid items={items} />
      </div>

      {/* Bottom Horizontal Organic Wave Divider into subsequent white section */}
      <div className="w-full overflow-hidden leading-none -mb-[1px] mt-12 md:mt-16 pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-12 md:h-16 block"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C360,45 1080,45 1440,0 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}

export default HairTypesSection;