import React from "react"
import "./KeyboardWhiteKey.css"

interface Props {
    note: string
}

function KeyboardBlackKey(props: Props) {
    return (
        <div
            className="KeyboardBlackKey"
            id={props.note}
            key={props.note}/>
    )
}

export default KeyboardBlackKey
