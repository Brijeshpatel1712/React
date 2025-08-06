import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import AllRoutes from './Routes/AllRoutes'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
        <Navbar/>
        <hr />
        <AllRoutes/>
    </>
  )
}

export default App
