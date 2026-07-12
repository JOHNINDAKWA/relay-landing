import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiMapPin,
  FiNavigation,
  FiPackage,
} from "react-icons/fi";

import aboutHeroImage from "../../assets/rider-transporting2.jpeg";
import parcelArrivalImage from "../../assets/parcel-arrival.jpeg";

import "./About.css";

const principles = [
  {
    icon: FiPackage,
    title: "Simple",
    text: "Parcel delivery should be easy to understand and easy to request.",
  },
  {
    icon: FiNavigation,
    title: "Visible",
    text: "Customers should know where their parcel is and what happens next.",
  },
  {
    icon: FiCheckCircle,
    title: "Reliable",
    text: "Every parcel handover should be clear, secure and accountable.",
  },
];

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <img
          src={aboutHeroImage}
          alt="Relay riders transporting parcels for delivery"
          className="about-hero__image"
        />

        <div className="about-hero__overlay" aria-hidden="true" />

        <div className="site-container about-hero__container">
          <div className="about-hero__content">
            <span className="about-hero__eyebrow">
              About Relay
            </span>

            <h1>
              We complete the journey{" "}
              <span>from pickup point to doorstep.</span>
            </h1>

            <p>
              Relay helps customers receive parcels from supported businesses,
              retailers, transport partners and other pickup locations without
              travelling to collect them in person.
            </p>

            <Link to="/how-it-works" className="about-hero__action">
              See how Relay works
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="about-introduction">
        <div className="site-container about-introduction__layout">
          <div className="about-introduction__label">
            <span>What we do</span>
          </div>

          <div className="about-introduction__content">
            <h2>
              Businesses and transport partners prepare the parcel.
              <span>Relay handles the delivery journey.</span>
            </h2>

            <div className="about-introduction__copy">
              <p>
                We collect parcels from supported pickup locations and deliver
                them to homes, offices and other preferred addresses within our
                service areas.
              </p>

              <p>
                Customers can request delivery, pay through M-Pesa and follow
                their parcel until it reaches them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-purpose">
        <div className="site-container about-purpose__layout">
          <div className="about-purpose__image-wrap">
            <img
              src={parcelArrivalImage}
              alt="Parcel ready for collection at a supported pickup location"
              className="about-purpose__image"
            />

            <div
              className="about-purpose__image-overlay"
              aria-hidden="true"
            />

            <div className="about-purpose__image-note">
              <FiMapPin aria-hidden="true" />

              <span>
                Parcel ready at the pickup point
              </span>
            </div>
          </div>

          <div className="about-purpose__content">
            <span className="about-purpose__eyebrow">
              Why Relay exists
            </span>

            <h2>
              Reaching the pickup point should not be the end of the journey.
            </h2>

            <p>
              Traffic, queues and distance can make parcel collection
              inconvenient. Relay removes that final trip by collecting the
              parcel and bringing it directly to the customer.
            </p>

            <ul className="about-purpose__benefits">
              <li>
                <FiCheckCircle aria-hidden="true" />
                <span>No unnecessary trip to the pickup point</span>
              </li>

              <li>
                <FiCheckCircle aria-hidden="true" />
                <span>Clear delivery updates</span>
              </li>

              <li>
                <FiCheckCircle aria-hidden="true" />
                <span>Delivery to your preferred address</span>
              </li>
            </ul>

            <Link to="/get-my-parcel" className="about-purpose__action">
              Get my parcel
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="about-principles">
        <div className="site-container">
          <header className="about-principles__header">
            <span>How we approach delivery</span>

            <h2>Built around a better customer experience.</h2>
          </header>

          <div className="about-principles__list">
            {principles.map(({ icon: Icon, title, text }) => (
              <article className="about-principles__item" key={title}>
                <span className="about-principles__icon">
                  <Icon aria-hidden="true" />
                </span>

                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="site-container about-cta__layout">
          <div>
            <span>Ready to use Relay?</span>

            <h2>Let us bring your parcel to you.</h2>
          </div>

          <div className="about-cta__actions">
            <Link to="/get-my-parcel" className="about-cta__primary">
              Get started
              <FiArrowUpRight aria-hidden="true" />
            </Link>

            <Link
              to="/partner-with-us"
              className="about-cta__secondary"
            >
              Partner with Relay
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;