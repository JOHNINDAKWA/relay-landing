import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiMapPin,
  FiPackage,
  FiTruck,
} from "react-icons/fi";

import "./RelayJourney.css";

const journeySteps = [
  {
    icon: FiPackage,
    title: "Parcel arrives",
    description: "Your parcel is received at a supported bus station.",
  },
  {
    icon: FiCheckCircle,
    title: "Request delivery",
    description: "Confirm your parcel and choose your delivery address.",
  },
  {
    icon: FiTruck,
    title: "Rider collects it",
    description: "A verified Relayer picks it up from the station.",
  },
  {
    icon: FiMapPin,
    title: "Delivered to you",
    description: "Track the rider and receive your parcel at your door.",
  },
];

function RelayJourney() {
  return (
    <section className="relay-journey">
      <div className="site-container">
        <header className="relay-journey__header">
          <span className="relay-journey__eyebrow">
            How Relay works
          </span>

          <h2>
            From the station to your doorstep
          </h2>

          <p>
            Request delivery, follow your parcel and receive it wherever you
            are.
          </p>
        </header>

        <div className="relay-journey__steps">
          {journeySteps.map(
            ({ icon: Icon, title, description }, index) => (
              <div className="relay-journey__step-group" key={title}>
                <article className="relay-journey__step">
                  <span className="relay-journey__icon">
                    <Icon aria-hidden="true" />
                  </span>

                  <h3>{title}</h3>

                  <p>{description}</p>
                </article>

                {index < journeySteps.length - 1 && (
                  <span
                    className="relay-journey__arrow"
                    aria-hidden="true"
                  >
                    <FiArrowRight />
                  </span>
                )}
              </div>
            ),
          )}
        </div>
      </div>

      <div className="relay-journey__app-banner">
        <div
          className="relay-journey__banner-image"
          aria-hidden="true"
        />

        <div
          className="relay-journey__banner-overlay"
          aria-hidden="true"
        />

        <div className="site-container relay-journey__banner-content">
          <div className="relay-journey__banner-copy">
            <span>Relay mobile app</span>

            <h2>
              Request, pay and track
              <strong>from one place.</strong>
            </h2>

            <p>
              Get delivery updates and follow your parcel from the station to
              your door.
            </p>
          </div>

          <div className="relay-journey__downloads">
            <div className="relay-journey__badges">
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noreferrer"
                aria-label="Download Relay on the App Store"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                />
              </a>

              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noreferrer"
                aria-label="Get Relay on Google Play"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                />
              </a>
            </div>

            <Link
              to="/how-it-works"
              className="relay-journey__banner-link"
            >
              Learn more about the app
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RelayJourney;