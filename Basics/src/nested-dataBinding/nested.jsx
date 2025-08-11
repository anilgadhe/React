import { useEffect, useState } from "react"
import moment from "moment";


export const Nested = () => {

    const [data] = useState([
        { Category: 'Electronics', Products: ['Televisions', 'Mobiles'] },
        { Category: 'Fashion', Products: ['Footwear', 'Jeans'] }
    ]);

    const [dept]=useState(Date());

    const[mobile,setmobile]=useState('');

    useEffect(()=>{
        setmobile('+919021391440');
    },[])

    return (
        <div className="d-flex justify-content-center align-items-center pt-5">
            <h2>Regex Data-Binding</h2>
             <br></br> <br></br><br></br>
            {(mobile.match(/\+91\d{10}/))?'Verified':"invalid Mobile"}
            <ol>
                <span>{moment(dept).format('dddd DD, MMMM yyyy')}</span>
                {data.map((items, index) => (
                    <li key={index}>
                        {items.Category}
                        <ul>
                            {
                                items.Products.map((device, index) => {
                                   return <li key={index}>{device}</li>
                                })
                            }
                        </ul>
                    </li>
                ))}
            </ol>

            <select>
                {data.map((items,index)=>(
                   <optgroup key={items} label={items.Category}>
                       {
                        items.Products.map((product,i)=>{
                           return <option key={i}>{product}</option>
                        })
                       }
                   </optgroup> 
                ))}
            </select>
        </div>
    )
}