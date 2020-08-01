import React from "react"
import "./KeyboardWhiteKey.css"

export const WHITE_KEY_WIDTH = 46

interface Props {
    note: string
}

function KeyboardWhiteKey(props: Props) {
    return (
        <div
            className="KeyboardWhiteKey"
            id={props.note}
            style={{width: WHITE_KEY_WIDTH}}
            key={props.note}/>
    )
}

export default KeyboardWhiteKey
