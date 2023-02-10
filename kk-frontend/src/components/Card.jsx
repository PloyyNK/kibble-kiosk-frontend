import React from 'react'
import '../styles/Card.css'

const Card = ({name, mode, pet_status}) => {
    const icon = () => {
        if (name == "Kitchen") {
            return "https://cdn-icons-png.flaticon.com/512/3474/3474313.png"
        } 
        else if (name == "Living room") {
            return "https://icons.iconarchive.com/icons/icons8/ios7/512/Household-Livingroom-icon.png"
        }
        else if (name == "Bedroom") {
            return "https://uxwing.com/wp-content/themes/uxwing/download/household-and-furniture/double-bed-icon.png"
        }
    }


    if (pet_status == 'true') {
        return (
            <div className='container'>
                <div className='item' id='icon'><img src={icon()} alt="room icon" /></div>
                <div className='item' id='info'>
                    <h3>{name}</h3>
                    <p>{mode} mode</p>
                </div>
                <div className='status'><img src="https://i.imgur.com/N34i12t.png" alt="" /></div>
            </div>
        )
    } 
    else {
        return (
            <div className='container'>
                <div className='item' id='icon'><img src={icon()} alt="room icon" /></div>
                <div className='item' id='info'>
                    <h3>{name}</h3>
                    <p>{mode} mode</p>
                </div>
            </div>
        )
    }
  
}

export default Card