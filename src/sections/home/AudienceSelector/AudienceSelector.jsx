import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiPackage,
  FiTruck,
  FiUsers,
} from "react-icons/fi";

import audience_one from "../../../assets/rider-packing.jpeg";
import audience_two from "../../../assets/parcel-sending.jpeg";
import audience_three from "../../../assets/relay-partner.jpeg";
import audience_four from "../../../assets/relay-rider.jpeg";


import "./AudienceSelector.css";

const audiences = [
  {
    number: "01",
    label: "For customers",
    title: "Get your parcel delivered",
    description:
      "Relay collects your parcel from a supported bus station and delivers it to your home, office or preferred address.",
    action: "Get my parcel",
    path: "/get-my-parcel",
    icon: FiPackage,
    image: audience_one,
    imageAlt: "Customer receiving a delivered parcel",
  },
  {
    number: "02",
    label: "For businesses",
    title: "Send parcels with Relay",
    description:
      "Use Relay as your last-mile delivery partner and get parcels from bus stations to customers across Nairobi.",
    action: "Send with Relay",
    path: "/partner-with-us",
    icon: FiBriefcase,
    image:
      audience_two,
    imageAlt: "Business owner preparing a customer order",
  },
  {
    number: "03",
    label: "For transport operators",
    title: "Become our partner",
    description:
      "Bus companies, SACCOs and parcel offices can work with Relay to offer customers convenient doorstep delivery.",
    action: "Partner with us",
    path: "/partner-with-us",
    icon: FiUsers,
    image:
      audience_three,
    imageAlt: "Public transport vehicles at a station",
  },
  {
    number: "04",
    label: "For riders",
    title: "Become a Relayer rider",
    description:
      "Join the Relay rider network, receive delivery jobs through the app and earn by delivering parcels around Nairobi.",
    action: "Become a rider",
    path: "/become-a-relayer",
    icon: FiTruck,
    image:
      audience_four,
    imageAlt: "Motorcycle delivery rider on the road",
  },
];

function AudienceSelector() {
  return (
    <section className="audience-selector">
      <div className="site-container">
        <header className="audience-selector__header">
          <div className="audience-selector__heading">
            <span className="audience-selector__eyebrow">
              Choose how to use Relay
            </span>

            <h2>
              Relay is built for
              <span>every part of the journey.</span>
            </h2>
          </div>

          <p className="audience-selector__intro">
            Whether you are receiving a parcel, running a business, operating
            a transport company or looking for rider opportunities, there is a
            clear way for you to use Relay.
          </p>
        </header>

        <div className="audience-selector__grid">
          {audiences.map(
            ({
              number,
              label,
              title,
              description,
              action,
              path,
              icon: Icon,
              image,
              imageAlt,
            }) => (
              <article className="audience-card" key={number}>
                <img
                  src={image}
                  alt={imageAlt}
                  className="audience-card__image"
                />

                <div
                  className="audience-card__overlay"
                  aria-hidden="true"
                />

                <div className="audience-card__top">
                  <span className="audience-card__number">{number}</span>

                  <span className="audience-card__label">{label}</span>
                </div>

                <div className="audience-card__content">
                  <span className="audience-card__icon">
                    <Icon aria-hidden="true" />
                  </span>

                  <h3>{title}</h3>

                  <p>{description}</p>

                  <Link to={path} className="audience-card__action">
                    <span>{action}</span>
                    <FiArrowUpRight aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default AudienceSelector;