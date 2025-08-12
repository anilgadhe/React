import { useCaptcha } from "./captchya"
import { useFetch } from "./fetch";


export function LoginHookDemo() {

    const code = useCaptcha();
    const data = useFetch(`https://fakestoreapi.com/products/categories`)

    return (
        <div className="container d-flex justify-content-center align-items-center">
            <form className="border border-1 shadow w-50 my-5">
                <dl>
                    <dt>userName</dt>
                    <dd><input placeholder="enter your name" /></dd>

                    <dt>mobile</dt>
                    <dd><input type="text" placeholder="mobile number" /></dd>

                    <dt>Verify Code <button className='btn bi bi-arrow-clockwise'></button> </dt>

                    <dd>{code}</dd>
                </dl>
                <button className="btn btn-warning">Register</button>

                <ul>
                    {
                        data.map(data => <li key={data}>{data}</li>)
                    }
                </ul>
            </form>

        </div>
    )
}