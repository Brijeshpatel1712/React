import { useState } from 'react'
import './App.css'
import NonFiction from './components/NonFiction'
import Fiction from './components/Fiction'

function App() {
  const [toggle, setToggle] = useState(0)

  return (
    <>
      <div>
            <h1>Mini Book Store</h1>
      
            <button data-testid="toggle-btn" onClick={()=>setToggle(!toggle)}> {toggle ? "Show Fiction Book" : "Show Non Fiction Book"} </button>
      
            <div data-testid="conditional-container">
      
                {toggle ? <NonFiction/> : <Fiction />}
              {/* <Fiction/> */}
            </div>
          </div>
    </>
  )
}

export default App
