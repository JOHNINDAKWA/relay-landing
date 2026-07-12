import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FiArrowUpRight,
  FiMenu,
  FiPackage,
  FiX,
} from "react-icons/fi";

import "./Navbar.css";

const navigationItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "How It Works",
    path: "/how-it-works",
  },
  {
    label: "Get My Parcel",
    path: "/get-my-parcel",
  },
  {
    label: "Become a Relayer",
    path: "/become-a-relayer",
  },
  {
    label: "Partner With Us",
    path: "/partner-with-us",
  },
  {
    label: "About",
    path: "/about",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((previousState) => !previousState);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <header
      className={[
        "navbar",
        scrolled ? "navbar--scrolled" : "",
        menuOpen ? "navbar--menu-open" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="site-container navbar__inner">
        <Link
          to="/"
          className="navbar__brand"
          onClick={closeMenu}
          aria-label="Relay homepage"
        >
          <picture className="navbar__logo-picture">
            <source
              media="(max-width: 760px)"
              srcSet="/relay-logo.png"
            />

            <img
              src="/logo.png"
              alt="Relay"
              className="navbar__logo"
            />
          </picture>
        </Link>

        <nav
          id="main-navigation"
          className={[
            "navbar__navigation",
            menuOpen ? "navbar__navigation--open" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          aria-label="Main navigation"
        >
          <ul className="navbar__links">
            {navigationItems.map((item, index) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    [
                      "navbar__link",
                      isActive ? "navbar__link--active" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                >
                  <span className="navbar__link-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="navbar__link-text">
                    {item.label}
                  </span>

                  <FiArrowUpRight
                    className="navbar__link-icon"
                    aria-hidden="true"
                  />
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="navbar__mobile-actions">
            <Link
              to="/get-my-parcel"
              className="navbar__mobile-track"
              onClick={closeMenu}
            >
              <FiPackage aria-hidden="true" />
              <span>Get my parcel</span>
            </Link>

            <Link
              to="/get-my-parcel"
              className="navbar__mobile-primary"
              onClick={closeMenu}
            >
              <span>Get started</span>
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>

          <div className="navbar__mobile-footer">
            <span>Nairobi, Kenya</span>
            <span>Last-mile parcel delivery</span>
          </div>
        </nav>

        <div className="navbar__actions">
          <Link
            to="/get-my-parcel"
            className="navbar__track-link"
          >
            <FiPackage aria-hidden="true" />
            <span>Get my parcel</span>
          </Link>

          <Link
            to="/get-my-parcel"
            className="navbar__cta"
          >
            <span>Get Started</span>
            <FiArrowUpRight aria-hidden="true" />
          </Link>

          <button
            type="button"
            className={[
              "navbar__menu-button",
              menuOpen ? "navbar__menu-button--open" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={toggleMenu}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
          >
            {menuOpen ? (
              <FiX aria-hidden="true" />
            ) : (
              <FiMenu aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <button
        type="button"
        className={[
          "navbar__backdrop",
          menuOpen ? "navbar__backdrop--visible" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={closeMenu}
        aria-label="Close navigation menu"
        tabIndex={menuOpen ? 0 : -1}
      />
    </header>
  );
}

export default Navbar;