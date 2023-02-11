import React from 'react'
import '../styles/Home.css'
import Pic1 from "/pic1.png"

const Home = () => {
    return(
        <div className='homepic'>
           <img src={Pic1} alt="Home"/>
        </div>
    )
}

export default Home