import React, { useState, useEffect, useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Menu = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isMobile, setIsMobile] = useState(false);
  const [gapHeight, setGapHeight] = useState(24);
  const menuRef = useRef(null);

  // Function to check if the screen size is mobile
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
  };

  // Function to calculate and set the gap height
  const calculateGapHeight = () => {
    const screenHeight = window.innerHeight;
    const gap = screenHeight * 0.4; // Set gap to 50% of screen height
    setGapHeight(gap);
  };

  // Add event listeners to check screen size and calculate gap height on component mount and resize
  useEffect(() => {
    checkIsMobile();
    calculateGapHeight();

    window.addEventListener("resize", checkIsMobile);
    window.addEventListener("resize", calculateGapHeight);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
      window.removeEventListener("resize", calculateGapHeight);
    };
  }, []);

  useIntersectionObserver(setActiveSection); // Custom hook to set active section on scroll

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setActiveSection(sectionId); // Update active section when scrolled
      if ("scrollIntoView" in element) {
        const offset =
          window.pageYOffset + element.getBoundingClientRect().top - 20;
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      } else {
        const offset =
          element.getBoundingClientRect().top + window.pageYOffset - 20;
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="side-menu" ref={menuRef}>
      <ul>
        <li
          className="bg-blue navigation"
          style={
            isMobile
              ? {
                  alignItems: activeSection === "about" ? `start` : "center",
                  gap: activeSection === "about" && "0",
                  width: activeSection === "about" && "152px",
                }
              : { gap: activeSection === "about" ? `${gapHeight}px` : "0" }
          }
          onClick={() => scrollToSection("about")}
        >
          <h6 className="roman-text">I</h6>
          {isMobile && activeSection === "about" && (
            <h6 className="navigate-heading">About</h6>
          )}
          {!isMobile && <h6 className="navigate-heading">About</h6>}
        </li>
        <li
          className="bg-orange navigation"
          style={
            isMobile
              ? {
                  alignItems:
                    activeSection === "pain-points" ? `start` : "center",
                  width: activeSection === "pain-points" && "152px",
                  gap: activeSection === "pain-points" && "0",
                }
              : {
                  gap: activeSection === "pain-points" ? `${gapHeight}px` : "0",
                }
          }
          onClick={() => scrollToSection("pain-points")}
        >
          <h6 className="roman-text">II</h6>
          {isMobile && activeSection === "pain-points" && (
            <h6 className="navigate-heading">Pain points</h6>
          )}
          {!isMobile && <h6 className="navigate-heading">Pain points</h6>}
        </li>
        <li
          className="bg-green navigation"
          style={
            isMobile
              ? {
                  alignItems:
                    activeSection === "new-approach" ? `start` : "center",
                  width: activeSection === "new-approach" && "152px",

                  gap: activeSection === "new-approach" && "0",
                }
              : {
                  gap:
                    activeSection === "new-approach" ? `${gapHeight}px` : "0",
                }
          }
          onClick={() => scrollToSection("new-approach")}
        >
          <h6 className="roman-text">III</h6>
          {isMobile && activeSection === "new-approach" && (
            <h6 className="navigate-heading">New approach</h6>
          )}
          {!isMobile && <h6 className="navigate-heading">New approach</h6>}
        </li>
        <li
          className="bg-black navigation"
          style={
            isMobile
              ? {
                  alignItems: activeSection === "products" ? `start` : "center",
                  width: activeSection === "products" && "152px",

                  gap: activeSection === "products" && "0",
                }
              : { gap: activeSection === "products" ? `${gapHeight}px` : "0" }
          }
          onClick={() => scrollToSection("products")}
        >
          <h6 className="roman-text">IV</h6>
          {isMobile && activeSection === "products" && (
            <h6 className="navigate-heading">Products</h6>
          )}
          {!isMobile && <h6 className="navigate-heading">Products</h6>}
        </li>
        <li
          className="bg-yellow navigation"
          style={
            isMobile
              ? {
                  alignItems: activeSection === "benefits" ? `start` : "center",
                  width: activeSection === "benefits" && "152px",

                  gap: activeSection === "benefits" && "0",
                }
              : { gap: activeSection === "benefits" ? `${gapHeight}px` : "0" }
          }
          onClick={() => scrollToSection("benefits")}
        >
          <h6 className="roman-text text-black">V</h6>
          {isMobile && activeSection === "benefits" && (
            <h6 className="navigate-heading text-black">Benefits</h6>
          )}
          {!isMobile && (
            <h6 className="navigate-heading text-black">Benefits</h6>
          )}
        </li>
        <li
          className="bg-purple navigation"
          style={
            isMobile
              ? {
                  alignItems:
                    activeSection === "contact-us" ? `start` : "center",
                  width: activeSection === "contact-us" && "152px",

                  gap: activeSection === "contact-us" && "0",
                }
              : { gap: activeSection === "contact-us" ? `${gapHeight}px` : "0" }
          }
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
