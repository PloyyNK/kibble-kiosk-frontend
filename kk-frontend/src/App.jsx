import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Behavior_table from './components/behavior_table'
import Log_table from './components/logdata'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Behavior_table/>
      {/* <Log_table/> */}
    </>

  )
}

export default App
