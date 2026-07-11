import { Link } from "react-router-dom";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";

import heroImage from "../../../assets/hero.png";
import "./Hero.css";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        "--hero-background-image": `url(${heroImage})`,
      }}
    >
      <div className="hero__overlay" aria-hidden="true" />

      <div className="site-container hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            From the bus station
            <span>to your <br /> doorstep.</span>
          </h1>

          <p className="hero__description">
            Relay collects your parcel from a supported bus station and
            delivers it across Nairobi with M-Pesa payment, live tracking and
            proof of delivery.
          </p>

          <div className="hero__actions">
            <Link to="/get-my-parcel" className="hero__primary-action">
              <span>Get my parcel</span>
              <FiArrowUpRight aria-hidden="true" />
            </Link>

            <Link
              to="/how-it-works"
              className="hero__secondary-action"
            >
              <span>See how Relay works</span>
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;