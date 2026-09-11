interface CloudDividerProps {
  color?: string;
  flip?: boolean;
  className?: string;
}

/** A soft cloud-like divider (rounded bumps) between two sections. */
export function CloudDivider({ color = "#ffffff", flip = false, className = "" }: CloudDividerProps) {
  return (
    <div
      className={`absolute left-0 w-full overflow-hidden leading-[0] ${flip ? "top-0 -translate-y-[1px] rotate-180" : "bottom-0 translate-y-[1px]"} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1920 120"
        className="w-full h-[40px] sm:h-[60px] md:h-[90px]"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,80 Q 120,20 240,70 T 480,70 T 720,70 T 960,70 T 1200,70 T 1440,70 T 1680,70 T 1920,70 L1920,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
