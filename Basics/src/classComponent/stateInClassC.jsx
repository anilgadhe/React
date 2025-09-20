import React from "react";

export class StateInClass extends React.Component{

    constructor() {

        super();

        this.state = {
            title: "select-Categories",
            categories: ["tv", "Ball", "Cars", "Bats"]
        }

    }

    componentDidMount(){
        this.setState({title:"Select-Product"});
    }

    render() {

        return (
            <div className="text-center fs-3">
                <h2>{this.state.title}</h2>
                <select>
                    {this.state.categories.map((items, i) => (
                     <option key={i} value={items}>{items}</option>
                    ))}
                </select>
            </div>
        )
    }


}