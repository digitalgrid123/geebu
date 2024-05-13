import { useEffect } from "react";

const useIntersectionObserver = (setActiveSection) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.5, // Adjust this value based on your needs
      }
    );

    // Sections to observe
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, [setActiveSection]);

  return;
};

export default useIntersectionObserver;
