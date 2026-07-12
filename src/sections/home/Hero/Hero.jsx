import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiMapPin,
  FiPackage,
  FiTruck,
} from "react-icons/fi";

import heroImage from "../../../assets/hero.png";
import "./Hero.css";

const servicePoints = [
  {
    icon: FiTruck,
    label: "Business pickups",
  },
  {
    icon: FiPackage,
    label: "Terminal collections",
  },
  {
    icon: FiMapPin,
    label: "Doorstep delivery",
  },
];

function Hero() {
  return (
    <section
      className="hero"
      style={{
        "--hero-background-image": `url(${heroImage})`,
      }}
    >
      <div className="hero__overlay" aria-hidden="true" />

      <div
        className="hero__decoration hero__decoration--one"
        aria-hidden="true"
      />

      <div
        className="hero__decoration hero__decoration--two"
        aria-hidden="true"
      />

      <div className="site-container hero__container">
        <div className="hero__content">
          <span className="hero__eyebrow">
            <FiTruck aria-hidden="true" />
            Last-mile delivery made easier
          </span>

          <h1 className="hero__title">
            From businesses & terminals
            <span>to your doorstep.</span>
          </h1>

          <p className="hero__description">
            Relay collects parcels from supported businesses, retailers and
            bus terminals, then delivers them safely to customers with secure
            payments, live tracking and proof of delivery.
          </p>

          <div className="hero__actions">
            <Link to="/get-my-parcel" className="hero__primary-action">
              <span>Get my parcel</span>
              <FiArrowUpRight aria-hidden="true" />
            </Link>

            <Link
              to="/partner-with-us"
              className="hero__secondary-action"
            >
              <span>Send parcels with Relay</span>
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="hero__service-points">
            {servicePoints.map(({ icon: Icon, label }) => (
              <div key={label}>
                <span>
                  <Icon aria-hidden="true" />
                </span>

                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;