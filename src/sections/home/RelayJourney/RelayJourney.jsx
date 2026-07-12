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
    title: "Parcel is ready",
    description:
      "Your parcel is prepared for collection at a supported business, retailer or transport partner.",
  },
  {
    icon: FiCheckCircle,
    title: "Request delivery",
    description:
      "Confirm the parcel details and select your preferred delivery address.",
  },
  {
    icon: FiTruck,
    title: "Relayer collects it",
    description:
      "A verified Relayer collects the parcel from the confirmed pickup location.",
  },
  {
    icon: FiMapPin,
    title: "Delivered to you",
    description:
      "Track the delivery and receive your parcel safely at your chosen address.",
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

          <h2>From pickup point to your doorstep</h2>

          <p>
            Request delivery, follow your parcel and receive it at your
            preferred address.
          </p>
        </header>

        <div className="relay-journey__steps">
          {journeySteps.map(
            ({ icon: Icon, title, description }, index) => (
              <div
                className="relay-journey__step-group"
                key={title}
              >
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

        <div className="relay-journey__safety">
          <div className="relay-journey__safety-content">
            <span>Parcel safety</span>

            <h3>Know what to check before every handover.</h3>

            <p>
              Learn how to verify your Relayer, protect your account and report
              a damaged, missing or suspicious parcel.
            </p>
          </div>

          <Link
            to="/parcel-safety"
            className="relay-journey__safety-link"
          >
            View parcel safety guide
            <FiArrowUpRight aria-hidden="true" />
          </Link>
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
              Receive delivery updates and follow your parcel from collection
              to final handover.
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