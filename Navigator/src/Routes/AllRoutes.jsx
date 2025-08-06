import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Addproduct from '../Components/Addproduct'
import Products from '../Components/Products'
import Login from '../Components/Login'
import Privatepage from '../Components/privatePage'

const AllRoutes = () => {
  return (

    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={
          <Privatepage>
            <Addproduct/>
          </Privatepage>
        }></Route>
        <Route path='/product' element={<Products/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
    </Routes>

  )
}

export default AllRoutes