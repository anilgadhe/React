import "./main.css"

export function Main(){

    return(
        <>
        <p className="text-center text-white fs-5 mt-2">Ready to watch? Enter your email to create or restart your membership.</p>
        <input className="main-txt bg-dark" placeholder="Email address "></input>
        <button className="btn btn-danger main-txt">Get Started <span className="bi bi-chevron-right"></span>
        </button>
        </>
    )
}