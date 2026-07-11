import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiMapPin,
  FiNavigation,
  FiShield,
  FiSmartphone,
} from "react-icons/fi";

import phoneImage from "../../../assets/phone.png";
import "./ProductExperiencePreview.css";

const leftFeatures = [
  {
    icon: FiMapPin,
    title: "Track in real time",
    description:
      "Follow your parcel from the station to your doorstep.",
  },
  {
    icon: FiCheckCircle,
    title: "Simple delivery flow",
    description:
      "Request delivery in a few steps without confusion.",
  },
  {
    icon: FiNavigation,
    title: "Clear status updates",
    description:
      "Always know where your parcel is and what happens next.",
  },
];

const rightFeatures = [
  {
    icon: FiSmartphone,
    title: "Made for mobile",
    description:
      "Designed for quick actions, visibility and ease of use.",
  },
  {
    icon: FiShield,
    title: "Safe and reliable",
    description:
      "Built around verified riders, proof of delivery and trust.",
  },
  {
    icon: FiCheckCircle,
    title: "All in one place",
    description:
      "Request, pay and track from a single product experience.",
  },
];

function ProductExperiencePreview() {
  return (
    <section className="product-preview">
      <div className="site-container">
        <header className="product-preview__header">
          <span className="product-preview__eyebrow">
            Product Experience Preview
          </span>

          <h2>Designed to feel simple from the first tap.</h2>

          <p>
            A clean mobile experience for requesting delivery, tracking
            progress and receiving your parcel with confidence.
          </p>
        </header>

        <div className="product-preview__layout">
          <div className="product-preview__column product-preview__column--left">
            {leftFeatures.map(({ icon: Icon, title, description }) => (
              <article className="product-preview__feature" key={title}>
                <span className="product-preview__feature-icon">
                  <Icon aria-hidden="true" />
                </span>

                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="product-preview__visual">
            <div className="product-preview__glow" aria-hidden="true" />

            <div className="product-preview__phone-wrap">
              <img
                src={phoneImage}
                alt="Relay parcel tracking app displayed on a phone"
                className="product-preview__phone-image"
              />
            </div>

            <div className="product-preview__floating-note product-preview__floating-note--left">
              <span>Live tracking</span>
            </div>

            <div className="product-preview__floating-note product-preview__floating-note--right">
              <span>M-Pesa ready</span>
            </div>
          </div>

          <div className="product-preview__column product-preview__column--right">
            {rightFeatures.map(({ icon: Icon, title, description }) => (
              <article className="product-preview__feature" key={title}>
                <span className="product-preview__feature-icon">
                  <Icon aria-hidden="true" />
                </span>

                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="product-preview__actions">
          <Link to="/get-my-parcel" className="product-preview__primary-action">
            Get My Parcel
            <FiArrowUpRight aria-hidden="true" />
          </Link>

          <Link
            to="/how-it-works"
            className="product-preview__secondary-action"
          >
            See how Relay works
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductExperiencePreview;