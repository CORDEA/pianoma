import React from "react";
import "./KeyboardPart.css"
import KeyboardBlackKey from "./KeyboardBlackKey"
import {KEY_COLORS, NOTES, WHITE_KEY_WIDTH} from "./Constants"
import KeyboardWhiteKey from "./KeyboardWhiteKey"
import {RootState} from "./store";
import {connect, ConnectedProps} from "react-redux";

const mapState = (state: RootState) => {
    return ({
        enableGuide: state.app.enableGuide
    })
}

const connector = connect(mapState)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
    startNote: string
    startLevel: number
    numberOfBlackKeys: number
}

function KeyboardPart(props: Props) {
    const noteIndex = NOTES.indexOf(props.startNote)
    let strokeColor = "#bdbdbd"
    if (props.enableGuide) {
        if (props.startLevel >= 2 && props.startLevel <= 5) {
            strokeColor = KEY_COLORS[props.numberOfBlackKeys > 2 ? 1 : 0]
        }
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

export default connector(KeyboardPart)
