import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import axios from "axios";


export function SearchResult() {

    const [products, setProducts] = useState([])

    const [params] = new useSearchParams();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${params.get('category')}`).then(response => {
            setProducts(response.data)
        })
    })

    return (
        <div className="container-fluid">
            <div className="fw-bold">{params.get('category')} Products</div>
            <ul>
                {
                    products.map((product, i) => (
                        <li key={i} className="m-2 ">{product.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}