import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { NetflixIndex } from './netflix/netflix-index/netflix-index.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <NetflixIndex/>
  </StrictMode>,
)
