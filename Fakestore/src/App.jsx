import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './home'
import { Products } from './products'
import { Details } from './Details'


function App() {
 return(
  <div>
    <header>
      <div className='border border-3 m-2 text-center'>
           <span className='p-4 fs-4 fw-bold'>Fakestore</span>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:category' element={<Products/>}>
           <Route path='details/:id' element={<Details/>}/>
        </Route>
      </Routes>
    </header>
  </div>
 )
}

export default App
