import React from 'react'
import '../styles/FeedMe.css'
import Pic3 from "/pic3.png"

const Button = ({ name, type, onClick }) => {
    return (
        <button className="button" type={type} onClick={onClick}>
            {name}
            <img src={Pic3} alt="Feed Me!"/>
        </button>
    )
}

export default Button