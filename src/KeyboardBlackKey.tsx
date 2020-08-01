import React from "react"
import "./KeyboardWhiteKey.css"
import {RootState} from "./store";
import {connect, ConnectedProps} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AppState} from "./store/AppState";
import {AppActionTypes} from "./store/AppAction";
import {answer} from "./store/ClickKeyAction";

const mapState = (state: RootState) => {
    return ({
        answer: state.app.answer
    })
}
const mapDispatch = (dispatch: ThunkDispatch<AppState, null, AppActionTypes>) => ({
    answer: (note: string) => {
        dispatch(answer(note))
    }
})

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
    note: string
}

function KeyboardBlackKey(props: Props) {
    return (
        <div
            className="KeyboardBlackKey"
            onClick={() => props.answer(props.note)}
            style={{backgroundColor: props.answer.includes(props.note) ? "#616161" : "#000000"}}
            id={props.note}
            key={props.note}/>
    )
}

export default connector(KeyboardBlackKey)
