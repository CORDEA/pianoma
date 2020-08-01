import React from "react";
import Vex from "vexflow";
import "./MusicalScore.css";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "./store";
import {Note} from "./RandomNotes";

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
        system.addStave({
            voices: this.props.notes.trebles.map(t =>
                score.voice(
                    score.notes(this.formatNotes(t.notes), {stem: t.stem}),
                    {}
                )
            )
        })
            .addClef("treble")
            .addTimeSignature("4/4")
        const basses = this.props.notes.basses
        if (basses.length > 0) {
            system.addStave({
                voices: this.props.notes.basses.map(t =>
                    score.voice(
                        score.notes(this.formatNotes(t.notes), {stem: t.stem, clef: "bass"}),
                        {}
                    )
                )
            })
                .addClef("bass")
                .addTimeSignature("4/4")
            system.addConnector("brace")
        }
        system.addConnector("singleRight")
        system.addConnector("singleLeft")
        factory.draw()
    }

    private formatNotes(notes: Note[]): string {
        return notes.map(n => {
            let note: string
            if (n.note.length === 1) {
                note = n.note[0]
            } else {
                note = "(" + n.note.join(" ") + ")"
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
