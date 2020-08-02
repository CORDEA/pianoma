import React from "react";
import Vex from "vexflow";
import "./MusicalScore.css";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "./store";
import {QuestionNote} from "./Question";
import {KEY_COLORS} from "./Constants";

const mapState = (state: RootState) => {
    return ({
        notes: state.app.notes
    })
}
const mapDispatch = {}
const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

class MusicalScore extends React.PureComponent<Props> {
    private static readonly X = 50
    private static readonly Y = 50
    private static readonly WIDTH = 500
    private static readonly LINE_HEIGHT = 20

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
                elementId: "MusicalScore",
                width: 1000,
                height: 400
            }
        })
        const score = factory.EasyScore()
        const system = factory.System({
            x: MusicalScore.X,
            y: MusicalScore.Y,
            width: MusicalScore.WIDTH,
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
        const notes = this.props.notes
        if (notes.treble.notes.length > 0) {
            treblePaths = Array.from(Array(4).keys()).map(i =>
                MusicalScore.createPath(20 + (MusicalScore.LINE_HEIGHT * i), KEY_COLORS[i])
            )
        }
        if (notes.bass && notes.bass.notes.length > 0) {
            bassPaths = Array.from(Array(4).keys()).map(i =>
                MusicalScore.createPath(130 + (MusicalScore.LINE_HEIGHT * i), KEY_COLORS[i + 4])
            )
        }
        return (
            <div className="MusicalScore">
                <svg>
                    {treblePaths}
                    {bassPaths}
                </svg>
                <div id="MusicalScore" ref={this.div}/>
            </div>
        );
    }

    private static createPath(baseY: number, color: string) {
        const x = MusicalScore.X
        const y = MusicalScore.Y + baseY
        const height = y + MusicalScore.LINE_HEIGHT
        const width = MusicalScore.X + MusicalScore.WIDTH
        return <path
            fill={color}
            fillOpacity="0.3"
            d={`M${x} ${y}L${width} ${y}L${width} ${height}L${x} ${height}Z`}
        />
    }
}

export default connector(MusicalScore)
