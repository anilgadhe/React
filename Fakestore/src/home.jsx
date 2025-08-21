import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'


export function Home(){

    const[categeory,setCategeory]=useState([])

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/categories`).then(response=>{
            setCategeory(response.data)
        })
    },[])
    return(
        <div className="container-fluid">
            <h2 className="mt-3 fw-bold">Home</h2>

            <div>
                <ul>
                {categeory.map((category,i)=>(
                    
                    <li key={i} className="bg-dark text-white w-25 m-4 p-2 text-center fs-5"><Link to={`${category}`} >{category}</Link></li>
                    
                ))}
                </ul>
            </div>
        </div>

        

    )
}