import React, { useState } from 'react'
import App from '../App';

import Feedbaklist from './feedbaklist';
import '../App'


const Feddbakform = () =>  {

    const inisal = {
        name : "",
        email : "",
       body : " ",
    }

    const [formatdata,setdata] = useState(inisal)

function hendalsubmit(e)
{
  
    e.target.reset();

    
fetch('http://localhost:3000/products', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formatdata),
})
.then(response => response.json())
.then(data => console.log('POST request successful:', data))
.catch(error => console.error('Error:', error));

}
function hendealcheng(e)
{
  setdata({...formatdata,[e.target.name]:e.target.value})
}



  return (
    <div>
   <h1>List Form</h1>
        <form  onSubmit={hendalsubmit} >

          <p>name</p>  
          <input type="text" name='name' placeholder='Enter Your Name' onChange={(e)=>hendealcheng(e)} />   

          <p>email</p>
          <input type="emil" name='email' placeholder='Enter Your Email'   onChange={(e)=>hendealcheng(e)} />

          <p> mesege</p>
          <input type="text" name='body' placeholder=' enter your  sms'  onChange={(e)=>hendealcheng(e)}  />
          <br />
          <br />
          <br />

          <input type="submit"  />
 
        </form>
  
   

    </div>
    
  )
}

export default Feddbakform