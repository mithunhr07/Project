import React, { Component } from 'react';
import './Navbar.css';

import logo from '../Images/logo_image.jpg'

class Navbar extends Component {
    render() {
        return (
            <div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark cursor:pointer">
 
  <a href="#">
  <span>
  <img className="logo-img" src={logo}/>
  </span>
  <span className="text-color">agri machinery</span>
  </a>
  <a href="#"><span className="glyphicon glyphicon-user fa-2x" id="login-icon"></span></a>
  <a className="text-color" href="#">Log In</a>
  
 
  <ul class="navbar-nav" id="nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Services</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Contact Us</a>
    </li>
  </ul>
</nav>



                {/* <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  
  <a class="navbar-brand" href="#">
  <img className="logo-img" src={logo}/>agri machinery
  </a>
  
  
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Services</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Contact Us</a>
    </li>
  </ul>
</nav> */}
</div>
        );
    }
}

export default Navbar;


