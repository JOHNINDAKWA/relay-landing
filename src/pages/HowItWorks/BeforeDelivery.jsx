import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiMapPin,
  FiPackage,
} from "react-icons/fi";

import "./BeforeDelivery.css";

const deliveryChecks = [
  {
    icon: FiMapPin,
    title: "Confirm the pickup location",
    description:
      "Make sure your parcel is ready at a business, retailer, transport partner or other location supported by Relay.",
  },
  {
    icon: FiPackage,
    title: "Have your parcel details",
    description:
      "Keep the sender’s name, pickup location and parcel reference ready.",
  },
  {
    icon: FiCheckCircle,
    title: "Choose your delivery point",
    description:
      "Enter a clear home, office or meeting-point address within a currently supported delivery area.",
  },
];

function BeforeDelivery() {
  return (
    <section className="before-delivery">
      <div className="site-container">
        <div className="before-delivery__header">
          <div>
            <span className="before-delivery__eyebrow">
              Before you request delivery
            </span>

            <h2>Have these details ready.</h2>
          </div>

          <p>
            A few simple details help Relay identify your parcel, confirm the
            pickup location and deliver it without unnecessary delays.
          </p>
        </div>

        <div className="before-delivery__list">
          {deliveryChecks.map(
            ({ icon: Icon, title, description }, index) => (
              <article className="before-delivery__item" key={title}>
                <div className="before-delivery__item-top">
                  <span className="before-delivery__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <Icon aria-hidden="true" />
                </div>

                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ),
          )}
        </div>

        <div className="before-delivery__bottom">
          <p>
            Not sure whether your pickup or delivery location is supported?
          </p>

          <Link to="/help" className="before-delivery__link">
            Visit the Help Centre
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BeforeDelivery;