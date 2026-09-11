import { ArrowRight } from "lucide-react";
import logo from "../assets/logo_hydracurl.svg";

const hairCare = ["Curly Girl Method", "Hair Type Guide", "Styling Tips", "Ingredient Benefits"];

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-12 px-6 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
        {/* Column 1: Brand Info */}
        <div className="flex flex-col items-start">
          <div className="mb-1">
            <img
              src={logo}
              alt="Parachute Advansed"
              className="h-9 w-auto object-contain brightness-110"
            />
          </div>

          <span className="font-script text-3xl sm:text-4xl text-[#00C5FF] font-semibold tracking-wide leading-tight my-1.5">
            Hydra Curls
          </span>

          <p className="text-[13px] sm:text-[14px] text-white/90 font-normal leading-[1.65] max-w-[260px] mt-2">
            Advanced hair care specially designed for Arab curly, coily &amp; wavy hair types 2, 3,
            and 4.
          </p>
        </div>

        {/* Column 2: Hair Care Links */}
        <div>
          <h4 className="text-[15px] sm:text-[16px] font-semibold text-white mb-4 tracking-wide">
            Hair care
          </h4>
          <ul className="space-y-2.5">
            {hairCare.map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="text-[13px] sm:text-[14px] text-white/90 hover:text-[#00C5FF] transition-colors leading-normal block"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Connect Info */}
        <div>
          <h4 className="text-[15px] sm:text-[16px] font-semibold text-white mb-4 tracking-wide">
            Connect
          </h4>
          <p className="text-[13px] sm:text-[14px] text-white/90 font-normal leading-[1.65] max-w-[260px]">
            Follow us for daily hair care tips and inspiration for your curly hair journey.
          </p>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="text-[15px] sm:text-[16px] font-semibold text-white mb-4 tracking-wide">
            Newsletter
          </h4>
          <p className="text-[13px] sm:text-[14px] text-white/90 font-normal leading-[1.65] max-w-[260px] mb-5">
            Get expert tips and exclusive offers delivered to your inbox.
          </p>

          <div className="flex items-center h-[42px] max-w-[280px] bg-[#14151a] rounded-md overflow-hidden border border-white/10 focus-within:border-[#00C5FF]/60 transition-all">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent text-[13px] px-3.5 py-2.5 flex-1 outline-none text-white placeholder:text-white/40"
            />
            <button
              className="bg-[#00C5FF] hover:bg-[#00B4EA] text-[#081120] h-full w-[44px] flex items-center justify-center transition-colors cursor-pointer shrink-0"
              aria-label="Subscribe"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-white/60 tracking-wide">
        © 2026 Parachute Advansed Hydra Curls. All rights reserved.
      </div>
    </footer>
  );
}
