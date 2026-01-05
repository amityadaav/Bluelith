// import { useState } from "react";
// import "./Services.css";

// export default function Services() {
//   const services = [
//     {
//       title: "Web Development",
//       desc: "Modern, scalable and high-performance websites",
//       image: "/images/service_web.png",
//     },
//     {
//       title: "Mobile Apps",
//       desc: "Android & iOS apps using React Native & Flutter",
//       image: "/images/service_mobile.png",
//     },
//     {
//       title: "UI/UX Design",
//       desc: "Clean, user-focused and conversion-driven design",
//       image: "/images/service_uxui.png",
//     },
//   ];

//   const [active, setActive] = useState(0);

//   return (
//     <section className="services" id="services">
//       <div className="services-container">

//         {/* LEFT SIDE – SERVICE SLIDER */}
//         <div className="services-left">
//           <h2 className="section-title">Our Services</h2>
//           <p className="section-subtitle">
//             Technology-driven digital solutions for modern businesses
//           </p>

//           <div className="service-slider">
//             {services.map((item, index) => (
//               <div
//                 key={index}
//                 className={`service-card ${
//                   active === index ? "active" : ""
//                 }`}
//                 onClick={() => setActive(index)}
//               >
//                 <h3>{item.title}</h3>
//                 <p>{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT SIDE – IMAGE */}
//         <div className="services-right">
//           <img
//             src={services[active].image}
//             alt={services[active].title}
//             className="service-image"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }
// import { useState, useEffect, useRef } from "react";
// import "./Services.css";

// export default function Services() {
//   const services = [
//     {
//       title: "Web Development",
//       desc: "Modern, scalable and high-performance websites",
//       image: "/images/service_web.png",
//     },
//     {
//       title: "Mobile Apps",
//       desc: "Android & iOS apps using React Native & Flutter",
//       image: "/images/service_mobile.png",
//     },
//     {
//       title: "UI/UX Design",
//       desc: "Clean, user-focused and conversion-driven design",
//       image: "/images/service_uxui.png",
//     },
//   ];

//   const [active, setActive] = useState(0);
//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);

//   /* 🔁 AUTO SLIDE */
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActive((prev) => (prev + 1) % services.length);
//     }, 4000); // 4 sec

//     return () => clearInterval(interval);
//   }, []);

//   /* 👉 TOUCH HANDLERS */
//   const handleTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = (e) => {
//     touchEndX.current = e.changedTouches[0].clientX;
//     handleSwipe();
//   };

//   const handleSwipe = () => {
//     const diff = touchStartX.current - touchEndX.current;
//     if (diff > 50) {
//       // swipe left
//       setActive((prev) => (prev + 1) % services.length);
//     } else if (diff < -50) {
//       // swipe right
//       setActive((prev) =>
//         prev === 0 ? services.length - 1 : prev - 1
//       );
//     }
//   };

//   return (
//     <section
//       className="services"
//       id="services"
//       onTouchStart={handleTouchStart}
//       onTouchEnd={handleTouchEnd}
//     >
//       <div className="services-container">

//         {/* LEFT */}
//         <div className="services-left">
//           <h2 className="section-title">Our Services</h2>
//           <p className="section-subtitle">
//             Technology-driven digital solutions
//           </p>

//           <div className="service-slider">
//             {services.map((item, index) => (
//               <div
//                 key={index}
//                 className={`service-card ${
//                   active === index ? "active" : ""
//                 }`}
//                 onClick={() => setActive(index)}
//               >
//                 <h3>{item.title}</h3>
//                 <p>{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="services-right">
//           <img
//             src={services[active].image}
//             alt={services[active].title}
//             className="service-image"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }


// import { useNavigate } from "react-router-dom";

// export default function Services() {
//   const navigate = useNavigate();

//   return (
//     <div className="services-grid">

//       <div
//         className="service-card"
//         onClick={() => navigate("/services/web-development")}
//       >
//         <h3>Web Development</h3>
//         <p>Modern & scalable websites</p>
//       </div>

//       <div
//         className="service-card"
//         onClick={() => navigate("/services/mobile-app")}
//       >
//         <h3>Mobile App Development</h3>
//         <p>Android & iOS applications</p>
//       </div>

//       <div
//         className="service-card"
//         onClick={() => navigate("/services/ui-ux")}
//       >
//         <h3>UI / UX Design</h3>
//         <p>Clean & user-friendly designs</p>
//       </div>

//     </div>
//   );
// // }
// import { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Services.css";

// export default function Services() {
//   const navigate = useNavigate();

//   const services = [
// {
//   title: "Web Development",
//   slug: "web-development",
//   desc: "We build fast, secure, and scalable websites with modern technologies that deliver seamless user experiences and measurable business growth.",
//   image: "/images/Web.webp",
// },
// {
//   title: "Mobile Apps",
//   slug: "mobile-app",
//   desc: "High-performance Android and iOS applications crafted using React Native and Flutter for reliability, speed, and user engagement.",
//   image: "/images/app.webp",
// },
// {
//   title: "UI/UX Design",
//   slug: "ui-ux",
//   desc: "User-centered interface and experience designs focused on usability, aesthetics, and conversions to create intuitive digital products.",
//   image: "/images/uiux.webp",
// },

//   ];

//   const [active, setActive] = useState(0);
//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);

//   /* 🔁 AUTO SLIDE */
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActive((prev) => (prev + 1) % services.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [services.length]);

//   /* 👉 TOUCH HANDLERS */
//   const handleTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = (e) => {
//     touchEndX.current = e.changedTouches[0].clientX;
//     handleSwipe();
//   };

//   const handleSwipe = () => {
//     const diff = touchStartX.current - touchEndX.current;
//     if (diff > 50) {
//       setActive((prev) => (prev + 1) % services.length);
//     } else if (diff < -50) {
//       setActive((prev) =>
//         prev === 0 ? services.length - 1 : prev - 1
//       );
//     }
//   };

//   return (
//     <section
//       className="services"
//       id="services"
//       onTouchStart={handleTouchStart}
//       onTouchEnd={handleTouchEnd}
//     >
//       <div className="services-container">

//         {/* LEFT SIDE */}
//         <div className="services-left">
//           <h2 className="section-title">Our Services</h2>
//           <p className="section-subtitle">
//             Technology-driven digital solutions for modern businesses
//           </p>

//           <div className="service-slider">
//             {services.map((item, index) => (
//               <div
//                 key={index}
//                 className={`service-card ${
//                   active === index ? "active" : ""
//                 }`}
//                 onClick={() =>
//                   navigate(`/services/${item.slug}`)
//                 }
//               >
//                 <h3>{item.title}</h3>

//               <div className="card-bottom">
//                  <p>{item.desc}</p>
//               <span className="view-more">View Details →</span>
//               </div>


//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="services-right">
//           <img
//             src={services[active].image}
//             alt={services[active].title}
//             className="service-image" loading="lazy"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }


import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Web Development",
      slug: "web-development",
      desc:
        "We build fast, secure, and scalable websites with modern technologies that deliver seamless user experiences and measurable business growth.",
      image: "/images/Web.webp",
    },
    {
      title: "Mobile Apps",
      slug: "mobile-app",
      desc:
        "High-performance Android and iOS applications crafted using React Native and Flutter for reliability, speed, and user engagement.",
      image: "/images/app.webp",
    },
    {
      title: "UI/UX Design",
      slug: "ui-ux",
      desc:
        "User-centered interface and experience designs focused on usability, aesthetics, and conversions to create intuitive digital products.",
      image: "/images/uiux.webp",
    },
  ];

  /* ================= STATES ================= */
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  /* ================= SKELETON TIMER ================= */
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  /* ================= AUTO SLIDE ================= */
  useEffect(() => {
    if (loading) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [services.length, loading]);

  /* ================= TOUCH HANDLERS ================= */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      setActive((prev) => (prev + 1) % services.length);
    } else if (diff < -50) {
      setActive((prev) =>
        prev === 0 ? services.length - 1 : prev - 1
      );
    }
  };

  /* ================= SKELETON COMPONENTS ================= */
  const ServiceCardSkeleton = () => (
    <div className="service-card skeleton-wrapper">
      <div className="skeleton service-title-skeleton"></div>
      <div className="skeleton service-desc-skeleton"></div>
      <div className="skeleton service-link-skeleton"></div>
    </div>
  );

  const ImageSkeleton = () => (
    <div className="skeleton service-image-skeleton"></div>
  );

  /* ================= RENDER ================= */
  return (
    <section
      className="services"
      id="services"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="services-container">
        {/* LEFT SIDE */}
        <div className="services-left">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Technology-driven digital solutions for modern businesses
          </p>

          <div className="service-slider">
            {loading
              ? Array(3)
                  .fill(0)
                  .map((_, i) => <ServiceCardSkeleton key={i} />)
              : services.map((item, index) => (
                  <div
                    key={index}
                    className={`service-card ${
                      active === index ? "active" : ""
                    }`}
                    onClick={() =>
                      navigate(`/services/${item.slug}`)
                    }
                  >
                    <h3>{item.title}</h3>

                    <div className="card-bottom">
                      <p>{item.desc}</p>
                      <span className="view-more">
                        View Details →
                      </span>
                    </div>
                  </div>
                ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="services-right">
          {loading ? (
            <ImageSkeleton />
          ) : (
            <img
              src={services[active].image}
              alt={services[active].title}
              className="service-image"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </section>
  );
}
