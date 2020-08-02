import React from "react"
import {next} from "./store/NextAction"
import {RootState} from "./store"
import {connect, ConnectedProps} from "react-redux"
import {finish} from "./store/FinishAction"
import MaterialSwitch from "@material/react-switch"
import MaterialButton from "@material/react-button"
import {ThunkDispatch} from "redux-thunk";
import {AppState} from "./store/AppState";
import {AppActionTypes} from "./store/AppAction";
import "@material/react-button/dist/button.min.css"
import "@material/react-switch/dist/switch.min.css"
import "./Controller.css"

const mapState = (state: RootState) => {
    return ({
        inProgress: state.app.inProgress,
        numberOfAnswers: state.app.numberOfAnswers,
        numberOfCorrectAnswers: state.app.numberOfCorrectAnswers
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

function Controller(props: Props) {
    let rate = 0
    if (props.numberOfAnswers) {
        rate = (props.numberOfCorrectAnswers / props.numberOfAnswers) * 100
    }
    return (
        <div className="Controller">
            <label className="Controller-stats">
                {`${rate}% (${props.numberOfCorrectAnswers} / ${props.numberOfAnswers})`}
            </label>
            <div className="Controller">
                <MaterialSwitch
                    nativeControlId="autoSwitch"
                />
                <label className="Controller-autoSwitchLabel" htmlFor="autoSwitch">Auto</label>
                <MaterialButton
                    raised
                    className="Controller-button"
                    onClick={props.inProgress ? props.finish : props.next}>
                    {props.inProgress ? "ANSWER" : "NEXT"}
                </MaterialButton>
            </div>
        </div>
    )
}

export default connector(Controller)
