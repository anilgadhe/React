import React from 'react'
import { StateInClass } from './stateInClassC';
import { Login } from './FormikComforClass';

export class CustomerLogin extends React.Component{
    constructor(){
        super();

        this.state={
            title:"Class Component",
            msg:""
        }

        this.handleInsertClick = this.handleInsertClick.bind(this);
    }

    handleInsertClick(e){
        this.setState({msg:`${e.target.value} Clicked`});
    }

    handleDeleteClick(e){
      this.setState({msg:`${e.target.value} Clicked`});  
    }

    handleUpdateClick(e){
       this.setState({msg:`${e.target.value} method Clicked`});
    }

    render(){
        return(
            <div className="container-fluid p-4">
              <h2>{this.state.title}</h2>
              <button className='btn btn-info mx-2' onClick={this.handleInsertClick} value='Insert'>Insert</button>
              <button className='btn btn-danger' onClick={this.handleDeleteClick.bind(this)} value='Delete' >Delete</button>
               
               <button className='btn btn-success' onClick={(e)=>{this.handleUpdateClick(e)}} value={"update state without state bind"}>update  state without bind</button>

              <p>{this.state.msg}</p>

              <StateInClass/>
              <div className='w-25 '>
                 <Login/>
              </div>
            </div>
        )
    }
}