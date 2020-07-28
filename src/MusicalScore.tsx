import React from "react";
import Vex from "vexflow";

class MusicalScore extends React.PureComponent {

    componentDidMount() {
        const factory = new Vex.Flow.Factory({renderer: {elementId: "MusicalScore"}})
        const score = factory.EasyScore()
        const system = factory.System()
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
