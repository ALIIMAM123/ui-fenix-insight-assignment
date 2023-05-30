import React from "react";
import "./footerSection.css";
import RecoginationImg from "../../assets/development-recogination.svg";
const FooterSection = () => {
  return (
    <div className="footer-section-container ">
      <div className="footer-wrapper-section">
        <div className="container-fluid">
          <div className="row p-3">
            <div className="col-6 col-md-3">
              <ul>
                <h1 className="company-name">MD Ali Imam</h1>
                <li className="description-footer">
                  We strive to offer a wide range of customized and qualitative
                  SEO outsourcing and web designing services to our clients
                  worldwide to help them make critical strategic decisions in
                  their growing business.
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-3">
              <h1 className="company-name">Recent Blogs</h1>
              <li className="description-footer">
                Gain a Competitive Edge with Expert Google Analytics & Tag
                Manager Services
              </li>
              <li className="description-footer mt-3">
                Gain a Competitive Edge with Expert Google Analytics & Tag
                Manager Services
              </li>
              <li className="description-footer mt-3">
                Web Symphony: Harmonise Your Digital Symphony with Me.
              </li>
            </div>
            <div className="col-6 col-md-3">
              <h1 className="company-name">Contact Information</h1>
              <li className="description-footer">
                <a className="fa fa-volume-control-phone me-3" />
                +91 8709198639
              </li>
              <li className="description-footer mt-3">
                <a className="fa fa-envelope-o me-3" />
                imam.ali1751@gmail.com
              </li>
              <li className="description-footer">
                <a className="  fas fa-map-marker-alt me-3" />
                Jaipur ,Rajasthan
              </li>
            </div>
            <div className="col-6 col-md-3">
              <h1 className="company-name"> Reviews & Recognitions</h1>
              <li className="description-footer">
                <a className="fa fa-volume-control-phone me-3" />
                +91 8709198639
              </li>

              <li className="description-footer d-flex justify-content-start">
                <img src={RecoginationImg} className="recogination-img mt-3" />
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
