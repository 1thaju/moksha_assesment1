import productBannerSvg from "../assets/product_banner.svg";

export function ProductBanner() {
  return (
    <section className="relative w-full overflow-hidden leading-none bg-[#f0f8fb]">
      <img
        src={productBannerSvg}
        alt="Parachute Advansed Hydra Curls Product Banner"
        className="w-full h-auto block"
      />
    </section>
  );
}

