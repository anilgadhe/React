import { useEffect, useState } from "react";

export function Login(){

    useEffect(()=>{
        console.log("login Component mounted");

        return()=>{
            console.log("Login Component unMounted");
            
        }
        
    },[]);

    return(
        <div className="text-center">
            User Login
        </div>
    )
}

export function Register(){

    useEffect(()=>{
        console.log("register Component Mounted");

        return()=>{
            console.log("register Component unMounted");
            
        }
        
    },[]);

    return(
        <div className="text-center">
              user Register
        </div>
    )
}


export function Lifecycle(){
  
    const [component,setComponent] = useState();

  function handleLoginClick(){
    setComponent(<Login/>)
  }

  function handleRegisterClick(){
    setComponent(<Register/>)
  }
 
    return(
        <div>
            <h2>Component Lifecycle</h2>

            <button className="btn btn-primary" onClick={handleLoginClick} >Login</button>
            <button className="mx-2 btn btn-warning" onClick={handleRegisterClick} >Register</button>

            <hr></hr>
            <div>
                {component}
            </div>
        </div>
    )
}