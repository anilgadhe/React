import axios from "axios"
import { useEffect, useRef, useState } from "react";


export function CarouselDemo() {

    const [product, setProduct] = useState({ id: 0, title: null, price: null, description: null, category: null, rating: { rate: null, count: null } })
    const [err, setErr] = useState();

    let product_id = useRef(1);

    let thread = useRef(null);


    useEffect(() => {
        loadProductManually(1);
    }, [])

    function loadProductManually(id) {

        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res =>
                setProduct(res.data)
            )
            .catch((err) => {
                console.log(err);
                setErr(err);
            })

    }

    function handleNextClick() {
        product_id.current = product_id.current + 1;

        loadProductManually(product_id.current);
    }

    function handlePrevClick() {
        product_id.current = product_id.current - 1;

        loadProductManually(product_id.current)
    }

    function handleChange(e) {
        product_id.current = parseInt(e.target.value);

        loadProductManually(product_id.current)
    }


    function loadProductAuto() {
       product_id.current=product_id.current+1;
        axios.get(`https://fakestoreapi.com/products/${product_id.current}`)
            .then(res =>
                setProduct(res.data)
            )
            .catch((err) => {
                console.log(err);
                setErr(err);
            })

    }

    function handlePlay(){
     thread.current = setInterval(loadProductAuto,3000)
          
    }

    function handleStop(){
        clearInterval(thread.current);
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="card w-50 mt-4 p-2 fs-5 fw-bold">
                <div className="card-header text-center">
                    {product.title}
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-1 d-flex justify-content-center align-items-center">
                            <button className="bg-black bi bi-chevron-left text-white p-3" onClick={handlePrevClick}></button>
                        </div>
                        <div className="col-10 ">
                            <img src={product.image} alt={product.image} width="600" height="400" />
                        </div>
                        <div className="col-1 d-flex justify-content-center align-items-center">
                            <button className="bg-black bi bi-chevron-right text-white p-3" onClick={handleNextClick}></button>
                        </div>
                    </div>
                    <div>
                        <input className="form-range" type="range" min="1" max="20" onChange={handleChange} value={product_id.current} />
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <button className="btn btn-success bi bi-play-btn-fill" onClick={handlePlay}></button>
                    <button className="btn btn-danger bi bi-pause mx-2" onClick={handleStop} ></button>
                </div>
            </div>

        </div>
    )
}