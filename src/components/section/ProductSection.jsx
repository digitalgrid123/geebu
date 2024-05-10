import React from "react";

const ProductSection = ({ data, isMobile }) => {
  return (
    <div className="col-lg-6 ">
      <div className="product-section relative">
        <img loading="lazy" className="w-100" src={data.image1} alt="" />
        <div className="absolute-first-point">
          <h6 className="sub-heading">{data.heading1}</h6>
        </div>
        <div className="absolute-second-point">
          <h1 className="margin-top font-40">
            <span className="font-50">{data.span}</span>.{data.heading2}
          </h1>
        </div>
      </div>
      <div className="product-section-second relative top-minus-fourteen">
        <img loading="lazy" className={"w-100"} src={data.image2} alt="" />
        <div className="absolute-point-second">
          <p className="pain-paragraph">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
