import React from 'react'
import { useState } from 'react'
import '../styles/AddCard.css'
import Dropdown from './dropdown'

const AddCard = () => {

    const rooms = [
        {value: 0, label: "Kitchen"}, 
        {value: 1, label: "Living room"}, 
        {value: 2, label: "Bedroom"}
    ]

    const [room, setRoom] = useState(-1)

    const callback = (n) => {
        setRoom(n)
    }

    const Submit = (e) => {
        e.preventDefault()
        const url = "http://ecourse.cpe.ku.ac.th/exceed12/"
        // setRoom(room_id.current.value)
        // console.log(room_id.current.value)
        const new_rooms = [
            {room_id: room}, 
            {tray_level: true},
            {tank_level: false},
            {auto_refill: true},
            {PIR_on: true},
            {mannual_refill: false},
            {pet_active: true}
        ]
        // const data = new_rooms.json()
        console.log(JSON.stringify(new_rooms))
        // fetch(url+"/newdevice", {method: 'POST', body: JSON.stringify(new_rooms)})
    }

  return (
    <div className='card-container'>
            <img src="https://i.imgur.com/LzHvOK9.png" alt="add room" />
            <p><b>Add new device</b></p>
            <Dropdown className='dropdown' placeHolder="Select your room..." options={rooms} value={room} callback={callback}/>
            <button disabled={room === -1} className='confirm' onClick={Submit} type="submit">Confirm</button>
    </div>
  )
}

export default AddCard