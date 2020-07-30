import {AppState} from "./AppState";
import {AppActionTypes} from "./AppAction";
import {combineReducers} from "redux";

const initialState: AppState = {notes: {treble: [], bass: []}}

function appReducer(state = initialState, action: AppActionTypes): AppState {
    switch (action.type) {
        case "START":
            return {...state, notes: action.notes}
        case "END":
            return {...state}
        default:
            return state
    }
}

const reducer = combineReducers({
    app: appReducer
})

export default reducer
