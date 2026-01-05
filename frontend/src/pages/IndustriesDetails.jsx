
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import "./IndustriesDetails.css";

/* ================= ACCENT COLORS ================= */
const accentColors = {
  healthcare: "#1e88e5",
  education: "#6a1b9a",
  "real-estate": "#2e7d32",
  ecommerce: "#ef6c00",
};

/* ================= DATA ================= */
const servicesData = {
  healthcare: {
    title: "Healthcare Software Solutions",
    subtitle:
      "Secure, scalable, and compliant digital healthcare platforms for hospitals, clinics, and health-tech startups.",
    image: "/images/Healthcare.webp",
    solutions: [
      "Hospital Management Systems",
      "Appointment & Queue Management",
      "Telemedicine Platforms",
      "Patient Portals & EHR Systems",
    ],
    features: [
      "Data security & compliance-focused architecture",
      "Real-time patient & doctor coordination",
      "Scalable cloud-based infrastructure",
      "User-friendly dashboards",
    ],
  },

  education: {
    title: "Education & EdTech Solutions",
    subtitle:
      "Modern digital platforms designed to enhance learning, engagement, and academic management.",
    image: "/images/Elearning.webp",
    solutions: [
      "Learning Management Systems (LMS)",
      "Online Classes & Course Platforms",
      "Exam & Result Management Systems",
      "Student Information Systems",
    ],
    features: [
      "Role-based access for students & teachers",
      "Live & recorded learning support",
      "Performance analytics & reporting",
      "Mobile-first experience",
    ],
  },

  "real-estate": {
    title: "Real Estate Digital Solutions",
    subtitle:
      "Powerful digital tools to manage properties, leads, and customers efficiently.",
    image: "/images/Realstate.webp",
    solutions: [
      "Property Listing Portals",
      "Agent & Customer CRM",
      "Virtual Property Tours",
      "Property Management Systems",
    ],
    features: [
      "Advanced search & filtering",
      "Lead tracking & follow-ups",
      "Map & location integration",
      "High-performance listing pages",
    ],
  },

  ecommerce: {
    title: "E-Commerce Solutions",
    subtitle:
      "High-performance, conversion-focused e-commerce platforms built to scale.",
    image: "/images/Elearning.webp",
    solutions: [
      "Custom Online Stores",
      "Payment & Order Management",
      "Inventory & Vendor Management",
      "Customer Analytics & Reports",
    ],
    features: [
      "Fast & secure checkout experience",
      "Admin dashboard & order tracking",
      "SEO & mobile optimized UI",
      "Scalable product management",
    ],
  },
};


export default function IndustriesDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = servicesData[slug];
  const accent = accentColors[slug] || "#233d4d";

  /* ================= PAGE LOADING ================= */
  const [pageLoading, setPageLoading] = useState(true);

  
const handleGetStarted = () => {
  navigate("/#contact");
};

  useEffect(() => {
    setPageLoading(true);
    const timer = setTimeout(() => setPageLoading(false), 600);
    return () => clearTimeout(timer);
  }, [slug]);

  if (!service) {
    return (
      <div className="industries-details-container">
        <Navbar />
        <div className="not-found-message">
          <h2>Service Not Found</h2>
        </div>
        <Footer />
      </div>
    );
  }

  /* ================= SKELETONS ================= */
/* ================= SKELETONS ================= */
const HeroSkeleton = () => (
  <div className="service-hero split">
    <div className="hero-text-content">
      <div className="skeleton hero-title-skeleton"></div>
      <div className="skeleton hero-subtitle-skeleton"></div>
    </div>
    <div className="hero-image-container">
      <div className="skeleton hero-image-skeleton"></div>
    </div>
  </div>
);

const OfferSkeleton = () => (
  <div className="service-section">
    <div className="skeleton section-title-skeleton"></div>
    <div className="service-grid">
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <div className="skeleton service-card-skeleton" key={i}></div>
        ))}
    </div>
  </div>
);

const FeaturesSkeleton = () => (
  <div className="service-section light-bg">
    <div className="skeleton section-title-skeleton"></div>
    <ul className="features-list">
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <li className="skeleton feature-item-skeleton" key={i}></li>
        ))}
    </ul>
  </div>
);


  /* ================= RENDER ================= */
  return (
    <div className="industries-details-container">
      <Navbar />

      <div className="service-page" style={{ "--accent": accent }}>
        {pageLoading ? (
          <>
            <HeroSkeleton />
            <OfferSkeleton />
            <FeaturesSkeleton />
          </>
        ) : (
          <>
            {/* ===== HERO ===== */}
            <div className="service-hero split">
              <motion.div
                className="hero-text-content"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="hero-title">{service.title}</h1>
                <p className="hero-subtitle">{service.subtitle}</p>
              </motion.div>

              <motion.div
                className="hero-image-container"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="hero-image"
                  loading="lazy"
                />
              </motion.div>
            </div>

            {/* ===== OFFER ===== */}
            <div className="service-section">
              <h2 className="section-title">What We Offer</h2>
              <div className="service-grid">
                {service.solutions.map((item, i) => (
                  <motion.div
                    key={i}
                    className="service-card"
                    whileHover={{ y: -6 }}
                  >
                    <FaCheckCircle className="card-icon" />
                    <span className="card-text">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ===== FEATURES ===== */}
            <div className="service-section light-bg">
              <h2 className="section-title">Key Features</h2>
              <ul className="features-list">
                {service.features.map((item, i) => (
                  <motion.li
                    key={i}
                    className="feature-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <FaCheckCircle className="feature-icon" />
                    <span className="feature-text">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* ===== CTA ===== */}
            <div className="service-cta">
              <h2 className="cta-title">Ready to Build Your Solution?</h2>
              <p className="cta-description">
                Let's discuss your requirements and create a scalable digital product.
              </p>
              <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
