import React from 'react'
import '../styles/FeedMe.css'
import Pic3 from "/pic3.png"

const Button = ({ name, type, onClick }) => {
    return (
        <button className="button" type={type} onClick={onClick}>
            <img src={Pic3} alt="Feed Me!"/>
            <div className='des'>
                <p >{name}</p>  
            </div>       
        </button>
    )
}

export default Button