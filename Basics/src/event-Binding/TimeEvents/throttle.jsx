import { useEffect, useState } from "react"


export function Throttle(){

    const [clock ,setClock]=useState();

  function gettime(){
    var now = new Date();
    setClock(now.toLocaleTimeString());
  }

  useEffect(()=>{
    setInterval(gettime,1000)
  },[])
   
    return(
        <div className="h-100 d-flex justify-content-center align-items-center">
           <h2>{clock}</h2>
        </div>
    )
} 