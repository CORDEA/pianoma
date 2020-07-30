import React from "react";
import Vex from "vexflow";
import "./MusicalScore.css";

class MusicalScore extends React.PureComponent {

    componentDidMount() {
        const factory = new Vex.Flow.Factory({
            renderer: {
                elementId: "MusicalScore",
                width: 1000,
                height: 400
            }
        })
        const score = factory.EasyScore()
        let system = factory.System({
            x: 50,
            y: 50,
            spaceBetweenStaves: 10
        })
        system.addStave({
            voices: [
                score.voice(score.notes("C5/q, D4, A4, C4", {stem: "up"}), {})
            ]
        }).addClef("treble").addTimeSignature("4/4")
        factory.draw()
    }

    render() {
        return (
            <div id="MusicalScore"/>
        );
    }
}

export default MusicalScore;
