import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo_hydracurl.svg";

const links = ["Home", "Products", "Hair Care Blog", "Curly Girl Method"];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-30 w-full bg-[#040C1E]">
      <div className="relative mx-auto flex h-[75px] max-w-[1920px] items-center justify-between px-4 sm:px-6 lg:px-12">
        <div className="flex w-[128px] items-center justify-start" style={{ marginTop: "8px" }}>
          <img
            src={logo}
            alt="Hydra Curls logo"
            className="block drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]"
            style={{ width: "128px", height: "62px", opacity: 1, transform: "rotate(0deg)" }}
          />
        </div>

        <nav className="hidden flex-1 items-center justify-center md:flex md:gap-8">
          {links.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`text-xs tracking-wide transition-colors md:text-sm ${
                i === 0 ? "text-white font-medium" : "text-white/70 hover:text-white"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden md:block md:w-[128px]" aria-hidden="true" />

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-brand-navy/95 px-6 pb-4 flex flex-col gap-3">
          {links.map((link) => (
            <a key={link} href="#" className="text-white/80 text-sm py-1">
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
