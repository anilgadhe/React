import { useState } from "react"


export function SignInOut() {

    const [userName, setuserName] = useState(null);


    function handleChange(e) {
        setuserName(e.target.value);


    }

    function handlesigninClick() {
        window.sessionStorage.setItem('uname', userName);

        location.reload();
    }

    function handlesignOutClick(){
        window.sessionStorage.removeItem("uname");

        location.reload();
    }

    return (
        <div>
            <nav className="d-flex justify-content-around align-items-center">
                <span>Home</span>
                <span>About</span>
                <span>Contacts</span>

                <div>
                    {
                        (window.sessionStorage.getItem('uname')=== null) ? 
                            <div className="input-group">
                                <input onChange={handleChange} value={userName} className="form-control" />
                                <button onClick={handlesigninClick} className="btn btn-success">sign in</button>
                            </div>
                         :
                            
                           <div>
                            <span className="mx-2">{window.sessionStorage.getItem("uname")}</span>
                                <button onClick={handlesignOutClick} className="btn btn-danger">sign out</button>

                           </div>
                       
                    }

                </div>
            </nav>
        </div>
    )
}