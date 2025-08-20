import { createContext, useContext, useState } from "react"

let userContext = createContext(null);

export function Level2() {

    let context = useContext(userContext);
    return (
        <div className=" mx-4 p-3 bg-danger text-dark">
            <h3>Level2 {context}</h3>
        </div>
    )
}


export function Level1({onChildClick}) {

    let context = useContext(userContext)

    function handleButtonClick(){
         
        var data={name:"Tv",Rating:4.5}

        onChildClick(data);
    }
    return (
        <div className="mx-4 p-3 bg-warning text-dark">
            <h3>Level1 {context}</h3>
            <button onClick={handleButtonClick} className="btn btn-light"> Send Data to Parent </button>
            <Level2 />
        </div>
    )
}


export function Context() {

    const [msg, setMsg] = useState(null);
    const [msgFromChild, setMsgFromChild] = useState({ name: null, Rating: 0 });

    function handleNameChange(e) {
        setMsg(e.target.value);
    }

    function handlechildClick(e) {
        setMsgFromChild(e);
    }

    return (
        <div className="container p-2 m-2 bg-dark texr-white" >
            <h2>Parent Component {msg}  
                <span className="text-white">{msgFromChild.name}  {msgFromChild.Rating}</span>
            </h2>

            <div>

                <input type="text" onChange={handleNameChange} placeholder="User Name" />

            </div>

            <userContext.Provider value={msg}>
                <Level1 onChildClick={handlechildClick} />
            </userContext.Provider>
        </div>
    )
}