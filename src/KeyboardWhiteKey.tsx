import React from "react"
import "./KeyboardWhiteKey.css"
import {RootState} from "./store";
import {ThunkDispatch} from "redux-thunk";
import {AppState} from "./store/AppState";
import {AppActionTypes} from "./store/AppAction";
import {answer} from "./store/ClickKeyAction";
import {connect, ConnectedProps} from "react-redux";

export const WHITE_KEY_WIDTH = 46

const mapState = (state: RootState) => {
    return ({
        answer: state.app.answer,
        result: state.app.result
    })
}
const mapDispatch = (dispatch: ThunkDispatch<AppState, null, AppActionTypes>) => ({
    click: (note: string) => {
        dispatch(answer(note))
    }
})

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
    note: string
    strokeColor: string
}

function KeyboardWhiteKey(props: Props) {
    let color = "#ffffff"
    const answer = props.answer.includes(props.note)
    const correct = props.result.includes(props.note)
    if (answer) {
        color = "#e0f7fa"
    }
    if (correct) {
        color = "#fce4ec"
    }
    if (answer && correct) {
        color = "#d1c4e9"
    }
    return (
        <div
            className="KeyboardWhiteKey"
            id={props.note}
            style={{
                width: WHITE_KEY_WIDTH,
                backgroundColor: color,
                borderColor: props.strokeColor
            }}
            onClick={() => props.click(props.note)}/>
    )
}

export default connector(KeyboardWhiteKey)
