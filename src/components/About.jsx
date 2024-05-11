import React, { useEffect, useState } from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="border-about">
              <div className="about-section relative">
                <div className="justify-between padding-logo">
                  <img
                    className="geebu-image"
                    src="/images/geebu.svg"
                    alt="logo-icon"
                  />
                  <h6 className="est-text">EST 2024</h6>
                </div>
                <div className="container-fluid ">
                  <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10 ">
                      <div className="height-text d-flex align-items-center">
                        <h1 className="relative pl-15 ">
                          AI powered investment <br /> platform for African{" "}
                          <br />
                          entertainment industry, <br /> starting with{" "}
                          <span class="image-wrapper">
                            <img
                              className="img-afrobeats"
                              src="/images/Afrobeats..png"
                              alt="Afrobeats"
                            />
                          </span>
                        </h1>
                      </div>
                    </div>
                    <div className="col-lg-1"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-about mt-20">
              <div className="about-footer ">
                <div className="align-images">
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
      </div>
    </section>
  );
};

export default About;
