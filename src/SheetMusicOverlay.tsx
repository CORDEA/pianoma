import {RootState} from "./store";
import {connect, ConnectedProps} from "react-redux";
import React from "react";
import {SHEET_LINE_HEIGHT, SHEET_NOTES_OFFSET, SHEET_WIDTH, SHEET_X, SHEET_Y} from "./SheetMusic";
import {KEY_COLORS} from "./Constants";

const mapState = (state: RootState) => {
    return ({
        notes: state.app.notes,
        currentProgress: state.app.currentProgress,
        enableGuide: state.app.enableGuide
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
    const boxWidth = (SHEET_WIDTH - baseX) / props.notes.maxNotes
    const x = baseX + boxWidth * props.currentProgress
    let treblePaths: JSX.Element[] = []
    let bassPaths: JSX.Element[] = []
    if (props.enableGuide) {
        const notes = props.notes
        if (notes.treble.notes.length > 0) {
            treblePaths = Array.from(Array(4).keys()).map(i =>
                createPath(20 + (SHEET_LINE_HEIGHT * i), KEY_COLORS[i % 2 === 0 ? 1 : 0])
            )
        }
        if (notes.bass && notes.bass.notes.length > 0) {
            bassPaths = Array.from(Array(4).keys()).map(i =>
                createPath(130 + (SHEET_LINE_HEIGHT * i), KEY_COLORS[i % 2 === 0 ? 1 : 0])
            )
        }
    }
    return (
        <svg>
            <path
                stroke="#ffa726"
                strokeOpacity="0.3"
                strokeWidth="3"
                d={`M${x} ${SHEET_Y}L${x + boxWidth} ${SHEET_Y}`}
            />
            {treblePaths}
            {bassPaths}
        </svg>
    )
}

function createPath(baseY: number, color: string) {
    const x = SHEET_X
    const y = SHEET_Y + baseY
    const height = y + SHEET_LINE_HEIGHT
    const width = SHEET_X + SHEET_WIDTH
    return <path
        fill={color}
        fillOpacity="0.3"
        d={`M${x} ${y}L${width} ${y}L${width} ${height}L${x} ${height}Z`}
    />
}

export default connector(SheetMusicOverlay)
