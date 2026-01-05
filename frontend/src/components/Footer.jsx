import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [loading, setLoading] = useState(true);

  /* ================= SKELETON TIMER ================= */
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  /* ================= FOOTER SKELETON ================= */
  const FooterSkeleton = () => (
    <footer className="footer">
      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-brand">
          <div className="skeleton footer-title-skeleton"></div>
          <div className="skeleton footer-text-skeleton"></div>
          <div className="skeleton footer-text-skeleton short"></div>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <div className="skeleton footer-heading-skeleton"></div>
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="skeleton footer-link-skeleton"
              ></div>
            ))}
        </div>

        {/* SERVICES */}
        <div className="footer-links">
          <div className="skeleton footer-heading-skeleton"></div>
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="skeleton footer-link-skeleton"
              ></div>
            ))}
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <div className="skeleton footer-heading-skeleton"></div>
          <div className="skeleton footer-link-skeleton"></div>
          <div className="skeleton footer-link-skeleton"></div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="skeleton footer-bottom-skeleton"></div>
      </div>
    </footer>
  );

  if (loading) return <FooterSkeleton />;

  /* ================= FOOTER CONTENT ================= */
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-brand">
          <Link to="/" className="footer-brand-link">
            <h3>SkyLith Technologies</h3>
          </Link>
          <p>
            Building modern, scalable and future-ready digital solutions for
            startups and businesses.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/#about">About Us</Link>
            </li>
            <li>
              <Link to="/#services">Services</Link>
            </li>
            <li>
              <Link to="/#projects">Projects</Link>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li>
              <Link to="/services/web-development">
                Web Development
              </Link>
            </li>
            <li>
              <Link to="/services/mobile-app">Mobile Apps</Link>
            </li>
            <li>
              <Link to="/services/ui-ux">UI/UX Design</Link>
            </li>
            <li>
              <Link to="/services/consulting">Consulting</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>
            Email:
            <a href="mailto:contact@skylith.com">
              {" "}
              skylithteam@gmail.com
            </a>
          </p>
          <p>Phone: +91 (990) 590-6689</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 SkyLith Technologies. All rights reserved.
      </div>
    </footer>
  );
}
