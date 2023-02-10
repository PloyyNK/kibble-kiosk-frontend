import React from 'react'
import { useState } from 'react'
import '../styles/BigCard.css'

function BigCard({name, food_tank}) {

    let [mode, setMode] = useState("Auto")
    let [sensor, setSensor] = useState("on")
    let [sensor_icon, setIcon] = useState("https://i.imgur.com/oKjla0f.png")

    let TankColor = ({food_tank}) => {
        if (food_tank == "GOOD") {
            return "green"
        }
        else if (food_tank == "WARNING"){
            return "red"
        }
    }

    console.log(TankColor(food_tank))

    const ModeSwitch = () => {
        if (mode == "Auto") {
            setMode("Manual")
            console.log("Manual")
        }
        else if (mode == "Manual") {
            setMode("Auto")
            console.log("Auto")
        }
    }

    const SensorSwitch = () => {
        if (sensor == "on") {
            setSensor("off")
            setIcon("https://i.imgur.com/NVTb1n7.png")
            console.log("off")
        }
        else if (sensor == "off") {
            setSensor("on")
            setIcon("https://i.imgur.com/oKjla0f.png")
            console.log("on")
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
                                <span id={TankColor(food_tank)}><b>{food_tank}</b></span>
                                <span>: Kibble in the contain is </span>
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
                                <span id={TankColor(food_tank)}><b>{food_tank}</b></span>
                                <span>: Kibble in the contain is </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
  
}

export default BigCard