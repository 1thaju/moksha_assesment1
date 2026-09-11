import { Image as ImageIcon } from "lucide-react";
import { WaveDivider } from "./WaveDivider";

const influencers = Array.from({ length: 8 });
const types = ["Wavy", "Curly", "Coily"];

export function HairTypes() {
  return (
    <section className="relative bg-brand-ice pt-10 pb-28 md:pb-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 text-center">
        <p className="font-script text-brand-purple text-lg">Influencer Approved</p>
        <h2 className="text-2xl sm:text-3xl font-bold mt-1">
          See What The <span className="text-brand-cyan">Experts Are Saying</span>
        </h2>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {influencers.map((_, i) => (
            <div
              key={i}
              className="aspect-[3/4] rounded-lg bg-gray-200 flex items-center justify-center text-gray-400"
            >
              <ImageIcon size={22} />
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center">
          <div className="h-16 w-16 rounded-full bg-brand-navy text-white text-[9px] flex items-center justify-center text-center leading-tight p-1">
            Hydra Curls
          </div>
          <p className="font-script text-brand-purple text-lg mt-4">Designed For You</p>
          <h3 className="text-xl sm:text-2xl font-bold mt-1">
            Perfect for Arab <span className="text-brand-cyan">Curly, Coily &amp; Wavy Hair</span>
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-gray-500 max-w-md">
            Our range is specifically formulated to meet the unique needs of Arab hair textures,
            providing targeted care for types 2, 3, and 4.
          </p>
        </div>

        <div className="mt-8 grid sm:grid-cols-3 gap-5">
          {types.map((type) => (
            <div
              key={type}
              className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gradient-to-b from-brand-purple to-brand-purple-dark flex items-end justify-center p-4"
            >
              <span className="font-script text-white text-2xl">{type.toLowerCase()}</span>
            </div>
          ))}
        </div>
      </div>

      <WaveDivider color="#eef8fc" className="opacity-0" />
    </section>
  );
}
