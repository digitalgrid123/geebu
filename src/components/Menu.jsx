import React, { useState, useEffect, useRef } from "react";

const Menu = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isMobile, setIsMobile] = useState(false);
  const [menuHeight, setMenuHeight] = useState("auto");
  const menuRef = useRef(null);

  // Function to check if the screen size is mobile
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
  };

  // Function to set the height of the side menu based on screen height
  const setSideMenuHeight = () => {
    const screenHeight = window.innerHeight;
    setMenuHeight(`${screenHeight}px`);
  };

  // Add event listeners to check screen size and set menu height on component mount and resize
  useEffect(() => {
    checkIsMobile();
    setSideMenuHeight();

    window.addEventListener("resize", checkIsMobile);
    window.addEventListener("resize", setSideMenuHeight);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
      window.removeEventListener("resize", setSideMenuHeight);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setActiveSection(sectionId); // Update active section when scrolled
      if ("scrollIntoView" in element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        const offset =
          element.getBoundingClientRect().top + window.pageYOffset - 20; // Adjust padding as needed
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="side-menu" ref={menuRef}>
      <ul style={isMobile ? null : { height: menuHeight }}>
        <li
          className={`bg-blue navigation ${
            activeSection === "about" ? "active" : ""
          } ${isMobile && activeSection !== "about" ? "centered" : ""}`}
          onClick={() => scrollToSection("about")}
        >
          <h6 className="roman-text">I</h6>

          {isMobile && activeSection === "about" && (
            <h6 className="navigate-heading">About</h6>
          )}

          {!isMobile && <h6 className="navigate-heading">About</h6>}
        </li>
        <li
          className={`bg-orange navigation ${
            activeSection === "pain-points" ? "active" : ""
          }${isMobile && activeSection !== "pain-points" ? "centered" : ""}`}
          onClick={() => scrollToSection("pain-points")}
        >
          <h6 className="roman-text">II</h6>

          {isMobile && activeSection === "pain-points" && (
            <h6 className="navigate-heading">Pain points</h6>
          )}

          {!isMobile && <h6 className="navigate-heading">Pain points</h6>}
        </li>

        <li
          className={`bg-green navigation ${
            activeSection === "new-approach" ? "active" : ""
          } ${isMobile && activeSection !== "new-approach" ? "centered" : ""}`}
          onClick={() => scrollToSection("new-approach")}
        >
          <h6 className="roman-text">III</h6>

          {isMobile && activeSection === "new-approach" && (
            <h6 className="navigate-heading">New approach</h6>
          )}

          {!isMobile && <h6 className="navigate-heading">New approach</h6>}
        </li>
        <li
          className={`bg-black navigation ${
            activeSection === "products" ? "active" : ""
          }${isMobile && activeSection !== "products" ? "centered" : ""}`}
          onClick={() => scrollToSection("products")}
        >
          <h6 className="roman-text">IV</h6>

          {isMobile && activeSection === "products" && (
            <h6 className="navigate-heading">Products</h6>
          )}

          {!isMobile && <h6 className="navigate-heading">Products</h6>}
        </li>
        <li
          className={`bg-yellow navigation ${
            activeSection === "benefits" ? "active" : ""
          }${isMobile && activeSection !== "benefits" ? "centered" : ""}`}
          onClick={() => scrollToSection("benefits")}
        >
          <h6 className="roman-text text-black">V</h6>

          {isMobile && activeSection === "benefits" && (
            <h6
              className={
                activeSection === "benefits"
                  ? "navigate-heading text-black"
                  : "navigate-heading"
              }
            >
              Benefits
            </h6>
          )}

          {!isMobile && <h6 className="navigate-heading">Benefits</h6>}
        </li>
        <li
          className={`bg-purple navigation ${
            activeSection === "contact-us" ? "active" : ""
          }${isMobile && activeSection !== "contact-us" ? "centered" : ""}`}
          onClick={() => scrollToSection("contact-us")}
        >
          <h6 className="roman-text">VI</h6>

          {isMobile && activeSection === "contact-us" && (
            <h6 className="navigate-heading">Contact us</h6>
          )}

          {!isMobile && <h6 className="navigate-heading">Contact us</h6>}
        </li>
      </ul>
    </div>
  );
};

export default Menu;