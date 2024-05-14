import React from "react";

const ProductSection = ({ data }) => {
  return (
    <div className="col-lg-6" style={{ paddingBottom: "20px" }}>
      <div className="border-product">
        <div className="product-section relative">
          <div>
            <h6 className="sub-heading">{data.heading1}</h6>
          </div>
          <div>
            <h1 className="margin-top font-40  align-items-end">
              <span className="font-50 line-normal">{data.span}</span>.
              {data.heading2}
            </h1>
          </div>
        </div>
        <div className="product-section-second">
          <div>
            <p className="pain-paragraph">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
