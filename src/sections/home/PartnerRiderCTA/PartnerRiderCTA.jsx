import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiTruck,
} from "react-icons/fi";

import "./PartnerRiderCTA.css";

import relay_rider from "../../../assets/relay-car-rider.jpeg";
import relay_partner from "../../../assets/relay-partner.jpeg";


function PartnerRiderCTA() {
  return (
    <section className="partner-rider-cta">
      <div className="site-container">

        <div className="partner-rider-cta__layout">
          <article className="partner-rider-cta__panel partner-rider-cta__panel--partner">
            <img
              src={relay_partner}
              alt="Transport vehicles at a busy station"
              className="partner-rider-cta__image"
            />

            <div
              className="partner-rider-cta__overlay"
              aria-hidden="true"
            />

            <div className="partner-rider-cta__top">
              <span className="partner-rider-cta__icon">
                <FiBriefcase aria-hidden="true" />
              </span>

              <span>For transport operators</span>
            </div>

            <div className="partner-rider-cta__content">
              <h3>Become a Relay partner</h3>

              <p>
                Supported Businesses, retailers and bus terminals can offer customers
                reliable doorstep delivery through Relay.
              </p>

              <Link
                to="/partner-with-us"
                className="partner-rider-cta__action"
              >
                <span>Partner with us</span>
                <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </article>

          <article className="partner-rider-cta__panel partner-rider-cta__panel--rider">
            <img
              src={relay_rider}
              alt="Motorcycle rider travelling through the city"
              className="partner-rider-cta__image"
            />

            <div
              className="partner-rider-cta__overlay"
              aria-hidden="true"
            />

            <div className="partner-rider-cta__top">
              <span className="partner-rider-cta__icon">
                <FiTruck aria-hidden="true" />
              </span>

              <span>For delivery riders</span>
            </div>

            <div className="partner-rider-cta__content">
              <h3>Become a Relayer rider</h3>

              <p>
                Receive delivery opportunities through the Relay app and earn
                by delivering parcels around Nairobi.
              </p>

              <Link
                to="/become-a-relayer"
                className="partner-rider-cta__action"
              >
                <span>Become a rider</span>
                <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
    
  );
}

export default PartnerRiderCTA;