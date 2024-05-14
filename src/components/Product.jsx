import React, { useEffect, useState } from "react";
import ProductSection from "./section/ProductSection";

const Product = () => {
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
  const productsData = [
    {
      heading1: "Product A.",
      span: "GEEBU",
      heading2: "INSIGHTS",

      description:
        "AI-powered Prediction Engine - Analyse past data to identify artists with high breakout potential across various genres.",
    },
    {
      heading1: "Product B.",
      span: "GEEBU",
      heading2: "CLUBS",

      description:
        "Community-driven Investment Platform: Fans become virtual 'record labels' investing in promising artists.",
    },
    {
      heading1: "Product C.",
      span: "GEEBU",
      heading2: "LEAGUE",

      description:
        "Inspired by the Premier League, its  revolutionary platform where fans and artists compete for success.",
    },
    {
      heading1: "Product D.",
      span: "GEEBU",
      heading2: "MARKETERS",

      description:
        "Fans earn rewards for promoting artists, creating a win-win scenario.",
    },
  ];

  return (
    <section id="products">
      <div className="container-fluid">
        <div className="row">
          {productsData.map((data, index) => (
            <ProductSection key={index} data={data} isMobile={isMobile} />
          ))}
          <div className="col-lg-12 ">
            <div className="border-product ">
              <div className="relative relative-approach-section">
                <div className="gap-approach ">
                  <img loading="lazy" src="/images/geebu-icon.svg" alt="" />
                  <h1 className="m-0 lh-50">
                    <span className="font-50">Mr</span>.GEEBU
                  </h1>
                  <p className="m-0 pain-paragraph ">
                    Our Generative AI Moderator: Ensure a safe and productive
                    investment <br /> community environment on the platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
