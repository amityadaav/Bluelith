import { useEffect, useRef, useState } from "react";
import "./Projects.css";

export default function Projects() {
  const sliderRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    type: "",
    description: "",
    timeline: "",
    budget: "",
  });

  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "Scalable online store with secure payments",
      image: "/images/ecommerce.webp",
    },
    {
      title: "Food Delivery App",
      desc: "Real-time ordering with mobile-first UX",
      image: "/images/food.webp",
    },
    {
      title: "Business Website",
      desc: "Corporate site with SEO & fast performance",
      image: "/images/business.webp",
    },
  ];

  /* ================= SKELETON TIMER ================= */
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    if (loading) return;

    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const cardWidth = 300;

    const autoScroll = setInterval(() => {
      if (window.innerWidth <= 600) {
        scrollAmount += cardWidth;
        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
          scrollAmount = 0;
        }
        slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(autoScroll);
  }, [loading]);

  /* ================= FORM SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "http://localhost:5000/api/projects/start-project",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();
      if (!res.ok) {
        alert(data.message || "Something went wrong");
        return;
      }

      alert("Thanks! We’ll contact you soon 🚀");
      setOpen(false);
    } catch {
      alert("Server error");
    }
  };

  /* ================= SKELETON CARD ================= */
  const ProjectSkeleton = () => (
    <div className="project-card skeleton-wrapper">
      <div className="skeleton project-img-skeleton"></div>
    </div>
  );

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        {/* TITLE */}
        <h2 className="projects-title">Our Projects</h2>
        <p className="projects-subtitle">
          Trusted solutions for modern businesses focus on innovation,
          reliability, and performance. We deliver secure, scalable, and
          user-centric digital solutions.
        </p>

        {/* PROJECT SLIDER */}
        <div className="projects-grid" ref={sliderRef}>
          {loading
            ? Array(3)
                .fill(0)
                .map((_, i) => <ProjectSkeleton key={i} />)
            : projects.map((item, index) => (
                <div className="project-card" key={index}>
                  <div className="project-image">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />

                    <div className="project-overlay">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {/* CTA */}
        <div className="project-cta">
          <h3>Have a Project in Mind?</h3>
          <p>Tell us your idea and we’ll build it perfectly.</p>
          <button onClick={() => setOpen(true)}>
            Start Your Project
          </button>
        </div>

        {/* MODAL */}
        {open && (
          <div className="modal-overlay" onClick={() => setOpen(false)}>
            <div
              className="modal"
              onClick={(e) => e.stopPropagation()}
            >
              <h3>Project Brief</h3>
              <p>Fill the details so we understand your vision</p>

              <form onSubmit={handleSubmit} className="modal-form">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  pattern="[0-9]{10}"
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                />

                <select
                  required
                  onChange={(e) =>
                    setForm({ ...form, type: e.target.value })
                  }
                >
                  <option value="">Project Type</option>
                  <option>Website</option>
                  <option>Mobile App</option>
                  <option>E-Commerce</option>
                  <option>Custom Software</option>
                </select>

                <textarea
                  placeholder="Describe your project idea..."
                  required
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                />

                <div className="modal-row">
                  <select
                    onChange={(e) =>
                      setForm({
                        ...form,
                        timeline: e.target.value,
                      })
                    }
                  >
                    <option value="">Timeline</option>
                    <option>1–2 Weeks</option>
                    <option>1 Month</option>
                    <option>2–3 Months</option>
                  </select>

                  <select
                    onChange={(e) =>
                      setForm({
                        ...form,
                        budget: e.target.value,
                      })
                    }
                  >
                    <option value="">Budget</option>
                    <option>₹10k–₹25k</option>
                    <option>₹25k–₹50k</option>
                    <option>₹50k+</option>
                  </select>
                </div>

                <button type="submit">Submit Project</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
