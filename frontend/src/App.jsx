
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// 🔥 PAGES
import ServiceDetails from "./pages/ServiceDetails";
import IndustriesDetails from "./pages/IndustriesDetails";
import Industries from "./components/Industries";

/* ---------------- HOME PAGE ---------------- */
function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Projects />
      <Industries />
      <Contact />
      <Footer />
    </>
  );
}

/* -------- HASH SCROLL HANDLER (IMPORTANT) -------- */
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        // slight delay for DOM render
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return null;
}

/* ---------------- APP ---------------- */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<HomePage />} />

        {/* SERVICE DETAILS */}
        <Route path="/services/:service" element={<ServiceDetails />} />

        {/* INDUSTRY DETAILS */}
        <Route path="/industries/:slug" element={<IndustriesDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
