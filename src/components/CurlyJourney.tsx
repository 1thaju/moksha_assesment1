import { ArrowRight } from "lucide-react";
import { CloudDivider } from "./CloudDivider";

const cells = [
  { color: "bg-teal-400", type: "image" },
  { color: "bg-indigo-600", type: "text" },
  { color: "bg-purple-700", type: "text" },
  { color: "bg-pink-300", type: "image" },
  { color: "bg-amber-400", type: "image" },
  { color: "bg-cyan-500", type: "text" },
];

export function CurlyJourney() {
  return (
    <section className="relative bg-white pt-14">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 text-center mb-10">
        <p className="font-script text-brand-purple text-lg">Learn &amp; Grow</p>
        <h2 className="text-2xl sm:text-3xl font-bold mt-1">
          Your Curly Hair <span className="text-brand-cyan">Journey Starts Here</span>
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
          Access expert guides, styling tips, and a community of women who celebrate their
          natural curl.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        {cells.map((cell, i) =>
          cell.type === "image" ? (
            <div key={i} className={`${cell.color} aspect-square sm:aspect-auto sm:h-64`} />
          ) : (
            <div
              key={i}
              className={`${cell.color} h-64 flex flex-col justify-center px-8 sm:px-12 text-white`}
            >
              <p className="font-script text-sm opacity-80">Expert Guide</p>
              <h3 className="text-lg font-semibold mt-1">Curly Girl Method Guide</h3>
              <p className="text-xs opacity-80 mt-2 max-w-xs">
                Complete guide to the CGM with moodboards, tips, and step-by-step instructions
                designed specifically for Arab hair.
              </p>
              <button className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold w-fit">
                EXPLORE NOW <ArrowRight size={13} />
              </button>
            </div>
          )
        )}
      </div>

      <div className="relative bg-brand-navy pt-14 pb-16 md:pb-20">
        <CloudDivider color="#ffffff" flip />
        <div className="mx-auto max-w-6xl px-6 sm:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-white text-2xl sm:text-3xl font-bold">
              Join the Curly Hair Revolution
            </h3>
            <p className="text-white/60 text-sm mt-2 max-w-sm">
              Transform your curly hair journey with expert guidance, premium products, and a
              supportive community.
            </p>
            <div className="mt-6 flex gap-4">
              <button className="bg-brand-cyan text-brand-navy font-semibold text-sm px-5 py-3 rounded-md">
                Explore Products
              </button>
              <button className="border border-brand-cyan text-brand-cyan font-semibold text-sm px-5 py-3 rounded-md">
                Learn Curly Girl Method
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 text-white text-center sm:text-left">
            {[
              ["48h", "Hydration"],
              ["05", "Products"],
              ["3", "Hair Types"],
              ["0", "Sulfates"],
            ].map(([stat, label]) => (
              <div key={label}>
                <p className="text-2xl font-extrabold text-brand-cyan">{stat}</p>
                <p className="text-xs text-white/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
