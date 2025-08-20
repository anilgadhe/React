import { useEffect, useState } from "react"
import { useFetchdata } from "./task"


export function Datagrid() {

    const [data,setData]=useState([]);
    

    const info = useFetchdata(`/data.json`);

  function handleNChange(e,index){
      var newData = [...data];
      
      newData[index].name=e.target.value;

      setData(newData);
      
  }

      function handlePChange(e){
       var newPrice = [...data];

       newPrice[index].price=e.target.value;

       setData(newPrice);

      }

useEffect(()=>{
    setData(info)
},[info])

  
    return (
        <div className="container-fluid">
            <table className="table table-hover border border-1">
                <thead>
                    <tr>            
                        <th>Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    data.map((item,i)=>(
                        <tr key={i}>
                           <td>{item.name }<input type="text" onChange={(e)=>handleNChange(e,i)} value={item.name}/></td>
                           <td>{ item.price} <input  type="number" onChange={(e)=>handlePChange(e,i)}  value={item.price}/></td>
                           <td>
                            <button  className="btn btn-warning bi bi-pen"></button>
                            <button className="btn btn-danger bi bi-trash mx-2"></button>
                           </td>
                        </tr>
                    ))
                   }
                </tbody>
            </table>
        </div>
    )
}