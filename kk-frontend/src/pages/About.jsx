import React from 'react'
import '../styles/About.css'
import Pic4 from "/pic4.png"

const About = () => {
    return(
        <div className='container-about'>
            <h1>About Us</h1>
            <div class="header">
                <img src={Pic4} alt="Pets"/>
                <div className='description'>
                    <p>It's a new era of pet feeding. We are proud to present “Kibble Kiosk”,
                    an automatic pet feeder with a beautiful web interface which can give
                    you peace of mind and relax when going out for daily activities without
                    having to worry about feeding your beloved pet. Kibby aka 'KK' has you
                    covered! It can tell you which room your pet spends the most time in.</p>
                </div>
                
            </div>
        </div>
         
    )
}

export default About