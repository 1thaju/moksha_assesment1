interface ProductBottleProps {
  className?: string;
  label?: string;
}

/** Generic placeholder bottle illustration — swap for real product renders from the design assets. */
export function ProductBottle({ className = "", label }: ProductBottleProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg viewBox="0 0 120 260" className="w-full h-auto drop-shadow-xl">
        <rect x="45" y="10" width="30" height="18" rx="4" fill="#4a2178" />
        <rect x="38" y="26" width="44" height="14" rx="3" fill="#2d0f4f" />
        <path
          d="M30 46 Q30 40 40 40 L80 40 Q90 40 90 46 L96 220 Q96 250 60 250 Q24 250 24 220 Z"
          fill="#5b2a8c"
        />
        <rect x="28" y="90" width="64" height="70" rx="6" fill="#eef8fc" opacity="0.9" />
        <text
          x="60"
          y="130"
          textAnchor="middle"
          fontSize="11"
          fontFamily="Poppins, sans-serif"
          fontWeight="600"
          fill="#2d0f4f"
        >
          {label ?? "Hydra Curls"}
        </text>
      </svg>
    </div>
  );
}
