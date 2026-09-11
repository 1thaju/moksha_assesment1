import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo_hydracurl.svg";

const links = ["Home", "Products", "Hair Care Blog", "Curly Girl Method"];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-50 w-full bg-[#040C1E]/95 backdrop-blur-md shadow-md">
      <div className="relative mx-auto flex h-[100px] max-w-[1920px] items-center justify-between px-4 sm:px-8 lg:px-[120px]">
        {/* Brand Logo - 168x81px positioned at top: 12px, left: 120px */}
        <div className="flex w-[168px] items-center justify-start shrink-0">
          <img
            src={logo}
            alt="Hydra Curls logo"
            className="block object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]"
            style={{ width: "168px", height: "81px", opacity: 1, transform: "rotate(0deg)" }}
          />
        </div>

        {/* Desktop Navigation Links - 20px Gotham-styled font, 100% line height */}
        <nav className="hidden flex-1 items-center justify-center md:flex md:gap-10 lg:gap-12">
          {links.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`text-[16px] lg:text-[20px] font-normal leading-none tracking-normal transition-colors ${
                i === 0 ? "text-white font-medium" : "text-white/80 hover:text-white"
              }`}
              style={{ fontWeight: i === 0 ? 500 : 350 }}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right Balance Spacer to preserve exact left-center alignment */}
        <div className="hidden md:block md:w-[168px]" aria-hidden="true" />

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <nav className="md:hidden bg-[#040C1E]/95 px-6 pb-6 pt-2 flex flex-col gap-4 border-t border-white/10">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-white/85 text-[16px] font-normal py-1 hover:text-white"
              style={{ fontWeight: 350 }}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
