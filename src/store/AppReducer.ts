import {AppState} from "./AppState";
import {AppActionTypes} from "./AppAction";

const initialState: AppState = {notes: {trebles: [], basses: []}, answer: []}

function appReducer(state = initialState, action: AppActionTypes): AppState {
    switch (action.type) {
        case "START":
            return {...state, notes: action.notes}
        case "END":
            return {...state}
        case "ANSWER":
            let answer = state.answer
            const index = answer.indexOf(action.note)
            if (index >= 0) {
                answer = answer.splice(index, 1)
            } else {
                answer.push(action.note)
            }
            return {...state, answer: answer}
        default:
            return state
    }
}

export default appReducer
