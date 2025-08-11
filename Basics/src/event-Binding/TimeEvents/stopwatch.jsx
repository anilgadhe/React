import { useRef, useState } from "react"


export function Stopwatch() {

    const [hrs, setHrs] = useState(0);
    const [mins, setMins] = useState(0);
    const [secs, setSecs] = useState(0);
    const [msecs, setMSecs] = useState(0);

    let thread = useRef(null);

    var h = 0;
    var m = 0;
    var s = 0;
    var ms = 0;

    function startClick() {
        ms++
        setMSecs(ms);
        if (ms === 999) {
            s++
            setSecs(s);
            ms = 0;
        }

        if (s === 60) {
            m++
            setMins(m);
            s = 0;
        }

        if (m === 60) {
            h++
            setHrs(h);
            m = 0;
        }
    }

    function handleStartClick() {
        thread.current = setInterval(startClick, 1);
    }

    function handleCancelClick() {
        clearInterval(thread.current);
        setMSecs(0);

        setSecs(0);

        setMins(0);

        setHrs(0);
    }

    return (
        <div>
            <h2 className="text-center">Stopwatch</h2>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <div className=" border border-black p-5">
                    {hrs}  <span>Hr</span>
                </div>
                <div className=" border border-black p-5">
                    {mins}  <span>M</span>
                </div>
                <div className=" border border-black p-5">
                    {secs}  <span>S</span>
                </div>
                <div className="border border-black p-5">
                    {msecs} <span>Ms</span>
                </div>
            </div>
            <div className="float-end">
                <button className="btn btn-success" onClick={handleStartClick}>Start</button>
                <button className="btn btn-danger mx-5" onClick={handleCancelClick}>Clear</button>
            </div>
        </div>
    )
}