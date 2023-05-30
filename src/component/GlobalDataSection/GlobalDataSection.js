import React from "react";
import "./globalData.css";
import MapImg from "../../assets/map-image.png";

let imgArr = [
  {id:1, img:MapImg}, {id:2, img:MapImg}, {id:3, img:MapImg}, {id:4, img:MapImg}
]
const GlobalDataSection = () => {
  return (
    <div className="global-data-section  d-flex align-items-center  ">
    <div className="container-fluid d-flex align-items-center justify-content-md-start  justify-content-sm-center flex-wrap ">
    {imgArr?.map((each) => (
      <div className="row  d-flex align-items-center flex-direction-row   " >
        <div className="col-md-4 text-white  myContainers box-shadow  my-5 ">
          <img src = {each?.img}  />
        </div>
        {/* <div className="col-md-4 text-white bg-primary myContainers">one</div>
        <div className="col-md-4 text-white bg-primary myContainers ">one</div> */}
      </div>
    ))}
     
    </div>
    </div>
  );
};

export default GlobalDataSection;
