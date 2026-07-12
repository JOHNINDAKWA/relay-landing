import { Link } from "react-router-dom";
import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiCheckCircle,
  FiClock,
  FiCreditCard,
  FiMapPin,
  FiNavigation,
  FiPackage,
  FiPhone,
  FiShield,
  FiSmartphone,
  FiTruck,
} from "react-icons/fi";

import phoneImage from "../../assets/phone.png";
import Parcel_Arrival from "../../assets/parcel-arrival.jpeg";
import Parcel_Collection from "../../assets/parcel-collection.jpeg";
import Parcel_FollowUp from "../../assets/parcel-follow-up.jpeg";
import Parcel_Customer_Receiving from "../../assets/parcel-customer.jpeg";

import "./HowItWorks.css";
import BeforeDelivery from "./BeforeDelivery";

const processSteps = [
  {
    number: "01",
    shortTitle: "Parcel is ready",
    title: "Your parcel is ready at a supported pickup location.",
    description:
      "The business, retailer or transport partner confirms that your parcel is available for collection by Relay.",
    detail: "Parcel confirmed and ready",
    icon: FiPackage,
  },
  {
    number: "02",
    shortTitle: "Request delivery",
    title: "Tell Relay where you would like it delivered.",
    description:
      "Confirm your parcel details, enter your preferred delivery address and pay securely through M-Pesa.",
    detail: "Address and payment confirmed",
    icon: FiSmartphone,
  },
  {
    number: "03",
    shortTitle: "Relayer collects it",
    title: "A verified Relayer collects your parcel.",
    description:
      "The assigned Relayer confirms the handover at the pickup location before beginning the delivery journey.",
    detail: "Secure pickup handover",
    icon: FiTruck,
  },
  {
    number: "04",
    shortTitle: "Track and receive",
    title: "Follow the journey until your parcel reaches you.",
    description:
      "Receive delivery updates, follow the Relayer and get confirmation once your parcel has been delivered.",
    detail: "Live updates and proof of delivery",
    icon: FiMapPin,
  },
];

const trackingUpdates = [
  {
    label: "Parcel ready for collection",
    time: "09:18",
    complete: true,
  },
  {
    label: "Payment confirmed",
    time: "09:24",
    complete: true,
  },
  {
    label: "Relayer collected parcel",
    time: "09:41",
    complete: true,
  },
  {
    label: "Out for delivery",
    time: "Now",
    complete: false,
  },
];

const trustPoints = [
  {
    icon: FiShield,
    title: "Verified Relayers",
    text: "Delivery partners are checked before joining the Relay network.",
  },
  {
    icon: FiCheckCircle,
    title: "Recorded handovers",
    text: "Parcel collection and final delivery are confirmed at every stage.",
  },
  {
    icon: FiNavigation,
    title: "Live delivery updates",
    text: "Customers can follow their parcel after it leaves the pickup location.",
  },
  {
    icon: FiPhone,
    title: "Help when needed",
    text: "Relay support is available when there is a question or delivery issue.",
  },
];

function HowItWorks() {
  return (
    <main className="how-it-works-page">
      {/* Hero */}

      <section className="hiw-hero">
        <div className="hiw-hero__image" aria-hidden="true" />
        <div className="hiw-hero__overlay" aria-hidden="true" />

        <div className="site-container hiw-hero__container">
          <div className="hiw-hero__content">
            <span className="hiw-hero__eyebrow">
              How Relay works
            </span>

            <h1>
              The simple way to get your parcel
              <span> from pickup point to your door.</span>
            </h1>

            <p>
              Request delivery, pay through M-Pesa and follow your parcel until
              it reaches your preferred address.
            </p>

            <div className="hiw-hero__actions">
              <Link
                to="/get-my-parcel"
                className="hiw-hero__primary"
              >
                Get my parcel
                <FiArrowUpRight aria-hidden="true" />
              </Link>

              <a
                href="#relay-process"
                className="hiw-hero__secondary"
              >
                Follow the journey
                <FiArrowDown aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="hiw-hero__status">
            <div className="hiw-hero__status-top">
              <div>
                <span>Example delivery</span>
                <strong>RL-2408-0186</strong>
              </div>

              <span className="hiw-hero__live">
                <i />
                Live
              </span>
            </div>

            <div className="hiw-hero__route">
              <div>
                <span>Pickup point</span>
                <strong>Machakos Country Bus</strong>
              </div>

              <span className="hiw-hero__route-line">
                <i />
              </span>

              <div>
                <span>Destination</span>
                <strong>Kilimani</strong>
              </div>
            </div>

            <div className="hiw-hero__arrival">
              <FiClock aria-hidden="true" />

              <div>
                <span>Estimated arrival</span>
                <strong>12–18 minutes</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick overview */}

      <section className="hiw-overview" id="relay-process">
        <div className="site-container">
          <header className="hiw-overview__header">
            <span>One clear journey</span>

            <h2>Four simple steps.</h2>

            <p>
              Relay manages the delivery journey from the supported pickup
              location to your preferred address.
            </p>
          </header>

          <div className="hiw-overview__route">
            {processSteps.map(
              ({ number, shortTitle, icon: Icon }, index) => (
                <div className="hiw-overview__group" key={number}>
                  <div className="hiw-overview__step">
                    <span className="hiw-overview__icon">
                      <Icon aria-hidden="true" />
                    </span>

                    <span>{number}</span>
                    <strong>{shortTitle}</strong>
                  </div>

                  {index < processSteps.length - 1 && (
                    <FiArrowRight
                      className="hiw-overview__arrow"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Detailed process */}

      <section className="hiw-process">
        <div className="site-container">
          {processSteps.map(
            (
              {
                number,
                shortTitle,
                title,
                description,
                detail,
                icon: Icon,
              },
              index,
            ) => (
              <article
                className={`hiw-process__row ${
                  index % 2 !== 0
                    ? "hiw-process__row--reverse"
                    : ""
                }`}
                key={number}
              >
                <div className="hiw-process__visual">
                  {index === 0 && (
                    <img
                      src={Parcel_Arrival}
                      alt="Parcel ready for collection at a supported pickup location"
                    />
                  )}

                  {index === 1 && (
                    <img
                      src={Parcel_FollowUp}
                      alt="Customer using a mobile phone to request parcel delivery"
                    />
                  )}

                  {index === 2 && (
                    <img
                      src={Parcel_Collection}
                      alt="Relay delivery rider collecting a parcel"
                    />
                  )}

                  {index === 3 && (
                    <img
                      src={Parcel_Customer_Receiving}
                      alt="Customer receiving a delivered parcel"
                    />
                  )}

                  <div className="hiw-process__visual-overlay" />

                  <span className="hiw-process__visual-number">
                    {number}
                  </span>

                  <div className="hiw-process__visual-label">
                    <Icon aria-hidden="true" />
                    <span>{shortTitle}</span>
                  </div>
                </div>

                <div className="hiw-process__content">
                  <span className="hiw-process__eyebrow">
                    Step {number}
                  </span>

                  <h2>{title}</h2>

                  <p>{description}</p>

                  <div className="hiw-process__detail">
                    <FiCheck aria-hidden="true" />
                    <span>{detail}</span>
                  </div>

                  {index === 1 && (
                    <div className="hiw-process__payment">
                      <FiCreditCard aria-hidden="true" />

                      <div>
                        <span>Payment</span>
                        <strong>M-Pesa supported</strong>
                      </div>
                    </div>
                  )}

                  {index === 3 && (
                    <Link
                      to="/get-my-parcel"
                      className="hiw-process__link"
                    >
                      Get My Parcel
                      <FiArrowUpRight aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </article>
            ),
          )}
        </div>
      </section>

      {/* Tracking experience */}

      <section className="hiw-tracking">
        <div className="site-container hiw-tracking__layout">
          <div className="hiw-tracking__content">
            <span className="hiw-tracking__eyebrow">
              Follow every important update
            </span>

            <h2>
              You always know
              <span>what is happening.</span>
            </h2>

            <p>
              Relay shows when your parcel is ready, collected, on the way and
              successfully delivered.
            </p>

            <div className="hiw-tracking__updates">
              {trackingUpdates.map(
                ({ label, time, complete }) => (
                  <div
                    className={`hiw-tracking__update ${
                      complete
                        ? "hiw-tracking__update--complete"
                        : ""
                    }`}
                    key={label}
                  >
                    <span className="hiw-tracking__marker">
                      {complete ? (
                        <FiCheck aria-hidden="true" />
                      ) : (
                        <i />
                      )}
                    </span>

                    <strong>{label}</strong>
                    <time>{time}</time>
                  </div>
                ),
              )}
            </div>

            <Link
              to="/get-my-parcel"
              className="hiw-tracking__action"
            >
              Get My Parcel
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>

          <div className="hiw-tracking__phone">
            <div
              className="hiw-tracking__glow"
              aria-hidden="true"
            />

            <img
              src={phoneImage}
              alt="Relay mobile app displaying live parcel tracking"
            />

            <span className="hiw-tracking__note hiw-tracking__note--top">
              Live location
            </span>

            <span className="hiw-tracking__note hiw-tracking__note--bottom">
              M-Pesa paid
            </span>
          </div>
        </div>
      </section>

      {/* Trust */}

      <section className="hiw-trust">
        <div className="site-container">
          <header className="hiw-trust__header">
            <span>Built for safe delivery</span>

            <h2>
              Every important handover is accounted for.
            </h2>
          </header>

          <div className="hiw-trust__list">
            {trustPoints.map(
              ({ icon: Icon, title, text }) => (
                <article
                  className="hiw-trust__item"
                  key={title}
                >
                  <span className="hiw-trust__icon">
                    <Icon aria-hidden="true" />
                  </span>

                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Final app CTA */}

      <section className="hiw-app">
        <div className="hiw-app__image" aria-hidden="true" />
        <div className="hiw-app__overlay" aria-hidden="true" />

        <div className="site-container hiw-app__content">
          <div>
            <span>Get started with Relay</span>

            <h2>
              Your parcel is ready.
              <strong>Let us bring it to you.</strong>
            </h2>

            <p>
              Request delivery and follow the journey from your phone.
            </p>
          </div>

          <div className="hiw-app__actions">
            <div className="hiw-app__badges">
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

            <Link to="/get-my-parcel">
              Get My Parcel
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <BeforeDelivery />
    </main>
  );
}

export default HowItWorks;