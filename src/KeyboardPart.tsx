import React from "react";

import "./KeyboardPart.css"
import {NOTES} from "./NotesGenerator";

const WHITE_KEY_WIDTH = 46

interface Props {
    startNote: string
    startLevel: number
    numberOfBlackKeys: number
}

function KeyboardPart(props: Props) {
    const noteIndex = NOTES.indexOf(props.startNote)
    const whiteKeys = Array.from(Array(props.numberOfBlackKeys + 1).keys()).map(i =>
        <div className="KeyboardPart-whiteKey"
             id={NOTES[noteIndex + i] + props.startLevel}
             style={{width: WHITE_KEY_WIDTH}}
             key={i}/>
    )
    const blackKeys = Array.from(Array(props.numberOfBlackKeys).keys()).map(i =>
        <div className="KeyboardPart-blackKey"
             id={NOTES[noteIndex + i] + "#" + props.startLevel}
             key={i}/>
    )
    const width = WHITE_KEY_WIDTH * (props.numberOfBlackKeys + 1)
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
