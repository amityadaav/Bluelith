
// import { useState } from "react";
// import { IoSearch, IoClose, IoMenu } from "react-icons/io5";
// import "./navbar.css";
// import WhyChooseUs from "./WhyChooseUs";

// export default function Navbar() {
//   const [openMenu, setOpenMenu] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);

//   const menuItems = [
//     { label: "Home", id: "hero" },
//     { label: "About", id: "about" },
//     { label: "WhyChooseUs", id : "WhyChooseUs"},
//     { label: "Services", id: "services" },
//     { label: "Projects", id: "projects" },
//     { label: "Industries", id: "industries" },
//   ];

//   const handleScroll = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//     setOpenMenu(false); // mobile menu close
//   };

//   return (
//     <header className="tcs-navbar">
//       <div className="nav-container">

//         {/* LOGO */}
//         <div className="left-section">
//           <img src="/images/logo.jpg" className="tcs-logo" alt="SkyLith Technologies" />
//           <span className="brand-text">SkyLith </span>
//         </div>

//         {/* DESKTOP MENU */}
//         <nav className="center-menu">
//           {menuItems.map((item) => (
//             <div
//               className="menu-item"
//               key={item.id}
//               onClick={() => handleScroll(item.id)}
//             >
//               {item.label}
//             </div>
//           ))}
//         </nav>

//         {/* RIGHT */}
//         <div className="right-section">
//           <div className={`search-icon ${showSearch ? "active" : ""}`}>
//   <input 
//     type="text" 
//     placeholder="Search services..." 
//     onBlur={() => !document.activeElement.closest('.search-icon') && setShowSearch(false)}
//   />
//   <div className="icon-container" onClick={() => setShowSearch(!showSearch)}>
//     <IoSearch className="icon" size={18} />
//   </div>
// </div>

//           <button
//             className="contact-btn"
//             onClick={() => handleScroll("contact")}
//           >
//             Contact Us
//           </button>
//           <IoMenu
//             size={30}
//             className="menu-icon"
//             onClick={() => setOpenMenu(true)}
//           />
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       <div className={`mobile-panel ${openMenu ? "open" : ""}`}>
//         <div className="mobile-header">
//           <div className="left-section">
//             <img src="/images/logo.jpg" className="tcs-logo" alt="" />
//             <span className="brand-text">SkyLith Technologies</span>
//           </div>
//           <IoClose size={32} onClick={() => setOpenMenu(false)} />
//         </div>

//         <div className="mobile-list">
//           {menuItems.map((item) => (
//             <div
//               className="mobile-item"
//               key={item.id}
//               onClick={() => handleScroll(item.id)}
//             >
//               {item.label}
//             </div>
//           ))}
//           <div
//             className="mobile-contact"
//             onClick={() => handleScroll("contact")}
//           >
//             Contact Us
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }


// import { useState } from "react";
// import { IoSearch, IoClose, IoMenu } from "react-icons/io5";
// import "./navbar.css";

// export default function Navbar() {
//   const [openMenu, setOpenMenu] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const [searchText, setSearchText] = useState("");

//   const menuItems = [
//     { label: "Home", id: "hero" },
//     { label: "About", id: "about" },
//     { label: "WhyChooseUs", id: "WhyChooseUs" },
//     { label: "Services", id: "services" },
//     { label: "Projects", id: "projects" },
//     { label: "Industries", id: "industries" },
//   ];

//   const handleScroll = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//     setOpenMenu(false);
//     setShowSearch(false);
//     setSearchText("");
//   };

//   const filteredItems = menuItems.filter((item) =>
//     item.label.toLowerCase().includes(searchText.toLowerCase())
//   );

//   return (
//     <header className="tcs-navbar">
//       <div className="nav-container">

//         {/* LOGO */}
//         <div className="left-section">
//           <img
//             src="/images/logo.jpg"
//             className="tcs-logo"
//             alt="SkyLith"
//           />
//           <span className="brand-text">SkyLith</span>
//         </div>

//         {/* DESKTOP MENU */}
//         <nav className="center-menu">
//           {menuItems.map((item) => (
//             <div
//               key={item.id}
//               className="menu-item"
//               onClick={() => handleScroll(item.id)}
//             >
//               {item.label}
//             </div>
//           ))}
//         </nav>

//         {/* RIGHT SECTION */}
//         <div className="right-section">

//           {/* SEARCH (WRAPPED FOR DROPDOWN FIX) */}
//           <div style={{ position: "relative" }}>
//             <div className={`search-icon ${showSearch ? "active" : ""}`}>
//               <input
//                 type="text"
//                 placeholder="Search services..."
//                 value={searchText}
//                 onChange={(e) => setSearchText(e.target.value)}
//                 onBlur={() =>
//                   setTimeout(() => {
//                     setShowSearch(false);
//                     setSearchText("");
//                   }, 200)
//                 }
//               />

//               <div
//                 className="icon-container"
//                 onClick={() => setShowSearch(true)}
//               >
//                 <IoSearch className="icon" size={18} />
//               </div>
//             </div>

//             {/* ✅ DROPDOWN (OUTSIDE search-icon) */}
//             {showSearch && searchText && (
//   <div className="search-dropdown">
//     {filteredItems.length > 0 ? (
//       filteredItems.map((item) => (
//         <div
//           key={item.id}
//           className="search-dropdown-item"
//           onMouseDown={() => handleScroll(item.id)}
//         >
//           {item.label}
//         </div>
//       ))
//     ) : (
//       <div className="search-dropdown-empty">
//         No results found
//       </div>
//     )}
//   </div>
// )}
//           </div>

//           {/* CONTACT */}
//           <button
//             className="contact-btn"
//             onClick={() => handleScroll("contact")}
//           >
//             Contact Us
//           </button>

//           {/* HAMBURGER */}
//           <IoMenu
//             size={30}
//             className="menu-icon"
//             onClick={() => setOpenMenu(true)}
//           />
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       <div className={`mobile-panel ${openMenu ? "open" : ""}`}>
//         <div className="mobile-header">
//           <div className="left-section">
//             <img src="/images/logo.jpg" className="tcs-logo" alt="" />
//             <span className="brand-text">SkyLith</span>
//           </div>
//           <IoClose size={32} onClick={() => setOpenMenu(false)} />
//         </div>

//         <div className="mobile-list">
//           {menuItems.map((item) => (
//             <div
//               key={item.id}
//               className="mobile-item"
//               onClick={() => handleScroll(item.id)}
//             >
//               {item.label}
//             </div>
//           ))}

//           <div
//             className="mobile-contact"
//             onClick={() => handleScroll("contact")}
//           >
//             Contact Us
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
import { useState, useEffect } from "react";
import { IoSearch, IoClose, IoMenu } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  /* ================= SKELETON TIMER ================= */
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const menuItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "WhyChooseUs", id: "WhyChooseUs" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Industries", id: "industries" },
  ];

  /* ================= SMART SCROLL ================= */
  const handleScroll = (id) => {
    if (location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", `#${id}`);
      }
    } else {
      navigate(`/#${id}`);
    }

    setOpenMenu(false);
    setShowSearch(false);
    setSearchText("");
  };

  const filteredItems = menuItems.filter((item) =>
    item.label.toLowerCase().includes(searchText.toLowerCase())
  );

  /* ================= NAVBAR SKELETON ================= */
  const NavbarSkeleton = () => (
    <header className="tcs-navbar">
      <div className="nav-container">
        <div className="left-section">
          <div className="skeleton logo-skeleton"></div>
          <div className="skeleton brand-skeleton"></div>
        </div>

        <div className="center-menu">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div className="skeleton menu-skeleton" key={i}></div>
            ))}
        </div>

        <div className="right-section">
          <div className="skeleton btn-skeleton"></div>
        </div>
      </div>
    </header>
  );

  if (loading) return <NavbarSkeleton />;

  /* ================= RENDER ================= */
  return (
    <header className="tcs-navbar">
      <div className="nav-container">
        {/* LOGO */}
        <div className="left-section">
          <img
            src="/images/logos.webp"
            loading="lazy"
            className="tcs-logo"
            alt="SkyLith"
          />
          <span className="brand-text">SkyLith</span>
        </div>

        {/* DESKTOP MENU */}
        <nav className="center-menu">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="menu-item"
              onClick={() => handleScroll(item.id)}
            >
              {item.label}
            </div>
          ))}
        </nav>

        {/* RIGHT SECTION */}
        <div className="right-section">
          {/* SEARCH */}
          <div style={{ position: "relative" }}>
            <div className={`search-icon ${showSearch ? "active" : ""}`}>
              <input
                type="text"
                placeholder="Search services..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onBlur={() =>
                  setTimeout(() => {
                    setShowSearch(false);
                    setSearchText("");
                  }, 200)
                }
              />

              <div
                className="icon-container"
                onClick={() => setShowSearch(true)}
              >
                <IoSearch size={18} />
              </div>
            </div>

            {showSearch && searchText && (
              <div className="search-dropdown">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <div
                      key={item.id}
                      className="search-dropdown-item"
                      onMouseDown={() => handleScroll(item.id)}
                    >
                      {item.label}
                    </div>
                  ))
                ) : (
                  <div className="search-dropdown-empty">
                    No results found
                  </div>
                )}
              </div>
            )}
          </div>

          {/* CONTACT */}
          <button
            className="contact-btn"
            onClick={() => handleScroll("contact")}
          >
            Contact Us
          </button>

          {/* HAMBURGER */}
          <IoMenu
            size={30}
            className="menu-icon"
            onClick={() => setOpenMenu(true)}
          />
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-panel ${openMenu ? "open" : ""}`}>
        <div className="mobile-header">
          <div className="left-section">
            <img
              src="/images/logos.webp"
              loading="lazy"
              className="tcs-logo"
              alt=""
            />
            <span className="brand-text">SkyLith</span>
          </div>
          <IoClose size={32} onClick={() => setOpenMenu(false)} />
        </div>

        <div className="mobile-list">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="mobile-item"
              onClick={() => handleScroll(item.id)}
            >
              {item.label}
            </div>
          ))}

          <div
            className="mobile-contact"
            onClick={() => handleScroll("contact")}
          >
            Contact Us
          </div>
        </div>
      </div>
    </header>
  );
}
