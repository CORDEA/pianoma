import React from "react"
import Button from "./Button"
import {RootState} from "./store"
import {connect, ConnectedProps} from "react-redux"
import "./Controller.css"

const mapState = (state: RootState) => {
    return ({
        numberOfAnswers: state.app.numberOfAnswers,
        numberOfCorrectAnswers: state.app.numberOfCorrectAnswers
    })
}
const connector = connect(mapState)

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
            <Button/>
        </div>
    )
}

export default connector(Controller)
