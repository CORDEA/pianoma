import React from "react"
import './Keyboard.css'
import KeyboardPart from "./KeyboardPart";
import {RootState} from "./store";
import {connect, ConnectedProps} from "react-redux";

const mapState = (state: RootState) => {
    return ({
        answer:state.app.answer
    })
}
const mapDispatch = {}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

function Keyboard(props: Props) {
    const keys = Array.from(Array(14).keys()).map(i => {
        if (i % 2 === 0) {
            return <KeyboardPart numberOfBlackKeys={2} startNote={"C"} startLevel={(i + 2) / 2}/>
        } else {
            return <KeyboardPart numberOfBlackKeys={3} startNote={"F"} startLevel={(i + 1) / 2}/>
        }
    })
    return (
        <div className="Keyboard">
            <KeyboardPart numberOfBlackKeys={1} startNote={"A"} startLevel={0}/>
            {keys}
        </div>
    )
}

export default connector(Keyboard)
