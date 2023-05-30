import React from 'react'
import './bootstrap.css'
import Logo from '../../assets/logo.png'
const BootstrapNav = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary nav-container-wrapper p-3">
  <div class="container">
    {/* <a class="navbar-brand  nav-right-side-img" href="#">LOGO</a> */}
    <img src = {Logo}  className='' style = {{color:"black" ,backgroundColor:"black",paddingLeft:"10px" ,paddingRight:"10px" ,paddingTop:"4px" ,paddingBottom:"4px" ,cursor:"pointer"}}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse navigation-container" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item nav-element1">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item nav-element1">
          <a class="nav-link active" href="#">Web Services</a>
        </li>
        <li class="nav-item nav-element1">
          <a class="nav-link active" href="#">SEO Services</a>
        </li>
        <li class="nav-item nav-element1">
          <a class="nav-link active" href="#">Career</a>
        </li>
        <li class="nav-item nav-element1">
          <a class="nav-link active" href="#">Contact</a>
        </li>
        <li class="nav-item nav-element1 get-started-button">
          <a class="nav-link active get-started-text" href="#">Lets Talk</a>
        </li>
        <li class="nav-item nav-element1 login-button-container">
          <a class="nav-link active login-link-button" href="#">Login</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default BootstrapNav
