import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './home'
import { Products } from './products'
import { Details } from './Details'
import { Search } from './search'
import { SearchResult } from './search-result'
import { Primesearch } from './PrimeSearch'
import { PrimeLogin } from './Prime-Login'


function App() {
  return (
    <div>
      <header>
        <div className='border border-3 m-2 text-center'>
          <span className='p-4 fs-4 fw-bold'>Fakestore</span>
          <div className='d-flex justify-content-around'>
            <div className='text-center border border-end'><Link to='search'>Search</Link></div>
            <div className='text-center border border-end'><Link to='primesearch'>PrimeSearch</Link></div>
            <div className='text-center border border-end'><Link to='login'>Login</Link></div>
          </div>

        </div>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='search' element={<Search />} />
          </Route>
          <Route path='product/:category' element={<Products />}>
            <Route path='details/:id' element={<Details />} />
          </Route>
          <Route path='search-result' element={<SearchResult />} />
          <Route path='primesearch' element={<Primesearch />} />
          <Route path='login' element={<PrimeLogin />} />
        </Routes>
      </header>
    </div>
  )
}

export default App
