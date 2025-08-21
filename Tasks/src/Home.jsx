
import { Link } from "react-router-dom"

export function Home() {


  return (
    <div className="container-fluid">
      <h2 className="text-center my-2"> Some Important Task </h2>


      <nav className="navbar navbar-expand-lg bg-dark d-flex justify-content-around">
        <ul className="navbar-nav ">
          <li className="nav-item mx-2">
            <Link to="/">Fakestore</Link>
          </li>
          <li className="nav-item">
            <Link to="/datagrid">Datagrid</Link>
          </li>

          <li className="nav-item mx-2">
            <Link to="/context">useContext</Link>
          </li>

            <li className="nav-item mx-2">
            <Link to="/reducer">useReducer</Link>
          </li>
        </ul>
      </nav>

    </div>
  )
}