import { Hero } from "./components/Hero";
import { NewLaunch } from "./components/NewLaunch";
import { ProductBanner } from "./components/ProductBanner";
import { InfoSplit } from "./components/InfoSplit";
import { ProductCarousel } from "./components/ProductCarousel";
import { PromiseSection } from "./components/PromiseSection";
import { Ingredients } from "./components/Ingredients";
import { Community } from "./components/Community";
import { HairTypes } from "./components/HairTypes";
import { CurlyJourney } from "./components/CurlyJourney";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <NewLaunch />
      <ProductBanner />
      <InfoSplit />
      <ProductCarousel />
      <PromiseSection />
      <Ingredients />
      <Community />
      <HairTypes />
      <CurlyJourney />
      <Footer />
    </div>
  );
}

export default App;
