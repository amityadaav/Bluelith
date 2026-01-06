import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBriefcase,
  FaProjectDiagram,
  FaSmile,
  FaRocket,
  FaBullseye,
  FaCogs,
  FaHandshake,
} from "react-icons/fa";
import "./About.css";

export default function About() {
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(true);

  /* ================= SKELETON TIMER ================= */
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      icon: <FaBriefcase />,
      value: "1+",
      label: "Years Experience",
      title: "Strategy",
      desc:
        "We design scalable, business-driven digital strategies by understanding goals, users, and market needs, ensuring long-term growth, performance, and flexibility for evolving business requirements.",
    },
    {
      icon: <FaProjectDiagram />,
      value: "10+",
      label: "Projects Delivered",
      title: "Execution",
      desc:
        "Our team delivers high-quality projects using clean code, modern technologies, and agile workflows, ensuring timely delivery, strong performance, and maintainable solutions across web and mobile platforms.",
    },
    {
      icon: <FaSmile />,
      value: "100%",
      label: "Client Satisfaction",
      title: "Results",
      desc:
        "We focus on measurable outcomes, client satisfaction, and lasting partnerships by delivering reliable digital solutions that drive growth, trust, and long-term business success.",
    },
  ];

  /* ================= ABOUT SKELETON ================= */
  const AboutSkeleton = () => (
    <section className="about" id="about">
      <div className="about-container">
        {/* LEFT */}
        <div className="about-content">
          <div className="skeleton about-title-skeleton"></div>
          <div className="skeleton about-subtitle-skeleton"></div>
          <div className="skeleton about-text-skeleton"></div>

          <div className="about-points">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="skeleton about-point-skeleton"></div>
              ))}
          </div>

          <div className="skeleton about-btn-skeleton"></div>
        </div>

        {/* RIGHT */}
        <div className="about-visual">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div className="about-card skeleton-wrapper" key={i}>
                <div className="skeleton about-icon-skeleton"></div>
                <div className="skeleton about-value-skeleton"></div>
                <div className="skeleton about-label-skeleton"></div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );

  if (loading) return <AboutSkeleton />;

  /* ================= ABOUT CONTENT ================= */
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* LEFT CONTENT */}
        <div className="about-content">
          <h2 className="About-title">About us</h2>
          <h3 className="About-subtitle">
            We Build Digital Products That Grow Your Business
          </h3>
          <p>
            We are a modern software development company focused on building
            scalable web and mobile solutions. Our mission is to help startups
            and businesses transform ideas into powerful digital experiences.
          </p>

          <div className="about-points">
            <div>
              <FaRocket className="about-icon" />
              High Performance Solutions
            </div>
            <div>
              <FaBullseye className="about-icon" />
              Business-Focused Approach
            </div>
            <div>
              <FaCogs className="about-icon" />
              Modern Tech Stack
            </div>
            <div>
              <FaHandshake className="about-icon" />
              Trusted Long-Term Partnership
            </div>
          </div>

          <button
            className="about-btn magnetic"
            onClick={() => setExpanded(true)}
          >
            Learn More
          </button>
        </div>

        {/* RIGHT VISUAL */}
        <div className="about-visual">
          {stats.map((item, i) => (
            <motion.div
              className="about-card"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                {!expanded ? (
                  <motion.div
                    key="default"
                    className="card-inner"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="icon">{item.icon}</div>
                    <h3>{item.value}</h3>
                    <p>{item.label}</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="details"
                    className="card-inner"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h4>{item.title}</h4>
                    <p className="small-text">{item.desc}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
