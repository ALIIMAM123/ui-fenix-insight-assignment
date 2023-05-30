import React from "react";
import "./bannerSection.css";
const BannerSection = () => {
  return (
    <div className="banner-container ">
      <div className="container ">
        <div className="row px-5  py-5 d-flex justify-content-center align-items-center d-md-flex-column">
          <div className=" col-12 col-md-6  ">
            <div className="banner-text-wrapper-container text-start">
              <h1 className="banner-heading">
                Artificial Intelligence. Real Insights.
              </h1>
              <div className="horizontal-container">
                <div className="horizontal-line-inner-div"></div>
              </div>
              <span className="client-line">
              Fenix Insight is an advanced insight engine purpose built for EOD operations, training and risk management. It incorporates an artificial intelligence system, scanning millions of online resources,
               giving an accurate global map of explosive ordnance risk.
              </span>

              <br />
              <span className="banner-heading-nextline client-line">
                what they need by making optimized & Fast websites and
                <br />
                apps.
              </span>

              <div className="button-container d-flex  mt-3">
                <button className=" common-button-text me-4 ">
                 Get Started Now
                </button>
                <button className=" common-button-text  bg-white text-black">
                 Login
                </button>
              </div>
            </div>
          </div>
          <div className=" col-12 col-md-6">
            <div className="banner-image-container">
              <img
                src="https://eplanetsoft.com/wp-content/uploads/2020/06/web_design.png"
                className="w-100 banner-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
