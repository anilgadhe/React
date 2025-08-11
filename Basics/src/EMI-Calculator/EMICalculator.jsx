import { useState } from "react"
import "./EMI-Calculator.css"

export function EmiCalculator() {
  
    const [amount , setamount] = useState(50000);
    const[years,setyears]= useState(1)
    const[rate, setrate] =useState(10.9);
    const[emi ,setemi] =useState(0);
    const [toggleClass, settoggleClass]= useState("d-none")


   function handleAmount(e){
        setamount(e.target.value);
   }

   function handleyears(e){
         setyears(e.target.value)
   }

   function handleRate(e){
    setrate(e.target.value);
   }

   function handleClick(){
        var P = parseInt(amount);

        var N = parseInt(years) * 12;

        var R = parseFloat(rate)/12/100;

        var EMI = P * R * (Math.pow(1+R,N)) / (Math.pow(1+R,N)-1);

        setemi(EMI);
        settoggleClass("d-block")
   }

    return (
        <div className="container calculator">
            <h4>Personal EMI-Calculator</h4>
            <div className="row">
                <div className="col">
                    Amount you need &#8377; <input size="10" onChange={handleAmount} value={amount}  min="50000" max="4000000" step="50000" type="number" />
                </div>
                <div className="col">
                    for<input size="2" onChange={handleyears} value={years} type="number" min="1" max="5" /> years
                </div>
                <div className="col">
                    interest rate<input size="2" onChange={handleRate} value={rate} type="number" step="0.01" min="10.9" max="21" />%
                </div>
            </div>

            <div className="row mt-2">
                <div className="col">
                    <div><input type="range" onChange={handleAmount} value={amount} min="50000" max="4000000" className="form-range" id="inprange" /> </div>
                    <span>&#8377;50,000</span> <span className="float-end">&#8377; 40,000</span>

                </div>
                <div className="col">
                    <div ><input id="inprange" onChange={handleyears} value={years} min="1" max="5" type="range" className="form-range" /></div>
                    <span>1 year</span> <span className="float-end">5 year</span>
                </div>
                <div className="col">
                    <div><input type="range" onChange={handleRate} value={rate} min="10.9" max="21" id="inprange" className="form-range" /></div>
                    <span>10.9</span> <span className="float-end">21</span>
                </div>
            </div>

            <div><button onClick={handleClick} className="btn btn-primary float-end my-3">Calculate</button></div>

            <div className={`text-center mt-5 ${toggleClass}`}>
                Your EMI amount {emi.toLocaleString("en-in",{style:"currency", currency:"INR",minimumFractionDigits:2, maximumFractionDigits:2})} is  for next {years * 12}  months
            </div>
        </div>
    )
}