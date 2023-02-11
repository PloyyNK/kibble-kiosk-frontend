import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Behavior_table from './components/behavior_table'
import Log_table from './components/logdata'
import './App.css'
import Card from './components/Card'
import BigCard from './components/BigCard'
import { is_pet_active } from './services/link'
import AddCard from './components/AddCard'
import Dropdown from './components/dropdown'
import { getAllData } from './services/link.js'
import { useEffect } from 'react'

function App() {
  // let active = is_pet_active(0)
  // console.log(active)

  // let data = JSON.stringify(getAllData(0))
  const [data,setData] = useState(null)
  const [rID,setrID] = useState(0)
  const [sensor, setSensor] = useState()
  const [mode, setMode] = useState()
  const [pet_status, setPetStatus] = useState()
  const [tank, setTankLevel] = useState()


  // useEffect(()=>{
  //   const url = "https://ecourse.cpe.ku.ac.th/exceed12/getdata/all/0"
  //   fetch(url).then((res) => {
  //   return res.json()
  // }).then(data => {
  //   setData(data)
  //   setrID(data.room_id)
  //   setMode(data.auto_refill)
  //   setSensor(data.PIR_on)
  //   setPetStatus(data.pet_active)
  //   setTankLevel(data.tank_level)
  // })
  // .catch(err => console.log(err))
  // })
  
  return (

    <div>
        {/* <AddCard /> */}
        <Card rID={1} mode="Auto" pet_status="true" />
        <BigCard rID={1} tank="true"/>
        <Behavior_table/>
        {/* <Log_table/>  */}
        
        {/* <p>{data}</p> */}
        hi
    </div>

  )
  
}

export default App
