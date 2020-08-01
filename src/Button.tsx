import React from "react"
import "./Button.css"
import {next} from "./store/NextAction"
import {connect, ConnectedProps} from "react-redux"
import {ThunkDispatch} from "redux-thunk";
import {AppState} from "./store/AppState";
import {AppActionTypes} from "./store/AppAction";
import {RootState} from "./store";
import {finish} from "./store/FinishAction";

const mapState = (state: RootState) => {
    return ({
        inProgress: state.app.inProgress
    })
}
const mapDispatch = (dispatch: ThunkDispatch<AppState, null, AppActionTypes>) => ({
    next: () => {
        dispatch(next())
    },
    finish: () => {
        dispatch(finish())
    }
})
const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

function Button(props: Props) {
    return (
        <div className="Button" onClick={props.inProgress ? props.finish : props.next}>
            <p>{props.inProgress ? "ANSWER" : "NEXT"}</p>
        </div>
    )
}

export default connector(Button)
