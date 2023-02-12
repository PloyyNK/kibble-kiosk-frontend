import React from 'react'
import { useState } from 'react'
import '../styles/BigCard.css'
import Button from '../components/FeedMe.jsx'

function BigCard({rID, tank, setId}) {

    let [mode, setMode] = useState("Auto")
    let [sensor, setSensor] = useState("on")
    let [sensor_icon, setIcon] = useState("https://i.imgur.com/oKjla0f.png")
    const url = "https://ecourse.cpe.ku.ac.th/exceed12/"

    const ChangerIDtoName = () => {
        console.log(rID)
        if (rID === 0){
            return "Kitchen"
        }
        else if (rID === 1){
            return "Living room"
        }
        else if (rID === 2){
            return "Bedroom"
        }
        else if (rID === 3){
            return "Study room"
        }
        return "Room"
    }

    const name = ChangerIDtoName();

    let TankTranslate = () => {
        if (tank) {
            return "GOOD"
        } 
        else{
            return "WARNING"
        }
    }

    let food_tank = TankTranslate();

    let FoodTankAmount = () => {
        if (food_tank == "GOOD") {
            return ("adequate")        
        }
        else if (food_tank == "WARNING") {
            return ("less than 25%")
        }
    } 

    let Color = () => {
        if (food_tank == "GOOD") {
            return ("green")        
        }
        else if (food_tank == "WARNING") {
            return ("red")
        } 
    }

    const ModeSwitch = () => {
        
        if (mode == "Auto") {
            setMode("Manual")
            console.log("Manual")
            const set_mode = {auto_refill: false}
            fetch(url+"update/auto_refill/"+rID+"/false", {method: 'PUT'})
        }
        else if (mode == "Manual") {
            setMode("Auto")
            console.log("Auto")
            const set_mode = {auto_refill: true}
            fetch(url+"update/auto_refill/"+rID+"/true", {method: 'PUT'})
        }
    }

    const SensorSwitch = () => {
        if (sensor == "on") {
            setSensor("off")
            setIcon("https://i.imgur.com/NVTb1n7.png")
            console.log("off")
            const set_sensor = {PIR_on: false}
            fetch(url+'update/PIR_on/'+rID+'/false', {method: 'PUT'})
            
        }
        else if (sensor == "off") {
            setSensor("on")
            setIcon("https://i.imgur.com/oKjla0f.png")
            console.log("on")
            const set_sensor = {PIR_on: true}
            fetch(url+'update/PIR_on/'+rID+'/true', {method: 'PUT'})
        }
    }

    const handleFeedMeClick = (e) => {
        e.preventDefault()
        const data = {open_door: 'true'}
        fetch(url+'update/open_door'+rID+'/true', {method: 'PUT'})

    }

    
    if (mode == "Manual") { // add feed me button
        return (
            <div  className='bcontainer'>
                <div onClick={() => setId(-1)} className='petfood'><img src="https://i.imgur.com/GM1h9I2.png" alt="pet food" /></div>
                <div className='information'>
                    <div className='title'><h1>{name}</h1></div>
                    <div className='description'>

                        <div className='mode'>
                            <button onClick={ModeSwitch}><img src="https://i.imgur.com/YRZjLC5.png" alt="manual logo" /></button>
                            <p>{mode} mode</p>
                        </div>

                        <div className='sensor'>
                            <button onClick={SensorSwitch}><img src={sensor_icon} alt="sensor status" /></button>
                            <p>Sensor</p>
                        </div>
                        <div className='food-tank'>
                            <img src="https://i.imgur.com/RUG2dpz.png" alt="" />
                            <div className='tank'>
                                <span id={Color()}><b>{food_tank}</b></span>
                                <span>: Kibble in the contain is {FoodTankAmount(tank)}</span>
                            </div>
                        </div>

                    </div>
                    <Button name="FEED ME!"/>
                </div>
            </div>
        )
    }
    else if (mode == "Auto") {
        return (
            <div className='bcontainer'>
                <div onClick={() => setId(-1)} className='petfood'><img src="https://i.imgur.com/GM1h9I2.png" alt="pet food" /></div>
                <div className='information'>
                    <div className='title'><h1>{name}</h1></div>
                    <div className='description'>

                        <div className='mode'>
                            <button onClick={ModeSwitch}><img src="https://i.imgur.com/Yxb9i2I.png" alt="auto logo" /></button>
                            <p>{mode} mode</p>
                        </div>

                        <div className='sensor'>
                            <button onClick={SensorSwitch}><img src={sensor_icon} alt="sensor status" /></button>
                            <p>Sensor</p>
                        </div>

                        <div className='food-tank'>
                            <img src="https://i.imgur.com/RUG2dpz.png" alt="" />
                            <div className='tank'>
                                <span id={Color()}><b>{food_tank}</b></span>
                                <span >: Kibble in the contain is {FoodTankAmount(tank)}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
  
}

export default BigCard