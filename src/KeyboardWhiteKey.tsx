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

function KeyboardWhiteKey(props: Props) {
    return (
        <div
            className="KeyboardWhiteKey"
            id={props.note}
            style={{width: WHITE_KEY_WIDTH}}
            onClick={() => props.answer(props.note)}
            key={props.note}/>
    )
}

export default connector(KeyboardWhiteKey)
