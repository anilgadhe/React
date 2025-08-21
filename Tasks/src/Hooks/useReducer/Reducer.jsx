import { useReducer } from "react"


var intialValue ={
    userCount : 0
}

function reducer(state,action){
    switch(action.type){
        case "join":
            return {userCount:state.userCount+1};
        
         case "exit":
            return {userCount: state.userCount-1}   
    }
}

export function Reducer() {

    const[state,dispatch]=useReducer(reducer,intialValue);

    function handleJoinClick(){
        dispatch({type:"join"});
    }

    function handleExitClick(){
        dispatch({type:"exit"});
    }

    return (
        <div className="container-fluid">
            <h2>Live Users {state.userCount}</h2>
            <iframe width="200" height="200" src="http://www.youtube.com/embed/Ag-R3K65z74"></iframe>


            <div className="mt-2">

                <button onClick={handleJoinClick} className="btn btn-primary bi bi-door-open"> Join </button>

                <button onClick={handleExitClick} className="btn btn-warning mx-2 bi bi-door-closed "> Exit </button>

            </div>

        </div>
    )

}