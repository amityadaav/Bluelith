// import { FaHospital, FaGraduationCap, FaBuilding, FaShoppingCart, FaArrowRight } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import "./industries.css";

// export default function Industries() {
//   const navigate = useNavigate();

//   const industries = [
//     {
//       title: "Healthcare",
//       icon: <FaHospital />,
//       slug: "healthcare",
//       points: [
//         "Hospital management systems",
//         "Appointment booking apps",
//         "Patient portals",
//         "Telemedicine solutions",
//       ],
//       className: "card-healthcare",
//     },
//     {
//       title: "Education",
//       icon: <FaGraduationCap />,
//       slug: "education",
//       points: [
//         "Learning Management Systems (LMS)",
//         "Online classes & portals",
//         "Exam & result systems",
//         "Student management",
//       ],
//       className: "card-education",
//     },
//     {
//       title: "Real Estate",
//       icon: <FaBuilding />,
//       slug: "real-estate",
//       points: [
//         "Property listing portals",
//         "CRM for agents",
//         "Virtual tour apps",
//         "Property management",
//       ],
//       className: "card-real-estate",
//     },
//     {
//       title: "E-Commerce",
//       icon: <FaShoppingCart />,
//       slug: "ecommerce",
//       points: [
//         "Online stores",
//         "Payment & order systems",
//         "Inventory management",
//         "Customer analytics",
//       ],
//       className: "card-ecommerce",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section id="industries" className="industries py-16 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="title">Industries We Serve</h2>
//         <p className="projects-subtitle">
//           We serve a wide range of industries by delivering professional, reliable, and scalable digital solutions. Our industry-focused approach helps organizations optimize operations, improve efficiency, and drive sustainable growth through secure, high-performance software tailored to specific business needs.
//         </p>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="industry-grid"
//         >
//           {industries.map((item, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               whileHover={{ y: -8 }}
//               className={`industry-card ${item.className} fade-in stagger-delay-${index}`}
//               onClick={() => navigate(`/industries/${item.slug}`)}
//             >
//               <div className="industry-icon">
//                 {item.icon}
//               </div>
//               <h3>{item.title}</h3>
//               <ul>
//                 {item.points.map((point, i) => (
//                   <li key={i}>{point}</li>
//                 ))}
//               </ul>
//               <div className="explore-btn">
//                 <span className="explore-text">Explore Solutions</span>
//                 <div className="arrow-circle">
//                   <FaArrowRight />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import { useEffect, useState } from "react";
import {
  FaHospital,
  FaGraduationCap,
  FaBuilding,
  FaShoppingCart,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Industries.css";

export default function Industries() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  /* 🔥 Skeleton timing (first paint) */
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const industries = [
    {
      title: "Healthcare",
      icon: <FaHospital />,
      slug: "healthcare",
      points: [
        "Hospital management systems",
        "Appointment booking apps",
        "Patient portals",
        "Telemedicine solutions",
      ],
      className: "card-healthcare",
    },
    {
      title: "Education",
      icon: <FaGraduationCap />,
      slug: "education",
      points: [
        "Learning Management Systems (LMS)",
        "Online classes & portals",
        "Exam & result systems",
        "Student management",
      ],
      className: "card-education",
    },
    {
      title: "Real Estate",
      icon: <FaBuilding />,
      slug: "real-estate",
      points: [
        "Property listing portals",
        "CRM for agents",
        "Virtual tour apps",
        "Property management",
      ],
      className: "card-real-estate",
    },
    {
      title: "E-Commerce",
      icon: <FaShoppingCart />,
      slug: "ecommerce",
      points: [
        "Online stores",
        "Payment & order systems",
        "Inventory management",
        "Customer analytics",
      ],
      className: "card-ecommerce",
    },
  ];

  /* ================= FRAMER VARIANTS ================= */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  /* ================= SKELETON CARD ================= */
  const IndustrySkeleton = () => (
    <div className="industry-card skeleton-wrapper">
      <div className="skeleton industry-icon-skeleton"></div>
      <div className="skeleton industry-title-skeleton"></div>

      <ul>
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <li
              key={i}
              className="skeleton industry-point-skeleton"
            ></li>
          ))}
      </ul>

      <div className="skeleton industry-btn-skeleton"></div>
    </div>
  );

  return (
    <section id="industries" className="industries py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="title">Industries We Serve</h2>
        <p className="projects-subtitle">
          We serve a wide range of industries by delivering professional,
          reliable, and scalable digital solutions. Our industry-focused
          approach helps organizations optimize operations, improve efficiency,
          and drive sustainable growth.
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="industry-grid"
        >
          {loading
            ? Array(4)
                .fill(0)
                .map((_, i) => <IndustrySkeleton key={i} />)
            : industries.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                  className={`industry-card ${item.className} fade-in stagger-delay-${index}`}
                  onClick={() =>
                    navigate(`/industries/${item.slug}`)
                  }
                >
                  <div className="industry-icon">{item.icon}</div>
                  <h3>{item.title}</h3>

                  <ul>
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <div className="explore-btn">
                    <span className="explore-text">
                      Explore Solutions
                    </span>
                    <div className="arrow-circle">
                      <FaArrowRight />
                    </div>
                  </div>
                </motion.div>
              ))}
        </motion.div>
      </div>
    </section>
  );
}
