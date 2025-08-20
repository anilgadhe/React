import { useState } from "react";



export function useSort(arr,reverse=false){

const[data,setData]=useState([]);

    
    if(reverse ===  true){
       var  SortedData = arr.sort();

       setData(SortedData);

    }else{
        var SortedData = arr.sort().reverse();

        setData(SortedData);
    }

    return data;
}