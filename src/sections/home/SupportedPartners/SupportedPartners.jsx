import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

import "./SupportedPartners.css";

import LiquorStore from "../../../assets/liquor.png";
import PharmacyStore from "../../../assets/pharmacy.png";
import ElectronicStore from "../../../assets/Electronic-store.jpg";
import BusTerminals from "../../../assets/bus-terminals.png";


const partnerTypes = [
  {
    title: "Pharmacies",
    description:
      "Deliver prepared pharmacy orders conveniently to customers within supported areas.",
    image:
      PharmacyStore,
    alt: "Modern pharmacy interior with medicine shelves",
  },
  {
    title: "Licensed liquor stores",
    description:
      "Request delivery for confirmed customer orders through Relay's supported delivery process.",
    image:
     LiquorStore,
    alt: "Bottles displayed inside a licensed liquor store",
  },
  {
    title: "General vendors",
    description:
      "Send electronics, cables, accessories and other approved products directly to customers.",
    image:
      ElectronicStore,
    alt: "Shop attendant serving a customer at a retail store",
  },
  {
    title: "Restaurants",
    description:
      "Request collection of prepared food orders and have a Relayer deliver them to the customer.",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85",
    alt: "Prepared restaurant food ready for customer delivery",
  },
  {
    title: "Bus companies",
    description:
      "Extend parcel delivery beyond the station by connecting arriving parcels to the customer's doorstep.",
    image:
      BusTerminals,
    alt: "Passenger bus at a transport terminal",
  },
];

function SupportedPartners() {
  return (
    <section
      className="supported-partners"
      aria-labelledby="supported-partners-title"
    >
      <div className="site-container">
        <header className="supported-partners__header">
          <div>
            <span className="supported-partners__eyebrow">
              Who Relay supports
            </span>

            <h2 id="supported-partners-title">
              Delivery built for{" "}
              <span>different kinds of businesses.</span>
            </h2>
          </div>

        </header>

        <div className="supported-partners__grid">
          {partnerTypes.map(
            ({ title, description, image, alt }, index) => (
              <article
                className={[
                  "supported-partners__card",
                  index === 3
                    ? "supported-partners__card--featured"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                key={title}
              >
                <div className="supported-partners__image">
                  <img src={image} alt={alt} />

                  <div
                    className="supported-partners__image-overlay"
                    aria-hidden="true"
                  />

                  <span className="supported-partners__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="supported-partners__content">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ),
          )}
        </div>

        <div className="supported-partners__footer">
          <div>
            <span>Does your business need regular delivery support?</span>

            <p>
              Tell us what you sell, where you operate and how many deliveries
              you expect.
            </p>
          </div>

          <Link
            to="/partner-with-us"
            className="supported-partners__action"
          >
            Partner with Relay
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SupportedPartners;