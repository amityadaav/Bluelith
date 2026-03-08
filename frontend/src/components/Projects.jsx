// import { useEffect, useRef, useState } from "react";
// import "./Projects.css";

// export default function Projects() {
//   const sliderRef = useRef(null);
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(true);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     type: "",
//     description: "",
//     timeline: "",
//     budget: "",
//   });

//   const projects = [
//     {
//       title: "E-Commerce Platform",
//       desc: "Scalable online store with secure payments",
//       image: "/images/ecommerce.webp",
//     },
//     {
//       title: "Food Delivery App",
//       desc: "Real-time ordering with mobile-first UX",
//       image: "/images/food.webp",
//     },
//     {
//       title: "Business Website",
//       desc: "Corporate site with SEO & fast performance",
//       image: "/images/business.webp",
//     },
//   ];

//   /* ================= SKELETON TIMER ================= */
//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 700);
//     return () => clearTimeout(timer);
//   }, []);

//   /* ================= AUTO SCROLL ================= */
//   useEffect(() => {
//     if (loading) return;

//     const slider = sliderRef.current;
//     if (!slider) return;

//     let scrollAmount = 0;
//     const cardWidth = 300;

//     const autoScroll = setInterval(() => {
//       if (window.innerWidth <= 600) {
//         scrollAmount += cardWidth;
//         if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
//           scrollAmount = 0;
//         }
//         slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
//       }
//     }, 3000);

//     return () => clearInterval(autoScroll);
//   }, [loading]);

//   /* ================= FORM SUBMIT ================= */
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch(`${import.meta.env.VITE_API_URL}/api/projects/start-project`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });
      

//       const data = await res.json();
//       if (!res.ok) {
//         alert(data.message || "Something went wrong");
//         return;
//       }

//       alert("Thanks! We’ll contact you soon 🚀");
//       setOpen(false);
//     } catch {
//       alert("Server error");
//     }
//   };

//   /* ================= SKELETON CARD ================= */
//   const ProjectSkeleton = () => (
//     <div className="project-card skeleton-wrapper">
//       <div className="skeleton project-img-skeleton"></div>
//     </div>
//   );

//   return (
//     <section className="projects" id="projects">
//       <div className="projects-container">
//         {/* TITLE */}
//         <h2 className="projects-title">Our Projects</h2>
//         <p className="projects-subtitle">
//         Our projects showcase our expertise as a software development company delivering scalable web development services and custom software development solutions for modern businesses.
//         </p>

//         {/* PROJECT SLIDER */}
//         <div className="projects-grid" ref={sliderRef}>
//           {loading
//             ? Array(3)
//                 .fill(0)
//                 .map((_, i) => <ProjectSkeleton key={i} />)
//             : projects.map((item, index) => (
//                 <div className="project-card" key={index}>
//                   <div className="project-image">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       loading="lazy"
//                     />

//                     <div className="project-overlay">
//                       <h3>{item.title}</h3>
//                       <p>{item.desc}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//         </div>

//         {/* CTA */}
//         <div className="project-cta">
//           <h3>Have a Project in Mind?</h3>
//           <p>Tell us your idea and we’ll build it perfectly.</p>
//           <button onClick={() => setOpen(true)}>
//             Start Your Project
//           </button>
//         </div>

//         {/* MODAL */}
//         {open && (
//           <div className="modal-overlay" onClick={() => setOpen(false)}>
//             <div
//               className="modal"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <h3>Project Brief</h3>
//               <p>Fill the details so we understand your vision</p>

//               <form onSubmit={handleSubmit} className="modal-form">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   required
//                   onChange={(e) =>
//                     setForm({ ...form, name: e.target.value })
//                   }
//                 />

//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   required
//                   pattern="[0-9]{10}"
//                   onChange={(e) =>
//                     setForm({ ...form, phone: e.target.value })
//                   }
//                 />

//                 <select
//                   required
//                   onChange={(e) =>
//                     setForm({ ...form, type: e.target.value })
//                   }
//                 >
//                   <option value="">Project Type</option>
//                   <option>Website</option>
//                   <option>Mobile App</option>
//                   <option>E-Commerce</option>
//                   <option>Custom Software</option>
//                 </select>

//                 <textarea
//                   placeholder="Describe your project idea..."
//                   required
//                   onChange={(e) =>
//                     setForm({ ...form, description: e.target.value })
//                   }
//                 />

//                 <div className="modal-row">
//                   <select
//                     onChange={(e) =>
//                       setForm({
//                         ...form,
//                         timeline: e.target.value,
//                       })
//                     }
//                   >
//                     <option value="">Timeline</option>
//                     <option>1–2 Weeks</option>
//                     <option>1 Month</option>
//                     <option>2–3 Months</option>
//                   </select>

//                   <select
//                     onChange={(e) =>
//                       setForm({
//                         ...form,
//                         budget: e.target.value,
//                       })
//                     }
//                   >
//                     <option value="">Budget</option>
//                     <option>₹10k–₹25k</option>
//                     <option>₹25k–₹50k</option>
//                     <option>₹50k+</option>
//                   </select>
//                 </div>

//                 <button type="submit">Submit Project</button>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
import { useEffect, useRef, useState } from "react";
import "./Projects.css";

export default function Projects() {

  const sliderRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  const [successPopup, setSuccessPopup] = useState(false);

  const [errors, setErrors] = useState({});

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

        slider.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });

      }

    }, 3000);

    return () => clearInterval(autoScroll);

  }, [loading]);

  /* ================= FORM VALIDATION ================= */

  const validateForm = () => {

    let newErrors = {};

    if (!form.name.trim())
      newErrors.name = "Name is required";

    if (form.name.length < 3)
      newErrors.name = "Name must be at least 3 characters";

    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(form.phone))
      newErrors.phone = "Enter valid 10 digit phone";

    if (!form.type)
      newErrors.type = "Select project type";

    if (!form.description)
      newErrors.description = "Project description required";

    if (form.description.length < 10)
      newErrors.description = "Description must be at least 10 characters";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* ================= FORM SUBMIT ================= */

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validateForm()) return;

    setSending(true);

    try {

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/projects/start-project`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (!res.ok)
        throw new Error(data.message);

      setSuccessPopup(true);
      setOpen(false);

      setForm({
        name: "",
        phone: "",
        type: "",
        description: "",
        timeline: "",
        budget: "",
      });

    } catch (err) {

      alert("Error: " + err.message);

    } finally {

      setSending(false);

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
          Our projects showcase our expertise as a software development company
          delivering scalable web development services and custom software
          solutions for modern businesses.
        </p>

        {/* PROJECT GRID */}

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
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />
                {errors.name && <p className="form-error">{errors.name}</p>}

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                />
                {errors.phone && <p className="form-error">{errors.phone}</p>}

                <select
                  value={form.type}
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
                {errors.type && <p className="form-error">{errors.type}</p>}

                <textarea
                  placeholder="Describe your project idea..."
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                />
                {errors.description && (
                  <p className="form-error">{errors.description}</p>
                )}

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

                <button type="submit" disabled={sending}>

                  {sending ? (
                    <span className="loader"></span>
                  ) : (
                    "Submit Project"
                  )}

                </button>

              </form>

            </div>

          </div>

        )}

        {/* SUCCESS POPUP */}

        {successPopup && (

          <div className="popup-overlay">

            <div className="popup">

              <h3>🎉 Thank You!</h3>

              <p>
                Your project request has been submitted successfully.
                Our team will contact you soon.
              </p>

              <button onClick={() => setSuccessPopup(false)}>
                Close
              </button>

            </div>

          </div>

        )}

      </div>

    </section>
  );
}