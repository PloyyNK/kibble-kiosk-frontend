import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'
import BigCard from './components/BigCard'

function App() {

  return (
    // <Card name="Bedroom" mode="Auto" pet_status="true" />
    <BigCard name="Kitchen" food_tank="GOOD"/>
  )
}

export default App
