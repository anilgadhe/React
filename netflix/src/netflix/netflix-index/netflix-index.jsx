import "./netflix-index.css"
import { Header } from "../netflixheader/netflix-header"
import { Navbar } from "../nav/nav"
import { Hero } from "../Hero/hero"

export function NetflixIndex(){

    return(
        <div className="netflix">
          <Header/>
          <Navbar/>
          <Hero/>
        </div>
    )
}