import { useState, useEffect } from "react";
import "./Contact.css";

export default function Contact() {
  const [pageLoading, setPageLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  /* ================= SKELETON TIMER ================= */
  useEffect(() => {
    const timer = setTimeout(() => setPageLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  /* ================= INPUT CHANGE ================= */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* ================= FORM SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");

      setSuccess("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  /* ================= CONTACT SKELETON ================= */
  const ContactSkeleton = () => (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* LEFT */}
        <div className="contact-left">
          <div className="skeleton contact-title-skeleton"></div>
          <div className="skeleton contact-text-skeleton"></div>
          <div className="skeleton contact-text-skeleton short"></div>
        </div>

        {/* FORM */}
        <div className="contact-form">
          <div className="skeleton input-skeleton"></div>
          <div className="skeleton input-skeleton"></div>
          <div className="skeleton textarea-skeleton"></div>
          <div className="skeleton submit-btn-skeleton"></div>
        </div>
      </div>
    </section>
  );

  if (pageLoading) return <ContactSkeleton />;

  /* ================= CONTACT CONTENT ================= */
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* LEFT CONTENT */}
        <div className="contact-left">
          <h2>Let’s Build Something Great</h2>
          <p>
            Have a project in mind? Contact SkyLith and let’s discuss how we can
            help your business grow.
          </p>
        </div>

        {/* FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && <p className="success-msg">{success}</p>}
          {error && <p className="error-msg">{error}</p>}
        </form>
      </div>
    </section>
  );
}
