import React from "react";

import "./KeyboardPart.css"
import {NOTES} from "./NotesGenerator";
import KeyboardWhiteKey, {WHITE_KEY_WIDTH} from "./KeyboardWhiteKey";
import KeyboardBlackKey from "./KeyboardBlackKey";

interface Props {
    startNote: string
    startLevel: number
    numberOfBlackKeys: number,
    highlight: string[]
}

function KeyboardPart(props: Props) {
    const noteIndex = NOTES.indexOf(props.startNote)
    const whiteKeys = Array.from(Array(props.numberOfBlackKeys + 1).keys()).map(i =>
        <KeyboardWhiteKey note={NOTES[noteIndex + i] + props.startLevel}/>
    )
    const blackKeys = Array.from(Array(props.numberOfBlackKeys).keys()).map(i =>
        <KeyboardBlackKey note={NOTES[noteIndex + i] + "#" + props.startLevel}/>
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
