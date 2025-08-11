import { useEffect, useState } from "react"

import axios from "axios"

export function KeyUp(){

  const [users , setUser] = useState([{user_id:null}]);
  const [msg , setmsg]= useState(null);
  const [validate , setValidate] =useState(null);

  useEffect(()=>{
     axios.get('user.json')
     .then(response=>{

        setUser(response.data);
     })
  },[])

    function verifyUser(e){

       for( var user of users){
           if(user.user_id === e.target.value){
               setmsg("userName is not available try again");

               setValidate("text-danger");

               break;
           }else{
            setmsg("userName is available");

             setValidate("text-success");
           }
       }

    }

    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
                <dt>User Id</dt>
                <dd><input placeholder="add Username" onKeyUp={verifyUser}/></dd>
                <dd className={validate}>{msg}</dd>
            </dl>
        </div>
    )
}