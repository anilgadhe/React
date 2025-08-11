import { useState } from "react"


export function FormDemo() {

    const [userdetails, setUserdetails] = useState({ userName: null, mobile: null, city: null });


    function handleSubmit(e) {
        e.preventDefault();

        alert("Form submitted")

        console.log(userdetails);
    }

    function handleNameChange(e) {
        setUserdetails({
            userName: e.target.value,
            mobile: userdetails.mobile,
            city: userdetails.city
        })
    }

    function handlemobileChange(e) {
        setUserdetails({
            userName: userdetails.userName ,
            mobile: e.target.value,
            city: userdetails.city
        })
    }

    function handleCityChange(e) {
        setUserdetails({
            userName:userdetails.userName,
            mobile: userdetails.mobile,
            city: e.target.value,
        })
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <dl>
                <dt>userName</dt>
                <dd><input type="text" onChange={handleNameChange} name="userName" className="form-control" /></dd>

                <dt>Mobile</dt>
                <dd><input type="number" onChange={handlemobileChange} name="mobile" className="form-control" /></dd>

                <dt>City</dt>
                <dd>
                    <select name="city" onChange={handleCityChange}>
                        <option>Hyd</option>
                        <option>Nanded</option>
                        <option>Pune</option>
                    </select>
                </dd>

            </dl>
            <button type="submit">Register</button>
        </form>
    )
}