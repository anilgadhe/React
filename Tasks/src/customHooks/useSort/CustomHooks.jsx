import { useSort } from "./useSort"


export function CustomHooks(){

    const fruits =["Bannana","Apple","peru","Guava","pineapple","chicku"]
    
    const items =useSort(fruits,true)

    return (
        <div className="container">
            <ul>
            {
               
               items.map((item,i)=>{
                  return <li key={i}>{item}</li>
               })

               
            }
            </ul>
        </div>
    )
}