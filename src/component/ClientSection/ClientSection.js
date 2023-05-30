import React from 'react'
import './clientSection.css'
 {/* client section  */}

const ClientSection = () => {
  return (
    <div className='client-section-container mt-4' > 
      <div className='container'>
        <div className='row'>
            <div className='col-4 '>
          
            <h1 className='very-best-line'>VERY BEST OPINIONS</h1>
                 <p className='some-client-line'> SOME OF OUR CLIENTS</p>
          
                 
            </div>
              <div className='col-4'>
              <div className='client-logo-container'>

                 <img src = "https://eplanetsoft.com/wp-content/uploads/2022/11/client-logo-1.png" className='client-logo' />
              </div>
               
                </div>
                <div className='col-4'>
                <p className='very-best-line'>VERY BEST OPINIONS</p>
                 <p className='some-client-line'> SOME OF OUR CLIENTS</p>
                </div>
        </div>
      </div>
    </div>
  )
}

export default ClientSection
