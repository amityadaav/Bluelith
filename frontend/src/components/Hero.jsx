import { useEffect, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [loading, setLoading] = useState(true);

  /* ================= SKELETON TIMER ================= */
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* ================= HERO SKELETON ================= */
  const HeroSkeleton = () => (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        {/* LEFT */}
        <div className="hero-left">
          <div className="skeleton hero-title-skeleton"></div>
          <div className="skeleton hero-title-skeleton short"></div>
          <div className="skeleton hero-title-skeleton shorter"></div>

          <div className="skeleton hero-sub-skeleton"></div>
          <div className="skeleton hero-btn-skeleton"></div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="skeleton hero-img-skeleton large"></div>
          <div className="skeleton hero-img-skeleton small"></div>
          <div className="skeleton hero-img-skeleton small2"></div>
        </div>
      </div>
    </section>
  );

  if (loading) return <HeroSkeleton />;

  /* ================= HERO CONTENT ================= */
  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <h1 className="hero-title">
            <span>CREATIVITY</span>
            <br />
            <span>MEETS</span>
            <br />
            <span>
              STRATEGY <span className="knight">♟</span>
            </span>
          </h1>

          <p className="hero-sub">
            We help brands grow using innovative design, smart strategy,
            and modern technology to build trust and drive long-term success.
          </p>

          <button className="btn-primary" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>

        <div className="hero-right">
          <div className="hero-card">
            <img
              src="/images/analyzing-data.webp"
              loading="lazy"
              alt="team"
            />
          </div>
          <div className="hero-card small">
            <img
              src="/images/Cloud-Digital.webp"
              loading="lazy"
              alt="cloud"
            />
          </div>
          <div className="hero-card small2">
            <img
              src="/images/handshake.webp"
              loading="lazy"
              alt="partnership"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
