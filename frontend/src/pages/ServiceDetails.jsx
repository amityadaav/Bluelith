
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ServiceDetails.css";

export default function ServiceDetails() {
  const { service } = useParams();
  const navigate = useNavigate();

  /* ================= SERVICE DATA ================= */
  const serviceData = {
    "web-development": {
      title: "Enterprise-Grade Web Development",
      desc:
        "In an era where your digital presence is your primary storefront, we build high-performance, secure, and infinitely scalable web applications.",
      heroImage: "/images/hero-web.webp",
      features: [
        "Responsive & Mobile-First Design",
        "Advanced SEO Semantic Structure",
        "Optimized Core Web Vitals",
        "Secure & Scalable Architecture",
        "Custom CMS Integration",
        "Clean, Maintainable Codebase",
      ],
    },
    "mobile-app": {
      title: "Next-Gen Mobile App Engineering",
      desc:
        "We build high-performance Android & iOS applications using modern cross-platform technologies.",
      heroImage: "/images/hero-app.webp",
      features: [
        "Cross-platform Development",
        "Native Performance",
        "Secure APIs",
        "Offline Support",
        "App Store Deployment",
      ],
    },
    "ui-ux": {
      title: "Strategic UI / UX Design",
      desc:
        "User-centric designs that increase engagement, retention, and conversions.",
      heroImage: "/images/uiux.webp",
      features: [
        "User Research",
        "High-Fidelity UI",
        "Design Systems",
        "CRO Layouts",
        "Accessibility",
      ],
    },
  };

  const data = serviceData[service];

  /* ================= STATES ================= */
  const [pageLoading, setPageLoading] = useState(true);
  const [openCallModal, setOpenCallModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [callData, setCallData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  /* ================= PAGE SKELETON TRIGGER ================= */
  useEffect(() => {
    setPageLoading(true);

    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [service]);

  if (!data) {
    return (
      <>
        <Navbar />
        <h2 className="not-found">Service not found</h2>
        <Footer />
      </>
    );
  }

  /* ================= FORM SUBMIT ================= */
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(import.meta.env.VITE_API_URL + "/api/schedule-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...callData, service }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Server error");

      alert("✅ Call scheduled successfully!");
      setOpenCallModal(false);
      setCallData({ name: "", email: "", phone: "", date: "", time: "" });
    } catch (err) {
      alert("❌ " + err.message);
    } finally {
      setLoading(false);
    }
  };

  /* ================= SKELETON COMPONENTS ================= */
  const HeroSkeleton = () => (
    <section className="service-hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="skeleton hero-title"></div>
          <div className="skeleton hero-desc"></div>
          <div className="hero-buttons">
            <div className="skeleton hero-btn"></div>
            <div className="skeleton hero-btn outline"></div>
          </div>
        </div>
        <div className="hero-image">
          <div className="skeleton hero-img"></div>
        </div>
      </div>
    </section>
  );

  const FeaturesSkeleton = () => (
    <section className="features-section">
      <div className="skeleton features-title"></div>
      <div className="features-grid">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div className="skeleton feature-skeleton" key={i}></div>
          ))}
      </div>
    </section>
  );

  /* ================= RENDER ================= */
  return (
    <>
      <Navbar />

      <div className="service-page">
        {pageLoading ? (
          <>
            <HeroSkeleton />
            <FeaturesSkeleton />
          </>
        ) : (
          <>
            {/* ===== HERO ===== */}
            <section className="service-hero">
              <div className="hero-content">
                <div className="hero-text">
                  <h1>{data.title}</h1>
                  <p>{data.desc}</p>

                  <div className="hero-buttons">
                    <button
                      className="btn-primary"
                      onClick={() => navigate("/#contact")}
                    >
                      Get Free Quote
                    </button>

                    <button
                      className="btn-outline"
                      onClick={() => setOpenCallModal(true)}
                    >
                      Schedule a Call
                    </button>
                  </div>
                </div>

                <div className="hero-image">
                  <img
                    src={data.heroImage}
                    alt={data.title}
                    loading="lazy"
                  />
                </div>
              </div>
            </section>

            {/* ===== FEATURES ===== */}
            <section className="features-section">
              <h2>Key Features</h2>
              <div className="features-grid">
                {data.features.map((f, i) => (
                  <div className="feature-card" key={i}>
                    {f}
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </div>

      {/* ===== MODAL ===== */}
      {openCallModal && (
        <div
          className="call-modal-overlay"
          onClick={() => setOpenCallModal(false)}
        >
          <div
            className="call-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="call-modal-close"
              onClick={() => setOpenCallModal(false)}
            >
              ×
            </button>

            <h3>Schedule a Call</h3>
            <p>Select your preferred date & time</p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                required
                value={callData.name}
                onChange={(e) =>
                  setCallData({ ...callData, name: e.target.value })
                }
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                value={callData.email}
                onChange={(e) =>
                  setCallData({ ...callData, email: e.target.value })
                }
              />

              <input
                type="tel"
                placeholder="Your Phone Number"
                required
                value={callData.phone}
                onChange={(e) =>
                  setCallData({ ...callData, phone: e.target.value })
                }
              />

              <input
                type="date"
                required
                min={today}
                value={callData.date}
                onChange={(e) =>
                  setCallData({ ...callData, date: e.target.value })
                }
              />

              <input
                type="time"
                required
                value={callData.time}
                onChange={(e) =>
                  setCallData({ ...callData, time: e.target.value })
                }
              />

              <button type="submit" disabled={loading}>
                {loading ? "Scheduling..." : "Confirm Call"}
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
