import React from "react";
import "./realInsight.css";
import FlexInsightImg from '../../assets/flex-insight-online.png'
const RealInsightSection = () => {
  return (
    <div className="realInsightContainer">
      <div className="row">
        <div className="col-12  col-lg-5">
          <h1 className="text-heading">
            {" "}
            <span className="artifial-inteligence">Artificial Intelligence.</span>
            <br/>
            <span className="real-span">Real Insights.</span>
          </h1>
          <p className="drealInsight-description">
          Fenix Insight is an advanced insight engine purpose built for EOD operations, training and risk management. It incorporates an artificial intelligence system, 
          scanning millions of online resources, giving an accurate global map of explosive ordnance risk.
          </p>
        <ul className='p-0 ai-bottom-btn-wrapper'>
        <li className='get-started-btn nav-el getStarted'>Get Started Now</li>
         <li className=' nav-el login'>Log In</li>
        </ul>
       </div>
        <div className="col-12   col-lg-7">
          <img src = {FlexInsightImg} className="flex-photo" />
        </div>
      </div>
    </div>
  );
};

export default RealInsightSection;
