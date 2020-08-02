import React from "react";

import "./KeyboardPart.css"
import {NOTES} from "./NotesGenerator";
import KeyboardWhiteKey, {WHITE_KEY_WIDTH} from "./KeyboardWhiteKey";
import KeyboardBlackKey from "./KeyboardBlackKey";
import {KEY_COLORS} from "./Constants";

interface Props {
    startNote: string
    startLevel: number
    numberOfBlackKeys: number
}

function KeyboardPart(props: Props) {
    const noteIndex = NOTES.indexOf(props.startNote)
    let strokeColor = "#bdbdbd"
    if (props.startLevel >= 2 && props.startLevel <= 5) {
        const index = KEY_COLORS.length - 1 - (props.startLevel - 2) * 2
        strokeColor = props.numberOfBlackKeys > 2 ? KEY_COLORS[index - 1] : KEY_COLORS[index]
    }
    const whiteKeys = Array.from(Array(props.numberOfBlackKeys + 1).keys()).map(i => {
        const note = NOTES[noteIndex + i] + props.startLevel
        return <KeyboardWhiteKey note={note} key={note} strokeColor={strokeColor}/>
    })
    const blackKeys = Array.from(Array(props.numberOfBlackKeys).keys()).map(i => {
        const note = NOTES[noteIndex + i] + "#" + props.startLevel
        return <KeyboardBlackKey note={note} key={note}/>
    })
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
