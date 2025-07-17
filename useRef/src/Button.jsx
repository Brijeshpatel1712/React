import React, { useRef } from 'react'

const Button = () => { 

    const refdata = useRef(null)

    function handaleplay()
    {
        refdata.current.play();
    }
    
    function handalepause()
    {
        refdata.current.pause();
    }
  return (
    <div>
      <video controls width="950" ref={refdata}>
        <source src="https://aa86d1e7-8f0a-42dc-b140-42f50c71c6f9.mdnplay.dev/shared-assets/videos/flower.webm" type="video/webm" />
         </video>

         <br /><br />


         <button onClick={handaleplay}>play</button>
         <button onClick={handalepause}>stop</button>
    </div>
  )
}

export default Button
