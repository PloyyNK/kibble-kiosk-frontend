import React from "react";
import '../styles/TopNavbar.css';
import Logo from "/logo.png"
// import { Link } from "react-router-dom";
// import Button from "./Button";

const TopNavbar = () => {
  return (
    <div>
       {/* <ul>
        <Link to="/">
          <img className="logo" src={logo} />
        </Link>
      </ul> */}

      <div className="navbar">
        <div className="logo">
          <a href="#KibbleKiosk">
          <img src={Logo} alt="Kibble Kiosk Logo"/>
          </a>
        </div>
      <ul>
      <a href="#home">HOME</a>
      <a href="#about">ABOUT</a>
      <a href="#devices">DEVICE/S</a>
      <a href="#pets">PETS'S BEHAVIORS</a>
      </ul>
      </div>

    
    {/* <div className="KibbleKiosk" id="KibbleKiosk">
    <h2>LOGO</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero.</p>
    </div> */}


    <div className="home" id="home">
    <h2>HOME</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero.</p>
    </div>

    <div class="about" id="about">
    <h2>ABOUT</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero.</p>
    </div>

    <div class="devices" id="devices">
    <h2>DEVICE/S</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero.</p>
    </div>

    <div class="pets" id="pets">
    <h2>PETS'S BEHAVIOR</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero.</p>
    </div>

    </div>
    )
  }


    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
    

export default TopNavbar;