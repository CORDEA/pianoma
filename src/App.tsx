import React from 'react';
import './App.css';
import MusicalScore from "./MusicalScore";
import Keyboard from "./Keyboard";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {rootReducer} from "./store";
import Controller from "./Controller";

const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <MusicalScore/>
                <Keyboard/>
                <Controller/>
            </div>
        </Provider>
    );
}

export default App;
