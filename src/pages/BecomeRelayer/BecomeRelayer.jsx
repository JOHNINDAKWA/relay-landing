import { Link } from "react-router-dom";
import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiCheckCircle,
  FiClock,
  FiDownload,
  FiFileText,
  FiMapPin,
  FiShield,
  FiSmartphone,
  FiTruck,
  FiUserCheck,
} from "react-icons/fi";

import riderImage from "../../assets/relay-rider.jpeg";
import "./BecomeRelayer.css";

const approvalSteps = [
  {
    icon: FiDownload,
    title: "Download the app",
    text: "Install the Relay rider app on your Android or iPhone.",
  },
  {
    icon: FiSmartphone,
    title: "Create your account",
    text: "Register as a Relayer and provide your basic information.",
  },
  {
    icon: FiFileText,
    title: "Submit your documents",
    text: "Upload the required identification and vehicle documents.",
  },
  {
    icon: FiUserCheck,
    title: "Wait for approval",
    text: "Relay reviews your application before activating your account.",
  },
];

const requirements = [
  "Valid national identification",
  "A roadworthy motorcycle or car",
  "Valid driving licence",
  "Current vehicle insurance",
  "Android or iPhone smartphone",
  "Ability to operate within supported locations",
];

const riderBenefits = [
  {
    icon: FiClock,
    title: "Choose when to work",
    text: "Go online when you are available and accept suitable delivery jobs.",
  },
  {
    icon: FiMapPin,
    title: "Jobs come through the app",
    text: "Receive parcel delivery opportunities directly on your phone.",
  },
  {
    icon: FiShield,
    title: "Clear delivery process",
    text: "Every collection and delivery follows a recorded handover process.",
  },
];

function BecomeRelayer() {
  return (
    <main className="relayer-page">
      {/* Hero */}

      <section className="relayer-hero">
        <div className="site-container relayer-hero__layout">
          <div className="relayer-hero__content">
            <span className="relayer-hero__eyebrow">
              Become a Relayer
            </span>

            <h1>
              Deliver parcels.
              <span>Earn on your schedule.</span>
            </h1>

            <p>
              Create your Relayer account in the app, submit the required
              information and start receiving delivery opportunities after
              your application has been approved.
            </p>

            <div className="relayer-hero__actions">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noreferrer"
                className="relayer-hero__primary"
              >
                Download the rider app
                <FiDownload aria-hidden="true" />
              </a>

              <a
                href="#relayer-application-process"
                className="relayer-hero__secondary"
              >
                See how approval works
                <FiArrowDown aria-hidden="true" />
              </a>
            </div>

            <div className="relayer-hero__note">
              <FiCheckCircle aria-hidden="true" />

              <span>
                Creating an account does not guarantee automatic approval.
              </span>
            </div>
          </div>

          <div className="relayer-hero__visual">
            <div className="relayer-hero__shape" aria-hidden="true" />

            <img
              src={riderImage}
              alt="Relay rider ready to deliver parcels"
              className="relayer-hero__image"
            />

            <div className="relayer-hero__status">
              <span className="relayer-hero__status-icon">
                <FiTruck aria-hidden="true" />
              </span>

              <div>
                <span>Relayer account</span>
                <strong>Approval required</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application process */}

      <section
        className="relayer-process"
        id="relayer-application-process"
      >
        <div className="site-container">
          <header className="relayer-process__header">
            <span>Getting started</span>

            <h2>Create your account and complete the approval process.</h2>

            <p>
              Applications are reviewed before Relayers can receive delivery
              jobs.
            </p>
          </header>

          <div className="relayer-process__flow">
            {approvalSteps.map(({ icon: Icon, title, text }, index) => (
              <div className="relayer-process__group" key={title}>
                <article className="relayer-process__step">
                  <span className="relayer-process__icon">
                    <Icon aria-hidden="true" />
                  </span>

                  <span className="relayer-process__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>

                {index < approvalSteps.length - 1 && (
                  <FiArrowRight
                    className="relayer-process__arrow"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}

      <section className="relayer-requirements">
        <div className="site-container relayer-requirements__layout">
          <div className="relayer-requirements__introduction">
            <span className="relayer-requirements__eyebrow">
              What you need
            </span>

            <h2>Make sure you meet the basic requirements.</h2>

            <p>
              Relay may request additional information depending on your
              vehicle type, operating location and the documents submitted.
            </p>

            <div className="relayer-requirements__notice">
              <FiShield aria-hidden="true" />

              <p>
                Your account will remain inactive until the review is
                completed and your application is approved.
              </p>
            </div>
          </div>

          <div className="relayer-requirements__list">
            {requirements.map((requirement, index) => (
              <div className="relayer-requirements__item" key={requirement}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>{requirement}</p>

                <FiCheck aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}

      <section className="relayer-benefits">
        <div className="site-container">
          <header className="relayer-benefits__header">
            <span>After approval</span>

            <h2>Use the app to manage your delivery work.</h2>
          </header>

          <div className="relayer-benefits__layout">
            {riderBenefits.map(({ icon: Icon, title, text }) => (
              <article className="relayer-benefits__item" key={title}>
                <span className="relayer-benefits__icon">
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

      {/* Approval message */}

      <section className="relayer-approval">
        <div className="site-container relayer-approval__layout">
          <div className="relayer-approval__content">
            <span className="relayer-approval__eyebrow">
              Application review
            </span>

            <h2>
              What happens after you create an account?
            </h2>

            <p>
              The Relay team reviews your information, documents and
              eligibility. You will receive an update in the app when your
              application has been approved or when additional information is
              required.
            </p>

            <div className="relayer-approval__status">
              <div>
                <span>01</span>
                <strong>Application submitted</strong>
              </div>

              <FiArrowRight aria-hidden="true" />

              <div>
                <span>02</span>
                <strong>Documents reviewed</strong>
              </div>

              <FiArrowRight aria-hidden="true" />

              <div>
                <span>03</span>
                <strong>Account activated</strong>
              </div>
            </div>
          </div>

          <div className="relayer-approval__panel">
            <span className="relayer-approval__panel-icon">
              <FiUserCheck aria-hidden="true" />
            </span>

            <span>Approval status</span>

            <h3>Your account becomes active after review.</h3>

            <p>
              Once approved, you can go online and begin receiving available
              delivery opportunities through the Relay rider app.
            </p>
          </div>
        </div>
      </section>

      {/* Download CTA */}

      <section className="relayer-download">
        <div className="site-container relayer-download__layout">
          <div>
            <span>Ready to apply?</span>

            <h2>Download the Relay rider app and create your account.</h2>

            <p>
              Complete your profile carefully to avoid delays during review.
            </p>
          </div>

          <div className="relayer-download__actions">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
              aria-label="Download Relay rider app on the App Store"
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
              aria-label="Get Relay rider app on Google Play"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
              />
            </a>

            <Link to="/help" className="relayer-download__help">
              Need help applying?
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BecomeRelayer;