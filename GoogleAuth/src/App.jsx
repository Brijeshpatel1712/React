import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Allroutes from './Routes/Allroutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <hr />
      <Allroutes/>

    </>
  )
}

export default App
