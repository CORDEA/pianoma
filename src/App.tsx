import React from 'react';
import './App.css';
import MusicalScore from "./MusicalScore";
import Keyboard from "./Keyboard";
import Button from "./Button";

function App() {
    return (
        <div className="App">
            <MusicalScore/>
            <Keyboard/>
            <Button/>
        </div>
    );
}

export default App;
