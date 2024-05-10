import React, { useState, useEffect } from "react";

const Menu = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isMobile, setIsMobile] = useState(false);

  // Function to check if the screen size is mobile
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
  };

  // Add event listener to check screen size on component mount
  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const scrollPadding = 20; // Adjust this value as needed
    if (element) {
      const elementTop = element.getBoundingClientRect().top;
      const offset = elementTop - scrollPadding;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
      setActiveSection(sectionId); // Update active section when scrolled
    }
  };

  return (
    <div className="side-menu">
      <ul>
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
