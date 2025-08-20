import { useState } from "react";
import { Fakeproduct } from "./fakeProduct";


export function Fakestore() {

    const [cartItems, setCartItems] = useState([]);

    const [cartItemsCount, setCartItemsCount] = useState(0);

    const[totalPrice,setTotalPrice]=useState(0);

    function handleAddtoCart(e) {
        cartItems.push(e);

        alert(`${e.title}\nAdded to cart`);

let total = cartItems.reduce((sum, item) => sum + item.price, 0);

     setTotalPrice(total);

        setCartItemsCount(cartItems.length)


    }
    return (
        <div>
            <header>
                <div>
                    <nav className="d-flex justify-content-between gap-5 border border-2 p-3 align-content-center m-2">
                        <div className="fw-bold fs-3">Fakestore</div>
                        <div className="input-group" style={{ width: '40%' }}>
                            <input placeholder="Search product" className="form-control" />
                            <button className="btn btn-warning bi bi-search"></button>
                        </div>

                        <div>
                            <button data-bs-target="#cart" data-bs-toggle="offcanvas" className="btn btn-warning position-relative bi bi-cart4">
                                <span className="position-absolute bg-danger badge rounded rounded-circle " style={{ right: '-8', top: '-5' }}>{cartItemsCount}</span>

                            </button>

                            <div className="offcanvas offcanvas-end" id="cart">
                                <div className="offcanvas-header">
                                    <h3>Your Cart Items</h3>

                                    <button className="btn btn-close" data-bs-dismiss="offcanvas"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <table className="teble table-hover">
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Priview</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                             cartItems.map(items=>(
                                                <tr key={items.id}>
                                                    <td className="mx-2 w-50">{items.title}</td>
                                                    <td className="mx-2">
                                                        <img src={items.image} width="50" height="50" alt={items.id}/>
                                                    </td>
                                                    <td className="mx-2">{items.price}</td>
                                                </tr>
                                             ))
                                            }
                                            <tr className="border border-2">
                                                <td  className="fw-bold" colSpan="2">Total Price is</td>
                                                <td>{totalPrice}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <div>
                <Fakeproduct addtoCart={handleAddtoCart} />
            </div>
        </div>
    )
}