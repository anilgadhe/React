


export function DatagridComp(props) {
    if (props.layout === 'grid') {
        return (
            <table className="caption-top table table-bordered table-hover">
                <caption>{props.caption}</caption>
                <thead>
                    <tr>
                        {
                            props.headings.map((heading, index) => (
                                <th key={index}>{heading}
                                    <div className="dropdown d-inline">

                                        <button data-bs-toggle="dropdown" className="bi bi-three-dots-vertical btn"></button>

                                        <ul className="dropdown-menu">

                                            <li className="dropdown-item"> <span className="dropdown-item-text"> <span className="bi bi-sort-alpha-down"></span> Sort Ascending </span> </li>

                                            <li className="dropdown-item"> <span className="dropdown-item-text"> <span className="bi bi-sort-alpha-up"></span> Sort Descending </span> </li>

                                            <li className="dropdown-item"> <span className="dropdown-item-text"> <span className="bi bi-flask"></span> Filter </span> </li>

                                        </ul>


                                    </div>
                                </th>

                            ))

                        }
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.items.map((item, index) => (
                            <tr key={index}>
                                {Object.keys(item).map(key => <td key={key}>{item[key]}</td>)
                                }

                                <td>
                                    <button className="btn btn-warning bi bi-pen"></button>
                                    <button className="btn btn-danger bi bi-trash mx-2"></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )
    } else {
        return (
            <div className="row">
                <div className="col-4">
                    <div className="card mx-2 p-2">
                        <div className="card-header">
                            {props.caption}
                        </div>
                        <div className="card-body">
                            {props.items.map((item, i) => <u key={i}>{Object.keys(item).map((data,index)=>(<li key={index}>{item[data]}</li>))}</u>)}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}