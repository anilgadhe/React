import { useEffect, useState } from "react"
import axios from "axios"

import "./onMouseOver.css"

 export function MouseOver(){

    const [mobiles,setmobiles]= useState([{img_src:null}]);
    const [priview_src ,setPriview_src] =useState("m1.png");


    useEffect(()=>{
        axios.get('mobiles.json')
        .then(response=>{
            console.log(response.data);
            
            setmobiles(response.data)
        } )
    },[])

    function handleMouseOver(e){
            setPriview_src(e.target.src);
    }

    return(
        <div className="container-fluid">
           <div className="row">
             <div className="col-1 sidebar">
                  {mobiles.map(mobile=> <div className="my-3 mapdiv" key={mobile.img_src}>
                    <img src={mobile.img_src} alt={mobile.img_src} height="100" width="100" onMouseOver={handleMouseOver}/>
                  </div>)}
             </div>
             <div className="col-11">
              <img src={priview_src} alt={priview_src} />
             </div>
           </div>
        </div>
    )

 }