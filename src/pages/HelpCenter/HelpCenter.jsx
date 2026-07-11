import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiAlertTriangle,
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiChevronDown,
  FiDownload,
  FiMail,
  FiPackage,
  FiSearch,
  FiShield,
  FiSmartphone,
  FiTruck,
} from "react-icons/fi";

import "./HelpCentre.css";

const helpTopics = [
  {
    icon: FiPackage,
    title: "Getting your parcel",
    description:
      "Learn how to request collection from a supported bus station.",
    category: "parcel",
  },
  {
    icon: FiSmartphone,
    title: "Using the Relay app",
    description:
      "Help with account setup, payments and delivery tracking.",
    category: "app",
  },
  {
    icon: FiTruck,
    title: "Relayer support",
    description:
      "Information for rider applications, approval and delivery work.",
    category: "relayer",
  },
  {
    icon: FiShield,
    title: "Safety and security",
    description:
      "Understand safe handovers, account security and parcel protection.",
    category: "safety",
  },
];

const faqs = [
  {
    category: "parcel",
    question: "How do I ask Relay to collect my parcel?",
    answer:
      "Download the Relay app, create an account and enter your parcel details, collection station and delivery address. The request and tracking process happens inside the app.",
  },
  {
    category: "parcel",
    question: "Which bus stations are supported?",
    answer:
      "Supported locations are shown inside the Relay app. Availability may depend on the bus company, parcel office and delivery location.",
  },
  {
    category: "parcel",
    question: "What details should I have before requesting delivery?",
    answer:
      "Have the parcel reference, sender name, bus company, collection station, your phone number and the preferred delivery address ready.",
  },
  {
    category: "parcel",
    question: "Can Relay deliver to my office instead of my home?",
    answer:
      "Yes. You can select a home, office or another suitable delivery point within the supported service area.",
  },
  {
    category: "app",
    question: "Can I track my parcel on the website?",
    answer:
      "No. The website explains how Relay works. Live tracking, payment and delivery updates are available in the Relay mobile app.",
  },
  {
    category: "app",
    question: "How do I pay for delivery?",
    answer:
      "Payment is completed through M-Pesa in the Relay app after the delivery request and price are confirmed.",
  },
  {
    category: "app",
    question: "What should I do if I cannot access my account?",
    answer:
      "Use the account recovery option inside the app. If that does not work, contact Relay support using the same phone number linked to your account.",
  },
  {
    category: "app",
    question: "Why am I not receiving delivery updates?",
    answer:
      "Check that mobile data and notifications are enabled. You can also reopen the app and confirm that you are signed into the correct account.",
  },
  {
    category: "relayer",
    question: "How do I become a Relayer?",
    answer:
      "Download the rider app, create a Relayer account and submit the requested identification, licence, vehicle and insurance information.",
  },
  {
    category: "relayer",
    question: "Does creating an account mean I am automatically approved?",
    answer:
      "No. Relay reviews every application. Your account becomes active only after the required checks are completed and your application is approved.",
  },
  {
    category: "relayer",
    question: "Can I deliver using a car?",
    answer:
      "Yes. Relay may approve suitable motorcycles or cars depending on the vehicle condition, submitted documents and current operating needs.",
  },
  {
    category: "relayer",
    question: "How will I know whether my application is approved?",
    answer:
      "You will receive an update in the rider app. Relay may also request additional information before making a final decision.",
  },
  {
    category: "safety",
    question: "How do I know the person collecting my parcel is a Relayer?",
    answer:
      "Verify the rider details shown in the app before handing over or receiving a parcel. Do not release a parcel to someone whose details do not match.",
  },
  {
    category: "safety",
    question: "Will Relay ask for my M-Pesa PIN?",
    answer:
      "No. Relay staff and Relayers should never ask for your M-Pesa PIN, password or one-time account verification code.",
  },
  {
    category: "safety",
    question: "What should I do if a parcel arrives damaged?",
    answer:
      "Do not discard the packaging. Take clear photographs and contact Relay support immediately with the parcel reference and details of the damage.",
  },
];

const categoryLabels = {
  all: "All questions",
  parcel: "Getting your parcel",
  app: "Using the app",
  relayer: "Relayer support",
  safety: "Safety",
};

function HelpCentre() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openQuestion, setOpenQuestion] = useState(0);

  const filteredFaqs = useMemo(() => {
    const cleanSearch = searchTerm.trim().toLowerCase();

    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "all" || faq.category === activeCategory;

      const matchesSearch =
        !cleanSearch ||
        faq.question.toLowerCase().includes(cleanSearch) ||
        faq.answer.toLowerCase().includes(cleanSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const handleTopicClick = (category) => {
    setActiveCategory(category);
    setSearchTerm("");
    setOpenQuestion(null);

    document
      .getElementById("frequently-asked-questions")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="help-page">
      <section className="help-hero">
        <div className="site-container help-hero__layout">
          <div className="help-hero__content">
            <span className="help-hero__eyebrow">Relay Help Centre</span>

            <h1>
              Find the help you need
              <span>without the confusion.</span>
            </h1>

            <p>
              Search common questions about parcel delivery, the Relay app,
              Relayer applications and account safety.
            </p>

            <div className="help-search">
              <FiSearch aria-hidden="true" />

              <input
                type="search"
                value={searchTerm}
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                  setActiveCategory("all");
                  setOpenQuestion(null);
                }}
                placeholder="Search the Help Centre"
                aria-label="Search help articles"
              />

              <span>
                {filteredFaqs.length}{" "}
                {filteredFaqs.length === 1 ? "result" : "results"}
              </span>
            </div>

            <div className="help-hero__quick-links">
              <span>Popular:</span>

              <button
                type="button"
                onClick={() => handleTopicClick("parcel")}
              >
                Request delivery
              </button>

              <button type="button" onClick={() => handleTopicClick("app")}>
                App support
              </button>

              <button
                type="button"
                onClick={() => handleTopicClick("relayer")}
              >
                Relayer approval
              </button>
            </div>
          </div>

          <div className="help-hero__aside">
            <span className="help-hero__aside-label">Start here</span>

            <div className="help-hero__aside-row">
              <FiDownload aria-hidden="true" />

              <div>
                <strong>Download the Relay app</strong>
                <p>
                  Request delivery, pay and follow your parcel from your phone.
                </p>
              </div>
            </div>

            <div className="help-hero__aside-row">
              <FiCheckCircle aria-hidden="true" />

              <div>
                <strong>Keep your parcel details ready</strong>
                <p>
                  You may need the reference, station and sender information.
                </p>
              </div>
            </div>

            <div className="help-hero__aside-row">
              <FiShield aria-hidden="true" />

              <div>
                <strong>Protect your account</strong>
                <p>
                  Never share your password, M-Pesa PIN or verification code.
                </p>
              </div>
            </div>

            <Link to="/get-my-parcel" className="help-hero__aside-action">
              Get my parcel
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="help-topics">
        <div className="site-container">
          <header className="help-topics__header">
            <span>Browse by topic</span>
            <h2>Choose what you need help with.</h2>
          </header>

          <div className="help-topics__list">
            {helpTopics.map(
              ({ icon: Icon, title, description, category }, index) => (
                <button
                  type="button"
                  className="help-topics__item"
                  onClick={() => handleTopicClick(category)}
                  key={title}
                >
                  <span className="help-topics__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="help-topics__icon">
                    <Icon aria-hidden="true" />
                  </span>

                  <span className="help-topics__copy">
                    <strong>{title}</strong>
                    <small>{description}</small>
                  </span>

                  <FiArrowRight
                    className="help-topics__arrow"
                    aria-hidden="true"
                  />
                </button>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        className="help-faq"
        id="frequently-asked-questions"
      >
        <div className="site-container help-faq__layout">
          <div className="help-faq__sidebar">
            <span className="help-faq__eyebrow">Frequently asked questions</span>

            <h2>Clear answers to common questions.</h2>

            <p>
              Select a topic or search using a word related to the issue you
              are experiencing.
            </p>

            <div
              className="help-faq__categories"
              aria-label="FAQ categories"
            >
              {Object.entries(categoryLabels).map(([value, label]) => (
                <button
                  type="button"
                  className={
                    activeCategory === value
                      ? "help-faq__category help-faq__category--active"
                      : "help-faq__category"
                  }
                  onClick={() => {
                    setActiveCategory(value);
                    setSearchTerm("");
                    setOpenQuestion(null);
                  }}
                  key={value}
                >
                  <span>{label}</span>
                  <span>
                    {value === "all"
                      ? faqs.length
                      : faqs.filter((faq) => faq.category === value).length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="help-faq__questions">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = openQuestion === index;

                return (
                  <article
                    className={
                      isOpen
                        ? "help-faq__item help-faq__item--open"
                        : "help-faq__item"
                    }
                    key={`${faq.category}-${faq.question}`}
                  >
                    <button
                      type="button"
                      className="help-faq__question"
                      onClick={() =>
                        setOpenQuestion(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                    >
                      <span>
                        <small>{categoryLabels[faq.category]}</small>
                        <strong>{faq.question}</strong>
                      </span>

                      <FiChevronDown aria-hidden="true" />
                    </button>

                    <div className="help-faq__answer">
                      <p>{faq.answer}</p>
                    </div>
                  </article>
                );
              })
            ) : (
              <div className="help-faq__empty">
                <FiSearch aria-hidden="true" />

                <h3>No matching help article found.</h3>

                <p>
                  Try a shorter search, choose another topic or contact Relay
                  support.
                </p>

                <Link to="/contact">
                  Contact Relay
                  <FiArrowUpRight aria-hidden="true" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="help-safety">
        <div className="site-container help-safety__layout">
          <div className="help-safety__content">
            <span className="help-safety__eyebrow">
              Keep your account and parcel safe
            </span>

            <h2>Relay will never ask for your private payment details.</h2>

            <p>
              Protect yourself from impersonation and fraud by checking rider
              details in the app and keeping sensitive information private.
            </p>

            <div className="help-safety__rules">
              <div>
                <FiCheckCircle aria-hidden="true" />
                <span>Verify the rider shown in the Relay app.</span>
              </div>

              <div>
                <FiCheckCircle aria-hidden="true" />
                <span>Confirm the parcel before accepting delivery.</span>
              </div>

              <div>
                <FiAlertTriangle aria-hidden="true" />
                <span>Never share your M-Pesa PIN or account password.</span>
              </div>
            </div>

            <Link to="/parcel-safety">
              Read the parcel safety guide
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>

          <div className="help-safety__panel">
            <span className="help-safety__panel-icon">
              <FiShield aria-hidden="true" />
            </span>

            <span>Report a concern</span>

            <h3>Something does not look right?</h3>

            <p>
              Contact Relay immediately if a rider, payment request or parcel
              handover does not match the information shown in the app.
            </p>

            <a href="mailto:info@relay.co.ke">
              <FiMail aria-hidden="true" />
              info@relay.co.ke
            </a>
          </div>
        </div>
      </section>

      <section className="help-contact">
        <div className="site-container help-contact__layout">
          <div>
            <span>Still need help?</span>

            <h2>Send the Relay team the details of your issue.</h2>

            <p>
              Include your account phone number and parcel reference where
              applicable so the team can assist you faster.
            </p>
          </div>

          <div className="help-contact__actions">
            <Link to="/contact" className="help-contact__primary">
              Contact support
              <FiArrowUpRight aria-hidden="true" />
            </Link>

            <Link
              to="/become-a-relayer"
              className="help-contact__secondary"
            >
              Relayer application help
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HelpCentre;