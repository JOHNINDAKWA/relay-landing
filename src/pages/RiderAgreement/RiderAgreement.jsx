import {
  FiAlertTriangle,
  FiArrowUpRight,
  FiCheck,
  FiClock,
  FiCreditCard,
  FiFileText,
  FiMail,
  FiMapPin,
  FiPhone,
  FiShield,
  FiSmartphone,
  FiStar,
  FiTruck,
  FiUserCheck,
} from "react-icons/fi";

import "./RiderAgreement.css";

const contents = [
  {
    number: "01",
    label: "Independent contractor relationship",
    id: "independent-contractor",
  },
  {
    number: "02",
    label: "Eligibility requirements",
    id: "eligibility",
  },
  {
    number: "03",
    label: "Onboarding and approval",
    id: "onboarding",
  },
  {
    number: "04",
    label: "Delivery obligations",
    id: "delivery-obligations",
  },
  {
    number: "05",
    label: "Earnings and payouts",
    id: "earnings",
  },
  {
    number: "06",
    label: "Relayer tiers and ratings",
    id: "ratings",
  },
  {
    number: "07",
    label: "Emergencies and safety",
    id: "emergencies",
  },
  {
    number: "08",
    label: "Suspension and deactivation",
    id: "suspension",
  },
  {
    number: "09",
    label: "Equipment and vehicle",
    id: "equipment",
  },
  {
    number: "10",
    label: "Code of conduct",
    id: "conduct",
  },
  {
    number: "11",
    label: "Data and privacy",
    id: "data-privacy",
  },
  {
    number: "12",
    label: "Contact",
    id: "contact",
  },
];

const eligibilityRequirements = [
  "Be at least 18 years old and hold a valid Kenyan National ID.",
  "Hold a valid driving licence for the vehicle being used.",
  "Own or have authorised access to a roadworthy motorcycle or vehicle.",
  "Maintain valid third-party vehicle insurance.",
  "Have a smartphone capable of running the Relay rider app.",
  "Have no conviction involving theft, fraud or violence.",
];

const onboardingDocuments = [
  "National ID",
  "Driving licence",
  "Vehicle logbook",
  "Vehicle insurance certificate",
  "Clear profile photograph",
];

const deliveryObligations = [
  "Navigate to the assigned terminal using the pickup details in the app.",
  "Confirm collection using the correct pickup PIN.",
  "Take a clear photograph of the parcel at the terminal.",
  "Deliver the parcel to the customer’s confirmed address.",
  "Complete contact delivery using the customer PIN.",
  "Use a proof-of-delivery photograph for approved non-contact delivery.",
  "Never open, inspect, alter or tamper with parcel contents.",
];

const earnings = [
  {
    component: "Base delivery fee and distance fee",
    share: "70%",
  },
  {
    component: "Weight surcharge for parcels above 5 kg",
    share: "100%",
  },
  {
    component: "Optional customer tip",
    share: "100%",
  },
];

const tiers = [
  {
    letter: "S",
    title: "Star Relayer",
    description: "Rating 4.8+ · 100+ deliveries",
    benefit: "Priority job allocation",
  },
  {
    letter: "T",
    title: "Trusted Relayer",
    description: "Rating 4.5+ · 50+ deliveries",
    benefit: "Standard job allocation",
  },
  {
    letter: "N",
    title: "New Relayer",
    description: "Getting started",
    benefit: "Building delivery history",
  },
];

const suspensionReasons = [
  "Fraudulent emergency reports",
  "Parcel theft, loss or tampering",
  "Abusive behaviour toward customers or staff",
  "Providing false or forged documents",
  "Operating without valid documents",
  "Creating multiple rider accounts",
  "Sustained low ratings",
  "Repeated unexplained unassignments",
];

const codeOfConduct = [
  "Be polite, professional and respectful in every customer interaction.",
  "Communicate early when there is a delay or delivery issue.",
  "Handle parcels carefully and protect them from damage or theft.",
  "Never request payment beyond the amount shown in the app.",
  "Represent yourself and your delivery status honestly.",
];

function AgreementSection({
  number,
  icon: Icon,
  title,
  id,
  tone = "light",
  children,
}) {
  return (
    <section
      className={`rider-agreement-section rider-agreement-section--${tone}`}
      id={id}
    >
      <div className="site-container rider-agreement-section__layout">
        <header className="rider-agreement-section__header">
          <span className="rider-agreement-section__number">
            {number}
          </span>

          <span className="rider-agreement-section__icon">
            <Icon aria-hidden="true" />
          </span>

          <h2>{title}</h2>
        </header>

        <div className="rider-agreement-section__body">
          {children}
        </div>
      </div>
    </section>
  );
}

function RiderAgreement() {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="rider-agreement-page">
      <section className="rider-agreement-hero" id="top">
        <div className="site-container rider-agreement-hero__layout">
          <div className="rider-agreement-hero__content">
            <span className="rider-agreement-hero__eyebrow">
              Legal · Relayers
            </span>

            <h1>
              A clear agreement for
              <span>every Relay delivery partner.</span>
            </h1>

            <p>
              These terms explain the responsibilities, earnings,
              safety standards and account conditions that apply to
              independent Relayers using the Relay platform.
            </p>

            <div className="rider-agreement-hero__meta">
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
                  <small>Operating country</small>
                  <strong>Kenya</strong>
                </span>
              </div>

              <div>
                <FiFileText aria-hidden="true" />

                <span>
                  <small>Applies to</small>
                  <strong>Approved Relayers</strong>
                </span>
              </div>
            </div>
          </div>

          <div className="rider-agreement-hero__panel">
            <span className="rider-agreement-hero__panel-icon">
              <FiTruck aria-hidden="true" />
            </span>

            <span className="rider-agreement-hero__panel-label">
              Before creating a rider account
            </span>

            <h2>Read and understand this agreement in full.</h2>

            <p>
              By registering as a Relay rider, you agree to this Rider
              Agreement together with Relay’s Terms of Service and
              Privacy Policy.
            </p>

            <div className="rider-agreement-hero__points">
              <div>
                <FiCheck aria-hidden="true" />
                <span>Independent contractor relationship</span>
              </div>

              <div>
                <FiCheck aria-hidden="true" />
                <span>Approval is required before activation</span>
              </div>

              <div>
                <FiCheck aria-hidden="true" />
                <span>Safety and conduct standards apply</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rider-agreement-intro">
        <div className="site-container rider-agreement-intro__layout">
          <span className="rider-agreement-intro__label">
            Rider Agreement
          </span>

          <div>
            <h2>
              Your responsibilities begin when you create a Relayer account.
            </h2>

            <p>
              By registering as a Relay rider, you confirm that you have read
              and agreed to this agreement. It applies together with Relay’s
              Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      <nav
        className="rider-agreement-contents"
        aria-label="Rider Agreement contents"
      >
        <div className="site-container">
          <header className="rider-agreement-contents__header">
            <span>Agreement contents</span>
            <p>Go directly to any section.</p>
          </header>

          <div className="rider-agreement-contents__grid">
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

      <div className="rider-agreement-document">
        <AgreementSection
          number="01"
          icon={FiUserCheck}
          title="Independent contractor relationship"
          id="independent-contractor"
        >
          <div className="rider-agreement-copy">
            <p>
              As a Relayer, you operate as an independent contractor and
              not as an employee, agent, representative or business partner
              of Relay.
            </p>

            <p>
              You may decide when to go online and may work with other
              delivery platforms, subject to completing every delivery you
              have already accepted.
            </p>
          </div>

          <div className="rider-agreement-responsibility-grid">
            <article>
              <span>Taxes and contributions</span>
              <p>
                You are responsible for your own taxes and applicable
                NSSF, NHIF or other statutory contributions.
              </p>
            </article>

            <article>
              <span>Operating costs</span>
              <p>
                You are responsible for your vehicle, fuel, maintenance,
                equipment and insurance costs.
              </p>
            </article>

            <article>
              <span>Working hours</span>
              <p>
                You are free to choose when to make yourself available
                for delivery opportunities.
              </p>
            </article>

            <article>
              <span>Other platforms</span>
              <p>
                You may work with other platforms provided this does not
                affect accepted Relay deliveries.
              </p>
            </article>
          </div>
        </AgreementSection>

        <AgreementSection
          number="02"
          icon={FiShield}
          title="Eligibility requirements"
          id="eligibility"
          tone="soft"
        >
          <p className="rider-agreement-section__lead">
            You must meet and continue to meet the following conditions to
            register and remain active as a Relayer.
          </p>

          <div className="rider-agreement-checklist">
            {eligibilityRequirements.map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <FiCheck aria-hidden="true" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </AgreementSection>

        <AgreementSection
          number="03"
          icon={FiFileText}
          title="Onboarding and approval"
          id="onboarding"
        >
          <div className="rider-agreement-copy">
            <p>
              Creating a rider account does not automatically activate you
              as a Relayer. Relay must first review and approve your
              application.
            </p>

            <p>
              Approval requires clear, current and verifiable documents.
            </p>
          </div>

          <div className="rider-agreement-documents">
            {onboardingDocuments.map((document, index) => (
              <div key={document}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{document}</strong>
                <FiCheck aria-hidden="true" />
              </div>
            ))}
          </div>

          <div className="rider-agreement-warning">
            <FiAlertTriangle aria-hidden="true" />

            <p>
              Providing false, altered or forged documents may result in
              permanent account deactivation and referral to the relevant
              authorities.
            </p>
          </div>
        </AgreementSection>

        <AgreementSection
          number="04"
          icon={FiTruck}
          title="Delivery obligations"
          id="delivery-obligations"
          tone="soft"
        >
          <p className="rider-agreement-section__lead">
            Accepting a delivery means committing to complete the full
            collection and delivery process safely and professionally.
          </p>

          <div className="rider-agreement-delivery-list">
            {deliveryObligations.map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="rider-agreement-unassign">
            <div>
              <span>Before pickup</span>
              <h3>You may unassign from the delivery.</h3>
              <p>
                You should only unassign where necessary and before taking
                possession of the parcel.
              </p>
            </div>

            <div>
              <span>After pickup</span>
              <h3>You must complete the delivery.</h3>
              <p>
                Once the parcel has been collected, you remain responsible
                for its safe delivery or authorised return.
              </p>
            </div>
          </div>

          <p className="rider-agreement-note">
            Repeated unassignments without a valid reason may reduce your
            rating and lead to account review or suspension.
          </p>
        </AgreementSection>

        <AgreementSection
          number="05"
          icon={FiCreditCard}
          title="Earnings and payouts"
          id="earnings"
          tone="dark"
        >
          <div className="rider-agreement-earnings">
            {earnings.map((item) => (
              <article key={item.component}>
                <span>{item.share}</span>
                <h3>{item.component}</h3>
              </article>
            ))}
          </div>

          <div className="rider-agreement-payout">
            <div>
              <span>Wallet credit</span>
              <strong>After delivery completion</strong>
              <p>
                Eligible earnings are credited to the in-app wallet when
                the delivery is successfully completed.
              </p>
            </div>

            <div>
              <span>Payout method</span>
              <strong>M-Pesa B2C</strong>
              <p>
                Payouts are typically processed within 24 hours on
                business days.
              </p>
            </div>
          </div>

          <div className="rider-agreement-dark-warning">
            <FiAlertTriangle aria-hidden="true" />

            <p>
              Earnings connected to fraudulent or falsely completed
              deliveries may be reversed and may result in permanent
              deactivation.
            </p>
          </div>
        </AgreementSection>

        <AgreementSection
          number="06"
          icon={FiStar}
          title="Relayer tiers and ratings"
          id="ratings"
        >
          <div className="rider-agreement-tiers">
            {tiers.map((tier) => (
              <article key={tier.title}>
                <span className="rider-agreement-tiers__letter">
                  {tier.letter}
                </span>

                <div>
                  <h3>{tier.title}</h3>
                  <p>{tier.description}</p>
                  <strong>{tier.benefit}</strong>
                </div>
              </article>
            ))}
          </div>

          <div className="rider-agreement-rating-note">
            <FiStar aria-hidden="true" />

            <p>
              Your rating is calculated from your most recent 20 rated
              deliveries. A rating below 3.5 after at least 10 deliveries
              may trigger an account review.
            </p>
          </div>
        </AgreementSection>

        <AgreementSection
          number="07"
          icon={FiShield}
          title="Emergencies and safety"
          id="emergencies"
          tone="soft"
        >
          <div className="rider-agreement-emergency">
            <div>
              <span className="rider-agreement-emergency__icon">
                <FiPhone aria-hidden="true" />
              </span>

              <h3>Call Relay support</h3>

              <p>
                Use the in-app emergency support option when immediate
                assistance is required.
              </p>
            </div>

            <div>
              <span className="rider-agreement-emergency__icon">
                <FiSmartphone aria-hidden="true" />
              </span>

              <h3>Send an automatic alert</h3>

              <p>
                The app may generate a WhatsApp alert containing relevant
                delivery details.
              </p>
            </div>

            <div>
              <span className="rider-agreement-emergency__icon">
                <FiShield aria-hidden="true" />
              </span>

              <h3>End the active session</h3>

              <p>
                The delivery may be unassigned for redispatch and your
                account marked offline.
              </p>
            </div>
          </div>

          <div className="rider-agreement-emergency-warning">
            <FiAlertTriangle aria-hidden="true" />

            <div>
              <span>Fraud warning</span>

              <p>
                Emergency features must only be used for genuine emergencies.
                Every report is logged and reviewed. False reports may lead
                to immediate suspension, while repeated misuse may result in
                permanent deactivation.
              </p>
            </div>
          </div>
        </AgreementSection>

        <AgreementSection
          number="08"
          icon={FiAlertTriangle}
          title="Suspension and deactivation"
          id="suspension"
          tone="dark"
        >
          <p className="rider-agreement-section__lead">
            Relay may suspend or deactivate a rider account where there is
            serious misconduct, fraud, safety risk or continued failure to
            meet platform requirements.
          </p>

          <div className="rider-agreement-suspension-list">
            {suspensionReasons.map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <FiAlertTriangle aria-hidden="true" />
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="rider-agreement-appeal">
            <FiMail aria-hidden="true" />

            <p>
              To appeal a suspension, contact{" "}
              <a href="mailto:support@relay.co.ke">
                support@relay.co.ke
              </a>{" "}
              within 14 days of receiving the suspension notice.
            </p>
          </div>
        </AgreementSection>

        <AgreementSection
          number="09"
          icon={FiTruck}
          title="Equipment and vehicle"
          id="equipment"
        >
          <div className="rider-agreement-copy">
            <p>
              You are responsible for ensuring that your approved vehicle
              remains safe, roadworthy and suitable for parcel delivery.
            </p>

            <p>
              Required licences, insurance and inspection documents must
              remain valid throughout your time as an active Relayer.
            </p>

            <p>
              All costs associated with your vehicle, phone, safety
              equipment, fuel and maintenance remain your responsibility
              as an independent contractor.
            </p>
          </div>
        </AgreementSection>

        <AgreementSection
          number="10"
          icon={FiUserCheck}
          title="Code of conduct"
          id="conduct"
          tone="soft"
        >
          <div className="rider-agreement-conduct">
            {codeOfConduct.map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <FiCheck aria-hidden="true" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </AgreementSection>

        <AgreementSection
          number="11"
          icon={FiMapPin}
          title="Data and privacy"
          id="data-privacy"
        >
          <div className="rider-agreement-copy">
            <p>
              By using the Relay rider app, you consent to the collection
              and use of location, delivery and performance information as
              described in the Relay Privacy Policy.
            </p>

            <p>
              Your name, phone number, vehicle details and profile
              photograph may be displayed to customers when needed to
              complete an assigned delivery.
            </p>

            <p>
              During an active delivery, your location may be shared with
              the customer in real time for tracking, communication and
              delivery verification.
            </p>
          </div>

          <a
            href="/privacy-policy"
            className="rider-agreement-privacy-link"
          >
            Read the Privacy Policy
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </AgreementSection>

        <AgreementSection
          number="12"
          icon={FiMail}
          title="Contact"
          id="contact"
          tone="dark"
        >
          <div className="rider-agreement-contact">
            <div className="rider-agreement-contact__intro">
              <span>Questions about your rider account?</span>

              <h3>Our Relayer support team is available seven days a week.</h3>

              <p>
                Contact the team about onboarding, documents, account status,
                deliveries, earnings or safety concerns.
              </p>
            </div>

            <div className="rider-agreement-contact__details">
              <a href="mailto:riders@relay.co.ke">
                <FiTruck aria-hidden="true" />

                <span>
                  <small>Relayer support</small>
                  <strong>riders@relay.co.ke</strong>
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

              <a
                href="https://wa.me/254716016706"
                target="_blank"
                rel="noreferrer"
              >
                <FiPhone aria-hidden="true" />

                <span>
                  <small>WhatsApp</small>
                  <strong>+254 716 016 706</strong>
                </span>

                <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </AgreementSection>
      </div>

      <section className="rider-agreement-end">
        <div className="site-container rider-agreement-end__layout">
          <div>
            <span>Relay Rider Agreement</span>
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

export default RiderAgreement;