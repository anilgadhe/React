import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function PrimeLogin() {
  
    const[userName,setUserName]=useState(null);

    const navigate = useNavigate();

    function handleChangle(e) {
         setUserName(e.target.value);
    }

    function handleClick() {
        window.sessionStorage.setItem('uname', userName);
        navigate("/primesearch")
    }


    return (
        <div className="container-fluid">
            <h2>Login</h2>
            <input className="form-control" onChange={handleChangle} />
            <button onClick={handleClick}>Login</button>
        </div>
    )
}