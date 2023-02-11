import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'
import BigCard from './components/BigCard'

function App() {

  return (

    <div>
    {/* <Card name="Living room" mode="Manual" pet_status="false" /> */}
    <BigCard name="Kitchen" food_tank="GOOD"/>
    </div>
    
  )
}

export default App
