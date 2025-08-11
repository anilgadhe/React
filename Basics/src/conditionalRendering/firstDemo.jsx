import { useState } from "react"
import {EmiCalculator} from "../EMI-Calculator/EMICalculator"
import { CarouselDemo } from "../event-Binding/TimeEvents/carousel";

export function ConditionalRender(){
  const [view,setView]= useState(<EmiCalculator/>);

  function handleEmi(){
    setView(<EmiCalculator/>)
  }

  function handleCarousel(){
    setView(<CarouselDemo/>)
  }

    return(
     <div className="container-fluid">
        <h3 className="text-center">Conditional-Rendering</h3>
       <div className="border border-2 p-3 m-4">
          <button onClick={handleEmi} className="btn btn-light">Emi-Calculator</button>
          <button onClick={handleCarousel} className="btn btn-light">Carousel</button>
       </div>
       <hr></hr>

       <div className="mx-4">
         {view}
       </div>
     </div>

    )

}