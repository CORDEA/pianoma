import React from "react";

import "./KeyboardPart.css"

const whiteKeyWidth = 46

const notes = [
    "C",
    "D",
    "E",
    "F",
    "G",
    "A",
    "B"
]

interface Props {
    startNote: string
    startLevel: number
    numberOfBlackKeys: number
}

function KeyboardPart(props: Props) {
    const noteIndex = notes.indexOf(props.startNote)
    const whiteKeys = Array.from(Array(props.numberOfBlackKeys + 1).keys()).map(i =>
        <div className="KeyboardPart-whiteKey"
             id={notes[noteIndex + i] + props.startLevel}
             style={{width: whiteKeyWidth}}
             key={i}/>
    )
    const blackKeys = Array.from(Array(props.numberOfBlackKeys).keys()).map(i =>
        <div className="KeyboardPart-blackKey"
             id={notes[noteIndex + i] + "#" + props.startLevel}
             key={i}/>
    )
    const width = whiteKeyWidth * (props.numberOfBlackKeys + 1)
    return (
        <div className="KeyboardPart" style={{width: width}}>
            <div className="KeyboardPart-whiteKeys">
                {whiteKeys}
            </div>
            <div className="KeyboardPart-blackKeys">
                {blackKeys}
            </div>
        </div>
    )
}

export default KeyboardPart
