// import { useState, useEffect } from "react";
// import "./Contact.css";

// export default function Contact() {
//   const [pageLoading, setPageLoading] = useState(true);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");

//   /* ================= SKELETON TIMER ================= */
//   useEffect(() => {
//     const timer = setTimeout(() => setPageLoading(false), 600);
//     return () => clearTimeout(timer);
//   }, []);

//   /* ================= INPUT CHANGE ================= */
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   /* ================= FORM SUBMIT ================= */
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess("");

//     try {
//       const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || "Something went wrong");

//       setSuccess("✅ Message sent successfully!");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= CONTACT SKELETON ================= */
//   const ContactSkeleton = () => (
//     <section id="contact" className="contact">
//       <div className="contact-container">
//         {/* LEFT */}
//         <div className="contact-left">
//           <div className="skeleton contact-title-skeleton"></div>
//           <div className="skeleton contact-text-skeleton"></div>
//           <div className="skeleton contact-text-skeleton short"></div>
//         </div>

//         {/* FORM */}
//         <div className="contact-form">
//           <div className="skeleton input-skeleton"></div>
//           <div className="skeleton input-skeleton"></div>
//           <div className="skeleton textarea-skeleton"></div>
//           <div className="skeleton submit-btn-skeleton"></div>
//         </div>
//       </div>
//     </section>
//   );

//   if (pageLoading) return <ContactSkeleton />;

//   /* ================= CONTACT CONTENT ================= */
//   return (
//     <section id="contact" className="contact">
//       <div className="contact-container">
//         {/* LEFT CONTENT */}
//         <div className="contact-left">
//           <h2>Let’s Build Something Great</h2>
//           <p>
//             Have a project in mind? Contact SkyLith and let’s discuss how we can
//             help your business grow.
//           </p>
//         </div>

//         {/* FORM */}
//         <form className="contact-form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit" disabled={loading}>
//             {loading ? "Sending..." : "Send Message"}
//           </button>

//           {success && <p className="success-msg">{success}</p>}
//           {error && <p className="error-msg">{error}</p>}
//         </form>
//       </div>
//     </section>
//   );
// }
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
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  /* skeleton */
  useEffect(() => {
    const timer = setTimeout(() => setPageLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  /* input change */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* ================= VALIDATION ================= */

  const validateForm = () => {

    let newErrors = {};

    if (!formData.name.trim())
      newErrors.name = "Name is required";

    if (formData.name.length < 3)
      newErrors.name = "Name must be at least 3 characters";

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email)
      newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email";

    if (!formData.message)
      newErrors.message = "Message cannot be empty";

    if (formData.message.length < 10)
      newErrors.message =
        "Message must be at least 10 characters";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok)
        throw new Error(data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setShowPopup(true);

    } catch (err) {

      alert("Error sending message: " + err.message);

    } finally {

      setLoading(false);

    }
  };

  if (pageLoading) return null;

  return (
    <section id="contact" className="contact">

      <div className="contact-container">

        {/* LEFT */}

        <div className="contact-left">

          <h2>Let’s Build Something Great</h2>

          <p>
            Have a project in mind? Contact BlueLith and
            let’s discuss how we can help your business grow.
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
          />
          {errors.name && (
            <p className="form-error">{errors.name}</p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="form-error">{errors.email}</p>
          )}

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className="form-error">{errors.message}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="submit-btn"
          >

            {loading ? (
              <span className="loader"></span>
            ) : (
              "Send Message"
            )}

          </button>

        </form>

      </div>

      {/* SUCCESS POPUP */}

      {showPopup && (
        <div className="popup-overlay">

          <div className="popup">

            <h3>🎉 Thank You!</h3>

            <p>
              Your message has been received.  
              Our team will reach out to you soon.
            </p>

            <button
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>

          </div>

        </div>
      )}

    </section>
  );
}