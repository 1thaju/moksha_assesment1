import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { NewLaunch } from "./components/NewLaunch";
import { ProductBanner } from "./components/ProductBanner";
import { InfoSplit } from "./components/InfoSplit";
import { ProductCarousel } from "./components/ProductCarousel";
import { PromiseSection } from "./components/PromiseSection";
import { Ingredients } from "./components/Ingredients";
import { CommunitySection } from "./components/CommunitySection";
import { HairTypesSection } from "./components/HairTypesSection";
import { CurlyJourney } from "./components/CurlyJourney";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-clip">
      <Header />
      <Hero />
      <NewLaunch />
      <ProductBanner />
      <InfoSplit />
      <ProductCarousel />
      <PromiseSection />
      <Ingredients />
      <CommunitySection />
      <HairTypesSection />
      <CurlyJourney />
      <Footer />
    </div>
  );
}

export default App;
