import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


export function Details() {
    const params = useParams()
    const [product, setProducts] = useState([]);


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`).then(response => setProducts(response.data))
    }, [params.id])

    return (
        <div >
            <h2>Details</h2>

            <div>
                {
                    <dl >
                        <dd>image</dd>
                        <dt><img src={product.image} height="150" alt={product.id}/></dt>
                        <dd>Title</dd>
                        <dt>{product.title}</dt>
                        <dd>Price</dd>
                        <dt>{product.price}</dt>
                    </dl>
                }
            </div>
        </div>
    )
}