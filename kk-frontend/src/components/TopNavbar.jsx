import React from "react";
import { useState } from 'react'
import { useEffect } from 'react'
import '../styles/TopNavbar.css';
import Logo from "/logo.png"
import Home from '../pages/Home';
import Pic1 from "/pic1.png"
import About from "../pages/About";
import Card from "./Card";
import BigCard from '../components/BigCard'
import AddCard from "./AddCard";
// import { Link } from "react-router-dom";
// import Button from "./Button";

const TopNavbar = () => {

  const [data,setData] = useState(null)
  const [rID,setrID] = useState(0)
  const [sensor, setSensor] = useState()
  const [mode, setMode] = useState()
  const [pet_status, setPetStatus] = useState()
  const [tank, setTankLevel] = useState()
  const [currentId, setCurrentId] = useState(-1)


  useEffect(()=>{
    const url = "https://ecourse.cpe.ku.ac.th/exceed12/getdata/allall"
    fetch(url).then((res) => {
    return res.json()
  }).then(data => {
    setData(data)
    setrID(data.room_id)
    setMode(data.auto_refill)
    setSensor(data.PIR_on)
    setPetStatus(data.pet_active)
    setTankLevel(data.tank_level)
  })
  .catch(err => console.log(err))
    console.log(currentId)
  }, [])

  return (
    <div>
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
      <Home />
    </div>

    <div class="about" id="about">
      <div className="about-info">
        <About />
      </div>
    </div>

    <div class="devices" id="devices">
      {currentId === -1 && data && data.map((value, index) => (<div className="device"><Card rID={value.room_id} mode={value.auto_refill} pet_status={value.pet_active} index={index} setId={setCurrentId}/></div>))}
        <div className="device"><AddCard /></div> 
      {currentId !== -1 ? <BigCard rID={data[currentId].room_id} tank={data[currentId].tank_level} setId={setCurrentId}/> : console.log("No")}
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