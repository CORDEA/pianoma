import React from "react";

import "./KeyboardPart.css"
import {NOTES} from "./NotesGenerator";

const WHITE_KEY_WIDTH = 46

interface Props {
    startNote: string
    startLevel: number
    numberOfBlackKeys: number,
    highlight: string[]
}

function KeyboardPart(props: Props) {
    const noteIndex = NOTES.indexOf(props.startNote)
    const whiteKeys = Array.from(Array(props.numberOfBlackKeys + 1).keys()).map(i => {
        const note = NOTES[noteIndex + i] + props.startLevel
        const color = props.highlight.includes(note) ? "#e0e0e0" : "#ffffff"
        return <div
            className="KeyboardPart-whiteKey"
            id={note}
            style={{width: WHITE_KEY_WIDTH, backgroundColor: color}}
            key={i}/>
    })
    const blackKeys = Array.from(Array(props.numberOfBlackKeys).keys()).map(i => {
        const note = NOTES[noteIndex + i] + "#" + props.startLevel
        const color = props.highlight.includes(note) ? "#616161" : "#000000"
        return <div
            className="KeyboardPart-blackKey"
            id={note}
            style={{backgroundColor: color}}
            key={i}/>
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
