import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Addproduct from '../components/Addproduct'
import Product from '../components/Product'



const Allrautse = () => {
  return (
    <div>

<Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='/Product' element={<Product/>} ></Route>
    <Route path='/Addproduct' element={ <Addproduct/>} ></Route>
   
</Routes>

    </div>
  )
}

export default Allrautse