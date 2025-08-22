

export function Search() {

    return (
        <div>
            <div className="text-center fw-bold">Search Products</div>
            <hr/>
            <form action='search-result'>

                <div className="input-group w-50">
                    <input type="text" name="category" className="form-control " />
                    <button className="btn btn-warning bi bi-search"></button>
                </div>
            </form>
        </div>
    )
}