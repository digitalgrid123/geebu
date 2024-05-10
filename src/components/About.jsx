import React, { useEffect, useState } from "react";

const About = () => {
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
  return (
    <>
      <section id="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 ">
              <div className=" about-section relative">
                <img
                  className="w-100"
                  src={
                    isMobile
                      ? "/images/mobile-about-1.webp"
                      : "/images/bg-about.webp"
                  }
                  alt="bg-img"
                  loading="lazy"
                />
                <div className="justify-between align-logo">
                  <img
                    className="geebu-image"
                    src="/images/geebu.svg"
                    alt="logo-icon"
                  />
                  <h6 className="est-text">EST 2024</h6>
                </div>
                <div className="container-fluid align-text">
                  <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10 ">
                      <h1 className="relative">
                        AI powered investment platform for African entertainment
                        industry, starting with{" "}
                        <span class="image-wrapper">
                          <img
                            className="img-afrobeats"
                            src="/images/Afrobeats..png"
                            alt="Afrobeats"
                          />
                        </span>
                      </h1>
                    </div>
                    <div className="col-lg-1"></div>
                  </div>
                </div>
              </div>
              <div className="about-footer relative">
                <img
                  className="w-100"
                  src={
                    isMobile
                      ? "/images/mobile-about-2.webp"
                      : "/images/about2.webp"
                  }
                  alt="bg-img"
                  loading="lazy"
                />
                <div className="absolute-images">
                  <img
                    className="instrument-img"
                    src="/images/batminton.svg"
                    alt="footer-img"
                    srcset=""
                  />
                  <img
                    className="instrument-img"
                    src="/images/mic.svg"
                    alt="footer-img"
                    srcset=""
                  />
                  <img
                    className="instrument-img"
                    src="/images/plate.svg"
                    alt="footer-img"
                    srcset=""
                  />
                  <img
                    className="instrument-img"
                    src="/images/guitar.svg"
                    alt="footer-img"
                    srcset=""
                  />
                  <img
                    className="instrument-img"
                    src="/images/jwel.svg"
                    alt="footer-img"
                    srcset=""
                  />
                  <img
                    className="instrument-img"
                    src="/images/flute.svg"
                    alt="footer-img"
                    srcset=""
                  />
                  <img
                    className="instrument-img"
                    src="/images/mic2.svg"
                    alt="footer-img"
                    srcset=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
