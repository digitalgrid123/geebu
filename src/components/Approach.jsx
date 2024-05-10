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
            <div
              className=" approach-section relative"
              style={{
                backgroundImage: `url(${"/images/bg-approach.png"})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="">
                <h6 className="sub-heading">Pitch</h6>
              </div>
              <div className="height-text d-flex align-items-center height-main">
                <h1>
                  Fans owned & managed <br /> virtual record labels, gamified{" "}
                  <br />
                  and powered by AI & community.
                </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-12 ">
            <div
              class="approach-footer relative "
              style={{
                backgroundImage: `url(${"/images/bg-approach.png"})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div class="">
                <p class="approach-paragraph">
                  <span class="weight-800">Geebu</span> empowers fans to become
                  active investors (virtual record labels owners) and
                  influencers, shaping artist careers and potentially profiting
                  from their growth. It utilizes AI to identify hidden gems and
                  foster a thriving community where fans can directly support
                  and propel the next big stars.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
