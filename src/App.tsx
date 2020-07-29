import React from 'react';
import './App.css';
import MusicalScore from "./MusicalScore";
import Keyboard from "./Keyboard";
import Button from "./Button";
import {createStore} from "redux";
import reducer from "./AppReducer";
import {Provider} from "react-redux";

const store = createStore(reducer)

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <MusicalScore/>
                <Keyboard/>
                <Button/>
            </div>
        </Provider>
    );
}

export default App;
