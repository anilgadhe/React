import axios from "axios";
import { useEffect, useState } from "react";




export function useFetch(url){

    const [data, setdata]= useState([])

    useEffect(()=>{
       
        axios.get(url).then(response=> setdata(response.data))

    },[url])

    return data
    
}