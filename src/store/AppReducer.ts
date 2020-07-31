import {AppState} from "./AppState";
import {AppActionTypes} from "./AppAction";

const initialState: AppState = {notes: {trebles: [], basses: []}}

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

export default appReducer
