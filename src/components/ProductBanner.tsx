import productBannerSvg from "../assets/product_banner.svg";

export function ProductBanner() {
  return (
    <section className="relative z-40 w-full overflow-hidden leading-none bg-transparent -mt-10 sm:-mt-14 md:-mt-18 lg:-mt-24">
      <img
        src={productBannerSvg}
        alt="Parachute Advansed Hydra Curls Product Banner"
        className="w-full h-auto block"
      />
    </section>
  );
}

