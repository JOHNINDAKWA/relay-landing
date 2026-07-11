import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

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

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/how-it-works"
          element={<PagePlaceholder title="How Relay Works" />}
        />

        <Route
          path="/track"
          element={<PagePlaceholder title="Track Your Parcel" />}
        />

        <Route
          path="/become-a-relayer"
          element={<PagePlaceholder title="Become a Relayer" />}
        />

        <Route
          path="/partner-with-us"
          element={<PagePlaceholder title="Partner With Relay" />}
        />

        <Route
          path="/about"
          element={<PagePlaceholder title="About Relay" />}
        />

        <Route
          path="*"
          element={<PagePlaceholder title="Page Not Found" />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;