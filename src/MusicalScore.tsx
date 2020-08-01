import React from "react";
import Vex from "vexflow";
import "./MusicalScore.css";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "./store";
import {QuestionNote} from "./Question";

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
            x: 50,
            y: 50,
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
            if (n.suffix === null) {
                return note
            }
            return note + "/" + n.suffix
        }).join(", ")
    }

    render() {
        return (
            <div id="MusicalScore" ref={this.div}/>
        );
    }
}

export default connector(MusicalScore)
