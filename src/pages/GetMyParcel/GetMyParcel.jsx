import { Link } from "react-router-dom";
import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiCheckCircle,
  FiDownload,
  FiMapPin,
  FiPackage,
  FiSmartphone,
  FiTruck,
} from "react-icons/fi";

import phoneImage from "../../assets/phone.png";
import parcelPickupImage from "../../assets/parcel-pickup.png";
import parcelCustomerImage from "../../assets/parcel-customer.jpeg";

import "./GetMyParcel.css";

const deliverySteps = [
  {
    icon: FiPackage,
    title: "Your parcel arrives",
    text: "Confirm that your parcel has reached a supported bus station.",
  },
  {
    icon: FiSmartphone,
    title: "Request delivery in the app",
    text: "Download Relay, enter the parcel details and choose your address.",
  },
  {
    icon: FiTruck,
    title: "Relay collects it",
    text: "A verified Relayer picks up the parcel from the station.",
  },
  {
    icon: FiMapPin,
    title: "Track and receive",
    text: "Follow the delivery in the app until it reaches your door.",
  },
];

const appBenefits = [
  "Request collection from a supported station",
  "Pay securely through M-Pesa",
  "Follow the rider in real time",
  "Receive delivery status updates",
];

function GetMyParcel() {
  return (
    <main className="get-parcel-page">
      {/* Hero */}

      <section className="get-parcel-hero">
        <div className="site-container get-parcel-hero__layout">
          <div className="get-parcel-hero__content">
            <span className="get-parcel-hero__eyebrow">
              Get your parcel delivered
            </span>

            <h1>
              Your parcel is at the station.
              <span>Relay brings it to you.</span>
            </h1>

            <p>
              Download the Relay app to request collection from a supported
              bus station, pay through M-Pesa and follow the delivery until it
              reaches your preferred address.
            </p>

            <div className="get-parcel-hero__downloads">
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

            <a
              href="#how-to-get-your-parcel"
              className="get-parcel-hero__secondary"
            >
              See how it works
              <FiArrowDown aria-hidden="true" />
            </a>
          </div>

          <div className="get-parcel-hero__visual">
            <div
              className="get-parcel-hero__glow"
              aria-hidden="true"
            />

            <img
              src={phoneImage}
              alt="Relay app showing a parcel delivery journey"
              className="get-parcel-hero__phone"
            />

            <span className="get-parcel-hero__note get-parcel-hero__note--top">
              <FiCheckCircle aria-hidden="true" />
              Parcel found
            </span>

            <span className="get-parcel-hero__note get-parcel-hero__note--bottom">
              <FiMapPin aria-hidden="true" />
              Live tracking
            </span>
          </div>
        </div>
      </section>

      {/* Process */}

      <section
        className="get-parcel-process"
        id="how-to-get-your-parcel"
      >
        <div className="site-container">
          <header className="get-parcel-process__header">
            <span>How to get your parcel</span>

            <h2>From the station to your door in four steps.</h2>

            <p>
              The request and live tracking happen inside the Relay mobile
              app.
            </p>
          </header>

          <div className="get-parcel-process__flow">
            {deliverySteps.map(({ icon: Icon, title, text }, index) => (
              <div className="get-parcel-process__group" key={title}>
                <article className="get-parcel-process__step">
                  <span className="get-parcel-process__icon">
                    <Icon aria-hidden="true" />
                  </span>

                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>

                {index < deliverySteps.length - 1 && (
                  <span
                    className="get-parcel-process__arrow"
                    aria-hidden="true"
                  >
                    <FiArrowRight />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection explanation */}

      <section className="get-parcel-collection">
        <div className="site-container get-parcel-collection__layout">
          <div className="get-parcel-collection__image">
            <img
              src={parcelPickupImage}
              alt="Relay rider collecting a parcel"
            />

            <div
              className="get-parcel-collection__overlay"
              aria-hidden="true"
            />

            <div className="get-parcel-collection__image-note">
              <FiPackage aria-hidden="true" />
              <span>Secure station collection</span>
            </div>
          </div>

          <div className="get-parcel-collection__content">
            <span className="get-parcel-collection__eyebrow">
              Relay handles the final journey
            </span>

            <h2>
              You do not need to travel to the bus station.
            </h2>

            <p>
              Once your request is confirmed, a verified Relayer collects the
              parcel from the station and delivers it to the address you
              selected in the app.
            </p>

            <div className="get-parcel-collection__points">
              <div>
                <FiCheck aria-hidden="true" />
                <span>Recorded station handover</span>
              </div>

              <div>
                <FiCheck aria-hidden="true" />
                <span>Verified delivery partner</span>
              </div>

              <div>
                <FiCheck aria-hidden="true" />
                <span>Delivery to your preferred address</span>
              </div>
            </div>

            <Link
              to="/how-it-works"
              className="get-parcel-collection__link"
            >
              Learn how Relay works
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* App experience */}

      <section className="get-parcel-app">
        <div className="site-container get-parcel-app__layout">
          <div className="get-parcel-app__content">
            <span className="get-parcel-app__eyebrow">
              Everything happens in the app
            </span>

            <h2>
              Request, pay and follow the delivery from your phone.
            </h2>

            <p>
              The Relay website explains the service. The mobile app is where
              customers request parcel collection and receive live delivery
              updates.
            </p>

            <div className="get-parcel-app__benefits">
              {appBenefits.map((benefit) => (
                <div key={benefit}>
                  <FiCheck aria-hidden="true" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="get-parcel-app__badges">
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
          </div>

          <div className="get-parcel-app__visual">
            <div className="get-parcel-app__image">
              <img
                src={parcelCustomerImage}
                alt="Customer receiving a parcel from a Relay rider"
              />

              <div
                className="get-parcel-app__overlay"
                aria-hidden="true"
              />
            </div>

            <div className="get-parcel-app__phone">
              <img
                src={phoneImage}
                alt="Relay mobile app displaying live delivery tracking"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}

      <section className="get-parcel-download">
        <div className="site-container get-parcel-download__layout">
          <div>
            <span>Ready to receive your parcel?</span>

            <h2>
              Download Relay and request delivery.
            </h2>

            <p>
              Have your parcel reference, station and delivery address ready.
            </p>
          </div>

          <div className="get-parcel-download__actions">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
            >
              <FiDownload aria-hidden="true" />
              Download for iPhone
            </a>

            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
            >
              <FiDownload aria-hidden="true" />
              Download for Android
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default GetMyParcel;