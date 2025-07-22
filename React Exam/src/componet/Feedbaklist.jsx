import React, { useEffect, useState } from 'react'
import Feedbakcard from './Feedbakcard'
import Feddbakform from './Feddbakform'
import App from '../App'

const Feedbaklist = () => {


 const [fatchdata,setdata]= useState([])

  function fetchdata()
  {
    fetch("http://localhost:3000/products")
    .then((res)=>res.json())
    .then((data)=>{
       FormData && setdata(data)})
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    fetchdata();
  },[])

 
  return (
    <>
    <Feddbakform/>
    <hr />
   <br />
    <div>
      {
        fatchdata.map((el)=> <Feedbakcard name={el.name} email={el.email} maseg={el.body}  />)
      }

    </div>
     </>
    
  

    
  )
  
}




export default Feedbaklist