
export function Login() {
    return (
        <>
            <form>
                <div>
                    <label for="txtName">Name</label>
                    <input type="text" id="txtName" placeholder="username"></input>
                </div>

                <div>
                    <label for="password">password</label>
                    <input type="password" id="password" ></input>
                </div>

                <div>
                    <label for="password">Email</label>
                    <input type="email" id="mail" ></input>
                </div>

                <button>Submit</button>
            </form>
        </>
    )
}