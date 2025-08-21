import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import '../App.css'
import axios from 'axios';

const Addproduct = () => {
const obj = {
    title : "",
    image : "",
    description : "",
    price : "",
    category :""
}
const [formdata,setformdata] = useState(obj)

function hendealsubmit(e){
     e.preventDefault();
    e.target.reset();

    axios.post(`http://localhost:3000/products`,formdata)
    .then((res)=>setformdata(res.data))
    .catch(error => console.error('Error:', error));
}
 function hendelcheng(e)
    {
        setformdata({...formdata, [e.target.name]:e.target.value})  
    }
  return (
    <>
    <br />
   <Container >
     <div >
        <form onSubmit={hendealsubmit}>

            <p>title</p>
            <input type="text" name='title' onChange={(e)=>hendelcheng(e)} />

            <p>imege</p>
            <input type="url" name='image' onChange={(e)=>hendelcheng(e)} />

            <p>description</p>
            <input type="text" name='description' onChange={(e)=>hendelcheng(e)} />

            <p>price</p>
            <input type="number" name='price' onChange={(e)=>hendelcheng(e)} />

            <p>category</p>
            <input type="text" name='category' onChange={(e)=>hendelcheng(e)} />
            <br /><br />

            <input type="submit" />

        </form>
    </div>
   </Container>
   </>
  )
}

export default Addproduct