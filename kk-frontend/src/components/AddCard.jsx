import React from 'react'
import '../styles/AddCard.css'

const AddCard = () => {
  return (
    <button className='card-container'>
        <div>
            <img src="https://i.imgur.com/LzHvOK9.png" alt="add room" />
            <p><b>Add new device</b></p>
        </div>
    </button>
  )
}

export default AddCard