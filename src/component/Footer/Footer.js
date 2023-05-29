import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className=" w-100">
      <div className="container  ">
      <div className="row d-flex justify-md-between p-4 justify-content-center">
      <div className="col-6 col-md-3">
          <h1 className="footer-heading ">Contact - 8709198639</h1>
        </div>
        <div className="col-6 col-md-3">
          <h1 className="footer-heading ">Designation - Software Developer</h1>
        </div>
        <div className="col-6 col-md-3">
          <h1 className="footer-heading ">Email - imam.ali1751@gmail.com</h1>
        </div>
        <div className="col-6 col-md-3">
          <h1 className="footer-heading ">Created By @Ali Imam</h1>
        </div>
      </div>
        
      </div>
    </div>
  );
};

export default Footer;
