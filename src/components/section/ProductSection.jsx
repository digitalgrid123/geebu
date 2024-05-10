import React from "react";

const ProductSection = ({ data, isMobile }) => {
  return (
    <div className="col-lg-6 ">
      <div
        className="product-section relative"
        style={{
          backgroundImage: `url(${data.image1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="">
          <h6 className="sub-heading">{data.heading1}</h6>
        </div>
        <div className="">
          <h1 className="margin-top font-40 mt-40 ">
            <span className="font-50">{data.span}</span>.{data.heading2}
          </h1>
        </div>
      </div>
      <div
        className="product-section-second relative top-minus-fourteen"
        style={{
          backgroundImage: `url(${data.image2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="">
          <p className="pain-paragraph">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
