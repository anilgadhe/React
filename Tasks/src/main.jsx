import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Datagrid } from './Task1/datagrid.jsx'
import { CustomHooks } from './customHooks/useSort/CustomHooks.jsx'
import { TitleCase } from './customHooks/useTitleCase/useTitleCase.jsx'
import { Lifecycle } from './Hooks/useEffect/useEffect.jsx'
import { Context } from './Hooks/useContext.jsx'
import { Fakestore } from './task2/fakeStore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Datagrid/> */}
    {/* <CustomHooks/> */}
    {/* <TitleCase/> */}
    {/* <Lifecycle/> */}
    {/* <Context/> */}
    <BrowserRouter>
  
        <App/>
      
    </BrowserRouter>
  </StrictMode>,
)
