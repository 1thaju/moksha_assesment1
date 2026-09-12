import { ArrowRight } from "lucide-react";
import logo from "../assets/logo_hydracurl.svg";

const hairCare = ["Curly Girl Method", "Hair Type Guide", "Styling Tips", "Ingredient Benefits"];

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-12 px-6 sm:px-12 lg:px-[120px]">
      <div className="mx-auto max-w-[1440px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 items-start">
        {/* Column 1: Brand Info & Logo */}
        <div className="flex flex-col items-start">
          <div className="mb-6">
            <img
              src={logo}
              alt="Parachute Advansed Hydra Curls"
              className="w-[157px] h-[127px] object-contain brightness-110"
              style={{ width: "157px", height: "127px" }}
            />
          </div>

          <p
            className="font-gotham text-[20px] text-white/90 leading-[29px] max-w-[320px]"
            style={{
              fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
              fontWeight: 350,
              fontSize: "20px",
              lineHeight: "29px",
              letterSpacing: "0%",
            }}
          >
            Advanced hair care specially designed for Arab curly, coily &amp; wavy hair types 2, 3, and 4.
          </p>
        </div>

        {/* Column 2: Hair Care Links */}
        <div className="flex flex-col items-start">
          <h4
            className="font-gotham text-[20px] font-bold text-white mb-6"
            style={{
              fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Hair Care
          </h4>
          <ul className="space-y-3.5">
            {hairCare.map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="font-gotham text-[20px] text-white/85 hover:text-[#00C5FF] transition-colors leading-[29px] block"
                  style={{
                    fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
                    fontWeight: 350,
                    fontSize: "20px",
                    lineHeight: "29px",
                    letterSpacing: "0%",
                  }}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Connect Info */}
        <div className="flex flex-col items-start">
          <h4
            className="font-gotham text-[20px] font-bold text-white mb-6"
            style={{
              fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Connect
          </h4>
          <p
            className="font-gotham text-[20px] text-white/90 leading-[29px] max-w-[300px]"
            style={{
              fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
              fontWeight: 350,
              fontSize: "20px",
              lineHeight: "29px",
              letterSpacing: "0%",
            }}
          >
            Follow us for daily hair care tips and inspiration for your curly hair journey.
          </p>
        </div>

        {/* Column 4: Newsletter */}
        <div className="flex flex-col items-start">
          <h4
            className="font-gotham text-[20px] font-bold text-white mb-6"
            style={{
              fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Newsletter
          </h4>
          <p
            className="font-gotham text-[20px] text-white/90 leading-[29px] max-w-[300px] mb-5"
            style={{
              fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
              fontWeight: 350,
              fontSize: "20px",
              lineHeight: "29px",
              letterSpacing: "0%",
            }}
          >
            Get expert tips and exclusive offers delivered to your inbox.
          </p>

          <div className="flex items-center h-[46px] w-full max-w-[320px] bg-[#14151a] rounded-md overflow-hidden border border-white/15 focus-within:border-[#00C5FF]/60 transition-all">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent text-[14px] px-4 py-2.5 flex-1 outline-none text-white placeholder:text-white/40 font-gotham"
            />
            <button
              className="bg-[#00C5FF] hover:bg-[#00B4EA] text-[#081120] h-full w-[48px] flex items-center justify-center transition-colors cursor-pointer shrink-0"
              aria-label="Subscribe"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-16 pt-8 border-t border-white/10 text-center flex justify-center items-center">
        <p
          className="font-gotham text-white/70 max-w-[551px]"
          style={{
            fontFamily: "'Gotham', 'Montserrat', 'Poppins', sans-serif",
            fontWeight: 350,
            fontSize: "18px",
            lineHeight: "29px",
            letterSpacing: "0%",
          }}
        >
          © 2026 Parachute Advanced Hydra Curls. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

