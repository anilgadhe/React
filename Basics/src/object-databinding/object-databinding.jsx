import {useState} from 'react' 

export const Objectbinding=()=>{
    const [product] = useState({Name:'Samsung TV', Price: 45000, ShippedTo:['Delhi', 'Hyd'], Rating:{Rate:4.2, Count:600}});

    return(
     <dl>
        <dt>Product Name</dt>
        <dd>{product.Name}</dd>
        <dt>Price</dt>
        <dd>{product.Price.toLocaleString("en-in",{style:"currency", currency:"INR"})}</dd>
        <dd>ShippedTo</dd>
        <dt>
            <ol>
                {product.ShippedTo.map((city,index)=>(
                    <li key={index}>{city}</li>
                ))}
            </ol>
        </dt>
        <dd>Rating</dd>
        <dt>
            {product.Rating.Rate} <span className="bi bi-star-fill text-success"></span> [{product.Rating.Count}] 
        </dt>
     </dl>
   
    )
}