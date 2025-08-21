import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/home'
import Addproduct from '../components/addproduct'
import Product from '../components/product'
import Login from '../components/Login'
import Privetpage from '../components/Privetpage'

const Allrautse = () => {
  return (
    <div>

<Routes>
    <Route path='/Home' element={<Home/>} ></Route>
    <Route path='/Product' element={<Product/>} ></Route>
    <Route path='/Addproduct' element={
      <Privetpage>
      <Addproduct/>
      </Privetpage>
      } ></Route>
    <Route path='/login' element={<Login/>} ></Route>
</Routes>

    </div>
  )
}

export default Allrautse