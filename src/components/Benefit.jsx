import React, { useEffect, useState } from "react";

const Benefit = () => {
  const FanTab = () => {
    const url = "https://form.jotform.com/241344622233346";

    window.open(url, "_blank");
  };
  const ArtistTab = () => {
    const url = "https://form.jotform.com/241343701041340";

    window.open(url, "_blank");
  };
  return (
    <section id="benefits">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 mb-20">
            <div className="border-benefit">
              <div className="bg-approach relative">
                <div className="">
                  <h6 className="sub-heading text-black">For Fans</h6>
                </div>
                <div className="">
                  <h1 className="mt-101 text-black">
                    Invest in the next big star, influence their careers, and
                    enjoy exclusive benefits
                  </h1>
                </div>
              </div>
              <div className="benefit-footer ">
                <div className="align-btn">
                  <button className="bg-black sign-btn" onClick={FanTab}>
                    <span className="sign-text">Sign up</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="border-benefit">
              <div className="bg-approach relative">
                <div className="">
                  <h6 className="sub-heading text-black">For Artists</h6>
                </div>
                <div className="">
                  <h1 className="mt-101 text-black">
                    Gain dedicated fanbase, funding, and exposure before hitting{" "}
                    <br />
                    mainstream.
                  </h1>
                </div>
              </div>
              <div className="benefit-footer ">
                <div className="align-btn">
                  <button className="bg-black sign-btn" onClick={ArtistTab}>
                    <span className="sign-text">Sign up</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
