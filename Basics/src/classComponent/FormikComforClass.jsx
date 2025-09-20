import React from "react";
import {Form , Field ,Formik} from "formik"

export class Login extends React.Component{

    constructor(){
        super();
    }


    render(){

        return(
            <div>
                <h2>Login</h2>
                <Formik initialValues={{UserName:'', Mobile:''}} onSubmit={(user)=>console.log(user)}>
                    <Form>
                  <dl>
                    <dt>UserName</dt>
                    <dd><Field type="text"  name="UserName"/></dd>

                    <dt>Mobile</dt>
                    <dd><Field type="number"  name="Mobile"/></dd>
                  </dl>
                  <button className="btn btn-warning" type="submit">Submit</button>
                  </Form>
                </Formik>
            </div>
        )
    }
}