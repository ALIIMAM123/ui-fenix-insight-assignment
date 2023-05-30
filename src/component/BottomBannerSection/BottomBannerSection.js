import React from "react";
import "./bottomBannerSection.css";
import BottomBanner from "../../assets/FENIX-BOTTOM-IMG.jpg";
const BottomBannerSection = () => {
  return (
    <div className="bottom-banner-section-container mb-4 ">
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-12">
            <div className="bottom-banner-container">
              <img src={BottomBanner} className="bottom-banner-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBannerSection;
