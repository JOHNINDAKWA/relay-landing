import { Link } from "react-router-dom";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";

import "./SupportedAreas.css";

function SupportedAreas() {
  return (
    <section
      className="supported-areas"
      aria-labelledby="supported-areas-title"
    >
      <div className="site-container supported-areas__container">
        <div className="supported-areas__panel">
          <div className="supported-areas__top">
            <span
              className="supported-areas__label"
              id="supported-areas-title"
            >
              Currently supported areas
            </span>

            <div className="supported-areas__locations">
              <div className="supported-areas__location">
                <span className="supported-areas__icon">
                  <FiMapPin aria-hidden="true" />
                </span>

                <strong>Nairobi</strong>
              </div>

              <span
                className="supported-areas__divider"
                aria-hidden="true"
              />

              <div className="supported-areas__location">
                <span className="supported-areas__icon">
                  <FiMapPin aria-hidden="true" />
                </span>

                <strong>Kilifi</strong>
              </div>
            </div>
          </div>

          <div className="supported-areas__bottom">
            <p>
              Need Relay pickup and delivery support for your business?
            </p>

            <Link to="/partner-with-us">
              Partner with us
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportedAreas;