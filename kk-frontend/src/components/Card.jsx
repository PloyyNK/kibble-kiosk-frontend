import React from 'react'
import { useEffect } from 'react'
import '../styles/Card.css'

const Card = ({rID, mode, pet_status, index, setId}) => {

    useEffect(()=>{
        console.log("CARD",rID,mode,pet_status)
    },[rID])
    
    const ChangerIDtoName = () => {
        if (rID == 0){
            return "Kitchen"
        }
        else if (rID == 1){
            return "Living room"
        }
        else if (rID == 2){
            return "Bedroom"
        }
        else if (rID == 3){
            return "Study room"
        }
        return "Room"
    }

    let name = ChangerIDtoName();

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
        else if (name == "Study room") {
            return "https://cdn3.iconfinder.com/data/icons/education-181/128/education_final-09-512.png"
        }
        return "https://img.icons8.com/ios/500/room.png"
    }


    if (pet_status) {
        return (
            <div onClick={() => setId(index)} className='container'>
                <div className='item' id='icon'><img src={icon()} alt="room icon" /></div>
                <div className='item' id='info'>
                    <h3>{name}</h3>
                    <p>{mode ? "Auto" : "Manual"} mode</p>
                    <div className='status'><img src="https://i.imgur.com/N34i12t.png" alt="" /></div>
                </div>
            </div>
        )
    } 
    else {
        return (
            <div onClick={() => {setId(index); console.log(index)}} className='container'>
                <div className='item' id='icon'><img src={icon()} alt="room icon" /></div>
                <div className='item' id='info'>
                    <h3>{name}</h3>
                    <p>{mode ? "Auto" : "Manual"} mode</p>
                </div>
            </div>
        )
    }
  
}

export default Card