import React from "react";
import "./homepage.css";
import Header from "../../component/Header/Header";
import RealInsightSection from "../../component/RealInsightSection/RealInsightSection";
import ReportImg from "../../assets/indise-module-section.png";
import Chart from "../../component/Chart/Chart";
import GlobalDataSection from "../../component/GlobalDataSection/GlobalDataSection";
import TrailCardSection from "../../component/TrailCardSection/TrailCardSection";
import Footer from "../../component/Footer/Footer";
const Homepage = () => {
  return (
    <div className="homepage-container ">
      <div className="homePage-wrapper ">
        <div className="section-one">
          <div className="container-fluid  container-1 p-0">
            <div className="row   trail-row-container">
              <div class="col-2  trial-container  trail-left-container">
                <div className="trail-offer-container ">
                  <p className="free-text">Free 7 Day Trial</p>
                  <p className="free-text get-started">Get Started Now</p>
                </div>
              </div>

              <div class="col-10   contant-container">
                <div className="content-section">
                  <Header />
                  <RealInsightSection />
                  <Chart />
               
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid container-real-time-section  d-flex justify-content-end">
          <div className=" col-12 col-md-10  global-data ">
            <GlobalDataSection />
          </div>
        </div>

        
        <div className="container-fluid trail-card-section-container p-0 ">
          <div className=" col-12 col-md-12   ">
           <TrailCardSection />
          </div>
        </div>
      </div>
         <Footer />
    </div>
  );
};

export default Homepage;
