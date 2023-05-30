import React from "react";
import Seo from '../../assets/seo.png'
import "./OverServices.css";
const OurServices = () => {
  return (
    <div>
      <div className="our-services-container p-5">
        <div className="container">
          <div className="fall-in-love-container mb-5">
            <h1 className="fall-in-love-text mb-3 ">
              Fall In Love With Our Services
            </h1>
            <div className="line-container">
              <div className="bottom-line-div"></div>
            </div>
          </div>
          <div className="row  services-container-box d-flex justify-content-center align-items-center">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="image-container-services  mt-4  ">
                <img src="https://eplanetsoft.com/wp-content/uploads/2020/03/intro-1-300x243.png" />
              </div>
            </div>
            <div className="col-md-6 service-description">
              <h1 className="web-development-text">Web Development </h1>
              <h1 className="service-description-text">
                We are one the best web development companies providing services
                to customers worldwide. We use latest development tools to
                deliver a wide assortmen
              </h1>
            </div>
          </div>

          <div className="row  services-container-box d-flex justify-content-center align-items-center  ">
            <div className="col-md-6 d-flex justify-content-center order-2 order-md-2 ps-5">
              <div className="image-container-services  mt-4  order-md-2 ">
                <img src={Seo} />
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column  align-items-center service-description order-1 order-md-1 ps-5 ">
              <div className="d-flex  flex-column justify-md-end align-items-end ">
                <h1 className="web-development-text web ">App Development </h1>
                <h1 className="service-description-text flex-end web-desc">
                  We are one the best SEO 
                  <br /> providing services to customers worldwide. We use
                  latest development tools to deliver a wide assortmen
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
