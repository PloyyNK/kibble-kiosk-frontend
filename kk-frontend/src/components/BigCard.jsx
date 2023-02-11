import React from 'react'
import { useState } from 'react'
import '../styles/BigCard.css'

function BigCard({rID, tank}) {

    let [mode, setMode] = useState("Auto")
    let [sensor, setSensor] = useState("on")
    let [sensor_icon, setIcon] = useState("https://i.imgur.com/oKjla0f.png")

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
    }

    let name = ChangerIDtoName();

    let TankTranslate = () => {
        if (tank == 'true') {
            return "GOOD"
        } 
        else if (tank == 'false') {
            return "WARNING"
        }
    }

    let food_tank = TankTranslate();

    let FoodTankAmount = () => {
        console.log(food_tank)
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
        const url = "https://ecourse.cpe.ku.ac.th/exceed12/"
        
        if (mode == "Auto") {
            setMode("Manual")
            console.log("Manual")
            const set_mode = {auto_refill: false}
            fetch(url+rID, {method: 'PUT',body: JSON.stringify(set_mode), headers:{"content-type":"application/json"}})
        }
        else if (mode == "Manual") {
            setMode("Auto")
            console.log("Auto")
            const set_mode = {auto_refill: true}
            fetch(url+rID, {method: 'PUT',body: JSON.stringify(set_mode), headers:{"content-type":"application/json"}})
        }
    }

    const SensorSwitch = () => {
        if (sensor == "on") {
            setSensor("off")
            setIcon("https://i.imgur.com/NVTb1n7.png")
            console.log("off")
            const set_sensor = {PIR_on: false}
            fetch(url+rID, {method: 'PUT',body: JSON.stringify(set_sensor), headers:{"content-type":"application/json"}})
            
        }
        else if (sensor == "off") {
            setSensor("on")
            setIcon("https://i.imgur.com/oKjla0f.png")
            console.log("on")
            const set_sensor = {PIR_on: true}
            fetch(url+rID, {method: 'PUT',body: JSON.stringify(set_sensor), headers:{"content-type":"application/json"}})
        }
    }

    if (mode == "Manual") { // add feed me button
        return (
            <div className='bcontainer'>
                <div className='petfood'><img src="https://i.imgur.com/GM1h9I2.png" alt="pet food" /></div>
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
                    <button>FEED ME</button>
                </div>
            </div>
        )
    }
    else if (mode == "Auto") {
        return (
            <div className='bcontainer'>
                <div className='petfood'><img src="https://i.imgur.com/GM1h9I2.png" alt="pet food" /></div>
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