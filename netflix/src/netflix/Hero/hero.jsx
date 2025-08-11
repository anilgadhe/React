import { Main } from "../main/main"
import "./hero.css"

export function Hero(){
       return(
            <div className="hero">
               <div className="shade d-flex justify-content-center align-items-center">
                <div>
                  <p className="text-white Tprimary">Unlimited movies, TV</p>
                   <p className="text-white Tprimary  text-center">shows and more</p>
                   <p className="text-white text-center fs-4">Starts at ₹149. Cancel at any time.</p> 
                    <Main/>
                </div>
               </div>
            </div>
       )
}