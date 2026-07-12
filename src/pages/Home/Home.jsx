import AudienceSelector from "../../sections/home/AudienceSelector/AudienceSelector";
import Hero from "../../sections/home/Hero/Hero";
import ProductExperiencePreview from "../../sections/home/ProductExperiencePreview/ProductExperiencePreview";
import RelayJourney from "../../sections/home/RelayJourney/RelayJourney";
import SupportedAreas from "../../sections/home/SupportedAreas/SupportedAreas";
import SupportedPartners from "../../sections/home/SupportedPartners/SupportedPartners";
import WhyRelay from "../../sections/home/WhyRelay/WhyRelay";

import "./Home.css";

function Home() {
  return (
    <main className="home-page">
      <Hero />

      <SupportedAreas />

      <AudienceSelector />

      <WhyRelay />

      <RelayJourney />

      <ProductExperiencePreview />

      <SupportedPartners />
    </main>
  );
}

export default Home;