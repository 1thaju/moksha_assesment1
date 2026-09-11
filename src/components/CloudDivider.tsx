interface CloudDividerProps {
  color?: string;
  flip?: boolean;
  className?: string;
}

/** A soft cloud-like divider (rounded bumps) between two sections. */
export function CloudDivider({ color = "#ffffff", flip = false, className = "" }: CloudDividerProps) {
  return (
    <div
      className={`pointer-events-none absolute left-0 w-full overflow-hidden leading-[0] ${
        flip ? "top-0 -translate-y-[1px] rotate-180" : "bottom-0 translate-y-[1px]"
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1920 140"
        className="w-full h-[48px] sm:h-[64px] md:h-[92px]"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,70 C180,20 300,120 470,70 C670,10 780,100 960,70 C1180,35 1330,110 1520,70 C1690,35 1810,95 1920,70 L1920,140 L0,140 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
