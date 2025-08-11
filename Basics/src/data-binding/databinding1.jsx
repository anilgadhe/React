import { useEffect, useState } from "react"


// export const NumString =()=>{

//     const[price , setprice]=useState(0);
//     const[pname, setpname]= useState('')

//     useEffect(()=>{
//         setpname("samsung TV");
//         setprice(80000);
//     },[]);

//     return(

//         <div>
//             <h2>Data-Binding</h2>
//             <p>Product Name</p>
//             <p>{pname}</p>
//             <p>Price</p>
//             <p>{price.toLocaleString('en-in',{style:"currency", currency:"INR"})}</p>
//         </div>
//     )
// } 


export const ArrDataBinding = () => {
    const [categories] = useState(['All', 'Electronics', 'Fashion', 'Footwear']);

    return (

        <div>
            <header>
                <nav className="d-flex justify-content-between my-3">
                    {
                        categories.map((category, index) => {
                            return <span key={index} className="mx-2">{category}</span>
                        })
                    }
                </nav>
                <div>
                    <span className="bi bi-heart"></span>
                    <span className="bi bi-cart3 mx-2"></span>
                </div>

                <select>
                    {
                        categories.map((category, index) => {
                            return <option key={index}>{category}</option>
                        })
                    }
                </select>

                <ol className="order-unstyle">
                    {
                        categories.map((category, index) => {
                            return <li key={index}>{category}</li>
                        })
                    }
                </ol>
            </header>

        </div>

    )
}