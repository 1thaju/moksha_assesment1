import { ArrowRight } from "lucide-react";

const hairCare = ["Curly Girl Method", "Hair Type Guide", "Styling Tips", "Ingredient Benefits"];

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-12 pb-6">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <span className="font-script text-2xl text-brand-cyan">Hydra Curls</span>
          <p className="text-xs text-white/50 mt-3 max-w-[220px]">
            Advanced hair care specially designed for Arab curly, coily &amp; wavy hair types 2, 3,
            and 4.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Hair care</h4>
          <ul className="space-y-2">
            {hairCare.map((l) => (
              <li key={l} className="text-xs text-white/50">
                {l}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Connect</h4>
          <p className="text-xs text-white/50">
            Follow us for daily hair care tips and inspiration for your curly hair journey.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Newsletter</h4>
          <p className="text-xs text-white/50 mb-3">
            Get expert tips and exclusive offers delivered to your inbox.
          </p>
          <div className="flex items-center bg-white/10 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent text-xs px-3 py-2.5 flex-1 outline-none placeholder:text-white/40"
            />
            <button
              className="bg-brand-cyan text-brand-navy h-full px-3 py-2.5 flex items-center justify-center"
              aria-label="Subscribe"
            >
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-white/10 text-center text-[11px] text-white/40">
        © 2026 Parachute Advansed Hydra Curls. All rights reserved.
      </div>
    </footer>
  );
}
