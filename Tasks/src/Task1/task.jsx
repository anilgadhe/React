import axios from "axios"
import { useEffect, useState } from "react";

export function useFetchdata(url){

  const [code,setData]=useState([]);
  
  useEffect(()=>{
    axios.get(url).then(response => setData(response.data))
    .catch(error => console.error("Error fetching data:", error));;
  },[url])
    
   return code;
}