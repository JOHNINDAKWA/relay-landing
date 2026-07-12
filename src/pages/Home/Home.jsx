import AudienceSelector from "../../sections/home/AudienceSelector/AudienceSelector";
import Hero from "../../sections/home/Hero/Hero";
import RelayJourney from "../../sections/home/RelayJourney/RelayJourney";
import WhyRelay from "../../sections/home/WhyRelay/WhyRelay";
import ProductExperiencePreview from "../../sections/home/ProductExperiencePreview/ProductExperiencePreview";

import "./Home.css";
import PartnerRiderCTA from "../../sections/home/PartnerRiderCTA/PartnerRiderCTA";
import SupportedAreas from "../../sections/home/SupportedAreas/SupportedAreas";

function Home() {
  return (
    <main className="home-page">
      <Hero />
         <SupportedAreas />

      {/* <JourneyOptions /> */}
      <AudienceSelector />
      <WhyRelay />
        <RelayJourney />
        <ProductExperiencePreview />
        <PartnerRiderCTA/>




      {/*
        Future homepage sections:

        <TrustStrip />
        <TrackingPreview />
        <Coverage />
        <OperatingProof />
        <CustomerStory />
        <Partnerships />
        <RelayerCTA />
        <Safety />
        <FAQ />
        <FinalCTA />
      */}
    </main>
  );
}

export default Home;