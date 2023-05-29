import React from 'react'
import "./globalData.css"
import MapImg from '../../assets/map-image.png'
const GlobalDataSection = () => {
  return (
    <div className='global-data-section w-100'>
     <h1 className='real-time-heading mb-4'>Real-time, interactive, global data</h1>
     <div className='container'>
        <div className='row'>
            <div className='col-12 col-md-4'>
               <p className='card-description'>
               Local news and social media monitored and mapped 24-7
               </p>
               <div className='image-container img-1  mb-4'>
                 <img src = {MapImg} className='card-img card-img-1' />
               </div>
            </div>
            <div className='col-12 col-md-4'>
            <p className='card-description'>
            Full detail and source of every conflict event recorded
               </p>
               <div className='image-container img-2  mb-4'>
                 <img src = {MapImg} className='card-img card-img-2' />
               </div>
            </div>
            <div className='col-12 col-md-4'>
            <p className='card-description'>
            Powerful image search categorises images
               </p>
               <div className='image-container'>
                 <img src = {MapImg} className='card-img' />
               </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default GlobalDataSection
