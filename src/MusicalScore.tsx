import React from "react";
import Vex from 'vexflow';

class MusicalScore extends React.PureComponent {

    componentDidMount() {
        const factory = new Vex.Flow.Factory({renderer: {elementId: 'score'}})
        // const score = factory.EasyScore()
        // const system = factory.System()
        // factory.draw()
    }

    render() {
        return (
            <div id="score"/>
        );
    }
}

export default MusicalScore;
