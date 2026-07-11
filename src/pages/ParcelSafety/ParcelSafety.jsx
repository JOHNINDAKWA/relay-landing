import { Link } from "react-router-dom";
import {
  FiAlertTriangle,
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiCheckCircle,
  FiEye,
  FiFileText,
  FiLock,
  FiMail,
  FiPackage,
  FiPhone,
  FiShield,
  FiSmartphone,
  FiTruck,
  FiUserCheck,
  FiX,
} from "react-icons/fi";

import "./ParcelSafety.css";

const safetySteps = [
  {
    icon: FiSmartphone,
    title: "Check the app",
    text: "Confirm the Relayer’s name, vehicle and delivery details before any handover.",
  },
  {
    icon: FiUserCheck,
    title: "Verify the Relayer",
    text: "Only release or receive a parcel from the person shown in your Relay app.",
  },
  {
    icon: FiPackage,
    title: "Inspect the parcel",
    text: "Check the parcel condition and confirm it matches what you expected.",
  },
  {
    icon: FiCheckCircle,
    title: "Confirm delivery",
    text: "Complete the final handover only after receiving the parcel safely.",
  },
];

const neverShareItems = [
  "Your M-Pesa PIN",
  "Your Relay password",
  "One-time verification codes",
  "Bank card PIN or security code",
  "Account recovery information",
];

const safeHandoverItems = [
  "Use a visible and safe meeting point.",
  "Confirm the parcel reference before handover.",
  "Check that the rider and vehicle match the app.",
  "Avoid giving a parcel to an unverified person.",
  "Report any unusual request immediately.",
];

const restrictedItems = [
  "Illegal or stolen goods",
  "Weapons, explosives or ammunition",
  "Dangerous or highly flammable materials",
  "Cash or highly valuable jewellery",
  "Unsealed liquids that may leak",
  "Items prohibited by Kenyan law",
];

function ParcelSafety() {
  return (
    <main className="parcel-safety-page">
      {/* Hero */}

      <section className="parcel-safety-hero">
        <div className="site-container parcel-safety-hero__layout">
          <div className="parcel-safety-hero__content">
            <span className="parcel-safety-hero__eyebrow">
              Parcel safety
            </span>

            <h1>
              Keep every handover
              <span>safe and clear.</span>
            </h1>

            <p>
              Use the Relay app to verify delivery details, protect your
              account and report anything that does not look right.
            </p>

            <div className="parcel-safety-hero__actions">
              <a
                href="#safe-handover"
                className="parcel-safety-hero__primary"
              >
                Read the safety guide
                <FiArrowRight aria-hidden="true" />
              </a>

              <Link
                to="/contact"
                className="parcel-safety-hero__secondary"
              >
                Report a concern
                <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="parcel-safety-hero__visual">
            <div className="parcel-safety-hero__shield">
              <FiShield aria-hidden="true" />
            </div>

            <div className="parcel-safety-hero__route">
              <div>
                <span className="parcel-safety-hero__route-icon">
                  <FiPackage aria-hidden="true" />
                </span>

                <span>
                  <small>Parcel recorded</small>
                  <strong>Station handover</strong>
                </span>
              </div>

              <span className="parcel-safety-hero__line">
                <i />
              </span>

              <div>
                <span className="parcel-safety-hero__route-icon">
                  <FiTruck aria-hidden="true" />
                </span>

                <span>
                  <small>Relayer verified</small>
                  <strong>Safe delivery</strong>
                </span>
              </div>

              <span className="parcel-safety-hero__line">
                <i />
              </span>

              <div>
                <span className="parcel-safety-hero__route-icon">
                  <FiCheckCircle aria-hidden="true" />
                </span>

                <span>
                  <small>Delivery confirmed</small>
                  <strong>Journey complete</strong>
                </span>
              </div>
            </div>

            <div className="parcel-safety-hero__notice">
              <FiLock aria-hidden="true" />

              <span>
                Relay will never ask for your M-Pesa PIN or password.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Safety process */}

      <section className="parcel-safety-process" id="safe-handover">
        <div className="site-container">
          <header className="parcel-safety-process__header">
            <span>Safe parcel handover</span>

            <h2>Take a few seconds to verify the journey.</h2>

            <p>
              These checks help protect the customer, the Relayer and the
              parcel.
            </p>
          </header>

          <div className="parcel-safety-process__flow">
            {safetySteps.map(({ icon: Icon, title, text }, index) => (
              <div className="parcel-safety-process__group" key={title}>
                <article className="parcel-safety-process__step">
                  <span className="parcel-safety-process__icon">
                    <Icon aria-hidden="true" />
                  </span>

                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>

                {index < safetySteps.length - 1 && (
                  <FiArrowRight
                    className="parcel-safety-process__arrow"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Account security */}

      <section className="parcel-safety-account">
        <div className="site-container parcel-safety-account__layout">
          <div className="parcel-safety-account__content">
            <span className="parcel-safety-account__eyebrow">
              Protect your account
            </span>

            <h2>Keep private information private.</h2>

            <p>
              Relay staff and Relayers do not need access to your payment PIN,
              password or private account codes to complete a delivery.
            </p>

            <div className="parcel-safety-account__warning">
              <FiAlertTriangle aria-hidden="true" />

              <div>
                <strong>Stop the conversation if someone asks.</strong>

                <span>
                  Do not share the information. Contact Relay through the
                  official support channels.
                </span>
              </div>
            </div>
          </div>

          <div className="parcel-safety-account__list">
            <span className="parcel-safety-account__list-title">
              Relay will never ask for:
            </span>

            {neverShareItems.map((item) => (
              <div className="parcel-safety-account__item" key={item}>
                <span className="parcel-safety-account__x">
                  <FiX aria-hidden="true" />
                </span>

                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Handover checklist */}

      <section className="parcel-safety-checklist">
        <div className="site-container parcel-safety-checklist__layout">
          <div className="parcel-safety-checklist__visual">
            <div className="parcel-safety-checklist__visual-top">
              <span>Before handover</span>

              <FiEye aria-hidden="true" />
            </div>

            <div className="parcel-safety-checklist__phone">
              <span className="parcel-safety-checklist__phone-top" />

              <div className="parcel-safety-checklist__profile">
                <span className="parcel-safety-checklist__avatar">
                  RK
                </span>

                <div>
                  <small>Your Relayer</small>
                  <strong>Robert K.</strong>
                  <span>
                    <FiCheckCircle aria-hidden="true" />
                    Verified
                  </span>
                </div>
              </div>

              <div className="parcel-safety-checklist__vehicle">
                <div>
                  <small>Vehicle</small>
                  <strong>Motorcycle</strong>
                </div>

                <div>
                  <small>Registration</small>
                  <strong>KMD 482A</strong>
                </div>
              </div>

              <div className="parcel-safety-checklist__reference">
                <small>Parcel reference</small>
                <strong>RL-2408-0186</strong>
              </div>
            </div>

            <p>
              Match the person and vehicle with the information shown in the
              app.
            </p>
          </div>

          <div className="parcel-safety-checklist__content">
            <span className="parcel-safety-checklist__eyebrow">
              Handover checklist
            </span>

            <h2>Do not rush the final handover.</h2>

            <p>
              A safe delivery depends on both the customer and Relayer
              confirming that the parcel and account details are correct.
            </p>

            <div className="parcel-safety-checklist__items">
              {safeHandoverItems.map((item) => (
                <div key={item}>
                  <FiCheck aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Restricted items */}

      <section className="parcel-safety-restricted">
        <div className="site-container parcel-safety-restricted__layout">
          <div className="parcel-safety-restricted__header">
            <span className="parcel-safety-restricted__eyebrow">
              Restricted parcels
            </span>

            <h2>Some items should not be sent through Relay.</h2>

            <p>
              Customers and partners are responsible for ensuring parcels are
              lawful, safe and suitable for transport.
            </p>
          </div>

          <div className="parcel-safety-restricted__list">
            {restrictedItems.map((item, index) => (
              <div className="parcel-safety-restricted__item" key={item}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>{item}</p>

                <FiX aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Damaged parcel */}

      <section className="parcel-safety-damage">
        <div className="site-container parcel-safety-damage__layout">
          <div className="parcel-safety-damage__content">
            <span className="parcel-safety-damage__eyebrow">
              Damaged, missing or incorrect parcel
            </span>

            <h2>Report the issue as soon as possible.</h2>

            <p>
              Keep the packaging and share clear information with the Relay
              support team so the issue can be reviewed.
            </p>

            <div className="parcel-safety-damage__steps">
              <div>
                <span>01</span>

                <div>
                  <strong>Take photographs</strong>
                  <p>
                    Capture the parcel, packaging and visible damage.
                  </p>
                </div>
              </div>

              <div>
                <span>02</span>

                <div>
                  <strong>Keep the parcel reference</strong>
                  <p>
                    Include it in every message about the issue.
                  </p>
                </div>
              </div>

              <div>
                <span>03</span>

                <div>
                  <strong>Contact Relay support</strong>
                  <p>
                    Explain what happened and when you noticed it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="parcel-safety-damage__panel">
            <span className="parcel-safety-damage__panel-icon">
              <FiFileText aria-hidden="true" />
            </span>

            <span>Information to include</span>

            <ul>
              <li>Parcel reference</li>
              <li>Customer phone number</li>
              <li>Bus company or collection station</li>
              <li>Photographs of the parcel</li>
              <li>A short description of the issue</li>
            </ul>

            <Link to="/contact">
              Report a parcel issue
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final support CTA */}

      <section className="parcel-safety-support">
        <div className="site-container parcel-safety-support__layout">
          <div>
            <span>Concerned about a delivery?</span>

            <h2>Contact Relay before completing the handover.</h2>

            <p>
              Use the official contact details below if the rider, parcel or
              payment request does not match the app.
            </p>
          </div>

          <div className="parcel-safety-support__actions">
            <a
              href="mailto:info@relay.co.ke"
              className="parcel-safety-support__primary"
            >
              <FiMail aria-hidden="true" />
              Email support
            </a>

            <a
              href="tel:+254700000000"
              className="parcel-safety-support__secondary"
            >
              <FiPhone aria-hidden="true" />
              Call Relay
            </a>

            <Link to="/help">
              Visit Help Centre
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ParcelSafety;