import {
  FiAlertTriangle,
  FiArrowUpRight,
  FiCheck,
  FiClock,
  FiCreditCard,
  FiFileText,
  FiLock,
  FiMail,
  FiPhone,
  FiShield,
  FiTruck,
  FiUserCheck,
  FiUsers,
  FiX,
} from "react-icons/fi";

import { FaBalanceScale } from "react-icons/fa";

import "./TermsOfService.css";

const contents = [
  { number: "01", label: "Acceptance of terms", id: "acceptance" },
  { number: "02", label: "The Relay service", id: "relay-service" },
  { number: "03", label: "Accounts and eligibility", id: "accounts" },
  { number: "04", label: "Customer terms", id: "customer-terms" },
  { number: "05", label: "Payments and fees", id: "payments" },
  { number: "06", label: "Cancellation and refunds", id: "cancellations" },
  { number: "07", label: "Relayer terms", id: "relayer-terms" },
  { number: "08", label: "Prohibited conduct", id: "prohibited-conduct" },
  { number: "09", label: "Limitation of liability", id: "liability" },
  { number: "10", label: "Disputes", id: "disputes" },
  { number: "11", label: "Termination", id: "termination" },
  { number: "12", label: "Governing law", id: "governing-law" },
  { number: "13", label: "Contact", id: "contact" },
];

const eligibilityRequirements = [
  "Be at least 18 years old",
  "Be resident in Kenya or use Relay within Kenya",
  "Provide accurate and complete registration information",
  "Keep account credentials secure",
  "Notify Relay immediately of unauthorised account access",
];

const customerResponsibilities = [
  "Provide an accurate and accessible delivery address",
  "Be available to receive the parcel or appoint another recipient",
  "Ensure the delivery location is safe and accessible",
  "Contact support promptly when there is a delivery concern",
];

const permittedParcelConditions = [
  "The parcel is legally owned or controlled by you",
  "The parcel does not contain illegal or prohibited goods",
  "The parcel does not contain hazardous materials",
  "The parcel is properly packaged for transportation",
];

const prohibitedConduct = [
  "Transporting illegal, stolen, restricted or hazardous goods",
  "Providing false or misleading account or parcel information",
  "Harassing, threatening or abusing customers, Relayers or Relay staff",
  "Fraudulently manipulating delivery fees, earnings or ratings",
  "Creating multiple accounts to avoid restrictions",
  "Attempting to access another user’s account or personal information",
  "Submitting false emergency reports to avoid delivery obligations",
];

const relayerObligations = [
  "Maintain a valid driving licence and appropriate insurance",
  "Keep the approved vehicle roadworthy and legally compliant",
  "Complete deliveries safely, professionally and on time",
  "Capture required pickup and proof-of-delivery photographs",
  "Protect parcels from pickup until successful handover",
  "Never open, alter or interfere with parcel contents",
];

function TermsSection({
  number,
  icon: Icon,
  title,
  id,
  children,
  tone = "light",
}) {
  return (
    <section
      className={`terms-section terms-section--${tone}`}
      id={id}
    >
      <div className="site-container terms-section__layout">
        <header className="terms-section__header">
          <span className="terms-section__number">{number}</span>

          <span className="terms-section__icon">
            <Icon aria-hidden="true" />
          </span>

          <h2>{title}</h2>
        </header>

        <div className="terms-section__body">{children}</div>
      </div>
    </section>
  );
}

function TermsOfService() {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="terms-page">
      <section className="terms-hero" id="top">
        <div className="site-container terms-hero__layout">
          <div className="terms-hero__content">
            <span className="terms-hero__eyebrow">
              Legal · Terms
            </span>

            <h1>
              Clear terms for using
              <span>the Relay platform.</span>
            </h1>

            <p>
              These Terms of Service explain the rules, responsibilities and
              legal conditions that apply when using Relay’s website,
              customer app and rider app.
            </p>

            <div className="terms-hero__meta">
              <div>
                <FiClock aria-hidden="true" />

                <span>
                  <small>Last updated</small>
                  <strong>June 2025</strong>
                </span>
              </div>

              <div>
                <FaBalanceScale aria-hidden="true" />

                <span>
                  <small>Governing law</small>
                  <strong>Kenya</strong>
                </span>
              </div>

              <div>
                <FiFileText aria-hidden="true" />

                <span>
                  <small>Applies to</small>
                  <strong>All Relay users</strong>
                </span>
              </div>
            </div>
          </div>

          <div className="terms-hero__panel">
            <span className="terms-hero__panel-icon">
              <FiFileText aria-hidden="true" />
            </span>

            <span className="terms-hero__panel-label">
              Before using Relay
            </span>

            <h2>Your use of Relay means you accept these terms.</h2>

            <p>
              By creating an account or using a Relay service, you agree to be
              bound by these Terms of Service and the Relay Privacy Policy.
            </p>

            <div className="terms-hero__panel-points">
              <div>
                <FiCheck aria-hidden="true" />
                <span>Read the terms carefully</span>
              </div>

              <div>
                <FiCheck aria-hidden="true" />
                <span>Use accurate account information</span>
              </div>

              <div>
                <FiCheck aria-hidden="true" />
                <span>Use Relay only for lawful deliveries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="terms-introduction">
        <div className="site-container terms-introduction__layout">
          <span className="terms-introduction__label">
            Terms of Service
          </span>

          <div>
            <h2>
              Please read these terms before creating an account or requesting
              a delivery.
            </h2>

            <p>
              By creating a Relay account or using any Relay service, you agree
              to be bound by these Terms of Service. If you do not agree with
              these terms, you should not access or use Relay.
            </p>
          </div>
        </div>
      </section>

      <nav className="terms-contents" aria-label="Terms of Service contents">
        <div className="site-container">
          <header className="terms-contents__header">
            <span>Contents</span>
            <p>Jump directly to a section.</p>
          </header>

          <div className="terms-contents__grid">
            {contents.map((item) => (
              <a href={`#${item.id}`} key={item.id}>
                <span>{item.number}</span>
                <strong>{item.label}</strong>
                <FiArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="terms-document">
        <TermsSection
          number="01"
          icon={FiFileText}
          title="Acceptance of terms"
          id="acceptance"
        >
          <div className="terms-copy terms-copy--large">
            <p>
              These Terms of Service constitute a legally binding agreement
              between you and Relay, operated by{" "}
              <strong>Fastech Solutions</strong>, governing your use of the
              Relay platform.
            </p>

            <p>
              The Relay platform includes the customer app, the rider app and
              the website available at <strong>relay.co.ke</strong>.
            </p>

            <p>
              By registering an account, you confirm that you have read,
              understood and agreed to these Terms and the Relay Privacy
              Policy.
            </p>
          </div>
        </TermsSection>

        <TermsSection
          number="02"
          icon={FiTruck}
          title="The Relay service"
          id="relay-service"
          tone="soft"
        >
          <div className="terms-copy terms-copy--large">
            <p>
              Relay is a technology platform that facilitates last-mile parcel
              delivery in Kenya by connecting customers who have parcels at
              bus terminals with independent delivery riders.
            </p>

            <p>
              Relay operates as a marketplace platform and not as a traditional
              courier company. Deliveries are carried out by independent
              contractors who are not employees of Relay.
            </p>

            <p>
              Relay may modify, suspend or discontinue all or part of the
              service where reasonably necessary. Where appropriate, users
              will receive reasonable notice of significant changes.
            </p>
          </div>

          <div className="terms-notice">
            <FiAlertTriangle aria-hidden="true" />

            <p>
              <strong>Independent delivery arrangement:</strong> Relayers
              perform deliveries as independent contractors and are responsible
              for carrying out accepted delivery assignments.
            </p>
          </div>
        </TermsSection>

        <TermsSection
          number="03"
          icon={FiUserCheck}
          title="Accounts and eligibility"
          id="accounts"
        >
          <p className="terms-section__lead">
            To create and maintain a Relay account, you must meet the basic
            eligibility and account-security requirements below.
          </p>

          <div className="terms-requirements">
            {eligibilityRequirements.map((requirement, index) => (
              <div key={requirement}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <FiCheck aria-hidden="true" />
                <p>{requirement}</p>
              </div>
            ))}
          </div>

          <div className="terms-account-warning">
            <FiLock aria-hidden="true" />

            <div>
              <strong>You are responsible for activity under your account.</strong>

              <p>
                Relay may suspend or terminate accounts that breach these Terms
                or appear to be involved in fraudulent or unauthorised
                activity.
              </p>
            </div>
          </div>

          <p className="terms-inline-note">
            One person may not maintain more than one active Relay account
            without prior written permission from Relay.
          </p>
        </TermsSection>

        <TermsSection
          number="04"
          icon={FiUsers}
          title="Customer terms"
          id="customer-terms"
          tone="soft"
        >
          <div className="terms-subsection">
            <span className="terms-subsection__label">
              Booking a delivery
            </span>

            <h3>A confirmed and paid request creates a delivery arrangement.</h3>

            <p>
              By confirming a delivery request and completing payment, you
              enter into a binding delivery arrangement for the selected
              parcel, collection point and delivery address.
            </p>

            <div className="terms-permitted-list">
              {permittedParcelConditions.map((item) => (
                <div key={item}>
                  <FiCheck aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="terms-pin">
            <div className="terms-pin__visual">
              <span>4</span>
              <span>8</span>
              <span>2</span>
              <span>6</span>
            </div>

            <div className="terms-pin__content">
              <span>Delivery PIN</span>

              <h3>Share the PIN only when the Relayer is physically present.</h3>

              <p>
                For contact deliveries, the app may provide a four-digit
                delivery PIN. Do not share this PIN over the phone, through
                text or before the Relayer arrives.
              </p>
            </div>
          </div>

          <div className="terms-subsection terms-subsection--responsibilities">
            <span className="terms-subsection__label">
              Customer responsibilities
            </span>

            <div className="terms-customer-list">
              {customerResponsibilities.map((item, index) => (
                <div key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </TermsSection>

        <TermsSection
          number="05"
          icon={FiCreditCard}
          title="Payments and fees"
          id="payments"
          tone="dark"
        >
          <div className="terms-payment">
            <div>
              <span className="terms-payment__label">
                Payment processing
              </span>

              <h3>Relay payments are processed through Safaricom M-Pesa.</h3>

              <p>
                The delivery fee shown at checkout is the final amount payable
                for the confirmed booking, unless the booking information is
                inaccurate or materially changes.
              </p>
            </div>

            <div className="terms-payment__formula">
              <span>Delivery fee may include</span>

              <div>
                <strong>Base fee</strong>
                <small>Standard delivery starting charge</small>
              </div>

              <div>
                <strong>Distance charge</strong>
                <small>Applied for distance beyond 3 kilometres</small>
              </div>

              <div>
                <strong>Weight surcharge</strong>
                <small>Applied to parcels weighing more than 5 kilograms</small>
              </div>
            </div>
          </div>

          <div className="terms-split">
            <article>
              <span>30%</span>
              <h3>Relay platform charge</h3>
              <p>
                Relay retains 30% of the delivery fee as its platform service
                charge.
              </p>
            </article>

            <article>
              <span>70%</span>
              <h3>Relayer earnings</h3>
              <p>
                The Relayer receives 70% of the delivery fee plus any
                applicable weight surcharge.
              </p>
            </article>
          </div>

          <div className="terms-dark-notice">
            <FiLock aria-hidden="true" />

            <p>
              Relay does not store your M-Pesa PIN or other private payment
              credentials.
            </p>
          </div>
        </TermsSection>

        <TermsSection
          number="06"
          icon={FiClock}
          title="Cancellation and refunds"
          id="cancellations"
        >
          <div className="terms-cancellation">
            <article>
              <span className="terms-cancellation__status terms-cancellation__status--allowed">
                Cancellation allowed
              </span>

              <h3>Before a Relayer is dispatched</h3>

              <p>
                You may cancel a delivery request without charge before a
                Relayer has been dispatched to collect the parcel.
              </p>
            </article>

            <article>
              <span className="terms-cancellation__status terms-cancellation__status--restricted">
                Cancellation restricted
              </span>

              <h3>After parcel collection</h3>

              <p>
                Once a Relayer has collected the parcel, cancellation is not
                permitted except in exceptional circumstances approved by
                Relay support.
              </p>
            </article>
          </div>

          <div className="terms-refunds">
            <div>
              <span>Refunds may be approved for</span>

              <ul>
                <li>Failed delivery caused by Relay or the assigned Relayer</li>
                <li>Relayer non-arrival</li>
                <li>Circumstances outside the customer’s reasonable control</li>
              </ul>
            </div>

            <div>
              <span>Refunds are generally not issued for</span>

              <ul>
                <li>Incorrect or incomplete delivery addresses</li>
                <li>Customer unavailability</li>
                <li>Refusal to receive the parcel</li>
              </ul>
            </div>
          </div>

          <p className="terms-inline-note">
            Approved refunds are ordinarily processed to the customer’s M-Pesa
            account within 24 hours.
          </p>
        </TermsSection>

        <TermsSection
          number="07"
          icon={FiTruck}
          title="Relayer terms"
          id="relayer-terms"
          tone="soft"
        >
          <div className="terms-copy terms-copy--large">
            <p>
              Relayers operate as independent contractors and not as employees,
              agents or representatives of Relay.
            </p>

            <p>
              A Relayer must also accept and comply with the separate Relay
              Rider Agreement in addition to these Terms of Service.
            </p>
          </div>

          <div className="terms-relayer-list">
            {relayerObligations.map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <FiCheck aria-hidden="true" />
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="terms-fraud-warning">
            <FiAlertTriangle aria-hidden="true" />

            <p>
              Fraudulent emergency reports submitted to avoid delivery
              obligations may result in immediate account suspension. Relay
              logs and reviews emergency reports.
            </p>
          </div>
        </TermsSection>

        <TermsSection
          number="08"
          icon={FiX}
          title="Prohibited conduct"
          id="prohibited-conduct"
          tone="dark"
        >
          <p className="terms-section__lead">
            Users must not use the Relay platform in a way that is unlawful,
            fraudulent, abusive or harmful to another person.
          </p>

          <div className="terms-prohibited">
            {prohibitedConduct.map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>

                <span className="terms-prohibited__icon">
                  <FiX aria-hidden="true" />
                </span>

                <p>{item}</p>
              </div>
            ))}
          </div>

          <p className="terms-dark-notice terms-dark-notice--warning">
            Serious violations may result in immediate account suspension,
            termination and referral to the appropriate authorities.
          </p>
        </TermsSection>

        <TermsSection
          number="09"
          icon={FiShield}
          title="Limitation of liability"
          id="liability"
        >
          <div className="terms-liability">
            <div className="terms-copy terms-copy--large">
              <p>
                To the extent permitted by law, Relay is not responsible for
                the acts or omissions of independent Relayers, delivery delays,
                parcel damage or indirect and consequential losses.
              </p>

              <p>
                Relayers bear personal responsibility for parcels under their
                control from confirmed pickup until successful delivery or
                authorised return.
              </p>
            </div>

            <div className="terms-liability__limit">
              <span>Maximum liability</span>

              <strong>The delivery fee paid</strong>

              <p>
                Relay’s total liability for a claim will not exceed the
                delivery fee paid for the delivery giving rise to the claim,
                subject to applicable law.
              </p>
            </div>
          </div>
        </TermsSection>

        <TermsSection
          number="10"
          icon={FiUsers}
          title="Disputes"
          id="disputes"
          tone="soft"
        >
          <div className="terms-dispute-flow">
            <article>
              <span>01</span>
              <h3>Contact support</h3>
              <p>
                Begin by contacting{" "}
                <a href="mailto:support@relay.co.ke">
                  support@relay.co.ke
                </a>
                .
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Amicable resolution</h3>
              <p>
                Relay will attempt to resolve the dispute within 14 business
                days.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Mediation or arbitration</h3>
              <p>
                Unresolved disputes may be referred to mediation or arbitration
                under Kenyan law.
              </p>
            </article>
          </div>
        </TermsSection>

        <TermsSection
          number="11"
          icon={FiLock}
          title="Termination"
          id="termination"
        >
          <div className="terms-termination">
            <article>
              <span>Closing your account</span>

              <h3>You may request account closure at any time.</h3>

              <p>
                Contact{" "}
                <a href="mailto:support@relay.co.ke">
                  support@relay.co.ke
                </a>{" "}
                to request closure of your Relay account.
              </p>
            </article>

            <article>
              <span>Suspension or termination by Relay</span>

              <h3>Relay may restrict accounts that breach these terms.</h3>

              <p>
                Accounts may be suspended or terminated for fraud, unlawful
                conduct, policy violations or misuse of the platform.
              </p>
            </article>
          </div>

          <div className="terms-payment-note">
            <FiCreditCard aria-hidden="true" />

            <p>
              Legitimate pending Relayer earnings will ordinarily be paid
              within 30 days after termination, subject to investigation,
              deductions and applicable law.
            </p>
          </div>
        </TermsSection>

        <TermsSection
          number="12"
          icon={FaBalanceScale}
          title="Governing law"
          id="governing-law"
          tone="dark"
        >
          <div className="terms-law">
            <span className="terms-law__icon">
              <FaBalanceScale aria-hidden="true" />
            </span>

            <div>
              <h3>These Terms are governed by the laws of Kenya.</h3>

              <p>
                Subject to any agreed mediation or arbitration process,
                disputes relating to these Terms or the Relay platform are
                subject to the jurisdiction of the courts of Kenya.
              </p>

              <p>
                These Terms, together with applicable policies and agreements,
                constitute the entire agreement between you and Relay regarding
                your use of the platform.
              </p>
            </div>
          </div>
        </TermsSection>

        <TermsSection
          number="13"
          icon={FiMail}
          title="Contact"
          id="contact"
        >
          <div className="terms-contact">
            <div className="terms-contact__introduction">
              <span>Questions about these terms?</span>

              <h3>Our team can clarify how these terms apply.</h3>

              <p>
                Contact Relay for legal questions, account support or concerns
                relating to the use of the platform.
              </p>
            </div>

            <div className="terms-contact__details">
              <a href="mailto:legal@relay.co.ke">
                <FaBalanceScale aria-hidden="true" />

                <span>
                  <small>Legal</small>
                  <strong>legal@relay.co.ke</strong>
                </span>

                <FiArrowUpRight aria-hidden="true" />
              </a>

              <a href="mailto:support@relay.co.ke">
                <FiMail aria-hidden="true" />

                <span>
                  <small>Support</small>
                  <strong>support@relay.co.ke</strong>
                </span>

                <FiArrowUpRight aria-hidden="true" />
              </a>

              <a href="tel:+254716016706">
                <FiPhone aria-hidden="true" />

                <span>
                  <small>Phone</small>
                  <strong>+254 716 016 706</strong>
                </span>

                <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </TermsSection>
      </div>

      <section className="terms-end">
        <div className="site-container terms-end__layout">
          <div>
            <span>Relay Terms of Service</span>
            <p>A product of Fastech Solutions · Nairobi, Kenya</p>
          </div>

          <a href="#top" onClick={scrollToTop}>
            Back to top
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}

export default TermsOfService;