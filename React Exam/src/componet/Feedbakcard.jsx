import React, { useState } from 'react'
import Feedbaklist from './feedbaklist'
import Feddbakform from './Feddbakform'


const Feedbakcard = (props) => {
  return (
    <>

   
    <div>

      { 

      <div id='bookkard' >
        
        <h2>{props.name}</h2>
        <h3>{props.email}</h3>
        <p>{props.maseg}</p>
        </div>
      }
    </div>
  
    
    </>
  )
}

export default Feedbakcard