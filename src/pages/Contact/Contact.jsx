import { useState } from "react";
import {
  FiArrowUpRight,
  FiCheck,
  FiChevronDown,
  FiClock,
  FiHelpCircle,
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiPhone,
  FiSend,
  FiUser,
} from "react-icons/fi";

import "./Contact.css";

const contactOptions = [
  {
    icon: FiMail,
    label: "Email",
    value: "info@relay.co.ke",
    href: "mailto:info@relay.co.ke",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+254 700 000 000",
    href: "tel:+254700000000",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Nairobi, Kenya",
  },
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="site-container contact-hero__layout">
          <div className="contact-hero__content">
            <span className="contact-hero__eyebrow">
              Contact Relay
            </span>

            <h1>
              Tell us how
              <span>we can help.</span>
            </h1>

            <p>
              Contact us about parcel delivery, partnerships, Relayer
              applications or any other questions about Relay.
            </p>

            <div className="contact-hero__response">
              <FiClock aria-hidden="true" />

              <div>
                <span>Response time</span>
                <strong>We normally respond within one business day.</strong>
              </div>
            </div>
          </div>

          <div className="contact-hero__directory">
            <span className="contact-hero__directory-label">
              Contact details
            </span>

            {contactOptions.map(
              ({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="contact-hero__directory-icon">
                      <Icon aria-hidden="true" />
                    </span>

                    <span className="contact-hero__directory-copy">
                      <small>{label}</small>
                      <strong>{value}</strong>
                    </span>

                    {href && (
                      <FiArrowUpRight
                        className="contact-hero__directory-arrow"
                        aria-hidden="true"
                      />
                    )}
                  </>
                );

                return href ? (
                  <a
                    href={href}
                    className="contact-hero__directory-item"
                    key={label}
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    className="contact-hero__directory-item"
                    key={label}
                  >
                    {content}
                  </div>
                );
              },
            )}
          </div>
        </div>
      </section>

      <section className="contact-main">
        <div className="site-container contact-main__layout">
          <div className="contact-main__introduction">
            <span className="contact-main__eyebrow">
              Send us a message
            </span>

            <h2>Share a few details with our team.</h2>

            <p>
              Select the reason for contacting us and provide enough
              information for the Relay team to assist you.
            </p>

            <div className="contact-main__guidance">
              <div>
                <FiCheck aria-hidden="true" />

                <span>
                  Include your parcel reference when asking about a delivery.
                </span>
              </div>

              <div>
                <FiCheck aria-hidden="true" />

                <span>
                  Use the same phone number associated with your Relay account.
                </span>
              </div>

              <div>
                <FiCheck aria-hidden="true" />

                <span>
                  Do not share your M-Pesa PIN or account password.
                </span>
              </div>
            </div>

            <div className="contact-main__help">
              <FiHelpCircle aria-hidden="true" />

              <div>
                <span>Looking for quick answers?</span>

                <a href="/help">
                  Visit the Help Centre
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form__wrapper">
            {submitted ? (
              <div className="contact-form__success" role="status">
                <span className="contact-form__success-icon">
                  <FiCheck aria-hidden="true" />
                </span>

                <span className="contact-form__success-label">
                  Message received
                </span>

                <h2>Thank you for contacting Relay.</h2>

                <p>
                  Our team will review your message and respond using the
                  contact details you provided.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__heading">
                  <div>
                    <span>Contact form</span>
                    <h2>How can we help?</h2>
                  </div>

                  <FiMessageSquare aria-hidden="true" />
                </div>

                <div className="contact-form__grid">
                  <div className="contact-form__field">
                    <label htmlFor="contact-name">
                      Full name
                      <span>*</span>
                    </label>

                    <div className="contact-form__control">
                      <FiUser aria-hidden="true" />

                      <input
                        id="contact-name"
                        name="fullName"
                        type="text"
                        placeholder="Your full name"
                        autoComplete="name"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="contact-phone">
                      Phone number
                      <span>*</span>
                    </label>

                    <div className="contact-form__control">
                      <FiPhone aria-hidden="true" />

                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        placeholder="+254 7..."
                        autoComplete="tel"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-form__field contact-form__field--wide">
                    <label htmlFor="contact-email">
                      Email address
                      <span>*</span>
                    </label>

                    <div className="contact-form__control">
                      <FiMail aria-hidden="true" />

                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-form__field contact-form__field--wide">
                    <label htmlFor="contact-reason">
                      What do you need help with?
                      <span>*</span>
                    </label>

                    <div className="contact-form__control contact-form__control--select">
                      <FiHelpCircle aria-hidden="true" />

                      <select
                        id="contact-reason"
                        name="reason"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Select a reason
                        </option>

                        <option value="parcel-delivery">
                          Parcel delivery
                        </option>

                        <option value="app-support">
                          Relay app support
                        </option>

                        <option value="relayer-application">
                          Relayer application
                        </option>

                        <option value="partnership">
                          Partnership enquiry
                        </option>

                        <option value="business">
                          Business delivery
                        </option>

                        <option value="general">
                          General enquiry
                        </option>
                      </select>

                      <FiChevronDown
                        className="contact-form__select-arrow"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div className="contact-form__field contact-form__field--wide">
                    <label htmlFor="contact-reference">
                      Parcel reference
                    </label>

                    <div className="contact-form__control">
                      <FiMessageSquare aria-hidden="true" />

                      <input
                        id="contact-reference"
                        name="parcelReference"
                        type="text"
                        placeholder="Optional, for example RL-2408-0186"
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="contact-form__field contact-form__field--wide">
                    <label htmlFor="contact-message">
                      Message
                      <span>*</span>
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      rows="6"
                      placeholder="Explain how the Relay team can assist you."
                      required
                    />
                  </div>
                </div>

                <label className="contact-form__consent">
                  <input type="checkbox" name="consent" required />

                  <span className="contact-form__checkbox">
                    <FiCheck aria-hidden="true" />
                  </span>

                  <span>
                    I agree to be contacted by Relay regarding this message.
                  </span>
                </label>

                <button type="submit" className="contact-form__submit">
                  <span>Send message</span>
                  <FiSend aria-hidden="true" />
                </button>

                <p className="contact-form__privacy">
                  Your information will only be used to respond to your
                  enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="contact-location">
        <div className="site-container contact-location__layout">
          <div className="contact-location__map">
            <span className="contact-location__road contact-location__road--one" />
            <span className="contact-location__road contact-location__road--two" />
            <span className="contact-location__road contact-location__road--three" />

            <span className="contact-location__place contact-location__place--westlands">
              Westlands
            </span>

            <span className="contact-location__place contact-location__place--cbd">
              Nairobi CBD
            </span>

            <span className="contact-location__place contact-location__place--kilimani">
              Kilimani
            </span>

            <span className="contact-location__marker">
              <FiMapPin aria-hidden="true" />
            </span>
          </div>

          <div className="contact-location__content">
            <span className="contact-location__eyebrow">
              Relay in Nairobi
            </span>

            <h2>Supporting last-mile parcel delivery across the city.</h2>

            <p>
              Relay currently serves supported parcel collection points and
              customer delivery locations within Nairobi.
            </p>

            <a
              href="https://maps.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              View Nairobi on Maps
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;