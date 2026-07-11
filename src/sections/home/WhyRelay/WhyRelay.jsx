import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiMapPin,
  FiNavigation,
} from "react-icons/fi";

import "./WhyRelay.css";

import relay_delivery from "../../../assets/percel-delivery.png";


const benefits = [
  {
    icon: FiMapPin,
    text: "No trip to the bus station",
  },
  {
    icon: FiNavigation,
    text: "Track your delivery",
  },
  {
    icon: FiCheckCircle,
    text: "Receive it at your door",
  },
];

function WhyRelay() {
  return (
    <section className="why-relay">
      <div className="site-container why-relay__layout">
        <div className="why-relay__image">
          <img
            src={relay_delivery}
            alt="Busy bus station where parcels are collected"
          />

          <div className="why-relay__image-overlay" aria-hidden="true" />

          <div className="why-relay__image-note">
            <span>From station</span>

            <div className="why-relay__journey-line" aria-hidden="true">
              <span />
            </div>

            <strong>To your door</strong>
          </div>
        </div>

        <div className="why-relay__content">
          <span className="why-relay__eyebrow">
            Why Relay
          </span>

          <h2>
            Your parcel is at the station.
            <span>We bring it to you.</span>
          </h2>

          <p>
            Relay saves you the trip, the traffic and the queues by collecting
            your parcel and delivering it to your preferred address.
          </p>

          <ul className="why-relay__benefits">
            {benefits.map(({ icon: Icon, text }) => (
              <li key={text}>
                <Icon aria-hidden="true" />
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <Link to="/how-it-works" className="why-relay__action">
            <span>See how it works</span>
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WhyRelay;