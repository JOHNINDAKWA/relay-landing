import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

import "./Footer.css";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { label: "Home", path: "/" },
      { label: "How It Works", path: "/how-it-works" },
      { label: "Get My Parcel", path: "/get-my-parcel" },
      { label: "About Relay", path: "/about" },
    ],
  },
  {
    title: "Work With Relay",
    links: [
      { label: "Become a Relayer", path: "/become-a-relayer" },
      { label: "Partner With Us", path: "/partner-with-us" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Centre", path: "/help" },
      { label: "Contact", path: "/contact" },
      { label: "Parcel Safety", path: "/parcel-safety" },
    ],
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: FiInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: FiFacebook,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: FiLinkedin,
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="site-container">
        <div className="footer__cta">
          <div className="footer__cta-copy">
            <span className="footer__cta-label">
              Ready to use Relay?
            </span>

            <p>
              Let us complete the journey from the pickup location to your
              doorstep.
            </p>
          </div>

          <Link to="/get-my-parcel" className="footer__cta-button">
            <span>Get Started</span>
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>

        <div className="footer__main">
          <div className="footer__introduction">
            <Link
              to="/"
              className="footer__brand"
              aria-label="Relay home"
            >
              <img
                src="/relay-logo.png"
                alt="Relay"
                className="footer__logo"
              />
            </Link>

            <p className="footer__description">
              Relay completes the journey from bus station to doorstep
              through reliable, trackable last-mile parcel delivery.
            </p>

            <div className="footer__contact">
              <a href="mailto:info@relay.co.ke">
                <FiMail aria-hidden="true" />
                <span>info@relay.co.ke</span>
              </a>

              <span>
                <FiMapPin aria-hidden="true" />
                <span>Nairobi, Kenya</span>
              </span>
            </div>

            <div
              className="footer__socials"
              aria-label="Social media links"
            >
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Relay on ${label}`}
                >
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="footer__right">
            <div className="footer__navigation">
              {footerGroups.map((group) => (
                <div className="footer__group" key={group.title}>
                  <h2>{group.title}</h2>

                  <ul>
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <Link to={link.path}>
                          <span>{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="footer__app-download">
              <div className="footer__app-copy">
                <span>Relay mobile app</span>

                <p>
                  Request delivery and track your parcel from your phone.
                </p>
              </div>

              <div className="footer__store-badges">
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download Relay on the App Store"
                >
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                  />
                </a>

                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Get Relay on Google Play"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {currentYear} Relay. All rights reserved.</p>

          <div className="footer__legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/rider-agreement">Rider Agreement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;