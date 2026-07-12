import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiCheck,
  FiCheckCircle,
  FiChevronDown,
  FiCode,
  FiMail,
  FiMapPin,
  FiPackage,
  FiPhone,
  FiSend,
  FiTruck,
  FiUser,
} from "react-icons/fi";

import partnerImage from "../../assets/parcel2.png";
import "./PartnerWithUs.css";

const partnershipBenefits = [
  {
    icon: FiPackage,
    title: "Doorstep delivery",
    text: "Extend parcel delivery beyond the station.",
  },
  {
    icon: FiTruck,
    title: "Relay handles delivery",
    text: "Our network manages the final journey.",
  },
  {
    icon: FiCheckCircle,
    title: "Clear handovers",
    text: "Every parcel collection is recorded.",
  },
];

function PartnerWithUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <main className="partner-page">
      <section className="partner-hero">
        <div className="site-container partner-hero__layout">
          <div className="partner-hero__content">
            <span className="partner-hero__eyebrow">
              Partner with Relay
            </span>

            <h1>
              Give your customers
              <span>doorstep parcel delivery.</span>
            </h1>

            <p>
              Relay works with bus companies, SACCOs and parcel offices to
              deliver parcels from the station directly to customers.
            </p>

            <div className="partner-hero__actions">
              <a href="#partner-form" className="partner-hero__primary">
                Become a partner
                <FiArrowDown aria-hidden="true" />
              </a>

              <Link
                to="/how-it-works"
                className="partner-hero__secondary"
              >
                See how Relay works
                <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="partner-hero__visual">
            <img
              src={partnerImage}
              alt="Relay collecting a parcel from a transport partner"
            />

            <div
              className="partner-hero__visual-overlay"
              aria-hidden="true"
            />

            <div className="partner-hero__visual-note">
              <span className="partner-hero__visual-status">
                <i />
                Partnership journey
              </span>

              <p>
                Station
                <span aria-hidden="true" />
                Relay
                <span aria-hidden="true" />
                Customer
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="partner-benefits">
        <div className="site-container partner-benefits__layout">
          {partnershipBenefits.map(({ icon: Icon, title, text }) => (
            <article className="partner-benefits__item" key={title}>
              <span className="partner-benefits__icon">
                <Icon aria-hidden="true" />
              </span>

              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="partner-developer">
  <div className="site-container partner-developer__layout">
    <div className="partner-developer__icon">
      <FiCode aria-hidden="true" />
    </div>

    <div className="partner-developer__content">
      <span>For technical teams</span>

      <h2>Connect your business directly to Relay.</h2>

      <p>
        Approved partners can use the Relay Partner API to create delivery
        orders, retrieve order statuses and receive delivery updates.
      </p>
    </div>

    <Link
      to="/developers/partner-api"
      className="partner-developer__action"
    >
      View API documentation
      <FiArrowUpRight aria-hidden="true" />
    </Link>
  </div>
</section>

      <section className="partner-application" id="partner-form">
        <div className="site-container partner-application__layout">
          <div className="partner-application__introduction">
            <span className="partner-application__eyebrow">
              Partnership application
            </span>

            <h2>Tell us about your business.</h2>

            <p>
              Share a few details and the Relay team will contact you about
              the next steps.
            </p>

            <div className="partner-application__details">
              <div>
                <FiCheck aria-hidden="true" />

                <span>
                  Suitable for bus companies, SACCOs and parcel offices
                </span>
              </div>

              <div>
                <FiCheck aria-hidden="true" />

                <span>
                  Our team will review your operating locations
                </span>
              </div>

              <div>
                <FiCheck aria-hidden="true" />

                <span>
                  No commitment is required when submitting the form
                </span>
              </div>
            </div>

            <div className="partner-application__contact">
              <span>Prefer to speak to us?</span>

              <a href="mailto:info@relay.co.ke">
                info@relay.co.ke
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="partner-form__wrapper">
            {submitted ? (
              <div className="partner-form__success" role="status">
                <span className="partner-form__success-icon">
                  <FiCheck aria-hidden="true" />
                </span>

                <span className="partner-form__success-label">
                  Application received
                </span>

                <h2>Thank you for your interest in Relay.</h2>

                <p>
                  Our partnerships team will review your information and
                  contact you about the next steps.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form className="partner-form" onSubmit={handleSubmit}>
                <div className="partner-form__heading">
                  <div>
                    <span>Partner application</span>
                    <h2>Business details</h2>
                  </div>

                  <span className="partner-form__step">
                    01
                    <small>/ 01</small>
                  </span>
                </div>

                <div className="partner-form__grid">
                  <div className="partner-form__field">
                    <label htmlFor="partner-name">
                      Full name
                      <span>*</span>
                    </label>

                    <div className="partner-form__control">
                      <FiUser aria-hidden="true" />

                      <input
                        id="partner-name"
                        name="fullName"
                        type="text"
                        placeholder="Your full name"
                        autoComplete="name"
                        required
                      />
                    </div>
                  </div>

                  <div className="partner-form__field">
                    <label htmlFor="partner-phone">
                      Phone number
                      <span>*</span>
                    </label>

                    <div className="partner-form__control">
                      <FiPhone aria-hidden="true" />

                      <input
                        id="partner-phone"
                        name="phone"
                        type="tel"
                        placeholder="+254 7..."
                        autoComplete="tel"
                        required
                      />
                    </div>
                  </div>

                  <div className="partner-form__field partner-form__field--wide">
                    <label htmlFor="partner-email">
                      Email address
                      <span>*</span>
                    </label>

                    <div className="partner-form__control">
                      <FiMail aria-hidden="true" />

                      <input
                        id="partner-email"
                        name="email"
                        type="email"
                        placeholder="name@company.co.ke"
                        autoComplete="email"
                        required
                      />
                    </div>
                  </div>

                  <div className="partner-form__field">
                    <label htmlFor="company-name">
                      Company or SACCO
                      <span>*</span>
                    </label>

                    <div className="partner-form__control">
                      <FiTruck aria-hidden="true" />

                      <input
                        id="company-name"
                        name="companyName"
                        type="text"
                        placeholder="Business name"
                        autoComplete="organization"
                        required
                      />
                    </div>
                  </div>

                  <div className="partner-form__field">
                    <label htmlFor="partner-type">
                      Partner type
                      <span>*</span>
                    </label>

                    <div className="partner-form__control partner-form__control--select">
                      <FiPackage aria-hidden="true" />

                      <select
                        id="partner-type"
                        name="partnerType"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Select one
                        </option>
                        <option value="bus-company">
                          Bus company
                        </option>
                        <option value="sacco">
                          Transport SACCO
                        </option>
                        <option value="parcel-office">
                          Parcel office
                        </option>
                        <option value="business">
                          Business sender
                        </option>
                        <option value="other">
                          Other
                        </option>
                      </select>

                      <FiChevronDown
                        className="partner-form__select-arrow"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div className="partner-form__field partner-form__field--wide">
                    <label htmlFor="partner-location">
                      Main operating location
                      <span>*</span>
                    </label>

                    <div className="partner-form__control">
                      <FiMapPin aria-hidden="true" />

                      <input
                        id="partner-location"
                        name="location"
                        type="text"
                        placeholder="For example: Nairobi CBD"
                        required
                      />
                    </div>
                  </div>

                  <div className="partner-form__field partner-form__field--wide">
                    <label htmlFor="parcel-volume">
                      Approximate parcels per day
                    </label>

                    <div className="partner-form__control partner-form__control--select">
                      <FiPackage aria-hidden="true" />

                      <select
                        id="parcel-volume"
                        name="parcelVolume"
                        defaultValue=""
                      >
                        <option value="">
                          Select an estimate
                        </option>
                        <option value="1-10">
                          1–10 parcels
                        </option>
                        <option value="11-30">
                          11–30 parcels
                        </option>
                        <option value="31-50">
                          31–50 parcels
                        </option>
                        <option value="51-100">
                          51–100 parcels
                        </option>
                        <option value="100-plus">
                          More than 100
                        </option>
                      </select>

                      <FiChevronDown
                        className="partner-form__select-arrow"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div className="partner-form__field partner-form__field--wide">
                    <label htmlFor="partner-message">
                      Anything else we should know?
                    </label>

                    <textarea
                      id="partner-message"
                      name="message"
                      rows="4"
                      placeholder="Tell us about your routes, locations or partnership needs."
                    />
                  </div>
                </div>

                <label className="partner-form__consent">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                  />

                  <span className="partner-form__checkbox">
                    <FiCheck aria-hidden="true" />
                  </span>

                  <span>
                    I agree to be contacted by Relay about this partnership
                    application.
                  </span>
                </label>

                <button type="submit" className="partner-form__submit">
                  <span>Submit application</span>
                  <FiSend aria-hidden="true" />
                </button>

                <p className="partner-form__privacy">
                  Your information will only be used to review and respond to
                  your application.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default PartnerWithUs;