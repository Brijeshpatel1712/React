import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function App() {
  const [count, setCount] = useState([])

  function fatchdata(){
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>setCount(res.data))
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    fatchdata();
  },[])

  return (
    <>
     <div style={{display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px",}}>
       {
        count.map((el)=>
          <div  key={el.id} style={{ border: "solid 2px black", alignContent: "center" }}>
            <Card >
      <Card.Img variant="top" src={el.image} />
      <Card.Body>
        <p>{el.price}</p>
        <h6>{el.category}</h6>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
       {el.description}
        </Card.Text>
      </Card.Body>
    </Card> 
          </div>
        )}
       </div>
    </>
  )
}

export default App
