import React, { useEffect, useState } from "react";

const Contact = () => {
  return (
    <section id="contact-us">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 ">
            <div className="border-contact">
              <div className=" contact-section relative">
                <div className="justify-between padding-logo ">
                  <img
                    loading="lazy"
                    className="geebu-image "
                    src="/images/geebu.svg"
                    alt="logo-icon"
                  />
                  <h6 className="est-text">EST 2024</h6>
                </div>
                <div className="container-fluid ">
                  <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10 ">
                      <div className="pt-140 pb-230">
                        <h1 className="relative pl-15 ">
                          Shape the future of African entertainment industry
                          with GEEBU.
                        </h1>
                      </div>
                    </div>
                    <div className="col-lg-1"></div>
                  </div>
                </div>

                <div className="image-absolute-wrapper">
                  <img
                    loading="lazy"
                    className="img-afrobeats-contact"
                    src="/images/Afrobeats.png"
                    alt="Afrobeats"
                  />
                </div>
              </div>
            </div>

            <div className="border-contact mt-20">
              <div className="contact-footer relative">
                <div className="">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-4 flex-center ">
                        <button className="bg-white contact-btn">
                          <span>Contact us</span>
                        </button>
                      </div>
                      <div className="col-lg-8 images-adjust">
                        <img
                          loading="lazy"
                          src="/images/batminton.svg"
                          alt="footer-img"
                          srcset=""
                        />
                        <img
                          loading="lazy"
                          src="/images/mic.svg"
                          alt="footer-img"
                          srcset=""
                        />
                        <img
                          loading="lazy"
                          src="/images/plate.svg"
                          alt="footer-img"
                          srcset=""
                        />
                        <img
                          loading="lazy"
                          src="/images/guitar.svg"
                          alt="footer-img"
                          srcset=""
                        />
                        <img
                          loading="lazy"
                          src="/images/jwel.svg"
                          alt="footer-img"
                          srcset=""
                        />
                        <img
                          loading="lazy"
                          src="/images/flute.svg"
                          alt="footer-img"
                          srcset=""
                        />
                        <img
                          loading="lazy"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
