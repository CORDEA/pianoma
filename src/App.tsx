import React from 'react';
import './App.css';
import MusicalScore from "./MusicalScore";
import Keyboard from "./Keyboard";
import Button from "./Button";
import {applyMiddleware, createStore} from "redux";
import reducer from "./AppReducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk))

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
