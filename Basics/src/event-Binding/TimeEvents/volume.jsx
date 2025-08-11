import { useRef, useState } from "react"

export function VoumeUp() {

    const [msg, setmsg] = useState("");

    let thread = useRef(null)

    function handleClick() {
        setTimeout(() => setmsg("20% volume up"), 2000);
        setTimeout(() => setmsg("40% volume up"), 4000)
        thread.current = setTimeout(() => setmsg("60% volume up"), 6000)
        setTimeout(() => setmsg("100% vloume"), 10000);
    }

    function handleCancleClick() {
        clearTimeout(thread.current);
    }

    return (
        <div>
            <div className="d-flex justify-content-center ">
                <button className="btn btn-success mx-2" onClick={handleClick}><span className="bi bi-volume-up-fill"></span></button>
                <button className="btn btn-warning" onClick={handleCancleClick}>Cancel</button>
            </div>
            <div className="text-center">{msg}</div>
        </div>

    )
}