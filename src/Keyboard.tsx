import React from "react"
import './Keyboard.css'
import KeyboardPart from "./KeyboardPart";

function Keyboard() {
    return (
        <div className="Keyboard">
            <KeyboardPart numberOfBlackKeys={1}/>
            <KeyboardPart numberOfBlackKeys={2}/>
            <KeyboardPart numberOfBlackKeys={3}/>
            <KeyboardPart numberOfBlackKeys={2}/>
            <KeyboardPart numberOfBlackKeys={3}/>
            <KeyboardPart numberOfBlackKeys={2}/>
            <KeyboardPart numberOfBlackKeys={3}/>
            <KeyboardPart numberOfBlackKeys={2}/>
            <KeyboardPart numberOfBlackKeys={3}/>
            <KeyboardPart numberOfBlackKeys={2}/>
            <KeyboardPart numberOfBlackKeys={3}/>
            <KeyboardPart numberOfBlackKeys={2}/>
            <KeyboardPart numberOfBlackKeys={3}/>
            <KeyboardPart numberOfBlackKeys={2}/>
            <KeyboardPart numberOfBlackKeys={3}/>
        </div>
    )
}

export default Keyboard
