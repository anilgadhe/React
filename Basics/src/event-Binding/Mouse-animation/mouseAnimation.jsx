import { useState } from "react"
import "./mouseAnimation.css"

export function MouseAnimation() {

    const [styleObj, setStyleObj] =
        useState({
            animationName: 'Spin',
            animationDuration: '5s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear'
        })

        function handleMouseDown(){
            setStyleObj({
            animationName: 'Spin',
            animationDuration: '1s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear'
        })
        }

        function handleMouseUp(){
            setStyleObj({
            animationName: 'Spin',
            animationDuration: '5s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear'
        })
        }

    return (
        <div className=" d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <img src="react.svg" alt="react-svg" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} height="100" width="100" style={styleObj} />
        </div>
    )
}