import { Home } from "./Home"
import { Context } from "./Hooks/useContext"
import { Reducer } from "./Hooks/useReducer/Reducer"
import { Datagrid } from "./Task1/datagrid"
import { Fakestore } from "./task2/fakeStore"
import { Route ,Routes } from "react-router-dom"



function App() {


  return (
    <>
         <Home/>
      <div> 
      <Routes> 
        <Route path="/" element={<Fakestore />} />
        <Route path="/datagrid" element={<Datagrid />} />
        <Route path="/context" element={<Context/>}/>
        <Route path="/reducer" element={<Reducer/>}/>
        <Route path="*" element={<h2 className='text-center mt-5'>Page is Not Found</h2>} />
        </Routes>
      </div>
        
    </>
  )
}


export default App
