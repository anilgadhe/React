import { useEffect, useState } from "react"


export  const FetchAjax = () => {

    const [product, setproduct] = useState({ title: '', price: 0, image: '', rating: { rate: 0, ratings: 0, reviews: 0 }, offers: [] })


    function getProduct() {

        fetch("product.json")
            .then(res => {
                return res.json()
            }).then(result => {
                setproduct(result)
            })

    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div className="d-grid container">
            <div className="row">
                <div className="col-12">
                    <h2>{product.title}</h2>
                </div>
                <div className="col-4">
                    <img src={product.image} width={300} height={400}></img>

                </div>
                <div className="col-8">
                    <p className="rounded badge bg-success">{product.rating.rate} <span className="mx-4">{product.rating.ratings.toLocaleString()} ratings</span> <span className="mx-4">{product.rating.reviews.toLocaleString()} reviews</span></p>
                    <p>
                        {product.offers.map((offer, index) => (
                            <p className="bi bi-tag-fill my-3 " key={index}>{offer}</p>
                        ))}
                    </p>


                </div>
            </div>
        </div>
    )


}