import React from "react"
import './Keyboard.css'
import KeyboardPart from "./KeyboardPart";

function Keyboard() {
    const keys = Array.from(Array(14).keys()).map(i => {
        if (i % 2 === 0) {
            const note = "C"
            const level = (i + 2) / 2
            return <KeyboardPart
                numberOfBlackKeys={2}
                startNote={note}
                startLevel={level}
                key={note + level}/>
        } else {
            const note = "F"
            const level = (i + 1) / 2
            return <KeyboardPart
                numberOfBlackKeys={3}
                startNote={note}
                startLevel={level}
                key={note + level}/>
        }
    })
    return (
        <div className="Keyboard">
            <KeyboardPart numberOfBlackKeys={1} startNote={"A"} startLevel={0}/>
            {keys}
            <KeyboardPart numberOfBlackKeys={0} startNote={"C"} startLevel={8}/>
        </div>
    )
}

export default Keyboard
