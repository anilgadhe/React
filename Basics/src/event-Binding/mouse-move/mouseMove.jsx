import { useState } from "react"


export function MouseMove(){

    const [flgPosition, setFlgPosition] =useState({position:null,left:null,top:"null"})
 
    function handleMouseMove(e){
      setFlgPosition({
        position:"Fixed",
        left:e.clientX +'px',
        top: e.clientY +'px'
      })
    }

    return(
        <div onMouseMove={handleMouseMove}>
            <div className="text-center fw-bold fs-3" style={{height:"80vh"}}>Move Your Mouse Pointer to test</div>
            <img src="./tricolor.gif" alt="tricolor" height="50px" style={flgPosition}/>
        </div>
    )
} 
