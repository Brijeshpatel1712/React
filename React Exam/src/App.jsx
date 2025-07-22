import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Feedbaklist from './componet/feedbaklist'
import Feedbakcard from './componet/Feedbakcard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Feedbaklist/>
     <Feedbakcard/>
    </>
  )
}

export default App
