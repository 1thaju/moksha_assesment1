import { ArrowRight } from "lucide-react";
import curlyimage1 from "../assets/curlyimage1.svg";
import curlyimage2 from "../assets/curlyimage2.svg";
import curlyimage3 from "../assets/curlyimage3.svg";

function WaveSquiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-2.5 w-14 ${className}`}
      viewBox="0 0 70 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 6 C 7 1, 13 1, 18 6 C 23 11, 29 11, 35 6 C 41 1, 47 1, 52 6 C 57 11, 63 11, 68 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * A single wavy vertical divider that sits on one edge of the color card,
 * biting slightly into the adjacent image. `side` is which edge of the CARD
 * it's attached to — "left" when the image is to the card's left, "right"
 * when the image is to the card's right — so callers don't need to hand-tune
 * mirrored path data or separate left/right components anymore.
 */
function VerticalCurlyDivider({ color, side }: { color: string; side: "left" | "right" }) {
  // One path, mirrored via scaleX when side is "right" — avoids maintaining
  // two near-identical hand-authored path strings that can drift out of sync.
  return (
    <div
      className={`pointer-events-none absolute top-0 bottom-0 z-10 hidden w-8 overflow-hidden sm:w-10 md:block md:w-12 lg:w-14 ${
        side === "left" ? "-left-8 sm:-left-10 md:-left-12 lg:-left-14" : "-right-8 sm:-right-10 md:-right-12 lg:-right-14"
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 60 632"
        preserveAspectRatio="none"
        className={`h-full w-full ${side === "right" ? "-scale-x-100" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60,0 L32,0 C12,35 2,75 2,110 C2,150 22,185 45,225 C62,260 55,295 25,335 C-2,370 2,405 25,445 C48,480 58,515 45,550 C30,585 10,610 30,632 L60,632 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

/** Mobile horizontal wave divider for stacked layout */
function MobileCurlyEdge({ color, flip = false }: { color: string; flip?: boolean }) {
  return (
    <div
      className={`pointer-events-none absolute left-0 w-full overflow-hidden leading-[0] z-10 md:hidden ${
        flip ? "top-0 -translate-y-[1px] rotate-180" : "bottom-0 translate-y-[1px]"
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 600 50"
        className="w-full h-8 sm:h-10"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,25 C75,5 125,45 200,25 C275,5 325,45 400,25 C475,5 525,45 600,25 L600,50 L0,50 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

interface JourneyRowProps {
  image: string;
  imageColor: string;
  cardColor: string;
  cardSide: "left" | "right"; // which side the color card sits on
}

/**
 * One alternating row, extracted so the three rows below are pure data
 * instead of three near-identical ~50-line blocks — easier to scan and to
 * tweak copy/colors without touching markup three times.
 */
function JourneyRow({ image, imageColor, cardColor, cardSide }: JourneyRowProps) {
  const imageBlock = (
    <div
      className="relative h-full min-h-[360px] md:min-h-[580px] lg:h-[632px] w-full overflow-hidden"
      style={{ backgroundColor: imageColor }}
    >
      <img
        src={image}
        alt="Curly hair styling guide"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <MobileCurlyEdge color={cardColor} flip={cardSide === "left"} />
    </div>
  );

  const cardBlock = (
    <div
      className="relative flex h-full min-h-[360px] md:min-h-[580px] lg:h-[632px] w-full items-center justify-center px-8 py-12 text-white sm:px-14 lg:px-20"
      style={{ backgroundColor: cardColor }}
    >
      {/* The divider sits on whichever edge of the CARD touches the image */}
      <VerticalCurlyDivider color={cardColor} side={cardSide === "left" ? "right" : "left"} />

      <div className="flex max-w-[493px] flex-col items-center text-center md:items-start md:text-left z-10">
        {/* Italian / Guthen Bloots font header */}
        <div className="relative inline-block mb-3">
          <p
            className="font-guthen text-[20px] sm:text-[24px] text-white capitalize leading-none"
            style={{
              fontFamily: "'Guthen Bloots Personal Use', 'Caveat', 'Kaushan Script', cursive",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "100%",
              letterSpacing: "0.1em",
              textTransform: "capitalize",
            }}
          >
            Expert Guide
          </p>
          <svg
            className="absolute w-full h-2 -bottom-1.5 left-0 text-white/75"
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

        <h3
          className="font-gotham text-[22px] sm:text-[24px] text-white tracking-normal mt-2"
          style={{
            fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          Curly Girl Method Guide
        </h3>

        <p
          className="font-gotham text-[15px] sm:text-[16px] text-white max-w-[493px] mt-4"
          style={{
            fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
            fontWeight: 350,
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0%",
          }}
        >
          Complete guide to the CGM with moodboards, tips, and step-by-step instructions designed specifically for Arab hair.
        </p>

        <button className="group mt-6 inline-flex cursor-pointer items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:text-white/90 sm:text-[13px]">
          <span>EXPLORE NOW</span>
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="grid min-h-[440px] grid-cols-1 md:grid-cols-2 md:h-[632px] w-full">
      {cardSide === "left" ? (
        <>
          <div className="order-2 md:order-1 h-full w-full">{cardBlock}</div>
          <div className="order-1 md:order-2 h-full w-full">{imageBlock}</div>
        </>
      ) : (
        <>
          <div className="h-full w-full">{imageBlock}</div>
          <div className="h-full w-full">{cardBlock}</div>
        </>
      )}
    </div>
  );
}

const rows: JourneyRowProps[] = [
  { image: curlyimage1, imageColor: "#00C2DE", cardColor: "#5365BB", cardSide: "right" },
  { image: curlyimage2, imageColor: "#F6C1C7", cardColor: "#76468A", cardSide: "left" },
  { image: curlyimage3, imageColor: "#F79F1A", cardColor: "#009ABA", cardSide: "right" },
];

export function CurlyJourney() {
  return (
    <section className="relative overflow-hidden bg-white pb-0 pt-14 sm:pt-18 md:pt-20">
      <div className="mx-auto max-w-[722px] px-6 pb-10 text-center sm:pb-14 flex flex-col items-center">
        {/* Tag: Learn & Grow */}
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
            Learn &amp; Grow
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

        {/* Main Heading: Your Curly Hair Journey Starts Here */}
        <h2
          className="font-gotham text-[30px] sm:text-[42px] md:text-[50px] lg:text-[54px] font-bold text-black max-w-[650px] mx-auto tracking-normal mt-2 leading-[1.05]"
          style={{
            fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
            fontWeight: 700,
            letterSpacing: "0%",
            textAlign: "center",
          }}
        >
          Your Curly Hair <br />
          <span
            className="font-gotham text-[#00CBF8] inline-block"
            style={{
              fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
              fontWeight: 700,
              letterSpacing: "0%",
              textAlign: "center",
            }}
          >
            Journey Starts Here
          </span>
        </h2>

        {/* Description: Access expert guides... */}
        <p
          className="font-kaushan text-[16px] sm:text-[20px] md:text-[24px] text-[#2D3748] max-w-[722px] mx-auto mt-3 sm:mt-4 leading-relaxed sm:leading-normal"
          style={{
            fontFamily: "'Kaushan Script', cursive",
            fontWeight: 400,
            letterSpacing: "0%",
            textAlign: "center",
          }}
        >
          Access expert guides, styling tips, and a community of women who celebrate their natural curls.
        </p>
      </div>

      <div className="w-full">
        {rows.map((row, i) => (
          <JourneyRow key={i} {...row} />
        ))}
      </div>

      <div className="relative bg-[#081120] px-6 pb-14 pt-16 text-white sm:px-12 sm:pb-20 sm:pt-20 lg:px-20">
        <div className="pointer-events-none absolute -top-5 left-0 right-0 z-20 w-full overflow-hidden leading-[0] sm:-top-8">
          <svg viewBox="0 0 1440 60" className="h-6 w-full sm:h-9 md:h-12" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,25 C320,55 560,5 820,35 C1080,65 1300,12 1440,25 L1440,60 L0,60 Z" fill="#081120" />
          </svg>
        </div>

        <div className="relative mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-10 lg:flex-row lg:gap-14">
          <div className="flex max-w-[792px] flex-col items-center text-center lg:items-start lg:text-left">
            <h3
              className="font-gotham text-[28px] sm:text-[38px] md:text-[46px] lg:text-[52px] font-bold text-white tracking-normal leading-[1.05]"
              style={{
                fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
                fontWeight: 700,
                letterSpacing: "0%",
              }}
            >
              Join the Curly Hair Revolution
            </h3>

            <p
              className="font-kaushan text-[16px] sm:text-[20px] md:text-[24px] text-white/90 max-w-[649px] mt-4 leading-relaxed sm:leading-normal"
              style={{
                fontFamily: "'Kaushan Script', cursive",
                fontWeight: 400,
                letterSpacing: "0%",
              }}
            >
              Transform your curly hair journey with expert guidance, premium products, and a supportive community.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 lg:justify-start">
              <button className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#00C5FF] px-6 py-3 text-xs font-bold text-[#081120] shadow-lg shadow-[#00C5FF]/20 transition-all hover:bg-[#00B4EA] sm:text-sm">
                <span>Explore Products</span>
                <ArrowRight size={15} />
              </button>
              <button className="cursor-pointer rounded-lg border border-[#00C5FF]/40 px-6 py-3 text-xs font-medium text-white transition-all hover:border-[#00C5FF] hover:bg-[#00C5FF]/10 sm:text-sm">
                Learn Curly Girl Method
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-7 text-center sm:gap-x-16">
            {[
              ["48h", "Hydration"],
              ["05", "Products"],
              ["3", "Hair Types"],
              ["0", "Sulfates"],
            ].map(([stat, label]) => (
              <div key={label}>
                <div
                  className="font-gotham text-[24px] sm:text-[28px] md:text-[30px] font-medium text-[#00C5FF]"
                  style={{
                    fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
                    fontWeight: 500,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  {stat}
                </div>
                <div
                  className="font-gotham mt-1.5 text-xs font-medium uppercase tracking-wider text-white/70"
                  style={{
                    fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}