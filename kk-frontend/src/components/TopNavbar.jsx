import React from "react";
import '../styles/TopNavbar.css';
import logo from "/logo.png";
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
    <nav class="navbar">
    <a href="#section1" id ="w1">HOME</a>
    <a href="#section2" id ="w2">ABOUT</a>
    <a href="#section3" id ="w3">DEVICE/S</a>
    <a href="#section4" id ="w4">PETS'S BEHAVIOR</a>
  </nav>
  

    <div class="section1" id="section1">
    <h2>HOME</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero.</p>
    </div>

    <div class="section2" id="section2">
    <h2>ABOUT</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero.</p>
    </div>

    <div class="section3" id="section3">
    <h2>DEVICE/S</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero.</p>
    </div>

    <div class="section4" id="section4">
    <h2>PETS'S BEHAVIOR</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero.</p>
    </div>

    </div>

    // <div>
    //   <h1> Hello</h1>
    // <nav className="topnavbar">
		//   <ul>

		// 	  <li>
    //     <h1> Hell</h1>
    //      <Link to= "home">HOME</Link>
    //       {/* <Link activeClass="active" smooth spy to="home">HOME</Link> */}
    //     </li>

		// 	  {/* <li> 
    //      <Link activeClass="active" smooth spy to="devices">DEVICES/S</Link>
    //     </li>

		// 	  <li>
    //       <Link activeClass="active" smooth spy to="behavior">BEHAVIOR</Link>
    //     </li> */}
		//   </ul>
            
    //   <section id="home">HOME</section>
    //   <section id="devices">DEVICES/S</section>
    //   <section id="behavior">BEHAVIOR</section>
  
	  // </nav>
    // </div>

  //   <header>
  //   </header>
  
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