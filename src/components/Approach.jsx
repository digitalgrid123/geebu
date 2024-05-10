import React, { useEffect, useState } from "react";

const Approach = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);
  return (
    <section id="new-approach">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 ">
            <div className=" approach-section relative">
              <img
                loading="lazy"
                className="w-100"
                src={
                  isMobile
                    ? "/images/mobile-approach-1.png"
                    : "/images/bg-approach.png"
                }
                alt=""
              />
              <div className="absolute-first-approach">
                <h6 className="sub-heading">Pitch</h6>
              </div>
              <div className="absolute-second-approach">
                <h1>
                  Fans owned & managed <br /> virtual record labels, gamified{" "}
                  <br />
                  and powered by AI & community.
                </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-12 ">
            <div class="approach-footer relative">
              <div class="absuolete">
                <p class="approach-paragraph">
                  <span class="weight-800">Geebu</span> empowers fans to become
                  active investors (virtual record labels owners) and
                  influencers, shaping artist careers and potentially profiting
                  from their growth. It utilizes AI to identify hidden gems and
                  foster a thriving community where fans can directly support
                  and propel the next big stars.
                </p>
              </div>
              <img
                loading="lazy"
                class="w-100"
                src={
                  isMobile
                    ? "/images/mobile-approach-2.png"
                    : "/images/approach2.png"
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
