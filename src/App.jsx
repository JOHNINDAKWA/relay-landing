import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import About from "./pages/About/About";
import PartnerWithUs from "./pages/PartnerWithUs/PartnerWithUs";
import GetParcel from "./pages/GetMyParcel/GetMyParcel";
import BecomeRelayer from "./pages/BecomeRelayer/BecomeRelayer";
import Contact from "./pages/Contact/Contact";
import HelpCentre from "./pages/HelpCenter/HelpCenter";
import ParcelSafety from "./pages/ParcelSafety/ParcelSafety";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService/TermsOfService";
import RiderAgreement from "./pages/RiderAgreement/RiderAgreement";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function PagePlaceholder({ title }) {
  return (
    <main
      className="page-main"
      style={{
        display: "grid",
        minHeight: "70vh",
        placeItems: "center",
        padding: "8rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div>
        <span className="section-label">Relay</span>
        <h1>{title}</h1>
        <p>Tulia. Page in Progress</p>
      </div>
    </main>
  );
}

function App() {
  return (
    <div className="page-shell">
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/how-it-works" element={<HowItWorks />} />

        <Route path="/get-my-parcel" element={<GetParcel />} />

        <Route path="/become-a-relayer" element={<BecomeRelayer />} />

        <Route path="/partner-with-us" element={<PartnerWithUs />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/help" element={<HelpCentre />} />

        <Route path="/parcel-safety" element={<ParcelSafety />} />

        <Route path="/privacy" element={<PrivacyPolicy />} />

        <Route path="/terms" element={<TermsOfService />} />

        <Route path="/rider-agreement" element={<RiderAgreement />} />

        <Route path="*" element={<PagePlaceholder title="Page Not Found" />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
