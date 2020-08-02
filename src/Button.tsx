import React from "react"
import "./Button.css"
import "@material/react-button/dist/button.min.css"
import {next} from "./store/NextAction"
import {connect, ConnectedProps} from "react-redux"
import {ThunkDispatch} from "redux-thunk"
import {AppState} from "./store/AppState"
import {AppActionTypes} from "./store/AppAction"
import {RootState} from "./store"
import {finish} from "./store/FinishAction"
import MaterialButton from "@material/react-button"

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
        <div className="Button">
            <MaterialButton
                raised
                className="Button"
                onClick={props.inProgress ? props.finish : props.next}>
                {props.inProgress ? "ANSWER" : "NEXT"}
            </MaterialButton>
        </div>
    )
}

export default connector(Button)
