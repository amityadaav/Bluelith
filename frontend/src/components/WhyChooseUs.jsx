import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaLaptopCode,
  FaHandshake,
  FaClock,
} from "react-icons/fa";
import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= SKELETON TIMER ================= */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  /* ================= INTERSECTION OBSERVER ================= */
  useEffect(() => {
    if (loading) return;

    const cards = document.querySelectorAll(".why-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, [loading]);

  /* ================= DATA ================= */
  const points = [
    {
      title: "Expert Team",
      short: "Highly skilled developers & designers",
      long:
        "Our team consists of experienced professionals who have worked on real-world projects across industries. We follow best coding practices, clean architecture, and industry standards.",
      icon: <FaUsers />,
    },
    {
      title: "Modern Technologies",
      short: "Future-ready tech stack",
      long:
        "We use modern technologies like React, Node.js, cloud platforms, and scalable architectures to ensure performance, security, and long-term growth.",
      icon: <FaLaptopCode />,
    },
    {
      title: "Client-Centric Approach",
      short: "Transparent & collaborative",
      long:
        "We believe in clear communication, regular updates, and involving clients in every stage of development to deliver exactly what your business needs.",
      icon: <FaHandshake />,
    },
    {
      title: "On-Time Delivery",
      short: "Agile & reliable execution",
      long:
        "Using agile methodologies, we break projects into milestones, ensuring timely delivery without compromising quality.",
      icon: <FaClock />,
    },
  ];

  /* ================= SKELETON CARD ================= */
  const SkeletonCard = () => (
    <div className="why-card skeleton-wrapper">
      <div className="why-card-header">
        <div className="skeleton why-icon-skeleton"></div>
        <div className="why-text-skeleton">
          <div className="skeleton why-title-skeleton"></div>
          <div className="skeleton why-short-skeleton"></div>
        </div>
      </div>

      <div className="skeleton why-btn-skeleton"></div>
    </div>
  );

  /* ================= RENDER ================= */
  return (
    <section id="WhyChooseUs" className="why">
      <div className="why-container">
        <h2 className="why-title">Why Choose SkyLith</h2>
        <p className="why-subtitle">
          Trusted by startups and businesses for building scalable digital products
        </p>

        <div className="why-grid">
          {loading
            ? Array(4)
                .fill(0)
                .map((_, i) => <SkeletonCard key={i} />)
            : points.map((item, index) => (
                <motion.div
                  className="why-card"
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="why-card-header">
                    <div className="why-icon">{item.icon}</div>
                    <div>
                      <h3>{item.title}</h3>
                      <p className="why-short">{item.short}</p>
                    </div>
                  </div>

                  <button
                    className="why-toggle"
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                  >
                    {activeIndex === index
                      ? "Hide Details"
                      : "Why this matters?"}
                  </button>

                  {activeIndex === index && (
                    <motion.div
                      className="why-faq"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.4 }}
                    >
                      <p>{item.long}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
}
