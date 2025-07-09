import { useState } from "react"
import './Counter.css'

function Counter()
{
    const [value,setValue] = useState(0)

   
     

    // console.log(value);
    // function increment()
    // {
    //     setValue(value+1)
    // }
    // function decrement()
    // {
    //     setValue(value-1)
    // }
    // function react()
    // {
    //     setValue(value&&0)
    // }
    
    return(
        <>
        <h1>Counter App</h1>
        <h1>{value}</h1>
        <button onClick={()=>setValue(value+1)}>Increment</button>
         <button onClick={()=>setValue(value&&0)}>0</button>
        <button onClick={()=>setValue(value-1)}>decrement</button>
       
        </>
    )
}
export default Counter

