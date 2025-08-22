import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function Primesearch(){

    const navigate = useNavigate()
 useEffect(()=>{

    if(window.sessionStorage.getItem('uname')===null){
          navigate("/login")
    }else{
        navigate("/primesearch")
    }
 },[]);

    return(
        <div className="text-center">
             <div>Prime-search</div>
             <div>User {window.sessionStorage.getItem('uname')}</div>
        </div>
    )
}