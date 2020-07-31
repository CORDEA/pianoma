import React from "react"
import "./Button.css"
import {next} from "./AppActions"
import {connect, ConnectedProps} from "react-redux"
import {ThunkDispatch} from "redux-thunk";
import {AppState} from "./AppState";
import {AppActionTypes} from "./AppAction";

const mapDispatch = (dispatch: ThunkDispatch<AppState, null, AppActionTypes>) => ({
    next: () => {
        dispatch(next())
    }
})
const connector = connect(null, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

function Button(props: Props) {
    return (
        <div className="Button" onClick={props.next}>
            <p>NEXT</p>
        </div>
    )
}

export default connector(Button)
