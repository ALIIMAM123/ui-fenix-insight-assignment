import React from 'react'
import './weatherImgContainer.css'
import WeatherImg from '../../assets/indise-module-section.png'
const WeatherImgContainer = () => {
  return (
    <div className='weather-image-container '>
      <div className='container-fluid '>
        <div className='row'>
            <div className='col-12'>
                <div className='weather-img-inner-container '>
                    <img src = {WeatherImg}  className='inside-image'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherImgContainer
