import "./netflix-header.css"

export function Header() {
    return (
        <nav className="d-flex justify-content-between p-3 header px-5">
            <div>
                <span className="h1 text-danger  fw-bold">Netflix</span>
            </div>
            <div className="d-flex ">
                <div className="input-group  mx-4 text-white w-100 drop">
                    <span className="bi bi-translate input-group-text text-white lang  rounded-start-5"></span>
                    <select className="text-white lang p-1 rounded-end-5">
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                </div>
                <div >
                    <button className="rounded rounded-5 signin p-1">Sign in</button>
                </div>
            </div>
        </nav>
    )
}