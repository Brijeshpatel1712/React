import { useState } from 'react'

import './App.css'
import { IoIosArrowBack } from "react-icons/io";
import { CiHeart } from "react-icons/ci";


function App() {
  

  return (
    <>
    <div className='container' >

        <div id='top' >
         <div id='nave' > <IoIosArrowBack /> Black Toll port </div>

         <CiHeart />

        </div>
        <hr />

        <div className="img-card">
          <div id="img">
            <img src="https://srisaiforestrylive.com/cdn/shop/files/Teak-Wood-Live-Plant-_-Sagwan_-Treated-Teak-Plant-_-for-Planting-SRI-SAI-FORESTRY-4543675.jpg?v=1718800619"/> 

          </div>
          <div id="card">
            <h1>CLASSEC PLASE LIVE</h1>
            <h3>populer house plant</h3>
            <h1>$ 18</h1>
            <p>classe pleve tree plant fore the house use i home to worke and office and scool propfeshun
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, fugiat dignissimos. Sed reiciendis numquam quasi, ea cum asperiores, laudantium amet nihil architecto, voluptas at nisi tempore pariatur et repudiandae debitis.
            </p>
<br />
<br />
            <button>add to card</button>
            <button>whitliste</button>
          </div>
        </div>
      

    </div>
    </>
  )
}

export default App