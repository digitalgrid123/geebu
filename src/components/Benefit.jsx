import React, { useEffect, useState } from "react";

const Benefit = () => {
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
    <section id="benefits">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="bg-approach relative">
              <img
                loading="lazy"
                className="w-100"
                src={
                  isMobile
                    ? "/images/mobile-benefit-1.webp"
                    : "/images/benefit1.webp"
                }
                alt="bg-pain-img"
              />
              <div className="absolute-first-point">
                <h6 className="sub-heading text-black">For Fans</h6>
              </div>
              <div className="absolute-second-point">
                <h1 className="mt-101 text-black">
                  Invest in the next big star, influence their careers, and
                  enjoy exclusive benefits
                </h1>
              </div>
            </div>
            <div className="benefit-footer top-minus-50 relative">
              <img
                loading="lazy"
                className="w-100 img-absoulte"
                src={
                  isMobile
                    ? "/images/mobile-benefit-2.webp"
                    : "/images/benefit2.webp"
                }
                alt=""
              />
              <div className="align-text">
                <button className="bg-black sign-btn">
                  <span className="sign-text">sign up</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="bg-approach relative">
              <img
                loading="lazy"
                className="w-100"
                src={
                  isMobile
                    ? "/images/mobile-benefit-1.webp"
                    : "/images/benefit1.webp"
                }
                alt="bg-pain-img"
              />
              <div className="absolute-first-point ">
                <h6 className="sub-heading text-black">For Artists</h6>
              </div>
              <div className="absolute-second-point">
                <h1 className="mt-101 text-black">
                  Gain dedicated fanbase, funding, and exposure before hitting
                  mainstream.
                </h1>
              </div>
            </div>
            <div className="benefit-footer top-minus-50 relative">
              <img
                loading="lazy"
                className="w-100 img-absoulte"
                src={
                  isMobile
                    ? "/images/mobile-benefit-2.webp"
                    : "/images/benefit2.webp"
                }
                alt=""
              />
              <div className="align-text">
                <button className="bg-black sign-btn">
                  <span className="sign-text">sign up</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
