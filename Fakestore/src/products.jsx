import axios from "axios";
import { useEffect, useState } from "react"
import { Link, Outlet, useParams } from "react-router-dom";


export function Products() {
    const params = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${params.category}`).then(response => {
            setProducts(response.data)
        })
    }, [])

    return (
        <div>
            <h2>{params.category} Products</h2>
            <div className="row">
                <div className="col-lg-8 col-md-12 col-sm-12" >
                    <ul>
                        {
                            products.map((product, i) => (
                                <li key={i} className="m-2 "><Link className="text-decoration-none" to={`details/${product.id}`}>{product.title}</Link></li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                     <Outlet/>
                </div>
            </div>
            <div className=" ms-4">
                <Link className="text-decoration-none" to="/">Home</Link>
            </div>
        </div>
    )
}