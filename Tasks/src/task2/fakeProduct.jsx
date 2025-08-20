import axios from "axios"
import { useEffect, useState } from "react"

export function Fakeproduct({addtoCart}) {

    const [products, setProducts] = useState([{ id: 0, title: null, price: 0, category: null, description: null, image: null }])


    function handleClick(product){
         addtoCart(product); 
    }


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`).then(response =>
            setProducts(response.data)
        )
    }, [])

    return (
        <div className="d-flex flex-wrap justify-content-center m-3">
            {
                products.map(product => (
                    <div className="card m-2" key={product.id} style={{width:'200px'}}>
                            <img src={product.image} className="card-img-top" height="120"  alt={product.id}/>
                        <div className="card-header overflow-auto " style={{height:"120px"}}>
                          {product.title}
                        </div>
                        <div className="card-body">
                            <dl>
                                <dt>Price</dt>
                                <dd>{product.price}</dd>
                            </dl>
                        </div>
                        <div className="card-footer">
                           <button className="btn btn-warning bi bi-cart4" onClick={()=>handleClick(product)} >Add To Cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )


}