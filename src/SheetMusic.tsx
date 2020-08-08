import React from "react";
import Vex from "vexflow";
import "./SheetMusic.css";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "./store";
import {QuestionNote} from "./Question";
import {KEY_COLORS} from "./Constants";
import SheetMusicOverlay from "./SheetMusicOverlay";

export const SHEET_X = 50
export const SHEET_Y = 50
export const SHEET_NOTES_OFFSET = 70
export const SHEET_WIDTH = 500
export const SHEET_LINE_HEIGHT = 20

const mapState = (state: RootState) => {
    return ({
        notes: state.app.notes,
        enableGuide: state.app.enableGuide
    })
}
const mapDispatch = {}
const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

class SheetMusic extends React.PureComponent<Props> {
    private div = React.createRef<HTMLDivElement>()

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any) {
        const div = this.div.current
        if (!div) {
            return
        }
        if (div.firstChild) {
            div.removeChild(div.firstChild)
        }
        const factory = new Vex.Flow.Factory({
            renderer: {
                elementId: "SheetMusic",
                width: 1000,
                height: 400
            }
        })
        const score = factory.EasyScore()
        const system = factory.System({
            x: SHEET_X,
            y: SHEET_Y,
            width: SHEET_WIDTH,
            spaceBetweenStaves: 10
        })
        const treble = this.props.notes.treble
        const bass = this.props.notes.bass
        system.addStave({
            voices: [
                score.voice(
                    score.notes(this.formatNotes(treble.notes), {stem: treble.stem}),
                    {}
                )
            ]
        })
            .addClef("treble")
            .addTimeSignature("4/4")
        if (bass !== null) {
            system.addStave({
                voices: [
                    score.voice(
                        score.notes(this.formatNotes(bass.notes), {stem: bass.stem, clef: "bass"}),
                        {}
                    )
                ]
            })
                .addClef("bass")
                .addTimeSignature("4/4")
            system.addConnector("brace")
        }
        system.addConnector("singleRight")
        system.addConnector("singleLeft")
        factory.draw()
    }

    private formatNotes(notes: QuestionNote[]): string {
        return notes.map(n => {
            let note: string
            if (n.concurrentNotes.length === 1) {
                note = n.concurrentNotes[0].format()
            } else {
                note = "(" + n.concurrentNotes.map(n => n.format()).join(" ") + ")"
            }
            if (n.tempo === null) {
                return note
            }
            return note + "/" + n.tempo
        }).join(", ")
    }

    render() {
        let treblePaths: JSX.Element[] = []
        let bassPaths: JSX.Element[] = []
        if (this.props.enableGuide) {
            const notes = this.props.notes
            if (notes.treble.notes.length > 0) {
                treblePaths = Array.from(Array(4).keys()).map(i =>
                    SheetMusic.createPath(20 + (SHEET_LINE_HEIGHT * i), KEY_COLORS[i % 2 === 0 ? 1 : 0])
                )
            }
            if (notes.bass && notes.bass.notes.length > 0) {
                bassPaths = Array.from(Array(4).keys()).map(i =>
                    SheetMusic.createPath(130 + (SHEET_LINE_HEIGHT * i), KEY_COLORS[i % 2 === 0 ? 1 : 0])
                )
            }
        }
        return (
            <div className="SheetMusic">
                <SheetMusicOverlay/>
                <svg>
                    {treblePaths}
                    {bassPaths}
                </svg>
                <div id="SheetMusic" ref={this.div}/>
            </div>
        );
    }

    private static createPath(baseY: number, color: string) {
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
}

export default connector(SheetMusic)
