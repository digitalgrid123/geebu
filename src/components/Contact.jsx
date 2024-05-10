import React, { useEffect, useState } from "react";

const Contact = () => {
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
    <section id="contact-us">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 padding-zero">
            <div className=" contact-section relative">
              <img
                className="w-100"
                src={
                  isMobile
                    ? "/images/mobile-contact-1.png"
                    : "/images/contact1.png"
                }
                alt="bg-img"
              />
              <div className="justify-between align-logo">
                <img
                  className="geebu-image "
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
                      Shape the future of African entertainment industry with
                      GEEBU.
                    </h1>
                  </div>
                  <div className="col-lg-1"></div>
                </div>
              </div>

              <div className="image-absolute-wrapper">
                <img
                  className="img-afrobeats"
                  src="/images/Afrobeats..png"
                  alt="Afrobeats"
                />
              </div>
            </div>
            <div className="contact-footer relative">
              <img
                className="w-100"
                src={
                  isMobile
                    ? "/images/mobile-contact-2.png"
                    : "/images/contact2.png"
                }
                alt="bg-img"
              />
              <div className="absolute-contact">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-4 ">
                      <button className="bg-white contact-btn">
                        <span>Contact us</span>
                      </button>
                    </div>
                    <div className="col-lg-8 images-adjust">
                      <img
                        src="/images/batminton.svg"
                        alt="footer-img"
                        srcset=""
                      />
                      <img src="/images/mic.svg" alt="footer-img" srcset="" />
                      <img src="/images/plate.svg" alt="footer-img" srcset="" />
                      <img
                        src="/images/guitar.svg"
                        alt="footer-img"
                        srcset=""
                      />
                      <img src="/images/jwel.svg" alt="footer-img" srcset="" />
                      <img src="/images/flute.svg" alt="footer-img" srcset="" />
                      <img src="/images/mic2.svg" alt="footer-img" srcset="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
