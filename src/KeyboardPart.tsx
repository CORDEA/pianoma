import React from "react";

import "./KeyboardPart.css"

const whiteKeyWidth = 46

interface Props {
    numberOfBlackKeys: number
}

function KeyboardPart(props: Props) {
    const whiteKeys = Array.from(Array(props.numberOfBlackKeys + 1).keys()).map(i =>
        <div className="KeyboardPart-whiteKey" style={{width: whiteKeyWidth}} key={i}/>
    )
    const blackKeys = Array.from(Array(props.numberOfBlackKeys).keys()).map(i =>
        <div className="KeyboardPart-blackKey" key={i}/>
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
