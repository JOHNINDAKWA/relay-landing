import {
  FiArrowUpRight,
  FiCheck,
  FiClock,
  FiCreditCard,
  FiDatabase,
  FiFileText,
  FiLock,
  FiMail,
  FiMapPin,
  FiPhone,
  FiShield,
  FiSmartphone,
  FiUserCheck,
  FiUsers,
} from "react-icons/fi";

import "./PrivacyPolicy.css";

const contents = [
  { number: "01", label: "Who we are", id: "who-we-are" },
  {
    number: "02",
    label: "Information we collect",
    id: "information-we-collect",
  },
  {
    number: "03",
    label: "How we use your information",
    id: "how-we-use-information",
  },
  {
    number: "04",
    label: "Who we share data with",
    id: "data-sharing",
  },
  { number: "05", label: "Location data", id: "location-data" },
  { number: "06", label: "Payment data", id: "payment-data" },
  { number: "07", label: "Data retention", id: "data-retention" },
  { number: "08", label: "Security", id: "security" },
  { number: "09", label: "Your rights", id: "your-rights" },
  { number: "10", label: "Children", id: "children" },
  {
    number: "11",
    label: "Changes to this policy",
    id: "policy-changes",
  },
  { number: "12", label: "Contact us", id: "contact-us" },
];

const providedInformation = [
  {
    data: "Full name",
    users: "Customers and Relayers",
    reason: "Account creation and identity verification",
  },
  {
    data: "Phone number",
    users: "Customers and Relayers",
    reason: "Login, delivery communication and M-Pesa payments",
  },
  {
    data: "Email address",
    users: "Customers and Relayers",
    reason: "Account communication and receipts",
  },
  {
    data: "National ID number",
    users: "Customers and Relayers",
    reason: "Parcel lookup and Relayer identity verification",
  },
  {
    data: "Delivery address",
    users: "Customers",
    reason: "Routing parcels to the correct destination",
  },
  {
    data: "Profile photo",
    users: "Relayers",
    reason: "Identity verification and customer trust",
  },
  {
    data: "Vehicle details",
    users: "Relayers",
    reason: "Relayer onboarding and safety compliance",
  },
  {
    data: "Driving licence",
    users: "Relayers",
    reason: "Relayer verification and compliance",
  },
];

const automaticInformation = [
  "GPS location for Relayers while online and customer delivery-address coordinates",
  "Device type, operating system and app version",
  "Push-notification tokens",
  "App usage information and crash reports",
  "Pickup photographs and proof-of-delivery photographs",
];

const thirdPartyInformation = [
  "Payment-confirmation information from Safaricom M-Pesa",
  "Parcel and sender details from bus-terminal operators",
];

const usagePurposes = [
  "Create and manage your Relay account",
  "Match customers with available Relayers for deliveries",
  "Process M-Pesa payments and send payment confirmations",
  "Send delivery updates through push notifications and SMS",
  "Verify Relayer identity and approve Relayer applications",
  "Resolve disputes, investigate complaints and prevent fraud",
  "Calculate and credit Relayer earnings",
  "Improve the platform and resolve technical problems",
  "Comply with Kenyan laws and regulatory requirements",
];

const sharingData = [
  {
    party: "Assigned Relayer",
    shared: "Customer name, phone number and delivery address",
    reason: "To complete the delivery",
  },
  {
    party: "Customer",
    shared: "Relayer name, phone number, vehicle details and location",
    reason: "Live tracking and delivery communication",
  },
  {
    party: "Safaricom M-Pesa",
    shared: "Phone number and payment amount",
    reason: "Payment processing",
  },
  {
    party: "Amazon Web Services",
    shared: "Delivery photographs",
    reason: "Secure photograph storage",
  },
  {
    party: "Google Maps",
    shared: "Delivery-address coordinates",
    reason: "Route calculation and navigation",
  },
  {
    party: "Expo or Firebase",
    shared: "Device push-notification token",
    reason: "Push-notification delivery",
  },
  {
    party: "Kenyan authorities",
    shared: "Information required by law",
    reason: "Legal and regulatory compliance",
  },
];

const retentionPeriods = [
  {
    title: "Account data",
    period: "Active account period plus 12 months",
    description:
      "Retained while your account is active and for 12 months after deletion.",
  },
  {
    title: "Delivery records",
    period: "7 years",
    description:
      "Retained for financial, operational and legal compliance.",
  },
  {
    title: "Delivery photographs",
    period: "90 days",
    description:
      "Automatically deleted after the retention period unless required for an active dispute.",
  },
  {
    title: "Location history",
    period: "30 days",
    description:
      "Automatically deleted after the retention period unless legally required.",
  },
];

const securityMeasures = [
  "Personal information is encrypted in transit using HTTPS and TLS.",
  "Passwords are hashed and are never stored in plain text.",
  "Delivery PINs are one-time codes generated for individual deliveries.",
  "Photographs are stored in private, access-controlled Amazon S3 storage.",
  "Relay servers are hosted in the Amazon Web Services Africa region in Cape Town.",
  "Database access is restricted to authorised personnel.",
];

const privacyRights = [
  {
    title: "Access",
    description:
      "Request a copy of the personal information Relay holds about you.",
  },
  {
    title: "Correction",
    description:
      "Request correction of incomplete or inaccurate personal information.",
  },
  {
    title: "Deletion",
    description:
      "Request deletion of your personal information and Relay account.",
  },
  {
    title: "Objection",
    description:
      "Object to certain processing activities involving your information.",
  },
  {
    title: "Portability",
    description:
      "Request your information in a commonly used, machine-readable format.",
  },
];

function PolicySection({
  number,
  icon: Icon,
  title,
  id,
  children,
  tone = "light",
}) {
  return (
    <section
      className={`privacy-section privacy-section--${tone}`}
      id={id}
    >
      <div className="site-container privacy-section__inner">
        <header className="privacy-section__header">
          <span className="privacy-section__number">{number}</span>

          <span className="privacy-section__icon">
            <Icon aria-hidden="true" />
          </span>

          <h2>{title}</h2>
        </header>

        <div className="privacy-section__body">{children}</div>
      </div>
    </section>
  );
}

function PrivacyPolicy() {
  return (
    <main className="privacy-page">
      <section className="privacy-hero">
        <div className="site-container privacy-hero__layout">
          <div className="privacy-hero__content">
            <span className="privacy-hero__eyebrow">
              Legal · Privacy
            </span>

            <h1>
              Your information.
              <span>Protected and respected.</span>
            </h1>

            <p>
              This Privacy Policy explains how Relay collects, uses,
              shares, stores and protects the personal information of
              customers, Relayers and business partners.
            </p>

            <div className="privacy-hero__meta">
              <div>
                <FiClock aria-hidden="true" />

                <span>
                  <small>Last updated</small>
                  <strong>June 2025</strong>
                </span>
              </div>

              <div>
                <FiMapPin aria-hidden="true" />

                <span>
                  <small>Jurisdiction</small>
                  <strong>Kenya</strong>
                </span>
              </div>

              <div>
                <FiFileText aria-hidden="true" />

                <span>
                  <small>Applies to</small>
                  <strong>Relay services</strong>
                </span>
              </div>
            </div>
          </div>

          <div className="privacy-hero__visual">
            <span className="privacy-hero__shield">
              <FiShield aria-hidden="true" />
            </span>

            <span className="privacy-hero__visual-label">
              Our privacy commitment
            </span>

            <h2>We do not sell your personal information.</h2>

            <p>
              Relay does not use your personal information for
              third-party advertising or sell it to third parties for
              marketing purposes.
            </p>

            <div className="privacy-hero__principles">
              <div>
                <FiCheck aria-hidden="true" />
                <span>Purpose-limited collection</span>
              </div>

              <div>
                <FiCheck aria-hidden="true" />
                <span>Secure data processing</span>
              </div>

              <div>
                <FiCheck aria-hidden="true" />
                <span>Transparent privacy rights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-introduction">
        <div className="site-container privacy-introduction__layout">
          <span className="privacy-introduction__label">
            Privacy Policy
          </span>

          <div>
            <h2>
              Relay is committed to protecting the privacy of everyone
              using our platform.
            </h2>

            <p>
              Relay is a last-mile delivery platform operating in Kenya.
              This policy explains what information we collect, why we
              collect it, how it is used and the measures taken to protect
              it.
            </p>
          </div>
        </div>
      </section>

      <nav
        className="privacy-contents"
        aria-label="Privacy Policy contents"
      >
        <div className="site-container">
          <header className="privacy-contents__header">
            <span>Policy contents</span>
            <p>Jump directly to a section of the policy.</p>
          </header>

          <div className="privacy-contents__grid">
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

      <div className="privacy-document">
        <PolicySection
          number="01"
          icon={FiUsers}
          title="Who we are"
          id="who-we-are"
        >
          <div className="privacy-copy privacy-copy--large">
            <p>
              Relay is a technology platform connecting customers who
              have parcels arriving at Kenyan bus terminals with
              independent delivery riders, known as Relayers, who deliver
              those parcels to the customer’s selected destination.
            </p>

            <p>
              Relay is operated by <strong>Fastech Solutions</strong>, a
              business registered in Kenya. The platform is accessible
              through the Relay customer app, the Relay rider app and the
              Relay website at <strong>relay.co.ke</strong>.
            </p>
          </div>

          <div className="privacy-highlight">
            <FiMail aria-hidden="true" />

            <div>
              <span>Privacy enquiries</span>
              <a href="mailto:privacy@relay.co.ke">
                privacy@relay.co.ke
              </a>
            </div>
          </div>
        </PolicySection>

        <PolicySection
          number="02"
          icon={FiDatabase}
          title="Information we collect"
          id="information-we-collect"
          tone="soft"
        >
          <div className="privacy-subsection">
            <h3>Information you provide</h3>

            <p>
              The information collected depends on whether you use Relay
              as a customer, Relayer or business partner.
            </p>

            <div className="privacy-table-wrap">
              <table className="privacy-table">
                <thead>
                  <tr>
                    <th>Information</th>
                    <th>Who provides it</th>
                    <th>Why it is collected</th>
                  </tr>
                </thead>

                <tbody>
                  {providedInformation.map((item) => (
                    <tr key={item.data}>
                      <td>{item.data}</td>
                      <td>{item.users}</td>
                      <td>{item.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="privacy-columns">
            <article className="privacy-information-group">
              <span className="privacy-information-group__icon">
                <FiSmartphone aria-hidden="true" />
              </span>

              <h3>Information collected automatically</h3>

              <ul className="privacy-list">
                {automaticInformation.map((item) => (
                  <li key={item}>
                    <FiCheck aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="privacy-information-group">
              <span className="privacy-information-group__icon">
                <FiUsers aria-hidden="true" />
              </span>

              <h3>Information from third parties</h3>

              <ul className="privacy-list">
                {thirdPartyInformation.map((item) => (
                  <li key={item}>
                    <FiCheck aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </PolicySection>

        <PolicySection
          number="03"
          icon={FiUserCheck}
          title="How we use your information"
          id="how-we-use-information"
        >
          <p className="privacy-section__lead">
            Relay uses personal information only where it is reasonably
            necessary to provide, secure and improve the service.
          </p>

          <div className="privacy-purpose-list">
            {usagePurposes.map((purpose, index) => (
              <div key={purpose}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{purpose}</p>
              </div>
            ))}
          </div>

          <div className="privacy-statement">
            <FiShield aria-hidden="true" />

            <p>
              <strong>Relay does not sell personal information.</strong>{" "}
              We do not use your personal information for third-party
              advertising or sell it to third parties for marketing
              purposes.
            </p>
          </div>
        </PolicySection>

        <PolicySection
          number="04"
          icon={FiUsers}
          title="Who we share data with"
          id="data-sharing"
          tone="soft"
        >
          <p className="privacy-section__lead">
            Relay shares only the information required for delivery,
            payment, platform operations or legal compliance.
          </p>

          <div className="privacy-table-wrap">
            <table className="privacy-table">
              <thead>
                <tr>
                  <th>Party</th>
                  <th>Information shared</th>
                  <th>Purpose</th>
                </tr>
              </thead>

              <tbody>
                {sharingData.map((item) => (
                  <tr key={item.party}>
                    <td>{item.party}</td>
                    <td>{item.shared}</td>
                    <td>{item.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="privacy-table-note">
            Service providers working with Relay are required to protect
            personal information and use it only for the agreed service.
          </p>
        </PolicySection>

        <PolicySection
          number="05"
          icon={FiMapPin}
          title="Location data"
          id="location-data"
          tone="dark"
        >
          <div className="privacy-location-grid">
            <article>
              <span className="privacy-location-grid__label">
                Relayer location
              </span>

              <h3>Collected while the Relayer is online</h3>

              <p>
                When a Relayer is online, Relay may collect GPS location
                information approximately every 15 seconds. This helps us
                match nearby Relayers to delivery requests, provide live
                tracking and verify the delivery-completion location.
              </p>

              <strong>Location tracking stops when the Relayer goes offline.</strong>
            </article>

            <article>
              <span className="privacy-location-grid__label">
                Customer location
              </span>

              <h3>Collected when setting the delivery address</h3>

              <p>
                Relay collects the customer’s delivery-address
                coordinates to calculate the delivery fee, route the
                Relayer and complete the delivery.
              </p>

              <strong>
                Relay does not continuously track customer location.
              </strong>
            </article>
          </div>
        </PolicySection>

        <PolicySection
          number="06"
          icon={FiCreditCard}
          title="Payment data"
          id="payment-data"
        >
          <div className="privacy-payment">
            <div className="privacy-copy privacy-copy--large">
              <p>
                Relay processes customer payments through Safaricom
                M-Pesa. We may store M-Pesa receipt numbers, payment
                amounts, payment timestamps and Relayer earnings records.
              </p>

              <p>
                Payment processing is completed through Safaricom’s
                payment systems.
              </p>
            </div>

            <div className="privacy-payment__protected">
              <FiLock aria-hidden="true" />

              <div>
                <span>Relay does not store</span>

                <strong>
                  M-Pesa PINs, bank-account numbers or payment-card
                  details.
                </strong>
              </div>
            </div>
          </div>
        </PolicySection>

        <PolicySection
          number="07"
          icon={FiClock}
          title="Data retention"
          id="data-retention"
          tone="soft"
        >
          <p className="privacy-section__lead">
            Relay retains information only for as long as it is needed for
            the service, legal obligations, financial records and dispute
            resolution.
          </p>

          <div className="privacy-retention">
            {retentionPeriods.map((item) => (
              <article key={item.title}>
                <span>{item.period}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="privacy-highlight">
            <FiMail aria-hidden="true" />

            <div>
              <span>Request account deletion</span>
              <a href="mailto:privacy@relay.co.ke">
                privacy@relay.co.ke
              </a>
            </div>
          </div>
        </PolicySection>

        <PolicySection
          number="08"
          icon={FiLock}
          title="Security"
          id="security"
          tone="dark"
        >
          <p className="privacy-section__lead">
            Relay uses organisational and technical safeguards designed
            to protect personal information against unauthorised access,
            loss, alteration or misuse.
          </p>

          <div className="privacy-security">
            {securityMeasures.map((measure, index) => (
              <div key={measure}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <FiCheck aria-hidden="true" />
                <p>{measure}</p>
              </div>
            ))}
          </div>
        </PolicySection>

        <PolicySection
          number="09"
          icon={FiUserCheck}
          title="Your rights"
          id="your-rights"
        >
          <p className="privacy-section__lead">
            Under the Kenya Data Protection Act, 2019, you may have the
            following rights regarding your personal information.
          </p>

          <div className="privacy-rights">
            {privacyRights.map((right, index) => (
              <article key={right.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>

                <div>
                  <h3>{right.title}</h3>
                  <p>{right.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="privacy-response-notice">
            <FiClock aria-hidden="true" />

            <p>
              To exercise a privacy right, email{" "}
              <a href="mailto:privacy@relay.co.ke">
                privacy@relay.co.ke
              </a>
              . Relay aims to respond to valid requests within 30 days.
            </p>
          </div>
        </PolicySection>

        <PolicySection
          number="10"
          icon={FiShield}
          title="Children"
          id="children"
          tone="soft"
        >
          <div className="privacy-copy privacy-copy--large">
            <p>
              Relay is not intended for use by people under 18 years of
              age. We do not knowingly collect personal information from
              children.
            </p>

            <p>
              Contact{" "}
              <a href="mailto:privacy@relay.co.ke">
                privacy@relay.co.ke
              </a>{" "}
              if you believe a child has provided personal information to
              Relay. We will review the report and delete the information
              where appropriate.
            </p>
          </div>
        </PolicySection>

        <PolicySection
          number="11"
          icon={FiFileText}
          title="Changes to this policy"
          id="policy-changes"
        >
          <div className="privacy-copy privacy-copy--large">
            <p>
              Relay may update this Privacy Policy from time to time to
              reflect changes to our services, technology, legal
              obligations or operational practices.
            </p>

            <p>
              When material changes are made, Relay may notify users
              through the app and update the effective date displayed at
              the top of this page. Continued use of Relay after the
              changes take effect is subject to the updated policy.
            </p>
          </div>
        </PolicySection>

        <PolicySection
          number="12"
          icon={FiMail}
          title="Contact us"
          id="contact-us"
          tone="dark"
        >
          <div className="privacy-contact">
            <div className="privacy-contact__introduction">
              <span>Questions about your information?</span>

              <h3>We are committed to privacy and transparency.</h3>

              <p>
                Contact Relay if you have a privacy request, security
                concern or question about how your personal information is
                handled.
              </p>
            </div>

            <div className="privacy-contact__details">
              <a href="mailto:privacy@relay.co.ke">
                <FiShield aria-hidden="true" />

                <span>
                  <small>Privacy</small>
                  <strong>support@relay.co.ke</strong>
                </span>

                <FiArrowUpRight aria-hidden="true" />
              </a>

              <a href="mailto:support@relay.co.ke">
                <FiMail aria-hidden="true" />

                <span>
                  <small>General support</small>
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
        </PolicySection>
      </div>

      <section className="privacy-end">
        <div className="site-container privacy-end__layout">
          <div>
            <span>Relay Privacy Policy</span>
            <p>
              A product of Fastech Solutions · Nairobi, Kenya
            </p>
          </div>

          <a href="#top" onClick={() => window.scrollTo(0, 0)}>
            Back to top
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}

export default PrivacyPolicy;