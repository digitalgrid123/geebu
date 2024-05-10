import React, { useEffect, useState } from "react";

const Point = () => {
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
    <section id="pain-points" className="">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 padding-zero ">
            <div className="bg-pain relative">
              <img
                className="w-100"
                src={
                  isMobile
                    ? "/images/mobile-point-1.png"
                    : "/images/bg-pain.png"
                }
                alt="bg-pain-img"
              />
              <div className="absolute-first-point">
                <h6 className="sub-heading">Pain Point A.</h6>
              </div>
              <div className="absolute-second-point">
                <h1 className="mt-101">Hidden gems. Missed Opportunities. </h1>
              </div>
            </div>
            <div className="pain-footer top-minus-50 relative">
              <img
                className="w-100 img-absoulte"
                src={
                  isMobile ? "/images/mobile-point-2.png" : "/images/point2.png"
                }
                alt=""
              />
              <div className="absolute-point-second">
                <p className="pain-paragraph">
                  Unlike tech startup founders who often have access to
                  institutional or well-organized investment from the very
                  beginning, it's extremely challenging for potential investors
                  to pinpoint breakout Afrobeats artists. This leads to missed
                  opportunities for talent discovery and significant investment
                  in future stars.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 padding-zero">
            <div className="bg-pain relative">
              <img
                className="w-100"
                src={
                  isMobile
                    ? "/images/mobile-point-1.png"
                    : "/images/bg-pain.png"
                }
                alt="bg-pain-img"
              />
              <div className="absolute-first-point ">
                <h6 className="sub-heading">Pain Point B.</h6>
              </div>
              <div className="absolute-second-point">
                <h1 className="mt-101">Passive Fans. Limited Impacts. </h1>
              </div>
            </div>
            <div className="pain-footer top-minus-50 relative">
              <img
                className="w-100 img-absoulte"
                src={
                  isMobile ? "/images/mobile-point-2.png" : "/images/point2.png"
                }
                alt=""
              />
              <div className="absolute-point-second">
                <p className="pain-paragraph">
                  Traditional music industry models leave fans with limited ways
                  to directly support and influence the careers of their
                  favourite artists. This restricts fans to a passive consumer
                  role and hinders their ability to share in the success they
                  help create.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Point;
