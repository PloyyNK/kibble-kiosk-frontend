import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Behavior_table from './components/behavior_table'
import Log_table from './components/logdata'
import './App.css'
import Card from './components/Card'
import BigCard from './components/BigCard'
import { is_pet_active } from './services/link'
import AddCard from './components/AddCard'

function App() {
  let active = is_pet_active(1)
  console.log(active)
  
  return (

    <div>
        {/* <Card name="Living room" mode="Manual" pet_status={active} /> */}
        {/* <BigCard name="Kitchen" food_tank="GOOD"/> */}
        {/* <Behavior_table/> */}
        {/* <Log_table/> */}
        <AddCard />
    </div>

  )

}

export default App
