import {RootState} from "./store";
import {connect, ConnectedProps} from "react-redux";
import React from "react";
import {SHEET_NOTES_OFFSET, SHEET_WIDTH, SHEET_X, SHEET_Y} from "./SheetMusic";

const mapState = (state: RootState) => {
    return ({
        maxNotes: state.app.notes.maxNotes,
        currentProgress: state.app.currentProgress
    })
}

const connector = connect(mapState)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

function SheetMusicOverlay(props: Props) {
    if (props.currentProgress < 0) {
        return (<svg/>)
    }
    const baseX = SHEET_X + SHEET_NOTES_OFFSET
    const boxWidth = (SHEET_WIDTH - baseX) / props.maxNotes
    const x = baseX + boxWidth * props.currentProgress
    return (
        <svg>
            <path
                stroke="#ffa726"
                strokeOpacity="0.3"
                strokeWidth="3"
                d={`M${x} ${SHEET_Y}L${x + boxWidth} ${SHEET_Y}`}
            />
        </svg>
    )
}

export default connector(SheetMusicOverlay)
