interface WaveDividerProps {
  color?: string;
  flip?: boolean;
  className?: string;
}

/** A wavy organic divider between two sections, built as an SVG path (not CSS). */
export function WaveDivider({ color = "#17d3f0", flip = false, className = "" }: WaveDividerProps) {
  return (
    <div
      className={`absolute left-0 w-full overflow-hidden leading-[0] ${flip ? "top-0 -translate-y-[1px] rotate-180" : "bottom-0 translate-y-[1px]"} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1920 170"
        className="w-full h-[60px] sm:h-[90px] md:h-[130px]"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,60 C 240,140 480,0 720,50 C 960,100 1200,20 1440,60 C 1680,100 1800,40 1920,70 L1920,170 L0,170 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
