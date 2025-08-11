import { useState } from "react"


export const ArrofObject = () => {

    const [products] = useState([
        { Name: 'Samsung TV', Price: 45000 },
        { Name: 'Mobile', Price: 23000 },
        { Name: 'Nike Casuals', Price: 2560 }
    ])

    return (
      <table>
        <thead>
            <th>Name</th>
            <th>Price</th>
        </thead>
        <tbody>
            {products.map((product,index)=>(
                <tr key={index}>
                    <td width={100}>{product.Name}</td>
                    <td>{product.Price.toLocaleString("en-in",{style:"currency", currency:"INR"})}</td>
                    <td> <button className="btn btn-warning bi bi-pen-fill"></button> <button className="btn btn-danger bi bi-trash mx-2"></button>
                     </td>
                </tr>
            ))}
        </tbody> 
      </table>

    )
}